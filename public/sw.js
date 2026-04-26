// Service Worker for SOS Robotics Website
const CACHE_NAME = 'sos-robotics-v3'

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      // Activate updated SW ASAP
      await self.skipWaiting()
    })()
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip caching for non-GET requests
  if (event.request.method !== 'GET') {
    return
  }

  // Network-first for HTML navigations so deploys don't break hashed assets.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(event.request)
          const cache = await caches.open(CACHE_NAME)
          cache.put('/index.html', response.clone())
          return response
        } catch {
          const cached = await caches.match('/index.html')
          if (cached) return cached
          // Last resort: try the root document from cache.
          const cachedRoot = await caches.match('/')
          if (cachedRoot) return cachedRoot
          throw new Error('No cached shell available')
        }
      })(),
    )
    return
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response
        }
        return fetch(event.request).catch((error) => {
          // If fetch fails, return a basic response instead of failing
          console.error('Fetch failed:', event.request.url, error)
          // For other requests, let the error propagate
          throw error
        })
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys()
      await Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) return caches.delete(cacheName)
          return undefined
        }),
      )

      // Take control of open pages immediately.
      await self.clients.claim()
    })(),
  )
})

