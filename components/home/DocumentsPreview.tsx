'use client'

import Link from 'next/link'

export default function DocumentsPreview() {
  const documents = [
    {
      title: 'Executive Portfolio',
      description: 'High-level overview of GCRFIP vision and strategy',
      icon: '📋',
      link: '/programme/executive-portfolio',
    },
    {
      title: 'Programme Prospectus',
      description: 'Detailed programme structure and implementation approach',
      icon: '📘',
      link: '/programme/prospectus',
    },
    {
      title: 'Technical Blueprint',
      description: 'Specifications for Flood Intelligence Platform',
      icon: '🏗️',
      link: '/programme/blueprint',
    },
    {
      title: 'National Roadmap',
      description: 'Implementation timeline and milestones',
      icon: '🗺️',
      link: '/programme/national-roadmap',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-4 text-gcrfip-navy text-center">Key Documents</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Access essential GCRFIP documents and resources to understand the programme in detail.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {documents.map((doc, index) => (
            <Link key={index} href={doc.link} className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <p className="text-4xl mb-3">{doc.icon}</p>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{doc.title}</h3>
              <p className="text-gray-700 text-sm">{doc.description}</p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/resources/downloads" className="cta-button">
            View All Resources
          </Link>
        </div>
      </div>
    </section>
  )
}
