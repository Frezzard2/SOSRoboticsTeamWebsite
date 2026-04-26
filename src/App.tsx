import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useCallback, Suspense } from 'react'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import ScrollToTop from './components/ScrollToTop'
import LanguageSelector from './components/LanguageSelector'
import ErrorBoundary from './components/ErrorBoundary'
import RouteErrorBoundary from './components/RouteErrorBoundary'
import { LoadingSkeleton } from './components/LoadingSkeleton'
import SkipLink from './components/SkipLink'
import PageTransition from './components/PageTransition'
import { trackPageView } from './utils/analytics'
import { contactInfo } from './data/contactData'
import { footerLogos } from './data/footerLogosData'
import { 
  SHOW_ABOUT, 
  SHOW_ROBOTS, 
  SHOW_TEAM, 
  SHOW_GALLERY, 
  SHOW_SPONSORS, 
  SHOW_CONTACT, 
  SHOW_FAQ,
  SHOW_BLOG
} from './config/siteConfig'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Robots from './pages/Robots'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import Sponsors from './pages/Sponsors'
import Contact from './pages/Contact'
import FAQPage from './pages/FAQ'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'
import RSS from './pages/RSS'
import Blog from './pages/Blog'

import type { RouteRecord } from 'vite-react-ssg'

function Navigation() {
  const location = useLocation()
  const { t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setMobileMenuOpen(prev => !prev)
  }

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])
  
  // Swipe to close mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return
    
    const menuElement = document.querySelector('.nav-links-mobile.mobile-open')
    if (!menuElement) return
    
    let touchStartY = 0
    let touchStartX = 0
    let touchEndY = 0
    let touchEndX = 0
    
    const handleTouchStart = (e: Event) => {
      const touchEvent = e as TouchEvent
      const touch = touchEvent.touches?.[0]
      if (touch) {
        touchStartY = touch.clientY
        touchStartX = touch.clientX
      }
    }
    
    const handleTouchMove = (e: Event) => {
      const touchEvent = e as TouchEvent
      const touch = touchEvent.touches?.[0]
      if (touch) {
        touchEndY = touch.clientY
        touchEndX = touch.clientX
      }
    }
    
    const handleTouchEnd = () => {
      const deltaY = touchStartY - touchEndY
      const deltaX = Math.abs(touchStartX - touchEndX)
      
      // Swipe down to close (more than 50px down, less horizontal movement)
      if (deltaY < -50 && deltaX < 30) {
        closeMobileMenu()
      }
    }
    
    menuElement.addEventListener('touchstart', handleTouchStart, { passive: true })
    menuElement.addEventListener('touchmove', handleTouchMove, { passive: true })
    menuElement.addEventListener('touchend', handleTouchEnd, { passive: true })
    
    return () => {
      menuElement.removeEventListener('touchstart', handleTouchStart)
      menuElement.removeEventListener('touchmove', handleTouchMove)
      menuElement.removeEventListener('touchend', handleTouchEnd)
    }
  }, [mobileMenuOpen, closeMobileMenu])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuOpen) {
        const target = e.target as HTMLElement
        // Don't close if clicking inside menu, language selector dropdown, or hamburger button
        if (!target.closest('.nav-links-mobile') && 
            !target.closest('.mobile-menu-toggle') &&
            !target.closest('.language-dropdown')) {
          closeMobileMenu()
        }
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMobileMenu()
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen, closeMobileMenu])

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo-link" onClick={closeMobileMenu}>
            <div className="logo-container">
              <span className="logo-text">SOS</span>
              <span className="logo-subtitle">Robotics</span>
            </div>
          </Link>
          {/* Desktop navigation */}
          <div className="nav-links-desktop">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              {t('nav.home')}
            </Link>
            {SHOW_ABOUT && (
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              >
                {t('nav.about')}
              </Link>
            )}
            {SHOW_ROBOTS && (
              <Link 
                to="/robots" 
                className={`nav-link ${isActive('/robots') ? 'active' : ''}`}
              >
                {t('nav.robots')}
              </Link>
            )}
            {SHOW_TEAM && (
              <Link 
                to="/team" 
                className={`nav-link ${isActive('/team') ? 'active' : ''}`}
              >
                {t('nav.team')}
              </Link>
            )}
            {SHOW_GALLERY && (
              <Link 
                to="/gallery" 
                className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
              >
                {t('nav.gallery')}
              </Link>
            )}
            {SHOW_SPONSORS && (
              <Link 
                to="/sponsors" 
                className={`nav-link ${isActive('/sponsors') ? 'active' : ''}`}
              >
                {t('nav.sponsors')}
              </Link>
            )}
            {SHOW_CONTACT && (
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              >
                {t('nav.contact')}
              </Link>
            )}
            {SHOW_FAQ && (
              <Link 
                to="/faq" 
                className={`nav-link ${isActive('/faq') ? 'active' : ''}`}
              >
                {t('nav.faq')}
              </Link>
            )}
            <div className="nav-language-wrapper">
              <LanguageSelector />
            </div>
          </div>
          {/* Mobile: Language selector and hamburger button */}
          <div className="mobile-nav-controls">
            <div className="mobile-language-wrapper">
              <LanguageSelector />
            </div>
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              type="button"
            >
              <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
          {/* Mobile menu - inline dropdown below navbar */}
          <div 
            className={`nav-links-mobile ${mobileMenuOpen ? 'mobile-open' : ''}`}
          >
        <div className="mobile-menu-content">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            {t('nav.home')}
          </Link>
          {SHOW_ABOUT && (
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {t('nav.about')}
            </Link>
          )}
          {SHOW_ROBOTS && (
            <Link 
              to="/robots" 
              className={`nav-link ${isActive('/robots') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {t('nav.robots')}
            </Link>
          )}
          {SHOW_TEAM && (
            <Link 
              to="/team" 
              className={`nav-link ${isActive('/team') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {t('nav.team')}
            </Link>
          )}
          {SHOW_GALLERY && (
            <Link 
              to="/gallery" 
              className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {t('nav.gallery')}
            </Link>
          )}
          {SHOW_SPONSORS && (
            <Link 
              to="/sponsors" 
              className={`nav-link ${isActive('/sponsors') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {t('nav.sponsors')}
            </Link>
          )}
          {SHOW_CONTACT && (
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {t('nav.contact')}
            </Link>
          )}
          {SHOW_FAQ && (
            <Link 
              to="/faq" 
              className={`nav-link ${isActive('/faq') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {t('nav.faq')}
            </Link>
          )}
        </div>
        </div>
        </div>
      </nav>
    </>
  )
}

function AppShell() {
  const { t, language } = useLanguage()
  const location = useLocation()
  
  // Update HTML lang attribute dynamically (redundant with LanguageContext but ensures sync)
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  // Track page views for analytics
  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location])

  return (
    <ErrorBoundary>
      <div className="app">
        <SkipLink />
        <Navigation />
        <main id="main-content" className="main-content">
          <ErrorBoundary>
            <Suspense
              fallback={
                <div
                  style={{
                    minHeight: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4rem 2rem',
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <LoadingSkeleton type="card" width="100%" height="400px" />
                  </div>
                </div>
              }
            >
              <PageTransition>
                <Outlet />
              </PageTransition>
            </Suspense>
          </ErrorBoundary>
        </main>
        <ScrollToTop />
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-text">
                <div className="footer-content-wrapper">
                  <div className="footer-text-column">
                    <p className="footer-copyright">{t('footer.copyright')}</p>
                    <div className="footer-links">
                      <Link to="/privacy" className="footer-link">
                        {t('footer.privacy') || 'Privacy Policy'}
                      </Link>
                      <span className="footer-separator">•</span>
                      <Link to="/faq" className="footer-link">
                        {t('footer.faq') || 'FAQ'}
                      </Link>
                    </div>
                  </div>
                  <div className="footer-logos-container">
                    {footerLogos.map((logo, index) => {
                      const logoContent = (
                        <div className="footer-logo-container">
                          <img src={logo.src} alt={logo.alt} loading="lazy" width="120" height="60" />
                        </div>
                      )

                      if (logo.link) {
                        if (logo.link.startsWith('/')) {
                          return (
                            <Link key={index} to={logo.link} className="footer-logo-link">
                              {logoContent}
                            </Link>
                          )
                        }
                        return (
                          <a
                            key={index}
                            href={logo.link}
                            className="footer-logo-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {logoContent}
                          </a>
                        )
                      }

                      return (
                        <div key={index} className="footer-logo-link">
                          {logoContent}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="footer-social">
                {contactInfo.social.facebook && (
                  <a
                    href={contactInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                )}
                {contactInfo.social.instagram && (
                  <a
                    href={contactInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                )}
                {contactInfo.social.github && (
                  <a href={contactInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
                {contactInfo.social.youtube && (
                  <a
                    href={contactInfo.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                )}
                {contactInfo.social.linkedin && (
                  <a
                    href={contactInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
                {contactInfo.social.twitter && (
                  <a
                    href={contactInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475 4.92 4.92 0 002.19 4.096 4.904 4.904 0 01-2.229-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  )
}

function Root() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  )
}

const childRoutes: RouteRecord[] = [
  {
    index: true,
    element: (
      <RouteErrorBoundary>
        <Home />
      </RouteErrorBoundary>
    ),
  },
]

if (SHOW_ABOUT) {
  childRoutes.push({
    path: 'about',
    element: (
      <RouteErrorBoundary>
        <About />
      </RouteErrorBoundary>
    ),
  })
}

if (SHOW_ROBOTS) {
  childRoutes.push({
    path: 'robots',
    element: (
      <RouteErrorBoundary>
        <Robots />
      </RouteErrorBoundary>
    ),
  })
}

if (SHOW_TEAM) {
  childRoutes.push({
    path: 'team',
    element: (
      <RouteErrorBoundary>
        <Team />
      </RouteErrorBoundary>
    ),
  })
}

if (SHOW_GALLERY) {
  childRoutes.push({
    path: 'gallery',
    element: (
      <RouteErrorBoundary>
        <Gallery />
      </RouteErrorBoundary>
    ),
  })
}

if (SHOW_SPONSORS) {
  childRoutes.push({
    path: 'sponsors',
    element: (
      <RouteErrorBoundary>
        <Sponsors />
      </RouteErrorBoundary>
    ),
  })
}

if (SHOW_CONTACT) {
  childRoutes.push({
    path: 'contact',
    element: (
      <RouteErrorBoundary>
        <Contact />
      </RouteErrorBoundary>
    ),
  })
}

if (SHOW_FAQ) {
  childRoutes.push({
    path: 'faq',
    element: (
      <RouteErrorBoundary>
        <FAQPage />
      </RouteErrorBoundary>
    ),
  })
}

if (SHOW_BLOG) {
  childRoutes.push({
    path: 'blog',
    element: (
      <RouteErrorBoundary>
        <Blog />
      </RouteErrorBoundary>
    ),
  })
}

childRoutes.push(
  {
    path: 'privacy',
    element: (
      <RouteErrorBoundary>
        <Privacy />
      </RouteErrorBoundary>
    ),
  },
  {
    path: 'rss.xml',
    element: (
      <RouteErrorBoundary>
        <RSS />
      </RouteErrorBoundary>
    ),
  },
  {
    path: '*',
    element: (
      <RouteErrorBoundary>
        <NotFound />
      </RouteErrorBoundary>
    ),
  },
)

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Root />,
    children: childRoutes,
  },
]
