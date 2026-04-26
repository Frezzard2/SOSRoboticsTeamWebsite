import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { trackEvent } from '../utils/analytics'
import './NewsletterSignup.css'

export default function NewsletterSignup() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // TODO: Integrate with your email service (Mailchimp, ConvertKit, etc.)
    // Example with Mailchimp:
    // const response = await fetch('YOUR_MAILCHIMP_ENDPOINT', {
    //   method: 'POST',
    //   body: JSON.stringify({ email_address: email })
    // })

    // For now, simulate success
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      trackEvent('newsletter_signup', 'engagement', 'success')
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <div className="newsletter-signup">
      <h3>{t('newsletter.title') || 'Stay Updated'}</h3>
      <p>{t('newsletter.description') || 'Get the latest updates about our competitions and projects.'}</p>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('newsletter.placeholder') || 'your.email@example.com'}
          required
          disabled={status === 'loading'}
          className="newsletter-input"
        />
        <button 
          type="submit" 
          disabled={status === 'loading' || status === 'success'}
          className="newsletter-button"
        >
          {status === 'loading' 
            ? (t('newsletter.subscribing') || 'Subscribing...')
            : status === 'success'
            ? (t('newsletter.subscribed') || 'Subscribed!')
            : (t('newsletter.subscribe') || 'Subscribe')}
        </button>
      </form>
      {status === 'error' && (
        <p className="newsletter-error">{t('newsletter.error') || 'Something went wrong. Please try again.'}</p>
      )}
    </div>
  )
}

