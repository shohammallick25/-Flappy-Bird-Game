const CACHE_NAME = 'flappy-bird-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './flappybird.css',
  './flappybird.js',
  './flappybird.png',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
