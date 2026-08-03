// supabase/functions/groq-relay/index.ts
//
// Proxy cho Groq API — giấu API key phía server (Supabase Secrets),
// client (groq-live.js) không còn cần nhập key thủ công nữa.
//
// Deploy:
//   supabase functions deploy groq-relay --no-verify-jwt
//
// Secrets cần set trước khi deploy:
//   supabase secrets set GROQ_API_KEY=sk_xxx
//   supabase secrets set GROQ_API_KEY_2=sk_yyy   (tuỳ chọn, key dự phòng)
//
// Gọi từ client:
//   POST https://<project-ref>.supabase.co/functions/v1/groq-relay?op=transcribe
//        body: FormData { file, language? }
//   POST https://<project-ref>.supabase.co/functions/v1/groq-relay?op=translate
//        body: JSON { text, targetLangCode }

const GROQ_BASE_URL = "https://api.groq.com/openai/v1";
const GROQ_STT_MODEL = "whisper-large-v3-turbo";
const GROQ_TRANSLATE_MODEL = "llama-3.3-70b-versatile";

const LANG_NAMES: Record<string, string> = {
  vi: "Vietnamese",
  en: "English",
  zh: "Chinese",
};

// CORS: cho phép gọi từ trang tĩnh (GitHub Pages / bất kỳ origin nào app đang chạy)
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, apikey",
};

function getKeys(): string[] {
  const k1 = Deno.env.get("GROQ_API_KEY");
  const k2 = Deno.env.get("GROQ_API_KEY_2");
  return [k1, k2].filter((k): k is string => !!k && k.length > 0);
}

// Gọi Groq, tự động xoay vòng key khi bị 401/429
async function groqFetchWithFallback(
  buildRequest: (key: string) => { url: string; init: RequestInit },
): Promise<Response> {
  const keys = getKeys();
  if (keys.length === 0) {
    throw new Error("SERVER_MISSING_GROQ_KEY");
  }

  let lastError: Error | null = null;
  for (const key of keys) {
    const { url, init } = buildRequest(key);
    try {
      const res = await fetch(url, init);
      if (res.ok) return res;
      if (res.status === 401 || res.status === 429) {
        lastError = new Error(`GROQ_${res.status}`);
        continue;
      }
      const body = await res.text().catch(() => "");
      throw new Error(`GROQ_ERROR_${res.status}: ${body.slice(0, 300)}`);
    } catch (e) {
      lastError = e instanceof Error ? e : new Error(String(e));
      continue;
    }
  }
  throw lastError ?? new Error("GROQ_ALL_KEYS_FAILED");
}

async function handleTranscribe(req: Request): Promise<Response> {
  const incomingForm = await req.formData();
  const file = incomingForm.get("file");
  const language = incomingForm.get("language");

  if (!(file instanceof File)) {
    return jsonError("MISSING_FILE", 400);
  }

  const res = await groqFetchWithFallback((key) => {
    const form = new FormData();
    form.append("file", file, "speech.webm");
    form.append("model", GROQ_STT_MODEL);
    form.append("response_format", "json");
    if (language && language !== "auto") {
      form.append("language", String(language));
    }
    return {
      url: `${GROQ_BASE_URL}/audio/transcriptions`,
      init: {
        method: "POST",
        headers: { Authorization: `Bearer ${key}` },
        body: form,
      },
    };
  });

  const data = await res.json();
  return jsonOk({ text: (data.text || "").trim() });
}

async function handleTranslate(req: Request): Promise<Response> {
  const body = await req.json().catch(() => null);
  const text = body?.text;
  const targetLangCode = body?.targetLangCode;

  if (!text || !targetLangCode) {
    return jsonError("MISSING_TEXT_OR_TARGET", 400);
  }

  const targetLangName = LANG_NAMES[targetLangCode] || "English";
  const systemPrompt =
    `You are a professional real-time interpreter. Translate the user's message into ${targetLangName}. ` +
    `Rules: output ONLY the translation, no explanations, no quotes. ` +
    `If the target language is Chinese, also provide Pinyin on a new line prefixed with "PINYIN:". ` +
    `If not Chinese, do not include a PINYIN line.`;

  const res = await groqFetchWithFallback((key) => ({
    url: `${GROQ_BASE_URL}/chat/completions`,
    init: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_TRANSLATE_MODEL,
        temperature: 0.2,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: text },
        ],
      }),
    },
  }));

  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content?.trim() || "";

  let translated = raw;
  let pinyin = "";
  const pinyinMatch = raw.match(/PINYIN:\s*(.+)/i);
  if (pinyinMatch) {
    pinyin = pinyinMatch[1].trim();
    translated = raw.replace(/PINYIN:\s*.+/i, "").trim();
  }

  return jsonOk({ translated, pinyin });
}

function jsonOk(data: unknown): Response {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

function jsonError(code: string, status: number): Response {
  return new Response(JSON.stringify({ error: code }), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return jsonError("METHOD_NOT_ALLOWED", 405);
  }

  const url = new URL(req.url);
  const op = url.searchParams.get("op");

  try {
    if (op === "transcribe") return await handleTranscribe(req);
    if (op === "translate") return await handleTranslate(req);
    return jsonError("UNKNOWN_OP", 400);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error("groq-relay error:", msg);
    const status = msg === "SERVER_MISSING_GROQ_KEY" ? 500 : 502;
    return jsonError(msg, status);
  }
});
