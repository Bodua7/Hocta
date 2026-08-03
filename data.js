/* =========================================================
   DATA.JS — Nạp dữ liệu bài học từ Supabase (bảng "lessons")
   thay vì mảng tĩnh nhúng sẵn trong code.

   window.LESSON_DATA        -> mảng dữ liệu (rỗng cho tới khi load xong)
   window.LESSON_DATA_READY  -> Promise resolve ra mảng dữ liệu khi load xong
                                 (script.js / practice.js / listen.js /
                                  stats.js đều await Promise này trước khi
                                  chạy, thay vì đọc LESSON_DATA ngay lập tức)
   Cần supabase-client.js load trước file này.
   ========================================================= */

window.LESSON_DATA = [];

window.LESSON_DATA_READY = (async () => {
    try {
        const { data, error } = await window.sb
            .from("lessons")
            .select("id:original_id,day,en,cn,pinyin,vi")
            .order("id", { ascending: true });

        if (error) throw error;
        window.LESSON_DATA = data || [];
        return window.LESSON_DATA;
    } catch (err) {
        console.error("Không tải được dữ liệu bài học từ Supabase:", err);
        window.LESSON_DATA = [];
        return [];
    }
})();
