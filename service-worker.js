const CACHE_NAME="leave-tracker-viewer-v4";
const FILES=["./","./index.html","./config.js","./manifest.webmanifest","./icon-192.png","./icon-512.png","./icon-180.png"];
self.addEventListener("install",(e)=>{e.waitUntil(caches.open(CACHE_NAME).then((c)=>c.addAll(FILES)))});
self.addEventListener("activate",(e)=>{e.waitUntil(caches.keys().then((keys)=>Promise.all(keys.filter((k)=>k!==CACHE_NAME).map((k)=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",(e)=>{const url=new URL(e.request.url);if(url.pathname.endsWith("/leave_data.json")||url.pathname.endsWith("leave_data.json")){e.respondWith(fetch(e.request,{cache:"no-store"}).catch(()=>caches.match(e.request)));return}e.respondWith(caches.match(e.request).then((cached)=>cached||fetch(e.request)))});
