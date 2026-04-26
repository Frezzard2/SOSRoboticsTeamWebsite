import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { usePageSEO } from '../hooks/usePageSEO'
import StructuredData from '../components/StructuredData'
import CompetitionPrizes from '../components/CompetitionPrizes'
import NextCompetitions from '../components/NextCompetitions'
import { generateOrganizationSchema, generateWebSiteSchema } from '../utils/structuredData'
import { getRandomVideo, getVideoEmbedUrl } from '../data/videoData'
import './Home.css'

export default function Home() {
  const { t } = useLanguage()
  
  // Select a random video on component mount
  const [selectedVideo] = useState(() => {
    const video = getRandomVideo()
    return getVideoEmbedUrl(video.id, {
      controls: false,
      autoplay: false,
      mute: false,
      loop: false
    })
  })
  
  usePageSEO(
    t('home.title') + ' ' + t('home.subtitle'),
    t('home.description')
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
    <div className="home-page">
      <StructuredData data={generateOrganizationSchema()} />
      <StructuredData data={generateWebSiteSchema()} />
      <section className="hero-section">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            <span className="title-main">{t('home.title')}</span>
            <span className="title-sub">{t('home.subtitle')}</span>
          </h1>
          <p className="hero-description">
            {t('home.description')}
          </p>
          <a 
            href="https://rrl.robocup.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-badge"
          >
            <span>{t('home.badge')}</span>
          </a>
        </div>
        <div className="hero-visual fade-in">
          <div className="floating-element">
            <div className="video-container">
              <iframe 
                src={selectedVideo}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="youtube-video"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Prizes Section */}
      <CompetitionPrizes />

      {/* Next Competitions Section */}
      <NextCompetitions />
    </div>
  )
}

