// 캐시 완전 제거용 service worker

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// fetch 캐시 사용 안함 (항상 최신 요청)
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});