// public/sw.js
// Minimal cleanup service worker: delete caches and unregister itself.

// Ensure this SW activates immediately
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      try {
        // Delete all caches
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
      } catch (e) {
        // ignore errors
      }

      try {
        // Unregister this service worker
        await self.registration.unregister();
      } catch (e) {
        // ignore errors
      }

      // Take control of any open clients
      await self.clients.claim();
    })()
  );
});

// NOTE: no fetch handler. All requests go straight to network once this runs.
