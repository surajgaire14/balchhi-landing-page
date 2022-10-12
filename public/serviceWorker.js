const Dynamic_Cache_Name = "balchhi-offline-v1";
const self = this;

const addResourceToCache = async (resource) => {
  const cache = await caches.open(Dynamic_Cache_Name);
  return cache.addAll(resource);
};

const putInCache = async (req, res) => {
  const cache = await caches.open(Dynamic_Cache_Name);
  await cache.put(req, res);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallBackUrl }) => {
  //first get the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  //next try to use the preloadresource
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.log("using preload resource", preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  //next try to get the response from the network
  try {
    const responseFromNetwork = await fetch(request);
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (e) {
    const fallBackResponse = await caches.match(fallBackUrl);
    if (fallBackResponse) {
      return fallBackResponse;
    }

    return new Promise("Network error happend", {
      status: 408,
      headers: { "content-type": "html" },
    });
  }
};

const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    await self.registration.navigationPreload.enable();
  }
};

//install service worker
self.addEventListener("install", (e) => {
  console.log("service worker:Installed");
  e.waitUntil(addResourceToCache(["/", "/index.html", "/offline.html"]));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    enableNavigationPreload(),
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          return cache !== Dynamic_Cache_Name && caches.delete(cache);
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    cacheFirst({
      request: e.request,
      preloadResponsePromise: e.preloadResponse,
      fallBackUrl: "/offline.html",
    })
  );
});
