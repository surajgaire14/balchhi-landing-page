const CACHE_NAME = "version-1";
const urlToCache = ["./index.html", "./offline.html","/"];

const self = this;

//install service worker
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("opened cache");
      return cache.addAll(urlToCache);
    })
  );
});

//listen for request
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(async () => {
      try {
        return await fetch(e.request);
      } catch {
        return await caches.match("offline.html");
      }
    })
  );
});

//activate the service worker
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
  e.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if(!cacheWhitelist.includes(cacheName)){
          return caches.delete(cacheName)
        }
      })
    ))
  );
});
