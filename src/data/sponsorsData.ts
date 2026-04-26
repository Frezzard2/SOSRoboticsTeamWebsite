// Sponsors data - Easy to update with your actual sponsors!
// All translations are included directly in this file - just modify this one file!

type Language = 'en' | 'hu' | 'de'

interface TranslatedText {
  en: string
  hu: string
  de: string
}

export interface SponsorData {
  name: TranslatedText
  tier?: 'Platinum' | 'Gold' | 'Silver' | 'Bronze'
  description?: TranslatedText
  logo?: string // Path to logo (e.g., '/sponsors/sponsor1.png')
  website?: string // Optional website URL
}

// Internal data structure with translations
const sponsorsData: SponsorData[] = [
  {
    name: {
      en: 'Culture and Innovation Ministry',
      hu: 'Kultúrális és Innovációs Minisztérium',
      de: 'Kultur- und Innovationsministerium'
    }, 
    tier: 'Platinum',
    description: {
      en: 'The Ministry of Culture and Innovation is our main sponsor supporting our development. Without their support, we would not be able to compete in the RoboCup Rescue League.',
      hu: 'A Kormány Kultúrális és Innovációs Minisztériuma fő támogatónk, aki támogatja fejlesztésünket. A támogatásuk nélkül nem tudnánk versenyezni a RoboCup Rescue League-ben.',
      de: 'Das Ministerium für Kultur und Innovation ist unser Hauptsponsor, der unsere Entwicklung unterstützt. Ohne seine Unterstützung wären wir nicht in der Lage, in der RoboCup Rescue League zu konkurrieren.'
    },
    logo: '/gallery/KIM_logo_bw.webp',
    website: 'https://kormany.hu/kormanyzat/kulturalis-es-innovacios-miniszterium'
  },
  {
    name: {
      en: 'Michelin',
      hu: 'Michelin',
      de: 'Michelin'
    }, 
    tier: 'Gold',
    description: {
      en: 'Michelin is a leading tire manufacturer. They are a global partner of the RoboCup Rescue League.',
      hu: 'Michelin egy vezető gumiabroncsgyártó. Ők a RoboCup Rescue League globális partneri.',
      de: 'Michelin ist ein führender Reifenhersteller. Sie sind ein globales Partner der RoboCup Rescue League.'
    },
    logo: '/gallery/65ffd917763e2-MICHELIN.webp',
    website: 'https://www.michelin.com/'
  },
  {
    name: {
      en: 'MasterGood',
      hu: 'MasterGood',
      de: 'MasterGood'
    }, 
    tier: 'Gold',
    description: {
      en: 'MasterGood is a leading tyre manufacturer. They are a global partner of the RoboCup Rescue League.',
      hu: 'MasterGood egy vezető gumiabroncsgyártó. Ők a RoboCup Rescue League globális partneri.',
      de: 'MasterGood ist ein führender Reifenhersteller. Sie sind ein globales Partner der RoboCup Rescue League.'
    },
    logo: '/gallery/mastergood_logo_nagy_-2-1.webp',
    website: 'https://www.mastergood.hu/'
  }
]

// Export interface for components (simplified, language-specific)
export interface Sponsor {
  name: string
  tier?: 'Platinum' | 'Gold' | 'Silver' | 'Bronze'
  description?: string
  logo?: string
  website?: string
}

// Function to get sponsors for a specific language
export function getSponsors(language: Language = 'en'): Sponsor[] {
  return sponsorsData.map(sponsor => ({
    name: sponsor.name[language],
    tier: sponsor.tier,
    description: sponsor.description?.[language],
    logo: sponsor.logo,
    website: sponsor.website
  }))
}

// Export raw data for advanced use cases
export { sponsorsData }

