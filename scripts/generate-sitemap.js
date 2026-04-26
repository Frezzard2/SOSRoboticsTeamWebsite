// Generate dynamic sitemap.xml for SOS Robotics Team Website
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')

const siteUrl = 'https://sosrobotics.team'
const currentDate = new Date().toISOString().split('T')[0]

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/robots', priority: '0.9', changefreq: 'monthly' },
  { path: '/team', priority: '0.8', changefreq: 'monthly' },
  { path: '/gallery', priority: '0.7', changefreq: 'weekly' },
  { path: '/sponsors', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/faq', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.5', changefreq: 'yearly' }
]

const languages = ['en', 'hu', 'de']

function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`

  routes.forEach(route => {
    sitemap += `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
`
    // Add hreflang alternatives
    languages.forEach(lang => {
      sitemap += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${siteUrl}${route.path}" />\n`
    })
    sitemap += `    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${route.path}" />\n`
    sitemap += `  </url>\n`
  })

  sitemap += `</urlset>`

  const sitemapPath = join(rootDir, 'public', 'sitemap.xml')
  writeFileSync(sitemapPath, sitemap, 'utf-8')
  console.log(`✅ Sitemap generated successfully at ${sitemapPath}`)
}

generateSitemap()

