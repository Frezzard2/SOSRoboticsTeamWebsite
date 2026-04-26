import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { usePageSEO } from '../hooks/usePageSEO'
import { contactInfo } from '../data/contactData'
import { validateContactForm, sanitizeFormData, type FormErrors } from '../utils/formValidation'
import { trackEvent } from '../utils/analytics'
import './Contact.css'

export default function Contact() {
  const { t } = useLanguage()
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})
  const [messageCharCount, setMessageCharCount] = useState(0)
  const formRef = useRef<HTMLFormElement | null>(null)
  
  usePageSEO(
    t('contact.title'),
    t('contact.subtitle')
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
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="contact-page">
      <div className="container">
        <section className="contact-hero fade-in">
          <h1 className="page-title">{t('contact.title')}</h1>
          <p className="page-subtitle">
            {t('contact.subtitle')}
          </p>
        </section>

        <section className="contact-content">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section fade-in">
              <h2>{t('contact.getInTouch')}</h2>
              <p className="contact-description">
                {t('contact.description')}
              </p>

              <div className="contact-details">
                {contactInfo.email && (
                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div className="contact-item-content">
                      <h3>{t('contact.email')}</h3>
                      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </div>
                  </div>
                )}

                {contactInfo.location && (
                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div className="contact-item-content">
                      <h3>{t('contact.location')}</h3>
                      <p>{contactInfo.location}</p>
                    </div>
                  </div>
                )}

                {contactInfo.phone && (
                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div className="contact-item-content">
                      <h3>{t('contact.phone')}</h3>
                      <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Media Links */}
              <div className="social-section">
                <h3>{t('contact.followUs')}</h3>
                <div className="social-links">
                  {contactInfo.social.facebook && (
                    <a 
                      href={contactInfo.social.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="Facebook"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span>Facebook</span>
                    </a>
                  )}

                  {contactInfo.social.instagram && (
                    <a 
                      href={contactInfo.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="Instagram"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>Instagram</span>
                    </a>
                  )}

                  {contactInfo.social.github && (
                    <a 
                      href={contactInfo.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="GitHub"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}

                  {contactInfo.social.youtube && (
                    <a 
                      href={contactInfo.social.youtube} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="YouTube"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span>YouTube</span>
                    </a>
                  )}

                  {contactInfo.social.linkedin && (
                    <a 
                      href={contactInfo.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  )}

                  {contactInfo.social.twitter && (
                    <a 
                      href={contactInfo.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="Twitter"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475 4.92 4.92 0 002.19 4.096 4.904 4.904 0 01-2.229-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      <span>Twitter</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section fade-in">
              <h2>{t('contact.sendMessage')}</h2>
              <form 
                ref={formRef}
                className="contact-form"
                onSubmit={async (e) => {
                  e.preventDefault()
                  
                  const form = e.currentTarget
                  const formData = new FormData(form)
                  const rawData = {
                    name: (formData.get('name') as string) || '',
                    email: (formData.get('email') as string) || '',
                    subject: (formData.get('subject') as string) || '',
                    message: (formData.get('message') as string) || ''
                  }

                  // Validate form (validation also sanitizes)
                  const validationErrors = validateContactForm(rawData, t)
                  if (Object.keys(validationErrors).length > 0) {
                    setErrors(validationErrors)
                    setTouched({ name: true, email: true, subject: true, message: true })
                    return
                  }

                  // Sanitize data before submission
                  const sanitizedData = sanitizeFormData(rawData)

                  setErrors({})
                  setFormStatus('sending')
                  
                  try {
                    // Formspree handles CSRF protection automatically
                    // Rate limiting is handled by Formspree (typically 5 submissions per hour per IP)
                    const response = await fetch('https://formspree.io/f/mgvgdrlp', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                      },
                      body: JSON.stringify(sanitizedData),
                    })

                    if (response.ok) {
                      setFormStatus('success')
                      if (formRef.current) {
                        formRef.current.reset()
                      }
                      setTouched({})
                      trackEvent('form_submit', 'contact', 'success')
                      setTimeout(() => setFormStatus('idle'), 5000)
                    } else {
                      throw new Error('Form submission failed')
                    }
                  } catch (error) {
                    console.error('Form submission error:', error)
                    setFormStatus('error')
                    trackEvent('form_submit', 'contact', 'error')
                    setTimeout(() => setFormStatus('idle'), 5000)
                  }
                }}
              >
                <div className="form-group">
                  <label htmlFor="name">{t('contact.name')}</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder={t('contact.name')} 
                    autoComplete="name"
                    required
                    onBlur={(e) => {
                      setTouched({ ...touched, name: true })
                      const validationErrors = validateContactForm({
                        name: e.target.value,
                        email: (document.getElementById('email') as HTMLInputElement)?.value || '',
                        subject: (document.getElementById('subject') as HTMLInputElement)?.value || '',
                        message: (document.getElementById('message') as HTMLTextAreaElement)?.value || ''
                      }, t)
                      setErrors({ ...errors, name: validationErrors.name || '' })
                    }}
                    className={touched.name && errors.name ? 'error' : ''}
                  />
                  {touched.name && errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t('contact.email')}</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder={t('contact.emailPlaceholder')} 
                    autoComplete="email"
                    required
                    onBlur={(e) => {
                      setTouched({ ...touched, email: true })
                      const validationErrors = validateContactForm({
                        name: (document.getElementById('name') as HTMLInputElement)?.value || '',
                        email: e.target.value,
                        subject: (document.getElementById('subject') as HTMLInputElement)?.value || '',
                        message: (document.getElementById('message') as HTMLTextAreaElement)?.value || ''
                      }, t)
                      setErrors({ ...errors, email: validationErrors.email || '' })
                    }}
                    className={touched.email && errors.email ? 'error' : ''}
                  />
                  {touched.email && errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="subject">{t('contact.subject')}</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    placeholder={t('contact.subjectPlaceholder')} 
                    autoComplete="off"
                    required
                    onBlur={(e) => {
                      setTouched({ ...touched, subject: true })
                      const validationErrors = validateContactForm({
                        name: (document.getElementById('name') as HTMLInputElement)?.value || '',
                        email: (document.getElementById('email') as HTMLInputElement)?.value || '',
                        subject: e.target.value,
                        message: (document.getElementById('message') as HTMLTextAreaElement)?.value || ''
                      }, t)
                      setErrors({ ...errors, subject: validationErrors.subject || '' })
                    }}
                    className={touched.subject && errors.subject ? 'error' : ''}
                  />
                  {touched.subject && errors.subject && (
                    <span className="error-message">{errors.subject}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t('contact.message')}</label>
                  <textarea 
                    id="message"
                    name="message"
                    placeholder={t('contact.message')} 
                    rows={6}
                    maxLength={2000}
                    required
                    onBlur={(e) => {
                      setTouched({ ...touched, message: true })
                      const validationErrors = validateContactForm({
                        name: (document.getElementById('name') as HTMLInputElement)?.value || '',
                        email: (document.getElementById('email') as HTMLInputElement)?.value || '',
                        subject: (document.getElementById('subject') as HTMLInputElement)?.value || '',
                        message: e.target.value
                      }, t)
                      setErrors({ ...errors, message: validationErrors.message || '' })
                    }}
                    onChange={(e) => {
                      // Real-time character count update
                      const charCount = e.target.value.length
                      setMessageCharCount(charCount)
                    }}
                    className={touched.message && errors.message ? 'error' : ''}
                  ></textarea>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.25rem' }}>
                    {touched.message && errors.message && (
                      <span className="error-message">{errors.message}</span>
                    )}
                    <span style={{ fontSize: '0.875rem', color: messageCharCount > 1800 ? '#ff3b30' : 'var(--text-secondary)', marginLeft: 'auto' }}>
                      {messageCharCount}/2000
                    </span>
                  </div>
                </div>
                {formStatus === 'success' && (
                  <div className="form-message success">
                    {t('contact.success')}
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="form-message error">
                    {t('contact.error')}
                  </div>
                )}
                <button 
                  type="submit" 
                  className="btn-submit"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <span style={{ display: 'inline-block', marginRight: '0.5rem' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>
                          <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                          <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                        </svg>
                      </span>
                      {t('contact.sending') || 'Sending...'}
                    </>
                  ) : t('contact.sendButton')}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

