// Google Analytics 4 utility
// To use: Add your GA4 Measurement ID to .env file as VITE_GA_MEASUREMENT_ID

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export function initAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

  if (!measurementId) {
    console.warn('Google Analytics: No measurement ID provided')
    return
  }

  // Create script tag
  const script1 = document.createElement('script')
  script1.async = true
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script1)

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  window.gtag = function() {
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    page_path: window.location.pathname,
  })
}

export function trackPageView(path: string) {
  if (window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
      page_path: path,
    })
  }
}

export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track button clicks
export function trackButtonClick(buttonName: string, location?: string) {
  trackEvent('click', 'button', `${buttonName}${location ? ` - ${location}` : ''}`)
}

// Track form submissions
export function trackFormSubmit(formName: string, success: boolean) {
  trackEvent('form_submit', 'form', `${formName} - ${success ? 'success' : 'error'}`)
}

// Track video plays (if videos are added)
export function trackVideoPlay(videoName: string) {
  trackEvent('play', 'video', videoName)
}

// Track downloads
export function trackDownload(fileName: string) {
  trackEvent('download', 'file', fileName)
}

