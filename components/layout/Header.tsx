'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Programme', href: '/programme' },
    { label: 'Research', href: '/research' },
    { label: 'Resources', href: '/resources' },
    { label: 'News', href: '/news' },
    { label: 'Get Involved', href: '/get-involved' },
    { label: 'Contact', href: '/contact' },
  ]

  const quickLinks = [
    ...navItems,
    { label: 'Executive Portfolio', href: '/programme/executive-portfolio' },
    { label: 'Blueprint', href: '/programme/blueprint' },
    { label: 'Prospectus', href: '/programme/prospectus' },
    { label: 'National Roadmap', href: '/programme/national-roadmap' },
    { label: 'Downloads', href: '/resources/downloads' },
    { label: 'Maps', href: '/resources/maps' },
  ]

  const filteredLinks = query
    ? quickLinks.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
    : []

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gcrfip-green text-white p-2 rounded font-bold text-lg">
              GCRFIP
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = `/search?q=${encodeURIComponent(query)}`
                  }
                }}
                placeholder="Search"
                className="w-44 lg:w-56 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gcrfip-green"
                aria-label="Global search"
              />

              {filteredLinks.length > 0 && (
                <div className="absolute top-11 left-0 right-0 rounded-lg border border-gray-200 bg-white shadow-lg p-2 z-50">
                  {filteredLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-sm rounded hover:bg-gray-100 text-gray-700"
                      onClick={() => setQuery('')}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href={`/search?q=${encodeURIComponent(query)}`}
                    className="block mt-1 px-3 py-2 text-sm font-semibold text-gcrfip-green hover:bg-gray-100 rounded"
                  >
                    View all results
                  </Link>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gcrfip-green transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-gcrfip-green"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
