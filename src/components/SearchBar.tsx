import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { 
  SHOW_ABOUT, 
  SHOW_ROBOTS, 
  SHOW_TEAM, 
  SHOW_GALLERY, 
  SHOW_SPONSORS, 
  SHOW_CONTACT, 
  SHOW_FAQ,
  SHOW_BLOG
} from '../config/siteConfig'
import './SearchBar.css'

interface SearchResult {
  path: string
  label: string
  type: 'page' | 'content'
}

export default function SearchBar() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const allPages: SearchResult[] = [
    { path: '/', label: t('nav.home'), type: 'page' },
    ...(SHOW_ABOUT ? [{ path: '/about', label: t('nav.about'), type: 'page' as const }] : []),
    ...(SHOW_ROBOTS ? [{ path: '/robots', label: t('nav.robots'), type: 'page' as const }] : []),
    ...(SHOW_TEAM ? [{ path: '/team', label: t('nav.team'), type: 'page' as const }] : []),
    ...(SHOW_GALLERY ? [{ path: '/gallery', label: t('nav.gallery'), type: 'page' as const }] : []),
    ...(SHOW_BLOG ? [{ path: '/blog', label: t('nav.blog'), type: 'page' as const }] : []),
    ...(SHOW_SPONSORS ? [{ path: '/sponsors', label: t('nav.sponsors'), type: 'page' as const }] : []),
    ...(SHOW_CONTACT ? [{ path: '/contact', label: t('nav.contact'), type: 'page' as const }] : []),
    ...(SHOW_FAQ ? [{ path: '/faq', label: t('nav.faq'), type: 'page' as const }] : [])
  ]

  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = allPages.filter(page =>
        page.label.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (path: string) => {
    navigate(path)
    setQuery('')
    setIsOpen(false)
  }

  return (
    <div className="search-bar" ref={searchRef}>
      <input
        type="text"
        placeholder={t('search.placeholder') || 'Search...'}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query.length > 0 && setIsOpen(true)}
        className="search-input"
      />
      {isOpen && results.length > 0 && (
        <div className="search-results">
          {results.map((result, index) => (
            <button
              key={index}
              className="search-result-item"
              onClick={() => handleSelect(result.path)}
            >
              <span className="result-icon">🔍</span>
              <span className="result-label">{result.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

