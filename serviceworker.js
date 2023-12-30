const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
  };
  
  self.addEventListener("install", (event) => {
    event.waitUntil(
      addResourcesToCache([
        "/",
        "/index.html",
        "/style.css",
        "/app.js",
        "/jquery-3.7.1.min.js",
        "/favicon.ico",
        "/dex.js"
       
      ]),
    );
  });
  