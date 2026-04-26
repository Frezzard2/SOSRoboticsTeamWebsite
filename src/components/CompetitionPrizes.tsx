import { useLanguage } from '../contexts/LanguageContext'
import { competitionPrizes } from '../data/competitionPrizesData'
import './CompetitionPrizes.css'

export default function CompetitionPrizes() {
  const { t, language } = useLanguage()

  if (competitionPrizes.length === 0) {
    return null
  }

  const getPlaceNumber = (place: number) => {
    if (language === 'en') {
      // English: 1st, 2nd, 3rd, etc.
      const j = place % 10
      const k = place % 100
      if (j === 1 && k !== 11) return `${place}st`
      if (j === 2 && k !== 12) return `${place}nd`
      if (j === 3 && k !== 13) return `${place}rd`
      return `${place}th`
    } else {
      // German and Hungarian: 1., 2., 3., etc.
      return `${place}.`
    }
  }

  const getPlaceLabel = () => {
    return t('competitions.place') || 'Place'
  }

  const getMedalIcon = (place: number) => {
    if (place === 1) return '🥇'
    if (place === 2) return '🥈'
    if (place === 3) return '🥉'
    return '🏆'
  }

  return (
    <section className="competition-prizes-section">
      <div className="container">
        <h2 className="section-title">{t('competitions.title') || 'Competition Results'}</h2>
        <p className="section-subtitle">{t('competitions.subtitle') || 'Our achievements in robotics competitions'}</p>
        
        <div className="competition-prizes-grid">
          {competitionPrizes.map((prize, index) => (
            <div key={index} className="competition-prize-card fade-in">
              <div className="prize-header">
                <div className="prize-medal">
                  {prize.icon || getMedalIcon(prize.place)}
                </div>
                <div className="prize-place">
                  <span className="place-number">{getPlaceNumber(prize.place)}</span>
                  <span className="place-label">{getPlaceLabel()}</span>
                </div>
              </div>
              
              {prize.image && (
                <div className="prize-image">
                  <img 
                    src={prize.image} 
                    alt={prize.competition[language]} 
                    loading="lazy"
                  />
                </div>
              )}
              
              <div className="prize-content">
                <h3 className="prize-competition">{prize.competition[language]}</h3>
                <div className="prize-meta">
                  <span className="prize-year">{prize.year}</span>
                  <span className="prize-location">{prize.location[language]}</span>
                </div>
                
                {prize.category && (
                  <p className="prize-category">{prize.category[language]}</p>
                )}
                
                {prize.description && (
                  <p className="prize-description">{prize.description[language]}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

