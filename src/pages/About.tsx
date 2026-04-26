import { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { usePageSEO } from '../hooks/usePageSEO'
import StructuredData from '../components/StructuredData'
import Timeline from '../components/Timeline'
import { generateOrganizationSchema } from '../utils/structuredData'
import { timelineEvents } from '../data/timelineData'
import './About.css'

export default function About() {
  const { t, language } = useLanguage()
  
  usePageSEO(
    t('about.title'),
    t('about.subtitle')
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
    <div className="about-page">
      <StructuredData data={generateOrganizationSchema()} />
      <div className="container">
        <section className="about-hero fade-in">
          <h1 className="page-title">{t('about.title')}</h1>
          <p className="page-subtitle">
            {t('about.subtitle')}
          </p>
        </section>

        <section className="about-content fade-in">
          <div className="content-block">
            <h2>{t('about.missionTitle')}</h2>
            <p>
              {t('about.mission1')}
            </p>
            <p>
              {t('about.mission2')}
            </p>
          </div>

          <div className="content-block fade-in">
            <h2>{t('about.valuesTitle')}</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>{t('about.value1Title')}</h3>
                <p>{t('about.value1Desc')}</p>
              </div>
              <div className="value-item">
                <h3>{t('about.value2Title')}</h3>
                <p>{t('about.value2Desc')}</p>
              </div>
              <div className="value-item">
                <h3>{t('about.value3Title')}</h3>
                <p>{t('about.value3Desc')}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Timeline events={timelineEvents.map(event => ({
        date: event.date,
        title: event.title[language],
        description: event.description[language],
        type: event.type
      }))} />
    </div>
  )
}

