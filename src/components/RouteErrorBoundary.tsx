import { Component, type ReactNode } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './ErrorBoundary.css'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

/**
 * Error boundary specifically for lazy-loaded routes
 * Provides more granular error handling for individual pages
 */
class RouteErrorBoundaryClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Route error caught by boundary:', error, errorInfo)
    // You can log to an error reporting service here (e.g., Sentry)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }
      return <RouteErrorFallback error={this.state.error} />
    }

    return this.props.children
  }
}

function RouteErrorFallback({ error }: { error: Error | null }) {
  const { t } = useLanguage()
  
  return (
    <div className="error-boundary">
      <div className="error-content">
        <h1>⚠️ {t('error.pageLoadFailed') || 'Page failed to load'}</h1>
        <p>{t('error.pageLoadMessage') || 'We\'re sorry, but this page couldn\'t be loaded. Please try refreshing the page.'}</p>
        {error && (
          <details className="error-details">
            <summary>{t('error.details') || 'Error details'}</summary>
            <pre>{error.message}</pre>
          </details>
        )}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
          <button 
            onClick={() => window.location.reload()}
            className="error-reload-btn"
          >
            {t('error.reload') || 'Reload Page'}
          </button>
          <button 
            onClick={() => window.location.href = '/'}
            className="error-reload-btn"
            style={{ background: 'transparent', border: '1px solid currentColor' }}
          >
            {t('error.goHome') || 'Go Home'}
          </button>
        </div>
      </div>
    </div>
  )
}

// Wrapper component to use hooks
export default function RouteErrorBoundary({ children, fallback }: Props) {
  return <RouteErrorBoundaryClass fallback={fallback}>{children}</RouteErrorBoundaryClass>
}

