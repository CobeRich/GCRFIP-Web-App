'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(Math.min(100, Math.max(0, nextProgress)))
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="sticky top-20 z-40 h-1 w-full bg-gray-100/80 backdrop-blur-sm rounded-full overflow-hidden mb-6">
      <div
        className="h-full bg-gcrfip-green transition-[width] duration-300 ease-out"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </div>
  )
}
