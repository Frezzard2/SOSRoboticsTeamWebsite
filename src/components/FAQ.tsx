import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './FAQ.css'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-section">
      <h2 className="faq-title">{t('faq.title') || 'Frequently Asked Questions'}</h2>
      <div className="faq-list">
        {items.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleItem(index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <span className="faq-icon">
                <svg className="faq-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line className="faq-icon-line-horizontal" x1="5" y1="12" x2="19" y2="12"></line>
                  <line className="faq-icon-line-vertical" x1="12" y1="5" x2="12" y2="19"></line>
                </svg>
              </span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

