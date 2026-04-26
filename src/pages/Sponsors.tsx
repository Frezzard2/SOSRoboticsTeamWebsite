import { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { usePageSEO } from '../hooks/usePageSEO'
import { getTranslatedSponsors } from '../data/getTranslatedData'
import './Sponsors.css'

export default function Sponsors() {
  const { t, language } = useLanguage()
  const sponsors = getTranslatedSponsors(language)
  
  usePageSEO(
    t('sponsors.title'),
    t('sponsors.subtitle')
  )
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      const elements = document.querySelectorAll('.fade-in')
      elements.forEach((el) => observerRef.current?.unobserve(el))
    }
  }, [])

  return (
    <div className="sponsors-page">
      <div className="container">
        <section className="sponsors-hero fade-in">
          <h1 className="page-title">{t('sponsors.title')}</h1>
          <p className="page-subtitle">
            {t('sponsors.subtitle')}
          </p>
        </section>

        <section className="sponsors-content fade-in">
          <div className="sponsors-grid">
            {sponsors.map((sponsor, index) => {
              const SponsorContent = (
                <>
                  <div className="sponsor-logo-placeholder">
                    {sponsor.logo ? (
                      <img 
                        src={sponsor.logo} 
                        alt={sponsor.name}
                        className="sponsor-logo-img"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to emoji if image fails to load
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          const placeholder = target.parentElement
                          if (placeholder && !placeholder.querySelector('.logo-icon')) {
                            const icon = document.createElement('div')
                            icon.className = 'logo-icon'
                            icon.textContent = '🏢'
                            placeholder.insertBefore(icon, target)
                          }
                        }}
                      />
                    ) : (
                      <div className="logo-icon">🏢</div>
                    )}
                  </div>
                  <p className="sponsor-name">{sponsor.name}</p>
                  {sponsor.tier && (
                    <span className="sponsor-tier">
                      {t(`sponsors.tiers.${sponsor.tier.toLowerCase()}`) || sponsor.tier}
                    </span>
                  )}
                  {sponsor.description && (
                    <p className="sponsor-description">{sponsor.description}</p>
                  )}
                </>
              )

              return sponsor.website ? (
                <a
                  key={index}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sponsor-card sponsor-card-link"
                  data-tier={sponsor.tier}
                >
                  {SponsorContent}
                </a>
              ) : (
                <div 
                  key={index} 
                  className="sponsor-card"
                  data-tier={sponsor.tier}
                >
                  {SponsorContent}
                </div>
              )
            })}
          </div>

          <div className="sponsor-cta fade-in">
            <h2>{t('sponsors.becomeSponsor')}</h2>
            <p>
              {t('sponsors.becomeSponsorDesc')}
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

