// Structured Data (JSON-LD) for SEO
import { contactInfo } from '../data/contactData'
import { siteConfig } from './siteConfig'

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SOS Robotics Team',
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: siteConfig.logo,
      width: 512,
      height: 512
    },
    description: 'SOS Robotics Team competes in RoboCup Rescue League\'s Rapidly Manufactured Robot Challenge. We build autonomous rescue robots for disaster scenarios.',
    email: contactInfo.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: contactInfo.location || 'Unknown'
    },
    foundingDate: '2020',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '10-20'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Hungary'
    },
    knowsAbout: [
      'Robotics',
      'RoboCup',
      'Rescue Robots',
      'Autonomous Systems',
      'Robot Competition'
    ],
    sameAs: [
      contactInfo.social.facebook,
      contactInfo.social.instagram,
      contactInfo.social.github,
      contactInfo.social.youtube,
      contactInfo.social.linkedin,
      contactInfo.social.twitter
    ].filter(Boolean)
  }
}

export function generateFAQPageSchema(faqItems: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }
}

export function generateBlogPostSchema(post: {
  title: string
  excerpt: string
  date: string
  content: string[]
}, language: string) {
  const siteUrl = siteConfig.url
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'SOS Robotics Team'
    },
    publisher: {
      '@type': 'Organization',
      name: 'SOS Robotics Team',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog`
    },
    articleBody: post.content.join('\n\n'),
    inLanguage: language
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SOS Robotics Team',
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
}

