import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { updatePageTitle, updateMetaDescription, updateOGTags } from '../utils/seo'

export function usePageSEO(title: string, description: string, image?: string) {
  const location = useLocation()
  const { language } = useLanguage()

  useEffect(() => {
    updatePageTitle(title)
    updateMetaDescription(description)
    updateOGTags(title, description, image)
    
    // Update HTML lang attribute
    document.documentElement.lang = language
  }, [location.pathname, title, description, image, language])
}

