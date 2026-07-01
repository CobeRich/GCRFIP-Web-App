'use client'

import Link from 'next/link'

const resources = [
  {
    category: 'Documents',
    items: [
      { title: 'Executive Portfolio', description: 'High-level GCRFIP overview', href: '/resources/downloads' },
      { title: 'Programme Prospectus', description: 'Detailed programme structure', href: '/resources/downloads' },
      { title: 'Founder Roadmap', description: 'Implementation roadmap', href: '/resources/downloads' },
      { title: 'Blueprint Summary', description: 'Technical platform blueprint', href: '/resources/downloads' },
    ],
  },
  {
    category: 'Data & Reports',
    items: [
      { title: 'Flood Risk Assessment', description: 'National flood risk analysis', href: '/resources/reports' },
      { title: 'Climate Projections', description: 'Future climate scenarios', href: '/resources/reports' },
      { title: 'Baseline Report', description: 'Current state of flood resilience', href: '/resources/reports' },
      { title: 'Case Studies', description: 'Implementation case studies', href: '/resources/reports' },
    ],
  },
  {
    category: 'Technical Resources',
    items: [
      { title: 'API Documentation', description: 'Platform API reference', href: '/resources/downloads' },
      { title: 'Data Standards', description: 'Flood data standards', href: '/resources/downloads' },
      { title: 'Technical Guides', description: 'System implementation guides', href: '/resources/downloads' },
      { title: 'Training Materials', description: 'Capacity building resources', href: '/resources/training-materials' },
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
                <Link key={itemIndex} href={item.href} className="card p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <span className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
                    View →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-16 pt-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Browse Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/resources/downloads" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Downloads</h3>
            <p className="text-gray-700">Download reports, guides, and documents</p>
          </Link>

          <Link href="/resources/reports" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Reports</h3>
            <p className="text-gray-700">Research reports and assessments</p>
          </Link>

          <Link href="/resources/training-materials" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Training Materials</h3>
            <p className="text-gray-700">Capacity building resources</p>
          </Link>

          <Link href="/resources/videos" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Videos</h3>
            <p className="text-gray-700">Educational videos and webinars</p>
          </Link>

          <Link href="/resources/infographics" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Infographics</h3>
            <p className="text-gray-700">Visual guides and infographics</p>
          </Link>

          <Link href="/resources/faqs" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">FAQs</h3>
            <p className="text-gray-700">Frequently asked questions</p>
          </Link>

          <Link href="/resources/maps" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Maps</h3>
            <p className="text-gray-700">Interactive maps and geographic data</p>
          </Link>

          <Link href="/resources/policy-briefs" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Policy Briefs</h3>
            <p className="text-gray-700">Policy analysis and recommendations</p>
          </Link>

          <Link href="/resources/media-kit" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Media Kit</h3>
            <p className="text-gray-700">Logos, photos, and brand resources</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
