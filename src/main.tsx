import './index.css'
import { initAnalytics } from './utils/analytics'
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App'

export const createRoot = ViteReactSSG(
  {
    routes,
    basename: import.meta.env.BASE_URL,
  },
  ({ isClient }) => {
    if (!isClient) return

    // Initialize Google Analytics
    initAnalytics()

    // Register Service Worker for PWA (only in production)
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered:', registration.scope)
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error)
          })
      })
    } else if ('serviceWorker' in navigator && import.meta.env.DEV) {
      // Unregister any existing service workers in development
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister()
          console.log('Service Worker unregistered for development')
        })
      })
    }
  },
)
