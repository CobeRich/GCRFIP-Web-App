'use client'

type VideoPlayerProps = {
  src: string
  poster: string
  title: string
  className?: string
}

export default function VideoPlayer({ src, poster, title, className }: VideoPlayerProps) {
  return (
    <video
      className={className || 'w-full rounded-xl bg-black aspect-video'}
      controls
      preload="metadata"
      playsInline
      poster={poster}
      aria-label={title}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}