import { useState, useRef, useEffect, memo, useCallback } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './LanguageSelector.css'

function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const selectorRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'en' as const, name: 'English', flag: '🇬🇧' },
    { code: 'hu' as const, name: 'Magyar', flag: '🇭🇺' },
    { code: 'de' as const, name: 'Deutsch', flag: '🇩🇪' }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLanguageChange = useCallback((langCode: typeof language) => {
    setLanguage(langCode)
    setIsOpen(false)
  }, [setLanguage])

  return (
    <div className="language-selector" ref={selectorRef}>
      <button 
        className="language-button" 
        aria-label="Select language"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="language-flag">{languages.find(l => l.code === language)?.flag}</span>
        <span className="language-code">{language.toUpperCase()}</span>
        <svg className={`language-chevron ${isOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className={`language-dropdown ${isOpen ? 'open' : ''}`}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`language-option ${language === lang.code ? 'active' : ''}`}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <span className="language-flag">{lang.flag}</span>
            <span className="language-name">{lang.name}</span>
            {language === lang.code && (
              <svg className="language-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default memo(LanguageSelector)

