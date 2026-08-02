/* =========================================================
   STATS.JS — Tab "📊 Thống Kê" + cập nhật streak-badge ở header
   Đọc tiến độ đã lưu bởi practice.js ("practice_known_ids")
   và listen.js ("listen_vocab_known_ids"), tính streak ngày
   học liên tục dựa trên ngày truy cập thực tế (localStorage).
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    let rawData = [];
    if (typeof LESSON_DATA !== "undefined" && Array.isArray(LESSON_DATA)) {
        rawData = LESSON_DATA;
    }

    const KNOWN_KEY = "practice_known_ids";
    const VOCAB_KNOWN_KEY = "listen_vocab_known_ids";
    const STREAK_KEY = "app_streak_data";

    function readSet(key) {
        try {
            const raw = localStorage.getItem(key);
            return new Set(raw ? JSON.parse(raw) : []);
        } catch {
            return new Set();
        }
    }

    /* ---------------------------------------------------------
       1) Tính & cập nhật streak ngày học liên tục
       --------------------------------------------------------- */
    function todayStr() {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    }
    function daysBetween(a, b) {
        const d1 = new Date(a);
        const d2 = new Date(b);
        return Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
    }

    function updateStreak() {
        let data;
        try {
            data = JSON.parse(localStorage.getItem(STREAK_KEY)) || null;
        } catch {
            data = null;
        }
        const today = todayStr();

        if (!data) {
            data = { count: 1, lastDate: today };
        } else if (data.lastDate === today) {
            // đã tính hôm nay rồi, giữ nguyên
        } else {
            const gap = daysBetween(data.lastDate, today);
            data.count = gap === 1 ? data.count + 1 : 1;
            data.lastDate = today;
        }
        localStorage.setItem(STREAK_KEY, JSON.stringify(data));

        const badge = document.getElementById("streak-badge");
        if (badge) badge.textContent = `🔥 ${data.count} Ngày`;

        return data.count;
    }

    /* ---------------------------------------------------------
       2) Render trang Thống Kê
       --------------------------------------------------------- */
    const statStreak = document.getElementById("stat-streak");
    const statDaysStudied = document.getElementById("stat-days-studied");
    const statKnownSentences = document.getElementById("stat-known-sentences");
    const statKnownVocab = document.getElementById("stat-known-vocab");
    const statTotalSentences = document.getElementById("stat-total-sentences");
    const statCompletionPct = document.getElementById("stat-completion-pct");
    const statsDaysBadge = document.getElementById("stats-days-badge");
    const statsDayProgress = document.getElementById("stats-day-progress");
    const btnResetProgress = document.getElementById("btn-reset-progress");

    function renderStats() {
        if (rawData.length === 0 || !statStreak) return;

        const knownSet = readSet(KNOWN_KEY);
        const vocabKnownSet = readSet(VOCAB_KNOWN_KEY);

        const totalDays = [...new Set(rawData.map((it) => Number(it.day)))]
            .filter((d) => !isNaN(d) && d > 0)
            .sort((a, b) => a - b);

        const daysStudiedSet = new Set(
            rawData.filter((it) => knownSet.has(it.id)).map((it) => Number(it.day))
        );

        statStreak.textContent = updateStreak();
        statDaysStudied.textContent = daysStudiedSet.size;
        statKnownSentences.textContent = knownSet.size;
        statKnownVocab.textContent = vocabKnownSet.size;
        statTotalSentences.textContent = rawData.length;
        statCompletionPct.textContent = rawData.length
            ? `${Math.round((knownSet.size / rawData.length) * 100)}%`
            : "0%";
        statsDaysBadge.textContent = `${totalDays.length} ngày`;

        statsDayProgress.innerHTML = totalDays.map((day) => {
            const itemsInDay = rawData.filter((it) => Number(it.day) === day);
            const knownInDay = itemsInDay.filter((it) => knownSet.has(it.id)).length;
            const pct = itemsInDay.length ? Math.round((knownInDay / itemsInDay.length) * 100) : 0;
            return `
                <div class="stats-day-row">
                    <div class="stats-day-label">Ngày ${day}</div>
                    <div class="stats-day-bar-track"><div class="stats-day-bar-fill" style="width:${pct}%;"></div></div>
                    <div class="stats-day-pct">${pct}%</div>
                </div>
            `;
        }).join("");
    }

    btnResetProgress?.addEventListener("click", () => {
        const ok = confirm("Xoá toàn bộ tiến độ học (Đã thuộc, Từ vựng, Streak)? Không thể hoàn tác.");
        if (!ok) return;
        localStorage.removeItem(KNOWN_KEY);
        localStorage.removeItem(VOCAB_KNOWN_KEY);
        localStorage.removeItem(STREAK_KEY);
        location.reload();
    });

    // Cập nhật số liệu mỗi khi người dùng mở tab Thống Kê
    document.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.getAttribute("data-tab") === "stats") renderStats();
        });
    });

    // Streak cần tính ngay khi mở app (không chỉ khi mở tab Thống Kê)
    updateStreak();
    renderStats();

    /* ---------------------------------------------------------
       3) Đăng ký Service Worker (PWA — cài đặt & dùng offline)
       --------------------------------------------------------- */
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("service-worker.js").catch(() => {
                /* im lặng nếu môi trường không hỗ trợ (vd. mở file trực tiếp) */
            });
        });
    }
});
