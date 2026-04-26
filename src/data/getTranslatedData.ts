// Helper functions to get translated data based on current language

import { getRobots, getMembers, type Robot, type TeamMember } from './teamData'
import { getBlogPosts, type BlogPost } from './blogData'
import { getSponsors, type Sponsor } from './sponsorsData'
import { getGalleryImages, type GalleryImage } from './galleryData'

type Language = 'en' | 'hu' | 'de'

export function getTranslatedRobots(language: Language): Robot[] {
  // Robots now have translations directly in teamData.ts
  return getRobots(language)
}

export function getTranslatedMembers(language: Language): TeamMember[] {
  // Team members now have translations directly in teamData.ts
  return getMembers(language)
}

export function getTranslatedBlogPosts(language: Language): BlogPost[] {
  // Blog posts now have translations directly in blogData.ts
  return getBlogPosts(language)
}

export function getTranslatedSponsors(language: Language): Sponsor[] {
  // Sponsors now have translations directly in sponsorsData.ts
  return getSponsors(language)
}

export function getTranslatedGalleryImages(language: Language): GalleryImage[] {
  // Gallery images now have translations directly in galleryData.ts
  return getGalleryImages(language)
}

