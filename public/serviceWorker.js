const Dynamic_Cache_Name = "dynamic-version-v1";

const self = this;

//install service worker
self.addEventListener("install", (e) => {
  console.log("service worker:Installed");
});

//activate the service worker
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          return cache !== Dynamic_Cache_Name && caches.delete(cache);
        })
      );
    })
  );
});

//listen for request
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        //make copy/clone of response
        const resClone = res.clone();
        caches.open(Dynamic_Cache_Name).then((cache) => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
