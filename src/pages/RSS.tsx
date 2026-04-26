import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { generateRSSFeed } from '../utils/rssFeed'

export default function RSS() {
  const { language } = useLanguage()

  useEffect(() => {
    const rssContent = generateRSSFeed(language)
    const blob = new Blob([rssContent], { type: 'application/rss+xml' })
    const url = URL.createObjectURL(blob)
    
    // Trigger download
    const link = document.createElement('a')
    link.href = url
    link.download = 'rss-feed.xml'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    
    // Redirect back
    window.history.back()
  }, [language])

  return null
}

