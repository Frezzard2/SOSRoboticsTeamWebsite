import './LoadingSkeleton.css'

interface SkeletonProps {
  type?: 'text' | 'image' | 'card' | 'avatar'
  width?: string
  height?: string
  className?: string
}

export function LoadingSkeleton({ 
  type = 'text', 
  width, 
  height, 
  className = '' 
}: SkeletonProps) {
  const style: React.CSSProperties = {}
  if (width) style.width = width
  if (height) style.height = height

  return (
    <div 
      className={`skeleton skeleton-${type} ${className}`}
      style={style}
      aria-hidden="true"
    >
      <div className="skeleton-shimmer"></div>
    </div>
  )
}

export function RobotCardSkeleton() {
  return (
    <div className="skeleton-card">
      <LoadingSkeleton type="image" height="200px" />
      <div className="skeleton-content">
        <LoadingSkeleton type="text" width="60%" height="24px" />
        <LoadingSkeleton type="text" width="100%" height="16px" />
        <LoadingSkeleton type="text" width="80%" height="16px" />
      </div>
    </div>
  )
}

export function TeamCardSkeleton() {
  return (
    <div className="skeleton-card">
      <LoadingSkeleton type="avatar" width="120px" height="120px" className="skeleton-avatar" />
      <div className="skeleton-content">
        <LoadingSkeleton type="text" width="70%" height="24px" />
        <LoadingSkeleton type="text" width="50%" height="18px" />
        <LoadingSkeleton type="text" width="100%" height="16px" />
        <LoadingSkeleton type="text" width="90%" height="16px" />
      </div>
    </div>
  )
}

