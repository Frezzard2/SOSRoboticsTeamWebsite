import { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { usePageSEO } from '../hooks/usePageSEO'
import { getTranslatedBlogPosts } from '../data/getTranslatedData'
import StructuredData from '../components/StructuredData'
import SocialShare from '../components/SocialShare'
import { generateBlogPostSchema, generateOrganizationSchema, generateWebSiteSchema } from '../utils/structuredData'
import { siteConfig } from '../utils/siteConfig'
import './Blog.css'

export default function Blog() {
  const { t, language } = useLanguage()
  
  usePageSEO(
    t('blog.title'),
    t('blog.subtitle')
  )
  const blogPosts = getTranslatedBlogPosts(language)
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

  const currentUrl = typeof window !== 'undefined' ? window.location.href : `${siteConfig.url}/blog`

  return (
    <div className="blog-page">
      <StructuredData data={generateOrganizationSchema()} />
      <StructuredData data={generateWebSiteSchema()} />
      <div className="container">
        <section className="blog-hero fade-in">
          <h1 className="page-title">{t('blog.title')}</h1>
          <p className="page-subtitle">
            {t('blog.subtitle')}
          </p>
        </section>

        <section className="blog-posts">
          {blogPosts.map((post, index) => {
            const postUrl = `${currentUrl}#${post.date}`
            return (
              <article key={index} className="blog-post fade-in">
                <StructuredData data={generateBlogPostSchema({
                  title: post.title,
                  excerpt: post.excerpt,
                  date: post.date,
                  content: post.content || []
                }, language)} />
                <div className="post-header">
                  <span className="post-date">{post.date}</span>
                  <span className="post-category">
                    {post.category === 'Competition' 
                      ? t('blog.categories.competition')
                      : post.category === 'Development'
                      ? t('blog.categories.development')
                      : post.category}
                  </span>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                {post.content && (
                  <div className="post-content">
                    {post.content.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                )}
                <SocialShare 
                  url={postUrl}
                  title={post.title}
                  description={post.excerpt}
                />
              </article>
            )
          })}
        </section>
      </div>
    </div>
  )
}

