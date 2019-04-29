var CACHE_VERSION = 'app-v4';
var CACHE_FILES = [
    'images/*',
    'app.js',
    'assets/css/*'
];

self.addEventListener('install', event => {
    console.log('Success - Installed SW');
    event.waitUntil(
        caches
        .open(CACHE_VERSION)
        .then(cache => {
            console.log('SW: Caching files...');
            cache.addAll(CACHE_FILES)
        })
        .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    console.log('Success - Activated SW');
    event.waitUntil(
        caches.keys().then(keyNames => {
            return Promise.all(
                keyNames.map(key => {
                    if(key !== CACHE_VERSION) {
                        console.log('Clearing old caches...');
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    console.log('SW fetching');
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});