import { useState } from 'react'
import './VideoEmbed.css'

interface VideoEmbedProps {
  url: string
  title: string
  thumbnail?: string
}

export default function VideoEmbed({ url, title, thumbnail }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Extract video ID from YouTube or Vimeo URL
  const getVideoId = (url: string): string | null => {
    // YouTube
    const youtubeMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)
    if (youtubeMatch && youtubeMatch[1]) return youtubeMatch[1]
    
    // Vimeo
    const vimeoMatch = url.match(/vimeo\.com\/(?:.*\/)?(\d+)/)
    if (vimeoMatch && vimeoMatch[1]) return vimeoMatch[1]
    
    return null
  }

  const videoId = getVideoId(url)
  const isYouTube = url.includes('youtube.com') || url.includes('youtu.be')
  const isVimeo = url.includes('vimeo.com')

  if (!videoId) {
    return <div className="video-error">Invalid video URL</div>
  }

  if (isPlaying) {
    return (
      <div className="video-embed">
        {isYouTube ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-iframe"
          />
        ) : isVimeo ? (
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="video-iframe"
          />
        ) : null}
      </div>
    )
  }

  return (
    <div className="video-embed">
      <div className="video-thumbnail" onClick={() => setIsPlaying(true)}>
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="thumbnail-image" loading="lazy" width="640" height="360" />
        ) : (
          <div className="thumbnail-placeholder">
            {isYouTube && (
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={title}
                className="thumbnail-image"
                loading="lazy"
                width="640"
                height="360"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            )}
          </div>
        )}
        <button className="play-button" aria-label={`Play ${title}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

