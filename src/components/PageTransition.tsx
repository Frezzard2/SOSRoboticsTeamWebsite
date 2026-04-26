import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './PageTransition.css'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState<'entering' | 'entered'>('entered')

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('entering')
      // Small delay to allow exit animation
      const timer = setTimeout(() => {
        setDisplayLocation(location)
        setTransitionStage('entered')
      }, 150)

      return () => clearTimeout(timer)
    }
    return undefined
  }, [location, displayLocation])

  return (
    <div className={`page-transition page-transition-${transitionStage}`}>
      {children}
    </div>
  )
}

