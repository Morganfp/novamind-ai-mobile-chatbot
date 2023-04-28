//  Service worker to cache static assets during the installation phase
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./images/logo192.png"]);
        })
    );
});

// Check the cache for a response
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            // If we found the response in the cache then return the response
            // If we don't have a cached version of the resource "||", fall back to the network to get the resource(regular fetch request)
            return response || fetch(e.request)
        })
    )
});
