// Site configuration
// You can set VITE_SITE_URL in .env file, or it will use the current window location

export function getSiteUrl(): string {
  // Try environment variable first
  if (import.meta.env.VITE_SITE_URL) {
    return import.meta.env.VITE_SITE_URL.replace(/\/$/, '') // Remove trailing slash
  }
  
  // Fallback to current location (works in browser)
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}`
  }
  
  // Fallback for SSR or build time
  return 'https://www.sosrobotics.hu'
}

export const siteConfig = {
  name: 'SOS Robotics Team',
  url: getSiteUrl(),
  logo: `${getSiteUrl()}/logo.png`
}

