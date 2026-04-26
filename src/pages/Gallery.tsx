import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { usePageSEO } from '../hooks/usePageSEO'
import { getTranslatedGalleryImages } from '../data/getTranslatedData'
import type { GalleryImage } from '../data/galleryData'
import ImageLightbox from '../components/ImageLightbox'
import './Gallery.css'

export default function Gallery() {
  const { t, language } = useLanguage()
  const [selectedFilter, setSelectedFilter] = useState<string>('All')
  const [lightboxImage, setLightboxImage] = useState<{ image: GalleryImage; index: number } | null>(null)
  
  // Get translated gallery images
  const galleryImages = useMemo(() => 
    getTranslatedGalleryImages(language as 'en' | 'hu' | 'de'),
    [language]
  )
  
  usePageSEO(
    t('gallery.title'),
    t('gallery.subtitle')
  )
  const observerRef = useRef<IntersectionObserver | null>(null)

  const filteredImages = useMemo(() => 
    selectedFilter === 'All' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedFilter),
    [galleryImages, selectedFilter]
  )

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

    // Observe all fade-in elements on the gallery page, including hero, filters, and gallery items
    // Use setTimeout to ensure DOM has updated after filter change
    const timeoutId = setTimeout(() => {
      const allFadeInElements = document.querySelectorAll('.gallery-page .fade-in')
      const galleryItems = document.querySelectorAll('.gallery-item.fade-in')
      
      // For gallery items, reset visibility when filter changes
      galleryItems.forEach((el) => {
        el.classList.remove('fade-in-visible')
        observerRef.current?.observe(el)
      })
      
      // For hero and filters, observe them (they should be visible immediately)
      allFadeInElements.forEach((el) => {
        if (!el.classList.contains('gallery-item')) {
          observerRef.current?.observe(el)
        }
      })
    }, 0)

    return () => {
      clearTimeout(timeoutId)
      const elements = document.querySelectorAll('.gallery-page .fade-in')
      elements.forEach((el) => observerRef.current?.unobserve(el))
    }
  }, [selectedFilter, filteredImages])

  const openLightbox = useCallback((image: GalleryImage) => {
    const actualIndex = galleryImages.indexOf(image)
    setLightboxImage({ image, index: actualIndex })
  }, [galleryImages])

  const closeLightbox = useCallback(() => {
    setLightboxImage(null)
  }, [])

  const nextImage = useCallback(() => {
    if (lightboxImage && galleryImages.length > 0) {
      const nextIndex = (lightboxImage.index + 1) % galleryImages.length
      const nextImage = galleryImages[nextIndex]
      if (nextImage) {
        setLightboxImage({ image: nextImage, index: nextIndex })
      }
    }
  }, [lightboxImage, galleryImages])

  const prevImage = useCallback(() => {
    if (lightboxImage && galleryImages.length > 0) {
      const prevIndex = (lightboxImage.index - 1 + galleryImages.length) % galleryImages.length
      const prevImage = galleryImages[prevIndex]
      if (prevImage) {
        setLightboxImage({ image: prevImage, index: prevIndex })
      }
    }
  }, [lightboxImage, galleryImages])

  return (
    <div className="gallery-page">
      <div className="container">
        <section className="gallery-hero fade-in fade-in-visible">
          <h1 className="page-title">{t('gallery.title')}</h1>
          <p className="page-subtitle">
            {t('gallery.subtitle')}
          </p>
        </section>

        <section className="gallery-grid-section">
          <div className="gallery-filters fade-in fade-in-visible">
            <button 
              className={`filter-btn ${selectedFilter === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('All')}
            >
              {t('gallery.filterAll')}
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'Competitions' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('Competitions')}
            >
              {t('gallery.filterCompetitions')}
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'Build Process' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('Build Process')}
            >
              {t('gallery.filterBuild')}
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'Team' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('Team')}
            >
              {t('gallery.filterTeam')}
            </button>
          </div>

          <div className="gallery-grid">
            {filteredImages.map((image) => {
              const actualIndex = galleryImages.indexOf(image)
              return (
                <div 
                  key={actualIndex} 
                  className="gallery-item fade-in"
                  onClick={() => openLightbox(image)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      openLightbox(image)
                    }
                  }}
                  aria-label={`View ${image.label}`}
                >
                  <div className="gallery-image-placeholder">
                    {image.src ? (
                      <img 
                        src={image.src} 
                        alt={image.label}
                        className="gallery-img"
                        loading="lazy"
                        width="400"
                        height="300"
                      />
                    ) : (
                      <>
                        <div className="image-icon">📷</div>
                        <p className="placeholder-text">{image.category}</p>
                      </>
                    )}
                    <span className="image-label">{image.label}</span>
                    <div className="gallery-overlay">
                      <span className="view-icon">👁️</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
      {lightboxImage && (
        <ImageLightbox
          image={lightboxImage.image}
          isOpen={!!lightboxImage}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          hasNext={galleryImages.length > 1}
          hasPrev={galleryImages.length > 1}
        />
      )}
    </div>
  )
}

