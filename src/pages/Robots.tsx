import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { usePageSEO } from '../hooks/usePageSEO'
import { getTranslatedRobots } from '../data/getTranslatedData'
import './Robots.css'

export default function Robots() {
  const { t, language } = useLanguage()
  
  usePageSEO(
    t('robots.title'),
    t('robots.subtitle')
  )
  const robots = getTranslatedRobots(language)
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/a5a40c36-f2ee-46be-8ce2-4f2bc4cd38e5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Robots.tsx:15',message:'robots array check',data:{robotsLength:robots?.length||0,robotsIsArray:Array.isArray(robots),robotsIsEmpty:robots?.length===0},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  const [selectedRobot, setSelectedRobot] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const tabsRef = useRef<HTMLDivElement | null>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

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

  // Ensure selectedRobot is within bounds
  useEffect(() => {
    if (robots.length > 0 && selectedRobot >= robots.length) {
      setSelectedRobot(0)
      setSelectedImage(0)
    }
  }, [robots.length, selectedRobot])

  // Scroll selected tab into view on mobile
  useEffect(() => {
    const selectedTab = tabRefs.current[selectedRobot]
    if (selectedTab && tabsRef.current) {
      const container = tabsRef.current
      const tabLeft = selectedTab.offsetLeft
      const tabWidth = selectedTab.offsetWidth
      const containerWidth = container.offsetWidth
      const scrollLeft = container.scrollLeft
      
      // Check if tab is fully visible
      if (tabLeft < scrollLeft || tabLeft + tabWidth > scrollLeft + containerWidth) {
        selectedTab.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        })
      }
    }
  }, [selectedRobot])

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/a5a40c36-f2ee-46be-8ce2-4f2bc4cd38e5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Robots.tsx:64',message:'before robot access',data:{selectedRobot,robotsLength:robots?.length||0,isValidIndex:selectedRobot>=0&&selectedRobot<(robots?.length||0)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  
  // Safety check: if no robots or invalid index, return early
  if (!robots || robots.length === 0) {
    return (
      <div className="robots-page">
        <div className="container">
          <section className="robots-hero fade-in">
            <h1 className="page-title">{t('robots.title')}</h1>
            <p className="page-subtitle">{t('robots.subtitle')}</p>
          </section>
          <p style={{ textAlign: 'center', padding: '2rem', color: '#86868b' }}>
            {t('robots.noRobots') || 'No robots available at this time.'}
          </p>
        </div>
      </div>
    )
  }

  const validSelectedRobot = Math.max(0, Math.min(selectedRobot, robots.length - 1))
  const robot = robots[validSelectedRobot]
  
  if (!robot) {
    return (
      <div className="robots-page">
        <div className="container">
          <section className="robots-hero fade-in">
            <h1 className="page-title">{t('robots.title')}</h1>
            <p className="page-subtitle">{t('robots.subtitle')}</p>
          </section>
          <p style={{ textAlign: 'center', padding: '2rem', color: '#86868b' }}>
            {t('robots.noRobots') || 'No robots available at this time.'}
          </p>
        </div>
      </div>
    )
  }

  // Ensure selectedImage is within bounds
  useEffect(() => {
    if (robot?.images && robot.images.length > 0) {
      const maxIndex = robot.images.length - 1
      if (selectedImage > maxIndex) {
        setSelectedImage(maxIndex)
      } else if (selectedImage < 0) {
        setSelectedImage(0)
      }
    } else if (selectedImage !== 0) {
      setSelectedImage(0)
    }
  }, [robot?.images, selectedImage])

  const validSelectedImage = robot?.images && robot.images.length > 0 
    ? Math.max(0, Math.min(selectedImage, robot.images.length - 1))
    : 0

  return (
    <div className="robots-page">
      <div className="container">
        <section className="robots-hero fade-in">
          <h1 className="page-title">{t('robots.title')}</h1>
          <p className="page-subtitle">
            {t('robots.subtitle')}
          </p>
        </section>

        <section className="robots-selector fade-in">
          <div className="robot-tabs" ref={tabsRef}>
            {robots.map((r, index) => (
              <button
                key={index}
                ref={(el) => { tabRefs.current[index] = el }}
                className={`robot-tab ${validSelectedRobot === index ? 'active' : ''}`}
                onClick={() => {
                  setSelectedRobot(index)
                  setSelectedImage(0)
                }}
              >
                {r.name}
              </button>
            ))}
          </div>
        </section>

        <section className="robot-detail-section">
          <div className="robot-detail-grid">
            {/* Main Image Display */}
            <div className="robot-main-image fade-in">
              <div className="main-image-placeholder">
                {/* #region agent log */}
                {(()=>{fetch('http://127.0.0.1:7242/ingest/a5a40c36-f2ee-46be-8ce2-4f2bc4cd38e5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Robots.tsx:99',message:'before image access',data:{robotExists:robot!==undefined,imagesExists:robot?.images!==undefined,imagesLength:robot?.images?.length||0,validSelectedImage,isValidImageIndex:validSelectedImage>=0&&validSelectedImage<(robot?.images?.length||0)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});return null;})()}
                {/* #endregion */}
                {robot.images && robot.images.length > 0 && robot.images[validSelectedImage]?.src ? (
                  <img 
                    src={robot.images[validSelectedImage].src} 
                    alt={robot.images[validSelectedImage]?.label || 'Robot Image'}
                    className="robot-main-img"
                    loading="lazy"
                  />
                ) : (
                  <>
                    <div className="image-icon-large">🤖</div>
                    <p className="image-label-main">{robot.images?.[validSelectedImage]?.label || 'Robot Image'}</p>
                  </>
                )}
                <span className="image-type-badge">{robot.images?.[validSelectedImage]?.type || 'main'}</span>
              </div>
              
              {/* Image Thumbnails */}
              <div className="image-thumbnails">
                {robot.images && robot.images.length > 0 ? robot.images.map((img, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedImage(index)
                    }}
                  >
                    <div className="thumbnail-placeholder">
                      {img.src ? (
                        <img src={img.src} alt={img.label} className="thumbnail-img" loading="lazy" />
                      ) : (
                        <span className="thumbnail-icon">📷</span>
                      )}
                    </div>
                    <span className="thumbnail-label">{img.type}</span>
                  </button>
                )) : (
                  <p style={{ textAlign: 'center', color: '#86868b', padding: '1rem' }}>
                    {t('robots.noImages') || 'No images available'}
                  </p>
                )}
              </div>
            </div>

            {/* Robot Information */}
            <div className="robot-info-panel fade-in">
              <div className="robot-header">
                <h2>{robot.name}</h2>
                {robot.achievements && robot.achievements.length > 0 && (
                  <div className="achievements-badge">
                    <span>🏆</span>
                    <span>{t('robots.achievementsTitle')}</span>
                  </div>
                )}
              </div>

              <p className="robot-short-description">{robot.description}</p>
              
              {robot.fullDescription && (
                <p className="robot-full-description">{robot.fullDescription}</p>
              )}

              {/* Features */}
              <div className="robot-features">
                <h3>{t('robots.featuresTitle')}</h3>
                <ul className="features-list">
                  {robot.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-icon">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="robot-specs-detailed">
                <h3>{t('robots.specsTitle')}</h3>
                {robot.specs.map((spec, index) => {
                  // Translate category name
                  const categoryKey = spec.category.toLowerCase().replace(/\s+/g, '')
                  const categoryMap: Record<string, string> = {
                    'navigation': t('robots.specCategories.navigation'),
                    'manipulation': t('robots.specCategories.manipulation'),
                    'sensors': t('robots.specCategories.sensors'),
                    'power&mobility': t('robots.specCategories.powerMobility'),
                    'powerandmobility': t('robots.specCategories.powerMobility')
                  }
                  const translatedCategory = categoryMap[categoryKey] || spec.category

                  return (
                    <div key={index} className="spec-category">
                      <h4>{translatedCategory}</h4>
                      <ul className="spec-details-list">
                        {spec.details.map((detail, i) => (
                          <li key={i}>
                            <span className="spec-dot"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>

              {/* Achievements */}
              {robot.achievements && robot.achievements.length > 0 && (
                <div className="robot-achievements">
                  <h3>{t('robots.achievementsTitle')}</h3>
                  <ul className="achievements-list">
                    {robot.achievements.map((achievement, index) => (
                      <li key={index}>
                        <span className="achievement-icon">🏆</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
