import { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { usePageSEO } from '../hooks/usePageSEO'
import FAQ from '../components/FAQ'
import { faqItems } from '../data/faqData'
import StructuredData from '../components/StructuredData'
import { generateFAQPageSchema } from '../utils/structuredData'
import './FAQ.css'

export default function FAQPage() {
  const { t, language } = useLanguage()
  
  usePageSEO(
    t('faq.title'),
    'Frequently asked questions about SOS Robotics Team'
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

  const translatedFAQs = faqItems.map(item => ({
    question: item.question[language],
    answer: item.answer[language]
  }))

  return (
    <div className="faq-page">
      <StructuredData data={generateFAQPageSchema(translatedFAQs)} />
      <div className="container">
        <section className="faq-hero fade-in">
          <h1 className="page-title">{t('faq.title')}</h1>
          <p className="page-subtitle">
            {t('faq.subtitle') || 'Find answers to common questions about our team and competitions.'}
          </p>
        </section>
        <FAQ items={translatedFAQs} />
      </div>
    </div>
  )
}

