/* =========================================================
   AUTH-SYNC.JS — Đăng nhập Magic Link + đồng bộ tiến độ học
   (practice_known_ids, listen_vocab_known_ids, app_streak_data)
   giữa localStorage (offline-first) và bảng "user_progress"
   trên Supabase (đồng bộ nhiều thiết bị).

   Cần supabase-client.js load trước file này.

   window.PROGRESS_SYNC_READY -> Promise, resolve khi đã kiểm tra
      phiên đăng nhập và (nếu có) đã kéo + merge dữ liệu cloud vào
      localStorage. practice.js / listen.js / stats.js phải await
      Promise này trước khi đọc các key localStorage nói trên.
   window.syncProgressToCloud() -> gọi sau mỗi lần lưu tiến độ mới
      (debounce ~1.5s) để đẩy lên cloud.
   window.clearProgressInCloud() -> gọi khi người dùng reset tiến độ.
   ========================================================= */

const KNOWN_KEY = "practice_known_ids";
const VOCAB_KNOWN_KEY = "listen_vocab_known_ids";
const STREAK_KEY = "app_streak_data";

function readLocalArray(key) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function readLocalStreak() {
    try {
        return JSON.parse(localStorage.getItem(STREAK_KEY)) || null;
    } catch {
        return null;
    }
}

function unionIds(localIds, cloudIds) {
    return [...new Set([...(localIds || []), ...(cloudIds || [])])];
}

// Streak: giữ bản có count cao hơn (đơn giản, tránh mất tiến độ khi merge)
function mergeStreak(local, cloud) {
    if (!cloud) return local;
    if (!local) return { count: cloud.streak_count, lastDate: cloud.streak_last_date };
    return cloud.streak_count > local.count
        ? { count: cloud.streak_count, lastDate: cloud.streak_last_date }
        : local;
}

/* ---------------------------------------------------------
   1) Kéo tiến độ từ cloud và merge vào localStorage
   --------------------------------------------------------- */
async function pullAndMerge(userId) {
    const { data: row, error } = await window.sb
        .from("user_progress")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

    if (error) {
        console.error("Lỗi khi tải tiến độ từ Supabase:", error);
        return;
    }
    if (!row) return; // chưa có dữ liệu cloud cho tài khoản này -> giữ nguyên local

    const mergedKnown = unionIds(readLocalArray(KNOWN_KEY), row.known_sentence_ids);
    const mergedVocab = unionIds(readLocalArray(VOCAB_KNOWN_KEY), row.known_vocab_ids);
    const mergedStreak = mergeStreak(readLocalStreak(), row);

    localStorage.setItem(KNOWN_KEY, JSON.stringify(mergedKnown));
    localStorage.setItem(VOCAB_KNOWN_KEY, JSON.stringify(mergedVocab));
    if (mergedStreak) localStorage.setItem(STREAK_KEY, JSON.stringify(mergedStreak));
}

/* ---------------------------------------------------------
   2) Đẩy tiến độ hiện tại lên cloud (debounce)
   --------------------------------------------------------- */
let pushTimer = null;
let currentUserId = null;

function pushNow() {
    if (!currentUserId) return;
    const streak = readLocalStreak();
    window.sb
        .from("user_progress")
        .upsert({
            user_id: currentUserId,
            known_sentence_ids: readLocalArray(KNOWN_KEY),
            known_vocab_ids: readLocalArray(VOCAB_KNOWN_KEY),
            streak_count: streak?.count || 0,
            streak_last_date: streak?.lastDate || null,
            updated_at: new Date().toISOString(),
        })
        .then(({ error }) => {
            if (error) console.error("Lỗi khi đồng bộ tiến độ lên Supabase:", error);
        });
}

window.syncProgressToCloud = function () {
    if (!currentUserId) return; // chưa đăng nhập -> chỉ lưu local, không đẩy cloud
    clearTimeout(pushTimer);
    pushTimer = setTimeout(pushNow, 1500);
};

window.clearProgressInCloud = async function () {
    if (!currentUserId) return;
    const { error } = await window.sb.from("user_progress").delete().eq("user_id", currentUserId);
    if (error) console.error("Lỗi khi xoá tiến độ trên Supabase:", error);
};

/* ---------------------------------------------------------
   3) UI đăng nhập / đăng xuất
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    const btnAuth = document.getElementById("btn-auth");
    const overlay = document.getElementById("auth-overlay");
    const btnCloseAuth = document.getElementById("btn-close-auth");
    const emailInput = document.getElementById("auth-email-input");
    const btnSendLink = document.getElementById("btn-send-magic-link");
    const authStatus = document.getElementById("auth-status");
    const loggedOutView = document.getElementById("auth-logged-out");
    const loggedInView = document.getElementById("auth-logged-in");
    const userEmailEl = document.getElementById("auth-user-email");
    const btnLogout = document.getElementById("btn-logout");

    function openModal() {
        authStatus.textContent = "";
        authStatus.className = "modal-status";
        overlay.classList.add("open");
    }
    function closeModal() {
        overlay.classList.remove("open");
    }
    function renderAuthUI(user) {
        if (user) {
            loggedOutView.style.display = "none";
            loggedInView.style.display = "block";
            userEmailEl.textContent = user.email;
            btnAuth.textContent = "👤✅";
        } else {
            loggedOutView.style.display = "block";
            loggedInView.style.display = "none";
            btnAuth.textContent = "👤";
        }
    }

    btnAuth?.addEventListener("click", openModal);
    btnCloseAuth?.addEventListener("click", closeModal);
    overlay?.addEventListener("click", (e) => {
        if (e.target === overlay) closeModal();
    });

    btnSendLink?.addEventListener("click", async () => {
        const email = emailInput.value.trim();
        if (!email) {
            authStatus.textContent = "⚠️ Vui lòng nhập email.";
            authStatus.className = "modal-status error";
            return;
        }
        btnSendLink.disabled = true;
        const { error } = await window.sb.auth.signInWithOtp({
            email,
            options: { emailRedirectTo: window.location.href },
        });
        btnSendLink.disabled = false;
        if (error) {
            authStatus.textContent = `⚠️ ${error.message}`;
            authStatus.className = "modal-status error";
            return;
        }
        authStatus.textContent = "✅ Đã gửi link đăng nhập, hãy kiểm tra email.";
        authStatus.className = "modal-status success";
    });

    btnLogout?.addEventListener("click", async () => {
        await window.sb.auth.signOut();
        closeModal();
    });

    window.sb.auth.onAuthStateChange((_event, session) => {
        renderAuthUI(session?.user || null);
    });
});

/* ---------------------------------------------------------
   4) Khởi tạo: kiểm tra phiên đăng nhập hiện có, kéo + merge
   --------------------------------------------------------- */
window.PROGRESS_SYNC_READY = (async () => {
    try {
        const { data: { session } } = await window.sb.auth.getSession();
        if (session?.user) {
            currentUserId = session.user.id;
            await pullAndMerge(currentUserId);
        }
    } catch (err) {
        console.error("Lỗi khởi tạo đồng bộ tiến độ:", err);
    }
})();
