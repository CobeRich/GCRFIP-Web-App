'use client'

import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 320)
    }

    window.addEventListener('scroll', toggleVisibility)
    toggleVisibility()

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-gcrfip-green text-white px-4 py-3 shadow-lg hover:bg-gcrfip-navy transition-colors"
      aria-label="Back to top"
    >
      Top
    </button>
  )
}
