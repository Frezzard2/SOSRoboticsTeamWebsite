import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations } from '../data/translations'

type Language = 'en' | 'hu' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get saved language from localStorage
    const saved = localStorage.getItem('language') as Language
    if (saved && ['en', 'hu', 'de'].includes(saved)) {
      return saved
    }
    
    // Auto-detect browser language
    if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('hu')) return 'hu'
      if (browserLang.startsWith('de')) return 'de'
    }
    
    // Default to English
    return 'en'
  })

  useEffect(() => {
    // Save language preference
    localStorage.setItem('language', language)
    // Update HTML lang attribute
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        // Fallback to English if translation missing
        value = translations.en
        for (const k2 of keys) {
          value = value?.[k2]
        }
        break
      }
    }
    
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

