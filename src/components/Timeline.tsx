import { useLanguage } from '../contexts/LanguageContext'
import './Timeline.css'

interface TimelineEvent {
  date: string
  title: string
  description: string
  type?: 'milestone' | 'competition' | 'achievement'
}

interface TimelineProps {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  const { t } = useLanguage()

  return (
    <section className="timeline-section">
      <div className="container">
        <h2 className="timeline-title">{t('timeline.title') || 'Our Journey'}</h2>
        <div className="timeline-container">
          {events.map((event, index) => (
            <div key={index} className="timeline-item fade-in">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < events.length - 1 && <div className="marker-line"></div>}
              </div>
              <div className="timeline-content">
                <span className="timeline-date">{event.date}</span>
                <h3 className="timeline-event-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
                {event.type && (
                  <span className={`timeline-badge ${event.type}`}>
                    {event.type === 'milestone' && (t('timeline.milestone') || 'Milestone')}
                    {event.type === 'competition' && (t('timeline.competition') || 'Competition')}
                    {event.type === 'achievement' && (t('timeline.achievement') || 'Achievement')}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

