const CACHE_NAME = "version-1";
const urlToCache = ["./index.html", "/", "./offline.html"];
const Dynamic_Cache_Name = "dynamic-version-v1";

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
    caches
      .match(e.request)
      .then((res) => {
        return (
          res ||
          fetch(e.request).then((res) => {
            return caches.open(Dynamic_Cache_Name).then((cache) => {
              cache.put(e.request.url, res.clone());
              return res;
            });
          })
        );
      })
      .catch(() => {
        if (e.request.url.indexof(".html") > -1) {
          return caches.match("./offline.html");
        }
      })
  );
});

//activate the service worker
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== Dynamic_Cache_Name)
          .map((key) => caches.delete(key))
      );
    })
  );
});
