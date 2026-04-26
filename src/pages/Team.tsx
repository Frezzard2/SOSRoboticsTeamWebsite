import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { usePageSEO } from '../hooks/usePageSEO'
import { getTranslatedMembers } from '../data/getTranslatedData'
import './Team.css'

function renderBioWithHighlights(bio: string) {
  const parts = bio.split(/(#[^\s]+)/g)

  return parts.map((part, idx) => {
    const lower = part.toLowerCase()
    const isRainbowTag = lower === '#lmbtq+' || lower === '#pride'

    if (!isRainbowTag) return <span key={idx}>{part}</span>

    return (
      <span key={idx} className="rainbow-text">
        {part}
      </span>
    )
  })
}

export default function Team() {
  const { t, language } = useLanguage()
  
  usePageSEO(
    t('team.title'),
    t('team.subtitle')
  )
  const members = getTranslatedMembers(language)
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/a5a40c36-f2ee-46be-8ce2-4f2bc4cd38e5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Team.tsx:14',message:'members array check',data:{membersLength:members?.length||0,membersIsArray:Array.isArray(members),membersIsEmpty:members?.length===0},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  const [selectedMember, setSelectedMember] = useState(0)
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

  // Scroll selected tab into view on mobile
  useEffect(() => {
    const selectedTab = tabRefs.current[selectedMember]
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
  }, [selectedMember])

  // Ensure selectedMember is within bounds
  useEffect(() => {
    if (members.length > 0 && selectedMember >= members.length) {
      setSelectedMember(0)
    }
  }, [members.length, selectedMember])

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/a5a40c36-f2ee-46be-8ce2-4f2bc4cd38e5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Team.tsx:62',message:'before member access',data:{selectedMember,membersLength:members?.length||0,isValidIndex:selectedMember>=0&&selectedMember<(members?.length||0)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  
  // Safety check: if no members or invalid index, return early
  if (!members || members.length === 0) {
    return (
      <div className="team-page">
        <div className="container">
          <section className="team-hero fade-in">
            <h1 className="page-title">{t('team.title')}</h1>
            <p className="page-subtitle">{t('team.subtitle')}</p>
          </section>
          <p style={{ textAlign: 'center', padding: '2rem', color: '#86868b' }}>
            {t('team.noMembers') || 'No team members available at this time.'}
          </p>
        </div>
      </div>
    )
  }

  const validSelectedMember = Math.max(0, Math.min(selectedMember, members.length - 1))
  const member = members[validSelectedMember]
  
  if (!member) {
    return (
      <div className="team-page">
        <div className="container">
          <section className="team-hero fade-in">
            <h1 className="page-title">{t('team.title')}</h1>
            <p className="page-subtitle">{t('team.subtitle')}</p>
          </section>
          <p style={{ textAlign: 'center', padding: '2rem', color: '#86868b' }}>
            {t('team.noMembers') || 'No team members available at this time.'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="team-page">
      <div className="container">
        <section className="team-hero fade-in">
          <h1 className="page-title">{t('team.title')}</h1>
          <p className="page-subtitle">
            {t('team.subtitle')}
          </p>
        </section>

        <section className="team-selector fade-in">
          <div className="member-tabs" ref={tabsRef}>
            {members.map((m, index) => (
              <button
                key={index}
                ref={(el) => { tabRefs.current[index] = el }}
                className={`member-tab ${validSelectedMember === index ? 'active' : ''}`}
                onClick={() => setSelectedMember(index)}
              >
                {m.name}
              </button>
            ))}
          </div>
        </section>

        <section className="team-detail-section">
          <div className="team-detail-grid">
            {/* Member Image/Avatar */}
            <div className="member-main-visual fade-in">
              <div className="member-image-placeholder">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="member-photo"
                    loading="lazy"
                  />
                ) : (
                  <>
                    <div className="avatar-large">
                      {member.name.charAt(0)}
                    </div>
                    <p className="member-image-label">Team Member Photo</p>
                  </>
                )}
              </div>
            </div>

            {/* Member Information */}
            <div className="member-info-panel fade-in">
              <div className="member-header">
                <h2>{member.name}</h2>
                <div className="member-role-badge">
                  {member.role}
                </div>
              </div>

              {member.bio && (
                <div className="member-bio-section">
                  <h3>{t('team.about')}</h3>
                  <p className="member-bio-full">{renderBioWithHighlights(member.bio)}</p>
                </div>
              )}

              <div className="member-details">
                <div className="detail-item">
                  <span className="detail-label">{t('team.role')}</span>
                  <span className="detail-value">{member.role}</span>
                </div>
                {member.specialization && (
                  <div className="detail-item">
                    <span className="detail-label">{t('team.specialization')}</span>
                    <span className="detail-value">{member.specialization}</span>
                  </div>
                )}
                {member.contributions && member.contributions.length > 0 && (
                  <div className="member-contributions">
                    <h3>{t('team.contributionsTitle')}</h3>
                    <ul className="contributions-list">
                      {member.contributions.map((contribution, index) => (
                        <li key={index}>
                          <span className="contribution-icon">✓</span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {member.social && Object.keys(member.social).length > 0 && (
                  <div className="member-social">
                    <h3>{t('team.connect')}</h3>
                    <div className="member-social-links">
                      {member.social.linkedin && (
                        <a 
                          href={member.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="member-social-link"
                          aria-label="LinkedIn"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      )}
                      {member.social.github && (
                        <a 
                          href={member.social.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="member-social-link"
                          aria-label="GitHub"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a 
                          href={member.social.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="member-social-link"
                          aria-label="Twitter"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475 4.92 4.92 0 002.19 4.096 4.904 4.904 0 01-2.229-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                      )}
                      {member.social.email && (
                        <a 
                          href={`mailto:${member.social.email}`}
                          className="member-social-link"
                          aria-label="Email"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                          </svg>
                        </a>
                      )}
                      {member.social.website && (
                        <a 
                          href={member.social.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="member-social-link"
                          aria-label="Website"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="2" y1="12" x2="22" y2="12"/>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                          </svg>
                        </a>
                      )}
                      {member.social.instagram && (
                        <a 
                          href={member.social.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="member-social-link"
                          aria-label="Instagram"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      )}
                      {member.social.facebook && (
                        <a 
                          href={member.social.facebook} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="member-social-link"
                          aria-label="Facebook"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
