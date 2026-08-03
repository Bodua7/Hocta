/* =========================================================
   GROQ LIVE — Dịch giọng nói thời gian thực (Speech-to-Text + Dịch)
   - STT + Dịch được gọi qua Supabase Edge Function (groq-relay),
     KHÔNG gọi trực tiếp Groq API từ trình duyệt nữa.
   - API Key Groq nằm trong Supabase Secrets (server-side), người
     dùng không cần tự nhập/quản lý key nữa.
   ========================================================= */

// ⚠️ Thay bằng project ref Supabase của bạn nếu khác.
const SUPABASE_PROJECT_REF = "clbddroyrueafygedycy";
const RELAY_BASE_URL = `https://${SUPABASE_PROJECT_REF}.supabase.co/functions/v1/groq-relay`;

const LANG_LABELS_VI = {
    vi: "Tiếng Việt",
    en: "Tiếng Anh",
    zh: "Tiếng Trung",
};

/* ---------------------------------------------------------
   1. GỌI EDGE FUNCTION (thay cho gọi Groq trực tiếp)
   --------------------------------------------------------- */
async function relayFetch(op, options) {
    const res = await fetch(`${RELAY_BASE_URL}?op=${op}`, options);
    if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `RELAY_ERROR_${res.status}`);
    }
    return res.json();
}

/* ---------------------------------------------------------
   2. SPEECH-TO-TEXT (Whisper, qua relay)
   --------------------------------------------------------- */
async function transcribeAudio(audioBlob, sourceLang) {
    const form = new FormData();
    form.append("file", audioBlob, "speech.webm");
    if (sourceLang && sourceLang !== "auto") {
        form.append("language", sourceLang);
    }

    const data = await relayFetch("transcribe", {
        method: "POST",
        body: form,
    });
    return (data.text || "").trim();
}

/* ---------------------------------------------------------
   3. DỊCH VĂN BẢN (LLM, qua relay)
   --------------------------------------------------------- */
async function translateText(text, targetLangCode) {
    const data = await relayFetch("translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, targetLangCode }),
    });
    return { translated: data.translated || "", pinyin: data.pinyin || "" };
}

/* ---------------------------------------------------------
   4. GHI ÂM MIC (MediaRecorder — mô hình "chạm để nói")
   --------------------------------------------------------- */
class MicRecorder {
    constructor() {
        this.mediaRecorder = null;
        this.chunks = [];
        this.stream = null;
        this.audioCtx = null;
        this.analyser = null;
        this.vadInterval = null;
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
                this.stopVAD();
                resolve(blob);
            });
            this.mediaRecorder.stop();
        });
    }

    // Voice Activity Detection: tự phát hiện lúc người dùng ngừng nói để
    // tự động dừng ghi âm, không cần bấm tay — đây là phần tạo cảm giác "live".
    startVAD(onSilenceDetected) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const source = this.audioCtx.createMediaStreamSource(this.stream);
        this.analyser = this.audioCtx.createAnalyser();
        this.analyser.fftSize = 2048;
        source.connect(this.analyser);

        const data = new Uint8Array(this.analyser.fftSize);
        const SPEECH_THRESHOLD = 8;   // độ lệch âm lượng tối thiểu để tính là "có tiếng nói"
        const SILENCE_MS = 1100;      // im lặng liên tục bao lâu thì coi là nói xong
        const MAX_RECORD_MS = 20000;  // giới hạn an toàn, tránh ghi âm mãi nếu VAD lỗi
        const MIN_SPEECH_MS = 350;    // phải có tiếng nói tối thiểu chừng này mới cho tự dừng

        let speechStarted = false;
        let speechStartTime = null;
        let silenceStart = null;
        const recordStart = Date.now();
        let done = false;

        this.vadInterval = setInterval(() => {
            if (done) return;
            this.analyser.getByteTimeDomainData(data);
            let sumSq = 0;
            for (let i = 0; i < data.length; i++) {
                const dev = data[i] - 128;
                sumSq += dev * dev;
            }
            const rms = Math.sqrt(sumSq / data.length);
            const now = Date.now();

            if (rms > SPEECH_THRESHOLD) {
                if (!speechStarted) {
                    speechStarted = true;
                    speechStartTime = now;
                }
                silenceStart = null;
            } else if (speechStarted) {
                if (silenceStart === null) silenceStart = now;
                if (now - silenceStart >= SILENCE_MS && now - speechStartTime >= MIN_SPEECH_MS) {
                    done = true;
                    onSilenceDetected();
                    return;
                }
            }

            if (now - recordStart >= MAX_RECORD_MS) {
                done = true;
                onSilenceDetected();
            }
        }, 100);
    }

    stopVAD() {
        if (this.vadInterval) clearInterval(this.vadInterval);
        this.vadInterval = null;
        if (this.audioCtx) {
            this.audioCtx.close().catch(() => {});
            this.audioCtx = null;
        }
    }
}

/* ---------------------------------------------------------
   5. KHỞI TẠO GIAO DIỆN
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    /* ---- 5.1 Live Translation Tab ---- */
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
        micIcon.textContent = "⏳";
        setStatus("🧠 Đang nhận diện giọng nói...");

        try {
            const sourceLangValue = langSource.value;
            const transcript = await transcribeAudio(blob, sourceLangValue);

            if (!transcript) {
                setStatus("😶 Không nghe rõ, đang nghe tiếp...");
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
        } catch (err) {
            console.error(err);
            let msg = "Đã có lỗi xảy ra khi gọi máy chủ dịch.";
            if (err.message === "SERVER_MISSING_GROQ_KEY") {
                msg = "Máy chủ chưa cấu hình Groq API Key. Vui lòng liên hệ quản trị viên.";
            } else if (err.message?.includes("GROQ_429")) {
                msg = "Hệ thống đang bị giới hạn tốc độ (rate limit). Vui lòng thử lại sau ít phút.";
            } else if (err.message?.includes("RELAY_ERROR")) {
                msg = "Không kết nối được máy chủ dịch. Kiểm tra lại kết nối mạng.";
            }
            addBubble({ original: msg, isError: true });
            setStatus("");
        } finally {
            isProcessing = false;
        }
    }

    let liveSessionActive = false;

    async function startListeningCycle() {
        if (!liveSessionActive) return;
        try {
            recorder = new MicRecorder();
            await recorder.start();
            isRecording = true;
            btnMic.classList.add("recording");
            micIcon.textContent = "⏹️";
            setStatus("🔴 Đang nghe... nói tự nhiên, ngừng lại sẽ tự dịch.", true);

            recorder.startVAD(async () => {
                if (!isRecording) return;
                isRecording = false;
                btnMic.classList.remove("recording");
                const blob = await recorder.stop();
                if (blob && blob.size > 800) {
                    await handleRecordedAudio(blob);
                }
                if (liveSessionActive) startListeningCycle();
            });
        } catch (err) {
            console.error(err);
            liveSessionActive = false;
            isRecording = false;
            btnMic.classList.remove("recording");
            micIcon.textContent = "🎤";
            setStatus("⚠️ Không thể truy cập micro. Vui lòng cấp quyền micro cho trang web.");
        }
    }

    btnMic?.addEventListener("click", async () => {
        if (isProcessing) return;

        if (!liveSessionActive) {
            liveSessionActive = true;
            await startListeningCycle();
        } else {
            liveSessionActive = false;
            isRecording = false;
            btnMic.classList.remove("recording");
            micIcon.textContent = "🎤";
            setStatus("⏹️ Đã dừng live. Nhấn micro để bắt đầu lại.");
            if (recorder) {
                recorder.stopVAD();
                try {
                    await recorder.stop();
                } catch {
                    // ignore
                }
            }
        }
    });
});
