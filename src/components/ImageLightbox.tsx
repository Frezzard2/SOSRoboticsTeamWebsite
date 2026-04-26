import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useSwipeGesture } from '../utils/touchGestures'
import './ImageLightbox.css'

interface ImageLightboxProps {
  image: { src?: string; label: string; category?: string }
  isOpen: boolean
  onClose: () => void
  onNext?: () => void
  onPrev?: () => void
  hasNext?: boolean
  hasPrev?: boolean
}

export default function ImageLightbox({
  image,
  isOpen,
  onClose,
  onNext,
  onPrev,
  hasNext = false,
  hasPrev = false
}: ImageLightboxProps) {
  const lightboxRef = useRef<HTMLDivElement>(null)
  const [imageError, setImageError] = useState(false)
  const scrollPositionRef = useRef(0)

  // Reset error state when image changes
  useEffect(() => {
    setImageError(false)
  }, [image.src])

  // Touch gesture support for mobile
  useEffect(() => {
    if (isOpen && lightboxRef.current) {
      const cleanup = useSwipeGesture(lightboxRef.current, {
        onSwipeLeft: () => {
          if (hasNext && onNext) onNext()
        },
        onSwipeRight: () => {
          if (hasPrev && onPrev) onPrev()
        },
        threshold: 50
      })
      return cleanup || undefined
    }
    return undefined
  }, [isOpen, hasNext, hasPrev, onNext, onPrev])

  useEffect(() => {
    if (isOpen) {
      scrollPositionRef.current = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPositionRef.current}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        } else if (e.key === 'ArrowRight' && hasNext && onNext) {
          onNext()
        } else if (e.key === 'ArrowLeft' && hasPrev && onPrev) {
          onPrev()
        }
      }
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        window.scrollTo({ top: scrollPositionRef.current })
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
    return undefined
  }, [isOpen, onClose, onNext, onPrev, hasNext, hasPrev])

  if (!isOpen) return null

  return createPortal(
    (
      <div className="lightbox-overlay" onClick={onClose} ref={lightboxRef}>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <button 
            className="lightbox-close" 
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          {hasPrev && onPrev && (
            <button 
              className="lightbox-nav lightbox-prev" 
              onClick={onPrev}
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
          )}
          {hasNext && onNext && (
            <button 
              className="lightbox-nav lightbox-next" 
              onClick={onNext}
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          )}
          <div className="lightbox-image-container">
            {image.src && !imageError ? (
              <img 
                src={image.src} 
                alt={image.label}
                className="lightbox-image"
                loading="eager"
                onError={() => {
                  setImageError(true)
                }}
              />
            ) : (
              <div className="lightbox-placeholder">
                <div className="image-icon-large">📷</div>
                <p>{image.category || 'Image'}</p>
                {!image.src && <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.7 }}>No image source</p>}
                {imageError && <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.7 }}>Failed to load image</p>}
              </div>
            )}
          </div>
          <div className="lightbox-caption">
            <p>{image.label}</p>
            {image.category && <span className="lightbox-category">{image.category}</span>}
          </div>
        </div>
      </div>
    ),
    document.body
  )
}

