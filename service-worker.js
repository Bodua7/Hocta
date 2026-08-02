// Flashcard Learning AI — Service Worker
// Cache "app shell" (mã nguồn) để dùng offline. KHÔNG cache API Groq (luôn cần mạng).
const CACHE_NAME = "flashcard-ai-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./data.js",
  "./groq-live.js",
  "./practice.js",
  "./listen.js",
  "./stats.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Không bao giờ cache request tới Groq API (luôn cần dữ liệu tươi + có mạng)
  if (url.hostname.includes("groq.com")) {
    return;
  }

  // Chỉ xử lý GET, cùng origin
  if (event.request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
      // Stale-while-revalidate: trả cache ngay nếu có, cập nhật nền
      return cached || networkFetch;
    })
  );
});
