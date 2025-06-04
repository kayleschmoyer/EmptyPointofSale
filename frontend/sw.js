const CACHE_NAME = 'fieldpro-v2';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/login.html',
  '/dashboard.html',
  '/css/styles.css',
  '/js/app.js',
  '/js/login.js',
  '/js/dashboard.js'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
