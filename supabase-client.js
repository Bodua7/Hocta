/* =========================================================
   SUPABASE-CLIENT.JS — Khởi tạo 1 client Supabase dùng chung
   cho toàn bộ app (data.js, auth-sync.js).
   Phải load SAU thư viện @supabase/supabase-js và TRƯỚC data.js.
   ========================================================= */

const SUPABASE_URL = "https://clbddroyrueafygedycy.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsYmRkcm95cnVlYWZ5Z2VkeWN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzNzM4ODQsImV4cCI6MjA5OTk0OTg4NH0.PmkyB3ZHsKD2dHJBBtMFKGrcmq6mNrBg7ePJLUe8Of8";

window.sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
