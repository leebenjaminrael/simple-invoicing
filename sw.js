/* Service worker for the Invoicing app.
 * Strategy: network-first for same-origin GETs (so reloading while online always
 * gets the latest app), falling back to cache when offline. Cross-origin requests
 * (fonts, FX API) pass straight through to the network.
 */
const CACHE = 'invoicing-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-180.png',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS).catch(() => {}))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Only manage same-origin requests; let cross-origin (fonts, FX API) go to network.
  let sameOrigin = false;
  try { sameOrigin = new URL(req.url).origin === self.location.origin; } catch (e) {}
  if (!sameOrigin) return;

  event.respondWith((async () => {
    try {
      const fresh = await fetch(req);
      // Cache a copy of successful responses for offline use
      if (fresh && fresh.status === 200) {
        const cache = await caches.open(CACHE);
        cache.put(req, fresh.clone()).catch(() => {});
      }
      return fresh;
    } catch (err) {
      const cached = await caches.match(req);
      if (cached) return cached;
      if (req.mode === 'navigate') {
        const index = await caches.match('./index.html');
        if (index) return index;
      }
      throw err;
    }
  })());
});
