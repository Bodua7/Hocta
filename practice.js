/* =========================================================
   PRACTICE.JS — Tab "🎯 Luyện Tập"
   Chế độ hiện có: 🎴 Lật Thẻ (Flip Card)
   Chế độ Trắc Nghiệm sẽ được bổ sung sau.
   Dùng chung dữ liệu LESSON_DATA từ data.js.
   Tiến độ "Đã thuộc" được lưu vào localStorage theo id câu.
   ========================================================= */

document.addEventListener("DOMContentLoaded", async () => {
    const [rawData = []] = await Promise.all([window.LESSON_DATA_READY, window.PROGRESS_SYNC_READY]);
    if (!rawData || rawData.length === 0) return; // Supabase chưa trả dữ liệu -> bỏ qua, script.js đã báo lỗi rồi

    const KNOWN_KEY = "practice_known_ids";

    /* ---------------------------------------------------------
       Helpers cho tiến độ "Đã thuộc" (localStorage)
       --------------------------------------------------------- */
    function getKnownSet() {
        try {
            const raw = localStorage.getItem(KNOWN_KEY);
            return new Set(raw ? JSON.parse(raw) : []);
        } catch {
            return new Set();
        }
    }
    function saveKnownSet(set) {
        localStorage.setItem(KNOWN_KEY, JSON.stringify([...set]));
        window.syncProgressToCloud?.();
    }
    let knownSet = getKnownSet();

    /* ---------------------------------------------------------
       DOM refs
       --------------------------------------------------------- */
    const daySelect = document.getElementById("practice-day-select");
    const modeButtons = document.querySelectorAll(".mode-btn");
    const modeFlip = document.getElementById("mode-flip");
    const modeQuiz = document.getElementById("mode-quiz");

    const flipCard = document.getElementById("flip-card");
    const flipFrontEn = document.getElementById("flip-front-en");
    const flipBackCn = document.getElementById("flip-back-cn");
    const flipBackPinyin = document.getElementById("flip-back-pinyin");
    const flipBackVi = document.getElementById("flip-back-vi");
    const flipFrontAudio = document.getElementById("flip-front-audio");
    const flipBackAudio = document.getElementById("flip-back-audio");

    const flipPosition = document.getElementById("flip-position");
    const flipKnownCount = document.getElementById("flip-known-count");
    const flipProgressFill = document.getElementById("flip-progress-fill");

    const btnPrev = document.getElementById("flip-prev");
    const btnNext = document.getElementById("flip-next");
    const btnShuffle = document.getElementById("flip-shuffle");
    const btnRestart = document.getElementById("flip-restart");
    const btnKnowYes = document.getElementById("btn-know-yes");
    const btnKnowNo = document.getElementById("btn-know-no");

    /* ---------------------------------------------------------
       Khởi tạo danh sách ngày trong dropdown
       --------------------------------------------------------- */
    const totalDays = [...new Set(rawData.map((item) => Number(item.day)))]
        .filter((d) => !isNaN(d) && d > 0)
        .sort((a, b) => a - b);

    totalDays.forEach((day) => {
        const opt = document.createElement("option");
        opt.value = day;
        opt.textContent = `Ngày ${day}`;
        daySelect.appendChild(opt);
    });

    /* ---------------------------------------------------------
       Trạng thái phiên học hiện tại
       --------------------------------------------------------- */
    let deck = [];       // danh sách câu đang học
    let currentIndex = 0;
    let isFlipped = false;

    function buildDeck() {
        const val = daySelect.value;
        deck = val === "all"
            ? [...rawData]
            : rawData.filter((item) => Number(item.day) === Number(val));
        currentIndex = 0;
        isFlipped = false;
        renderCard();
        buildQuizSession();
    }

    function escapeHtml(str) {
        if (!str) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    function renderCard() {
        flipCard.classList.remove("is-flipped");
        isFlipped = false;

        if (deck.length === 0) {
            flipFrontEn.textContent = "Không có dữ liệu";
            flipBackCn.textContent = "—";
            flipBackPinyin.textContent = "";
            flipBackVi.textContent = "";
            flipPosition.textContent = "0/0";
            flipProgressFill.style.width = "0%";
            return;
        }

        const item = deck[currentIndex];
        flipFrontEn.textContent = item.en || "—";
        flipBackCn.textContent = item.cn || "—";
        flipBackPinyin.textContent = item.pinyin || "";
        flipBackVi.textContent = item.vi || "";

        flipPosition.textContent = `${currentIndex + 1}/${deck.length}`;
        flipProgressFill.style.width = `${((currentIndex + 1) / deck.length) * 100}%`;
        updateKnownCount();
    }

    function updateKnownCount() {
        const knownInDeck = deck.filter((item) => knownSet.has(item.id)).length;
        flipKnownCount.textContent = `✅ Đã thuộc: ${knownInDeck}/${deck.length}`;
    }

    function goTo(index) {
        if (deck.length === 0) return;
        currentIndex = ((index % deck.length) + deck.length) % deck.length;
        renderCard();
    }

    function shuffleDeck() {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        currentIndex = 0;
        renderCard();
    }

    /* ---------------------------------------------------------
       Phát âm (dùng chung Speech Synthesis)
       --------------------------------------------------------- */
    function speakText(text, lang) {
        if (!text || !("speechSynthesis" in window)) return;
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = lang;
        utter.rate = 0.9;
        window.speechSynthesis.speak(utter);
    }

    /* ---------------------------------------------------------
       Sự kiện
       --------------------------------------------------------- */
    flipCard.addEventListener("click", () => {
        if (deck.length === 0) return;
        isFlipped = !isFlipped;
        flipCard.classList.toggle("is-flipped", isFlipped);
    });

    flipFrontAudio.addEventListener("click", (e) => {
        e.stopPropagation();
        if (deck[currentIndex]) speakText(deck[currentIndex].en, "en-US");
    });
    flipBackAudio.addEventListener("click", (e) => {
        e.stopPropagation();
        if (deck[currentIndex]) speakText(deck[currentIndex].cn, "zh-CN");
    });

    btnPrev.addEventListener("click", () => goTo(currentIndex - 1));
    btnNext.addEventListener("click", () => goTo(currentIndex + 1));
    btnShuffle.addEventListener("click", shuffleDeck);
    btnRestart.addEventListener("click", () => {
        currentIndex = 0;
        renderCard();
    });

    btnKnowYes.addEventListener("click", () => {
        if (deck.length === 0) return;
        knownSet.add(deck[currentIndex].id);
        saveKnownSet(knownSet);
        updateKnownCount();
        goTo(currentIndex + 1);
    });

    btnKnowNo.addEventListener("click", () => {
        if (deck.length === 0) return;
        knownSet.delete(deck[currentIndex].id);
        saveKnownSet(knownSet);
        updateKnownCount();
        goTo(currentIndex + 1);
    });

    daySelect.addEventListener("change", buildDeck);

    // Bàn phím: mũi tên trái/phải chuyển thẻ, Space lật thẻ (khi tab đang mở)
    document.addEventListener("keydown", (e) => {
        const practiceTab = document.getElementById("tab-practice");
        if (!practiceTab.classList.contains("active")) return;
        if (modeFlip.style.display === "none") return;

        if (e.code === "ArrowLeft") goTo(currentIndex - 1);
        else if (e.code === "ArrowRight") goTo(currentIndex + 1);
        else if (e.code === "Space") {
            e.preventDefault();
            flipCard.click();
        }
    });

    /* =========================================================
       CHẾ ĐỘ TRẮC NGHIỆM (Quiz)
       ========================================================= */
    const quizDirection = document.getElementById("quiz-direction");
    const quizPlay = document.getElementById("quiz-play");
    const quizResult = document.getElementById("quiz-result");
    const quizProgressFill = document.getElementById("quiz-progress-fill");
    const quizPosition = document.getElementById("quiz-position");
    const quizScore = document.getElementById("quiz-score");
    const quizQuestionTag = document.getElementById("quiz-question-tag");
    const quizQuestionText = document.getElementById("quiz-question-text");
    const quizQuestionSub = document.getElementById("quiz-question-sub");
    const quizOptionsEl = document.getElementById("quiz-options");
    const quizNextBtn = document.getElementById("quiz-next-btn");
    const quizRestartBtn = document.getElementById("quiz-restart-btn");
    const quizRetryBtn = document.getElementById("quiz-retry-btn");
    const quizResultEmoji = document.getElementById("quiz-result-emoji");
    const quizResultTitle = document.getElementById("quiz-result-title");
    const quizResultScore = document.getElementById("quiz-result-score");

    const QUIZ_MAX_QUESTIONS = 20;

    const QUIZ_DIRECTION_META = {
        en_vi: { tag: "🇬🇧 Tiếng Anh → chọn nghĩa 🇻🇳", promptField: "en", answerField: "vi", subField: null },
        cn_vi: { tag: "🇨🇳 Tiếng Trung → chọn nghĩa 🇻🇳", promptField: "cn", answerField: "vi", subField: "pinyin" },
        vi_en: { tag: "🇻🇳 Tiếng Việt → chọn câu 🇬🇧", promptField: "vi", answerField: "en", subField: null },
        vi_cn: { tag: "🇻🇳 Tiếng Việt → chọn câu 🇨🇳", promptField: "vi", answerField: "cn", subField: null },
    };

    let quizQuestions = [];
    let quizIndex = 0;
    let quizCorrect = 0;
    let quizWrong = 0;
    let quizAnswered = false;

    function shuffleArray(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function buildQuizSession() {
        if (!quizDirection) return;
        const meta = QUIZ_DIRECTION_META[quizDirection.value];

        // Ưu tiên dữ liệu theo ngày đang chọn; nếu quá ít, mở rộng ra toàn bộ ngân hàng câu
        const basePool = deck.length >= 4 ? deck : rawData;
        const validItems = basePool.filter((it) => it[meta.promptField] && it[meta.answerField]);
        const questionSource = validItems.length >= 2
            ? validItems
            : rawData.filter((it) => it[meta.promptField] && it[meta.answerField]);

        const shuffledQuestions = shuffleArray(questionSource).slice(0, QUIZ_MAX_QUESTIONS);

        quizQuestions = shuffledQuestions
            .map((item) => {
                const correctAnswer = item[meta.answerField];
                const distractorPool = rawData.filter(
                    (d) => d.id !== item.id && d[meta.answerField] && d[meta.answerField] !== correctAnswer
                );
                const seen = new Set([correctAnswer]);
                const uniqueDistractors = [];
                for (const d of shuffleArray(distractorPool)) {
                    const val = d[meta.answerField];
                    if (!seen.has(val)) {
                        seen.add(val);
                        uniqueDistractors.push(val);
                    }
                    if (uniqueDistractors.length === 3) break;
                }
                return {
                    item,
                    prompt: item[meta.promptField],
                    sub: meta.subField ? item[meta.subField] : "",
                    correctAnswer,
                    options: shuffleArray([correctAnswer, ...uniqueDistractors]),
                };
            })
            .filter((q) => q.options.length >= 2);

        quizIndex = 0;
        quizCorrect = 0;
        quizWrong = 0;
        quizPlay.style.display = "";
        quizResult.style.display = "none";
        quizQuestionTag.textContent = meta.tag;
        renderQuizQuestion();
    }

    function renderQuizQuestion() {
        quizAnswered = false;
        quizNextBtn.disabled = true;
        quizNextBtn.textContent = quizIndex >= quizQuestions.length - 1 ? "Xem kết quả →" : "Câu tiếp theo →";
        quizOptionsEl.innerHTML = "";

        if (quizQuestions.length === 0) {
            quizQuestionText.textContent = "Không đủ dữ liệu để tạo câu hỏi cho lựa chọn này.";
            quizQuestionSub.textContent = "";
            quizPosition.textContent = "Câu 0/0";
            quizProgressFill.style.width = "0%";
            return;
        }

        const q = quizQuestions[quizIndex];
        quizQuestionText.textContent = q.prompt;
        quizQuestionSub.textContent = q.sub || "";
        quizPosition.textContent = `Câu ${quizIndex + 1}/${quizQuestions.length}`;
        quizScore.innerHTML = `✅ Đúng: ${quizCorrect} &nbsp; ❌ Sai: ${quizWrong}`;
        quizProgressFill.style.width = `${(quizIndex / quizQuestions.length) * 100}%`;

        q.options.forEach((optText) => {
            const btn = document.createElement("button");
            btn.className = "quiz-option-btn";
            btn.textContent = optText;
            btn.addEventListener("click", () => handleQuizAnswer(btn, optText, q));
            quizOptionsEl.appendChild(btn);
        });
    }

    function handleQuizAnswer(btn, chosenText, q) {
        if (quizAnswered) return;
        quizAnswered = true;

        quizOptionsEl.querySelectorAll(".quiz-option-btn").forEach((b) => {
            b.disabled = true;
            if (b.textContent === q.correctAnswer) b.classList.add("correct");
        });

        if (chosenText === q.correctAnswer) {
            quizCorrect++;
        } else {
            quizWrong++;
            btn.classList.add("wrong");
        }
        quizScore.innerHTML = `✅ Đúng: ${quizCorrect} &nbsp; ❌ Sai: ${quizWrong}`;
        quizNextBtn.disabled = false;
    }

    function nextQuizQuestion() {
        if (quizIndex < quizQuestions.length - 1) {
            quizIndex++;
            renderQuizQuestion();
        } else {
            showQuizResult();
        }
    }

    function showQuizResult() {
        quizPlay.style.display = "none";
        quizResult.style.display = "flex";
        const total = quizQuestions.length;
        const pct = total ? Math.round((quizCorrect / total) * 100) : 0;
        quizResultScore.textContent = `${quizCorrect}/${total} câu đúng (${pct}%)`;

        if (pct === 100) {
            quizResultEmoji.textContent = "🏆";
            quizResultTitle.textContent = "Xuất sắc tuyệt đối!";
        } else if (pct >= 80) {
            quizResultEmoji.textContent = "🎉";
            quizResultTitle.textContent = "Rất tốt!";
        } else if (pct >= 50) {
            quizResultEmoji.textContent = "👍";
            quizResultTitle.textContent = "Khá ổn, cố gắng thêm nhé!";
        } else {
            quizResultEmoji.textContent = "💪";
            quizResultTitle.textContent = "Cần luyện tập thêm!";
        }
    }

    quizNextBtn?.addEventListener("click", nextQuizQuestion);
    quizRestartBtn?.addEventListener("click", buildQuizSession);
    quizRetryBtn?.addEventListener("click", buildQuizSession);
    quizDirection?.addEventListener("change", buildQuizSession);

    /* ---------------------------------------------------------
       Chuyển đổi chế độ Lật Thẻ / Trắc Nghiệm
       --------------------------------------------------------- */
    modeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            modeButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const mode = btn.getAttribute("data-mode");
            modeFlip.style.display = mode === "flip" ? "flex" : "none";
            modeQuiz.style.display = mode === "quiz" ? "flex" : "none";
        });
    });

    // Khởi tạo lần đầu
    buildDeck();
});
