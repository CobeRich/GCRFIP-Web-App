'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const labelOverrides: Record<string, string> = {
  'get-involved': 'Get Involved',
  'advisory-board': 'Advisory Board',
  'strategic-partners': 'Strategic Partners',
  'general-enquiries': 'General Enquiries',
  'interactive-map': 'Interactive Map',
  'office-information': 'Office Information',
  'social-media': 'Social Media',
  'become-partner': 'Become Partner',
  'founding-consortium': 'Founding Consortium',
  'research-collaboration': 'Research Collaboration',
  'sponsorship-funding': 'Sponsorship & Funding',
  'press-releases': 'Press Releases',
  'executive-portfolio': 'Executive Portfolio',
  'implementation-strategy': 'Implementation Strategy',
  'national-roadmap': 'National Roadmap',
  'digital-twin': 'Digital Twin',
  'flood-intelligence': 'Flood Intelligence',
  'innovation-lab': 'Innovation Lab',
  'open-data': 'Open Data',
  'research-projects': 'Research Projects',
  'research-themes': 'Research Themes',
  'student-opportunities': 'Student Opportunities',
  'policy-briefs': 'Policy Briefs',
  'training-materials': 'Training Materials',
}

function toTitleCase(segment: string) {
  if (labelOverrides[segment]) {
    return labelOverrides[segment]
  }

  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default function Breadcrumbs() {
  const pathname = usePathname()

  if (!pathname || pathname === '/') {
    return null
  }

  const segments = pathname.split('/').filter(Boolean)

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="container-custom py-3 text-sm text-gray-600" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-gcrfip-green transition-colors">
          Home
        </Link>

        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join('/')}`
          const isLast = index === segments.length - 1

          return (
            <span key={href}>
              <span className="mx-2 text-gray-400">&gt;</span>
              {isLast ? (
                <span className="font-medium text-gcrfip-navy">{toTitleCase(segment)}</span>
              ) : (
                <Link href={href} className="hover:text-gcrfip-green transition-colors">
                  {toTitleCase(segment)}
                </Link>
              )}
            </span>
          )
        })}
      </div>
    </div>
  )
}
