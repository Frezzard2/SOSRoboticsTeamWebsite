// Next Competitions Data - Upcoming competitions and events

export interface NextCompetition {
  competition: {
    en: string
    hu: string
    de: string
  }
  dateFrom: string // ISO date string (YYYY-MM-DD) - start date
  dateTo?: string // ISO date string (YYYY-MM-DD) - end date (optional, if not provided, only dateFrom is used)
  location: {
    en: string
    hu: string
    de: string
  }
  description?: {
    en: string
    hu: string
    de: string
  }
  link?: string
  category?: {
    en: string
    hu: string
    de: string
  }
  // Legacy support: if date is provided, it's used as dateFrom
  date?: string // Deprecated: use dateFrom instead
}

export const nextCompetitionsData: NextCompetition[] = [
    {
      competition: {
        en: 'RoboCup World Championships 2026',
        hu: 'RoboCup World Championships 2026',
        de: 'RoboCup World Championships 2026'
      },
      dateFrom: '2026-06-30',
      dateTo: '2026-07-07',
      location: {
        en: 'Incheon, South Korea',
        hu: 'Incheon, Dél-Korea',
        de: 'Incheon, Südkorea'
      },
      description: {
        en: 'We are preparing for the RoboCup World Championships 2026. It is the biggest robotics competition of the year. We are thrilled to be part of it. ',
        hu: 'Felkészülünk a RoboCup World Championships 2026-ra. Ez az év legnagyobb robotika versenye. Nagyon izgatottak vagyunk, hogy részt vehetünk benne!',
        de: 'Wir bereiten uns auf die RoboCup World Championships 2026 vor. Dies ist der größte Robotikwettbewerb der Welt. Wir sind sehr aufgeregt, dass wir dabei sein können!'
      },
      link: 'https://2026.robocup.org',
      category: {
        en: 'RoboCup World Championships - Rapidly Manufactured Robot Challenge',
        hu: 'RoboCup World Championships - Gyorsépítésű Robot Kihívás',
        de: 'RoboCup World Championships - Rapidly Manufactured Robot Challenge'
      }
    }
]

export function getNextCompetitions(_language: 'en' | 'hu' | 'de' = 'en'): NextCompetition[] {
  const today = new Date()
  today.setHours(0, 0, 0, 0) // Reset time to midnight for accurate date comparison
  
  const filtered = nextCompetitionsData.filter(comp => {
    // Support both date and dateFrom (backward compatibility)
    const startDate = comp.dateFrom || comp.date
    if (!startDate) return false
    
    const compStartDate = new Date(startDate)
    compStartDate.setHours(0, 0, 0, 0)
    
    // Check if competition ends in the future (if dateTo is provided) or starts in the future
    if (comp.dateTo) {
      const compEndDate = new Date(comp.dateTo)
      compEndDate.setHours(0, 0, 0, 0)
      return compEndDate >= today // Show if competition hasn't ended yet
    } else {
      return compStartDate >= today // Show if competition hasn't started yet
    }
  })
  
  // Debug: Log if competitions are being filtered (only in dev mode)
  if (import.meta.env.DEV && filtered.length !== nextCompetitionsData.length) {
    console.log(`Filtered ${nextCompetitionsData.length - filtered.length} past competition(s) from ${nextCompetitionsData.length} total`)
  }
  
  // Sort by start date (dateFrom or date)
  return filtered.sort((a, b) => {
    const dateA = new Date(a.dateFrom || a.date || '').getTime()
    const dateB = new Date(b.dateFrom || b.date || '').getTime()
    return dateA - dateB
  })
}

