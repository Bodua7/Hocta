/* =========================================================
   GROQ LIVE — Dịch giọng nói thời gian thực (Speech-to-Text + Dịch)
   - STT: model whisper-large-v3-turbo (nhanh, rẻ, đủ chính xác cho hội thoại)
   - Dịch: model llama-3.3-70b-versatile (chất lượng dịch tốt, ổn định)
   - API Key lưu tại localStorage của trình duyệt người dùng (KHÔNG nhúng
     vào mã nguồn) — an toàn khi deploy app tĩnh lên GitHub Pages.
   - Có 2 API key: nếu key #1 bị lỗi (401 sai key / 429 quá tải) sẽ tự
     động thử lại bằng key #2.
   ========================================================= */

const GROQ_STT_MODEL = "whisper-large-v3-turbo";
const GROQ_TRANSLATE_MODEL = "llama-3.3-70b-versatile";
const GROQ_BASE_URL = "https://api.groq.com/openai/v1";

const LANG_NAMES = {
    vi: "Vietnamese",
    en: "English",
    zh: "Chinese",
};
const LANG_LABELS_VI = {
    vi: "Tiếng Việt",
    en: "Tiếng Anh",
    zh: "Tiếng Trung",
};

/* ---------------------------------------------------------
   1. QUẢN LÝ API KEY (localStorage)
   --------------------------------------------------------- */
const KeyStore = {
    KEY1: "groq_api_key_1",
    KEY2: "groq_api_key_2",

    get keys() {
        const k1 = localStorage.getItem(this.KEY1);
        const k2 = localStorage.getItem(this.KEY2);
        return [k1, k2].filter(Boolean);
    },

    save(k1, k2) {
        if (k1) localStorage.setItem(this.KEY1, k1.trim());
        else localStorage.removeItem(this.KEY1);
        if (k2) localStorage.setItem(this.KEY2, k2.trim());
        else localStorage.removeItem(this.KEY2);
    },

    clear() {
        localStorage.removeItem(this.KEY1);
        localStorage.removeItem(this.KEY2);
    },

    hasAny() {
        return this.keys.length > 0;
    },
};

/* ---------------------------------------------------------
   2. GỌI API GROQ CÓ TỰ ĐỘNG XOAY VÒNG KEY KHI LỖI
   --------------------------------------------------------- */
async function groqFetchWithFallback(buildRequest) {
    const keys = KeyStore.keys;
    if (keys.length === 0) {
        throw new Error("NO_API_KEY");
    }

    let lastError = null;
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        try {
            const { url, options } = buildRequest(key);
            const res = await fetch(url, options);

            if (res.ok) return res;

            // Key sai hoặc hết hạn mức -> thử key kế tiếp
            if (res.status === 401 || res.status === 429) {
                lastError = new Error(`GROQ_${res.status}`);
                continue;
            }

            // Lỗi khác (400, 500...) -> không cần thử key khác, báo lỗi luôn
            const errBody = await res.text().catch(() => "");
            throw new Error(`GROQ_ERROR_${res.status}: ${errBody.slice(0, 200)}`);
        } catch (e) {
            lastError = e;
            // Nếu là lỗi mạng, vẫn thử key tiếp theo (đề phòng)
            continue;
        }
    }
    throw lastError || new Error("GROQ_ALL_KEYS_FAILED");
}

/* ---------------------------------------------------------
   3. SPEECH-TO-TEXT (Whisper)
   --------------------------------------------------------- */
async function transcribeAudio(audioBlob, sourceLang) {
    const form = new FormData();
    form.append("file", audioBlob, "speech.webm");
    form.append("model", GROQ_STT_MODEL);
    form.append("response_format", "json");
    if (sourceLang !== "auto") {
        form.append("language", sourceLang);
    }

    const res = await groqFetchWithFallback((key) => ({
        url: `${GROQ_BASE_URL}/audio/transcriptions`,
        options: {
            method: "POST",
            headers: { Authorization: `Bearer ${key}` },
            body: form,
        },
    }));

    const data = await res.json();
    return (data.text || "").trim();
}

/* ---------------------------------------------------------
   4. DỊCH VĂN BẢN (LLM)
   --------------------------------------------------------- */
async function translateText(text, targetLangCode) {
    const targetLangName = LANG_NAMES[targetLangCode] || "English";

    const systemPrompt =
        `You are a professional real-time interpreter. Translate the user's message into ${targetLangName}. ` +
        `Rules: output ONLY the translation, no explanations, no quotes. ` +
        `If the target language is Chinese, also provide Pinyin on a new line prefixed with "PINYIN:". ` +
        `If not Chinese, do not include a PINYIN line.`;

    const res = await groqFetchWithFallback((key) => ({
        url: `${GROQ_BASE_URL}/chat/completions`,
        options: {
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
    return { translated, pinyin };
}

/* ---------------------------------------------------------
   5. GHI ÂM MIC (MediaRecorder — mô hình "chạm để nói")
   --------------------------------------------------------- */
class MicRecorder {
    constructor() {
        this.mediaRecorder = null;
        this.chunks = [];
        this.stream = null;
    }

    async start() {
        this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mimeType = MediaRecorder.isTypeSupported("audio/webm")
            ? "audio/webm"
            : "audio/mp4";
        this.mediaRecorder = new MediaRecorder(this.stream, { mimeType });
        this.chunks = [];

        this.mediaRecorder.addEventListener("dataavailable", (e) => {
            if (e.data.size > 0) this.chunks.push(e.data);
        });

        this.mediaRecorder.start();
    }

    stop() {
        return new Promise((resolve) => {
            if (!this.mediaRecorder) return resolve(null);
            this.mediaRecorder.addEventListener("stop", () => {
                const blob = new Blob(this.chunks, { type: this.mediaRecorder.mimeType });
                this.stream.getTracks().forEach((t) => t.stop());
                resolve(blob);
            });
            this.mediaRecorder.stop();
        });
    }
}

/* ---------------------------------------------------------
   6. KHỞI TẠO GIAO DIỆN
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    /* ---- 6.1 Settings Modal ---- */
    const btnSettings = document.getElementById("btn-settings");
    const btnCloseSettings = document.getElementById("btn-close-settings");
    const overlay = document.getElementById("settings-overlay");
    const inputKey1 = document.getElementById("input-key-1");
    const inputKey2 = document.getElementById("input-key-2");
    const btnSaveSettings = document.getElementById("btn-save-settings");
    const btnClearSettings = document.getElementById("btn-clear-settings");
    const settingsStatus = document.getElementById("settings-status");

    function openSettings() {
        inputKey1.value = localStorage.getItem(KeyStore.KEY1) || "";
        inputKey2.value = localStorage.getItem(KeyStore.KEY2) || "";
        settingsStatus.textContent = "";
        settingsStatus.className = "modal-status";
        overlay.classList.add("open");
    }
    function closeSettings() {
        overlay.classList.remove("open");
    }

    btnSettings?.addEventListener("click", openSettings);
    btnCloseSettings?.addEventListener("click", closeSettings);
    overlay?.addEventListener("click", (e) => {
        if (e.target === overlay) closeSettings();
    });

    btnSaveSettings?.addEventListener("click", () => {
        const k1 = inputKey1.value.trim();
        const k2 = inputKey2.value.trim();
        if (!k1 && !k2) {
            settingsStatus.textContent = "⚠️ Vui lòng nhập ít nhất 1 API Key.";
            settingsStatus.className = "modal-status error";
            return;
        }
        KeyStore.save(k1, k2);
        settingsStatus.textContent = "✅ Đã lưu key vào trình duyệt của bạn.";
        settingsStatus.className = "modal-status success";
        setTimeout(closeSettings, 900);
    });

    btnClearSettings?.addEventListener("click", () => {
        KeyStore.clear();
        inputKey1.value = "";
        inputKey2.value = "";
        settingsStatus.textContent = "🗑️ Đã xoá toàn bộ key.";
        settingsStatus.className = "modal-status success";
    });

    /* ---- 6.2 Live Translation Tab ---- */
    const langSource = document.getElementById("lang-source");
    const langTarget = document.getElementById("lang-target");
    const btnSwapLang = document.getElementById("btn-swap-lang");
    const liveLog = document.getElementById("live-log");
    const liveStatus = document.getElementById("live-status");
    const btnMic = document.getElementById("btn-mic");
    const micIcon = document.getElementById("mic-icon");
    const btnClearLog = document.getElementById("btn-clear-log");
    const btnToggleLog = document.getElementById("btn-toggle-log");

    let showPinyin = true;
    let recorder = null;
    let isRecording = false;
    let isProcessing = false;

    btnSwapLang?.addEventListener("click", () => {
        if (langSource.value === "auto") return; // không đảo được khi đang auto
        const tmp = langSource.value;
        langSource.value = langTarget.value;
        langTarget.value = tmp;
    });

    btnToggleLog?.addEventListener("click", () => {
        showPinyin = !showPinyin;
        liveLog.querySelectorAll(".bubble-pinyin").forEach((el) => {
            el.style.display = showPinyin ? "" : "none";
        });
    });

    btnClearLog?.addEventListener("click", () => {
        liveLog.innerHTML = `<div class="live-empty">🎙️ Nhấn nút micro bên dưới và nói. AI sẽ nhận diện giọng nói và dịch ngay lập tức.</div>`;
    });

    function setStatus(text, recording = false) {
        liveStatus.textContent = text;
        liveStatus.classList.toggle("recording", recording);
    }

    function clearEmptyState() {
        const empty = liveLog.querySelector(".live-empty");
        if (empty) empty.remove();
    }

    function escapeHtml(str) {
        if (!str) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    function addBubble({ original, sourceLang, translated, pinyin, isError }) {
        clearEmptyState();
        const div = document.createElement("div");
        div.className = "live-bubble mine" + (isError ? " error" : "");

        if (isError) {
            div.innerHTML = `⚠️ ${escapeHtml(original)}`;
        } else {
            const sourceLabel = LANG_LABELS_VI[sourceLang] || sourceLang;
            const targetLabel = LANG_LABELS_VI[langTarget.value] || langTarget.value;
            div.innerHTML = `
                <div class="bubble-lang-tag">${sourceLabel} → ${targetLabel}</div>
                <div class="bubble-original">${escapeHtml(original)}</div>
                ${pinyin ? `<div class="bubble-pinyin" style="display:${showPinyin ? "" : "none"}">${escapeHtml(pinyin)}</div>` : ""}
                <div class="bubble-translated">🈺 ${escapeHtml(translated)}</div>
            `;
        }
        liveLog.appendChild(div);
        liveLog.scrollTop = liveLog.scrollHeight;
        return div;
    }

    async function handleRecordedAudio(blob) {
        isProcessing = true;
        btnMic.classList.remove("recording");
        btnMic.classList.add("processing");
        micIcon.textContent = "⏳";
        setStatus("🧠 Đang nhận diện giọng nói...");

        try {
            const sourceLangValue = langSource.value;
            const transcript = await transcribeAudio(blob, sourceLangValue);

            if (!transcript) {
                setStatus("😶 Không nghe rõ, hãy thử lại.");
                return;
            }

            setStatus("🌐 Đang dịch...");
            const { translated, pinyin } = await translateText(transcript, langTarget.value);

            addBubble({
                original: transcript,
                sourceLang: sourceLangValue === "auto" ? "?" : sourceLangValue,
                translated,
                pinyin,
            });
            setStatus("✅ Xong. Nhấn micro để nói tiếp.");
        } catch (err) {
            console.error(err);
            let msg = "Đã có lỗi xảy ra khi gọi Groq API.";
            if (err.message === "NO_API_KEY") {
                msg = "Chưa có API Key. Nhấn ⚙️ ở góc trên để thêm Groq API Key.";
                openSettings();
            } else if (err.message?.includes("GROQ_401")) {
                msg = "API Key không hợp lệ. Vui lòng kiểm tra lại trong ⚙️ Cài đặt.";
            } else if (err.message?.includes("GROQ_429")) {
                msg = "Cả 2 API Key đều đang bị giới hạn tốc độ (rate limit). Vui lòng thử lại sau ít phút.";
            }
            addBubble({ original: msg, isError: true });
            setStatus("");
        } finally {
            isProcessing = false;
            btnMic.classList.remove("processing");
            micIcon.textContent = "🎤";
        }
    }

    btnMic?.addEventListener("click", async () => {
        if (isProcessing) return;

        if (!isRecording) {
            // Bắt đầu ghi âm
            if (!KeyStore.hasAny()) {
                setStatus("⚠️ Chưa có API Key.");
                openSettings();
                return;
            }
            try {
                recorder = new MicRecorder();
                await recorder.start();
                isRecording = true;
                btnMic.classList.add("recording");
                micIcon.textContent = "⏹️";
                setStatus("🔴 Đang nghe... nhấn lần nữa để dừng.", true);
            } catch (err) {
                console.error(err);
                setStatus("⚠️ Không thể truy cập micro. Vui lòng cấp quyền micro cho trang web.");
            }
        } else {
            // Dừng ghi âm
            isRecording = false;
            btnMic.classList.remove("recording");
            setStatus("");
            const blob = await recorder.stop();
            if (blob && blob.size > 800) {
                await handleRecordedAudio(blob);
            } else {
                micIcon.textContent = "🎤";
                setStatus("😶 Chưa ghi được âm thanh, hãy thử lại.");
            }
        }
    });
});
