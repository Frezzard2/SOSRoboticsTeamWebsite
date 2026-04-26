import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import SearchBar from '../components/SearchBar'
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
import './NotFound.css'

export default function NotFound() {
  const { t } = useLanguage()

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    ...(SHOW_ABOUT ? [{ path: '/about', label: t('nav.about') }] : []),
    ...(SHOW_ROBOTS ? [{ path: '/robots', label: t('nav.robots') }] : []),
    ...(SHOW_TEAM ? [{ path: '/team', label: t('nav.team') }] : []),
    ...(SHOW_GALLERY ? [{ path: '/gallery', label: t('nav.gallery') }] : []),
    ...(SHOW_BLOG ? [{ path: '/blog', label: t('nav.blog') }] : []),
    ...(SHOW_SPONSORS ? [{ path: '/sponsors', label: t('nav.sponsors') }] : []),
    ...(SHOW_CONTACT ? [{ path: '/contact', label: t('nav.contact') }] : []),
    ...(SHOW_FAQ ? [{ path: '/faq', label: t('nav.faq') }] : [])
  ]

  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <h1 className="error-code">{t('notFound.code')}</h1>
          <h2 className="error-title">{t('notFound.title')}</h2>
          <p className="error-description">
            {t('notFound.description')}
          </p>
          <div className="not-found-actions">
            <Link to="/" className="home-link">
              {t('notFound.home')}
            </Link>
          </div>
          <div className="search-section">
            <h3>{t('notFound.search') || 'Search for a page'}</h3>
            <SearchBar />
          </div>
          <div className="quick-links-section">
            <h3>{t('notFound.quickLinks') || 'Quick Links'}</h3>
            <div className="quick-links-grid">
              {quickLinks.map((link) => (
                <Link key={link.path} to={link.path} className="quick-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

