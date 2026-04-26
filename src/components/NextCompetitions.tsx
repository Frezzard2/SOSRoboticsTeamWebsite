import { useLanguage } from '../contexts/LanguageContext'
import { getNextCompetitions } from '../data/nextCompetitionsData'
import './NextCompetitions.css'

export default function NextCompetitions() {
  const { t, language } = useLanguage()
  const competitions = getNextCompetitions(language)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === 'hu' ? 'hu-HU' : language === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatDateRange = (competition: { dateFrom?: string; dateTo?: string; date?: string }) => {
    const startDate = competition.dateFrom || competition.date
    const endDate = competition.dateTo
    
    if (!startDate) return ''
    
    if (endDate && startDate !== endDate) {
      // Date range
      const start = formatDate(startDate)
      const end = formatDate(endDate)
      return `${start} - ${end}`
    } else {
      // Single date
      return formatDate(startDate)
    }
  }

  return (
    <section className="next-competitions-section">
      <div className="container">
        <h2 className="section-title">{t('nextCompetitions.title') || 'Next Competitions'}</h2>
        
        {competitions.length === 0 ? (
          <div className="no-competitions">
            <div className="no-competitions-icon">🏖️</div>
            <p className="no-competitions-text">
              {t('nextCompetitions.takingBreak') || 'We are taking a break. Check back soon for upcoming competitions!'}
            </p>
          </div>
        ) : (
          <>
            <p className="section-subtitle">
              {t('nextCompetitions.subtitle') || 'Upcoming competitions we are preparing for'}
            </p>
            
            <div className="next-competitions-grid">
              {competitions.map((competition, index) => (
                <div key={index} className="next-competition-card fade-in">
                  <div className="competition-date">
                    <span className="date-icon">📅</span>
                    <span className="date-text">{formatDateRange(competition)}</span>
                  </div>
                  
                  <h3 className="competition-name">
                    {competition.competition[language] || competition.competition.en || 'Competition'}
                  </h3>
                  
                  <div className="competition-location">
                    <span className="location-icon">📍</span>
                    <span className="location-text">
                      {competition.location[language] || competition.location.en || 'Location TBD'}
                    </span>
                  </div>
                  
                  {competition.category && (
                    <div className="competition-category">
                      {competition.category[language] || competition.category.en || ''}
                    </div>
                  )}
                  
                  {competition.description && (
                    <p className="competition-description">
                      {competition.description[language] || competition.description.en || ''}
                    </p>
                  )}
                  
                  {competition.link && (
                    <a 
                      href={competition.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="competition-link"
                    >
                      {t('nextCompetitions.learnMore') || 'Learn More'} →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

