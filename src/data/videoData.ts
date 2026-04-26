/**
 * YouTube videos to display on the homepage
 * Videos will be randomly selected on each page load
 * 
 * To add a new video:
 * 1. Get the YouTube video ID from the URL (e.g., from https://www.youtube.com/watch?v=VIDEO_ID)
 * 2. Add it to the videos array below
 */

export interface VideoConfig {
  id: string // YouTube video ID
  title?: string // Optional title for reference
}

export const videos: VideoConfig[] = [
  {
    id: '2KF54qaN-Cw',
    title: 'RoboCup GermanOpen 2025 | Official Aftermovie'
  },
  {
    id: 'L03uZ5kKp4E',
    title: 'SOSRobotics Bemutató video'
  },
  {
    id: 'kmes06l4l9k',
    title: 'RoboCup Major Bemutató video'
  },
  {
    id: 'bVsRN4xhkoY',
    title: 'RoboCuo Rescue League Bemutató video'
  }

]

/**
 * Get a random video from the videos array
 */
export function getRandomVideo(): VideoConfig {
  return videos[Math.floor(Math.random() * videos.length)]
}

/**
 * Get a video by index (useful for cycling through videos)
 */
export function getVideoByIndex(index: number): VideoConfig {
  return videos[index % videos.length]
}

/**
 * Get video URL for embedding
 */
export function getVideoEmbedUrl(videoId: string, options?: {
  autoplay?: boolean
  controls?: boolean
  mute?: boolean
  loop?: boolean
}): string {
  const params = new URLSearchParams()
  
  if (options?.autoplay) params.append('autoplay', '1')
  if (options?.controls !== undefined) params.append('controls', options.controls ? '1' : '0')
  if (options?.mute) params.append('mute', '1')
  if (options?.loop) params.append('loop', '1')
  
  // Add playlist parameter for looping (required for loop to work)
  if (options?.loop) {
    params.append('playlist', videoId)
  }
  
  params.append('si', 'default') // YouTube requires this parameter
  
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
}

