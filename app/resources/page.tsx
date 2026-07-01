'use client'

import Link from 'next/link'

const resources = [
  {
    category: 'Documents',
    items: [
      { title: 'Executive Portfolio', description: 'High-level GCRFIP overview' },
      { title: 'Programme Prospectus', description: 'Detailed programme structure' },
      { title: 'Founder Roadmap', description: 'Implementation roadmap' },
      { title: 'Blueprint Summary', description: 'Technical platform blueprint' },
    ],
  },
  {
    category: 'Data & Reports',
    items: [
      { title: 'Flood Risk Assessment', description: 'National flood risk analysis' },
      { title: 'Climate Projections', description: 'Future climate scenarios' },
      { title: 'Baseline Report', description: 'Current state of flood resilience' },
      { title: 'Case Studies', description: 'Implementation case studies' },
    ],
  },
  {
    category: 'Technical Resources',
    items: [
      { title: 'API Documentation', description: 'Platform API reference' },
      { title: 'Data Standards', description: 'Flood data standards' },
      { title: 'Technical Guides', description: 'System implementation guides' },
      { title: 'Training Materials', description: 'Capacity building resources' },
    ],
  },
]

export default function Resources() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Resources</h1>
      
      <section className="mb-12">
        <p className="text-lg text-gray-700 mb-8">
          Access key documents, data, technical resources, and tools to support flood resilience efforts.
        </p>

        {resources.map((resourceGroup, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">{resourceGroup.category}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resourceGroup.items.map((item, itemIndex) => (
                <div key={itemIndex} className="card p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <Link href="#" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
                    Download →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
