document.addEventListener("DOMContentLoaded", () => {
    // 1. Kiểm tra Dữ liệu
    let rawData = [];
    if (typeof LESSON_DATA !== "undefined" && Array.isArray(LESSON_DATA)) {
        rawData = LESSON_DATA;
    } else if (window.LESSON_DATA && Array.isArray(window.LESSON_DATA)) {
        rawData = window.LESSON_DATA;
    }

    // Dom Elements
    const searchInput = document.getElementById("search-input");
    const daySelect = document.getElementById("day-select");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const lessonContainer = document.getElementById("lesson-container");
    const lessonCount = document.getElementById("lesson-count");
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    // 2. Chuyển Tab
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");

            tabButtons.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));

            btn.classList.add("active");
            const contentToShow = document.getElementById(`tab-${targetTab}`);
            if (contentToShow) contentToShow.classList.add("active");
        });
    });

    if (rawData.length === 0) {
        if (lessonContainer) {
            lessonContainer.innerHTML = `<div style="text-align:center; padding: 30px; color: #ef4444;">
                ⚠️ Không nạp được dữ liệu! Vui lòng kiểm tra lại file <b>data.js</b>.
            </div>`;
        }
        if (lessonCount) lessonCount.textContent = "0 câu";
        return;
    }

    // 3. Khởi tạo danh sách Ngày
    const totalDays = [...new Set(rawData.map(item => Number(item.day)))]
                        .filter(day => !isNaN(day) && day > 0)
                        .sort((a, b) => a - b);

    let currentDay = totalDays[0] || 1;

    if (daySelect) {
        daySelect.innerHTML = totalDays.map(day => 
            `<option value="${day}">Ngày ${day}</option>`
        ).join("");
    }

    // 4. Hàm Phát Âm (Speech Synthesis)
    function speakText(text, lang) {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang;
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    }

    // Ủy quyền sự kiện Click Audio (Bảo mật & Tránh lỗi ký tự đặc biệt)
    if (lessonContainer) {
        lessonContainer.addEventListener("click", (e) => {
            const btn = e.target.closest(".audio-btn");
            if (btn) {
                const text = btn.getAttribute("data-text");
                const lang = btn.getAttribute("data-lang");
                if (text && lang) {speakText(text, lang);
                }
            }
        });
    }

    // 5. Render thẻ Bài Học
    function renderLessons(dataList) {
        if (!lessonContainer || !lessonCount) return;

        lessonCount.textContent = `${dataList.length} câu`;

        if (dataList.length === 0) {
            lessonContainer.innerHTML = `<div style="text-align:center; padding: 30px; color: #6b7280;">
                Không tìm thấy bài học phù hợp.
            </div>`;
            return;
        }

        // Mã hóa HTML an toàn chống XSS & Lỗi chuỗi
        function escapeHtml(str) {
            if (!str) return '';
            return String(str)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        lessonContainer.innerHTML = dataList.map(item => `
            <div class="card">
                <div class="card-top">
                    <div class="card-info">
                        <div class="card-id">#${item.id || ''} • Ngày ${item.day || ''}</div>
                        <div class="card-en">${escapeHtml(item.en)}</div>
                        <div class="card-cn">${escapeHtml(item.cn)}</div>
                        ${item.pinyin ? `<div class="card-pinyin">${escapeHtml(item.pinyin)}</div>` : ''}
                        <div class="card-vi">${escapeHtml(item.vi)}</div>
                    </div>
                    <div class="card-actions">
                        <button class="audio-btn" data-text="${escapeHtml(item.en)}" data-lang="en-US" title="Nghe tiếng Anh">🔊 EN</button>
                        <button class="audio-btn" data-text="${escapeHtml(item.cn)}" data-lang="zh-CN" title="Nghe tiếng Trung">🔊 CN</button>
                    </div>
                </div>
            </div>
        `).join("");
    }

    // 6. Lọc Theo Ngày
    function filterByDay(day) {
        currentDay = Number(day);
        if (daySelect) daySelect.value = currentDay;
        const filtered = rawData.filter(item => Number(item.day) === currentDay);
        renderLessons(filtered);
    }

    // 7. Bắt Sự Kiện
    if (daySelect) {
        daySelect.addEventListener("change", (e) => filterByDay(e.target.value));
    }

    if (btnPrev) {
        btnPrev.addEventListener("click", () => {
            const idx = totalDays.indexOf(currentDay);
            if (idx > 0) filterByDay(totalDays[idx - 1]);
        });
    }

    if (btnNext) {
        btnNext.addEventListener("click", () => {
            const idx = totalDays.indexOf(currentDay);
            if (idx < totalDays.length - 1) filterByDay(totalDays[idx + 1]);
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const kw = e.target.value.toLowerCase().trim();
            if (!kw) {
                filterByDay(currentDay);return;
            }
            const results = rawData.filter(item => 
                (item.en && item.en.toLowerCase().includes(kw)) ||
                (item.cn && item.cn.includes(kw)) ||
                (item.pinyin && item.pinyin.toLowerCase().includes(kw)) ||
                (item.vi && item.vi.toLowerCase().includes(kw))
            );
            renderLessons(results);
        });
    }

    // Kích hoạt mặc định
    filterByDay(currentDay);
});