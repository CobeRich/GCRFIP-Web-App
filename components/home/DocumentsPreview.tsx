'use client'

import Link from 'next/link'

const documents = [
  {
    title: 'Executive Portfolio',
    description: 'High-level overview of GCRFIP vision and strategy.',
    icon: '📋',
  },
  {
    title: 'Programme Prospectus',
    description: 'Detailed description of programme structure and components.',
    icon: '📖',
  },
  {
    title: 'Founder Roadmap',
    description: 'Implementation roadmap for programme establishment.',
    icon: '🗺️',
  },
  {
    title: 'Blueprint Summary',
    description: 'Technical blueprint for the National Flood Intelligence Platform.',
    icon: '🔧',
  },
]

export default function DocumentsPreview() {
  return (
    <section className="section-padding bg-gcrfip-light-grey">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-4 text-gcrfip-navy">Key Documents</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Download essential GCRFIP documents to understand our vision, strategy, and implementation approach.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {documents.map((doc, index) => (
            <div key={index} className="card p-6">
              <div className="text-4xl mb-3">{doc.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-gcrfip-navy">{doc.title}</h3>
              <p className="text-gray-600 text-sm">{doc.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/resources" className="cta-button">
            View All Resources
          </Link>
        </div>
      </div>
    </section>
  )
}
