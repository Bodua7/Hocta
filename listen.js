/* =========================================================
   LISTEN.JS — Tab "🎧 Nghe"
   Chế độ 1: 🗨️ Hội Thoại Theo Ngày — phát tuần tự EN→CN từng câu
             trong ngày đã chọn, có thể ẩn văn bản để luyện đoán.
   Chế độ 2: 📇 Từ Vựng Ngẫu Nhiên — nghe 1 câu bất kỳ (toàn bộ
             ngân hàng câu), đoán nghĩa rồi bấm hiện đáp án,
             đánh dấu đã thuộc / chưa thuộc (lưu localStorage
             riêng với tiến độ Lật Thẻ).
   Dùng chung LESSON_DATA từ data.js.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    let rawData = [];
    if (typeof LESSON_DATA !== "undefined" && Array.isArray(LESSON_DATA)) {
        rawData = LESSON_DATA;
    }
    if (rawData.length === 0) return; // data.js chưa nạp -> script.js đã báo lỗi

    const VOCAB_KNOWN_KEY = "listen_vocab_known_ids";

    function getVocabKnownSet() {
        try {
            const raw = localStorage.getItem(VOCAB_KNOWN_KEY);
            return new Set(raw ? JSON.parse(raw) : []);
        } catch {
            return new Set();
        }
    }
    function saveVocabKnownSet(set) {
        localStorage.setItem(VOCAB_KNOWN_KEY, JSON.stringify([...set]));
    }
    let vocabKnownSet = getVocabKnownSet();

    function escapeHtml(str) {
        if (!str) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function speakText(text, lang, rate, onend) {
        if (!text || !("speechSynthesis" in window)) {
            if (onend) onend();
            return;
        }
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = lang;
        utter.rate = rate || 0.9;
        if (onend) utter.onend = onend;
        window.speechSynthesis.speak(utter);
    }

    /* =========================================================
       Chuyển đổi chế độ Hội Thoại / Từ Vựng
       ========================================================= */
    const lmodeButtons = document.querySelectorAll(".lmode-btn");
    const modeDialogue = document.getElementById("listen-mode-dialogue");
    const modeVocab = document.getElementById("listen-mode-vocab");

    lmodeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            lmodeButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            const mode = btn.getAttribute("data-lmode");
            stopDialoguePlayback();
            modeDialogue.style.display = mode === "dialogue" ? "flex" : "none";
            modeVocab.style.display = mode === "vocab" ? "flex" : "none";
            if (mode === "vocab") renderVocabCard();
        });
    });

    /* =========================================================
       CHẾ ĐỘ 1: HỘI THOẠI THEO NGÀY
       ========================================================= */
    const daySelect = document.getElementById("listen-day-select");
    const speedSelect = document.getElementById("listen-speed-select");
    const btnPlayAll = document.getElementById("btn-listen-play-all");
    const btnStopAll = document.getElementById("btn-listen-stop-all");
    const toggleHideText = document.getElementById("toggle-hide-text");
    const dialogueList = document.getElementById("listen-dialogue-list");

    const totalDays = [...new Set(rawData.map((item) => Number(item.day)))]
        .filter((d) => !isNaN(d) && d > 0)
        .sort((a, b) => a - b);

    totalDays.forEach((day) => {
        const opt = document.createElement("option");
        opt.value = day;
        opt.textContent = `Ngày ${day}`;
        daySelect.appendChild(opt);
    });

    let dialogueDeck = [];
    let playbackActive = false;
    let playbackIndex = 0;

    function renderDialogueList() {
        const day = Number(daySelect.value);
        dialogueDeck = rawData.filter((item) => Number(item.day) === day);
        const hide = toggleHideText.checked;

        if (dialogueDeck.length === 0) {
            dialogueList.innerHTML = `<div style="text-align:center; padding:30px; color:#6b7280;">Không có câu nào cho ngày này.</div>`;
            return;
        }

        dialogueList.innerHTML = dialogueDeck.map((item, idx) => `
            <div class="card listen-card ${hide ? "listen-blurred" : ""}" data-idx="${idx}">
                <div class="card-top">
                    <div class="card-info">
                        <div class="card-id">#${item.id || ""} • Ngày ${item.day || ""}</div>
                        <div class="card-en">${escapeHtml(item.en)}</div>
                        <div class="card-cn">${escapeHtml(item.cn)}</div>
                        ${item.pinyin ? `<div class="card-pinyin">${escapeHtml(item.pinyin)}</div>` : ""}
                        <div class="card-vi">${escapeHtml(item.vi)}</div>
                    </div>
                    <div class="card-actions">
                        <button class="audio-btn listen-item-play" data-idx="${idx}" title="Nghe câu này">▶️</button>
                    </div>
                </div>
                ${hide ? `<div class="listen-reveal-hint">🙈 Chạm để hiện văn bản</div>` : ""}
            </div>
        `).join("");
    }

    dialogueList.addEventListener("click", (e) => {
        const playBtn = e.target.closest(".listen-item-play");
        if (playBtn) {
            e.stopPropagation();
            const idx = Number(playBtn.getAttribute("data-idx"));
            stopDialoguePlayback();
            playSequence([idx]);
            return;
        }
        const card = e.target.closest(".listen-card");
        if (card && card.classList.contains("listen-blurred")) {
            card.classList.remove("listen-blurred");
            const hint = card.querySelector(".listen-reveal-hint");
            if (hint) hint.remove();
        }
    });

    function playSequence(indexes) {
        if (indexes.length === 0) return;
        playbackActive = true;
        btnPlayAll.textContent = "⏸️ Đang phát...";
        let seqPos = 0;
        const rate = Number(speedSelect.value);

        function playNext() {
            if (!playbackActive || seqPos >= indexes.length) {
                stopDialoguePlayback();
                return;
            }
            const idx = indexes[seqPos];
            const item = dialogueDeck[idx];
            highlightCard(idx);
            speakText(item.en, "en-US", rate, () => {
                if (!playbackActive) return;
                setTimeout(() => {
                    speakText(item.cn, "zh-CN", rate, () => {
                        if (!playbackActive) return;
                        setTimeout(() => {
                            seqPos++;
                            playNext();
                        }, 500);
                    });
                }, 350);
            });
        }
        playNext();
    }

    function highlightCard(idx) {
        dialogueList.querySelectorAll(".listen-card").forEach((c) => c.classList.remove("dialogue-item-playing"));
        const el = dialogueList.querySelector(`.listen-card[data-idx="${idx}"]`);
        if (el) {
            el.classList.add("dialogue-item-playing");
            el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }

    function stopDialoguePlayback() {
        playbackActive = false;
        window.speechSynthesis.cancel();
        btnPlayAll.textContent = "▶️ Phát toàn bộ ngày";
        dialogueList.querySelectorAll(".listen-card").forEach((c) => c.classList.remove("dialogue-item-playing"));
    }

    btnPlayAll.addEventListener("click", () => {
        if (playbackActive) {
            stopDialoguePlayback();
            return;
        }
        playSequence(dialogueDeck.map((_, idx) => idx));
    });
    btnStopAll.addEventListener("click", stopDialoguePlayback);

    daySelect.addEventListener("change", () => {
        stopDialoguePlayback();
        renderDialogueList();
    });
    toggleHideText.addEventListener("change", renderDialogueList);

    /* =========================================================
       CHẾ ĐỘ 2: TỪ VỰNG NGẪU NHIÊN
       ========================================================= */
    const vocabPositionEl = document.getElementById("vocab-position");
    const vocabKnownCountEl = document.getElementById("vocab-known-count");
    const vocabProgressFill = document.getElementById("vocab-progress-fill");
    const btnVocabSpeak = document.getElementById("btn-vocab-speak");
    const vocabAnswerBox = document.getElementById("vocab-answer-box");
    const vocabEn = document.getElementById("vocab-en");
    const vocabCn = document.getElementById("vocab-cn");
    const vocabPinyin = document.getElementById("vocab-pinyin");
    const vocabVi = document.getElementById("vocab-vi");
    const btnVocabReveal = document.getElementById("btn-vocab-reveal");
    const btnVocabKnowYes = document.getElementById("btn-vocab-know-yes");
    const btnVocabKnowNo = document.getElementById("btn-vocab-know-no");
    const btnVocabShuffle = document.getElementById("btn-vocab-shuffle");
    const btnVocabRestart = document.getElementById("btn-vocab-restart");
    const toggleUnknownOnly = document.getElementById("toggle-vocab-unknown-only");

    let vocabDeck = [];
    let vocabIndex = 0;

    function shuffleArray(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function buildVocabDeck() {
        const pool = toggleUnknownOnly.checked
            ? rawData.filter((item) => !vocabKnownSet.has(item.id))
            : rawData;
        vocabDeck = shuffleArray(pool.length > 0 ? pool : rawData);
        vocabIndex = 0;
        renderVocabCard();
    }

    function renderVocabCard() {
        vocabAnswerBox.style.display = "none";
        btnVocabKnowYes.disabled = true;
        btnVocabKnowNo.disabled = true;

        if (vocabDeck.length === 0) buildVocabDeck();
        if (vocabDeck.length === 0) return;

        const item = vocabDeck[vocabIndex];
        vocabEn.textContent = item.en || "—";
        vocabCn.textContent = item.cn || "—";
        vocabPinyin.textContent = item.pinyin || "";
        vocabVi.textContent = item.vi || "";

        vocabPositionEl.textContent = `${vocabIndex + 1}/${vocabDeck.length}`;
        vocabProgressFill.style.width = `${((vocabIndex + 1) / vocabDeck.length) * 100}%`;
        const knownInDeck = vocabDeck.filter((it) => vocabKnownSet.has(it.id)).length;
        vocabKnownCountEl.textContent = `✅ Đã thuộc: ${knownInDeck}/${vocabDeck.length}`;
    }

    function playVocabAudio() {
        if (vocabDeck.length === 0) return;
        const item = vocabDeck[vocabIndex];
        window.speechSynthesis.cancel();
        speakText(item.en, "en-US", 0.9, () => {
            setTimeout(() => speakText(item.cn, "zh-CN", 0.9), 300);
        });
    }

    function goVocab(newIndex) {
        if (vocabDeck.length === 0) return;
        vocabIndex = ((newIndex % vocabDeck.length) + vocabDeck.length) % vocabDeck.length;
        renderVocabCard();
    }

    btnVocabSpeak.addEventListener("click", playVocabAudio);
    btnVocabReveal.addEventListener("click", () => {
        vocabAnswerBox.style.display = "block";
        btnVocabKnowYes.disabled = false;
        btnVocabKnowNo.disabled = false;
    });

    btnVocabKnowYes.addEventListener("click", () => {
        if (vocabDeck.length === 0) return;
        vocabKnownSet.add(vocabDeck[vocabIndex].id);
        saveVocabKnownSet(vocabKnownSet);
        goVocab(vocabIndex + 1);
    });
    btnVocabKnowNo.addEventListener("click", () => {
        if (vocabDeck.length === 0) return;
        vocabKnownSet.delete(vocabDeck[vocabIndex].id);
        saveVocabKnownSet(vocabKnownSet);
        goVocab(vocabIndex + 1);
    });

    btnVocabShuffle.addEventListener("click", () => {
        vocabDeck = shuffleArray(vocabDeck);
        vocabIndex = 0;
        renderVocabCard();
    });
    btnVocabRestart.addEventListener("click", buildVocabDeck);
    toggleUnknownOnly.addEventListener("change", buildVocabDeck);

    /* Khởi tạo */
    renderDialogueList();
    buildVocabDeck();

    // Expose để stats.js đọc chung key nếu cần
    window.__listenVocabKnownKey = VOCAB_KNOWN_KEY;
});
