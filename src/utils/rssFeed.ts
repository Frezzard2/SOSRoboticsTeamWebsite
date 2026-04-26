// RSS Feed Generator
import { getTranslatedBlogPosts } from '../data/getTranslatedData'
import { siteConfig } from './siteConfig'

export function generateRSSFeed(language: 'en' | 'hu' | 'de' = 'en'): string {
  const posts = getTranslatedBlogPosts(language)
  const siteUrl = siteConfig.url
  const currentDate = new Date().toUTCString()

  const rssItems = posts.map(post => {
    const postUrl = `${siteUrl}/blog#${post.date}`
    const description = post.excerpt.replace(/"/g, '&quot;')
    const content = (post.content || []).join('\n\n').replace(/"/g, '&quot;')
    
    return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="false">${postUrl}</guid>
      <description><![CDATA[${description}]]></description>
      <content:encoded><![CDATA[${content}]]></content:encoded>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category><![CDATA[${post.category}]]></category>
    </item>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>SOS Robotics Team Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Stories from our journey in RoboCup Rescue League</description>
    <language>${language}</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <pubDate>${currentDate}</pubDate>
    <ttl>60</ttl>
${rssItems}
  </channel>
</rss>`
}

