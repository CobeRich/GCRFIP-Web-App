'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function DocumentsPreview() {
  const preserveHomeContext = () => {
    if (typeof window === 'undefined' || window.location.pathname !== '/') {
      return
    }

    if (window.location.hash !== '#documents-preview') {
      window.history.replaceState(window.history.state, '', '/#documents-preview')
    }
  }

  const documents = [
    {
      title: 'Executive Portfolio',
      description: 'High-level overview of GCRFIP vision and strategy',
      link: '/programme/executive-portfolio',
      viewer: '/resources/viewer/executive-portfolio',
      cover: '/images/document_portfolio.png',
    },
    {
      title: 'Summary Report',
      description: 'Short summary of programme structure, implementation approach and outcomes',
      link: '/programme/summary-report',
      viewer: '/resources/viewer/',
      cover: '/images/document_prospectus.png',
    },
    // {
    //   title: 'Programme Prospectus',
    //   description: 'Detailed programme structure and implementation approach',
    //   link: '/programme/prospectus',
    //   viewer: '/resources/viewer/prospectus',
    //   cover: '/images/document_prospectus.png', 
    // },
    {
      title: 'Technical Blueprint',
      description: 'Specifications for Flood Intelligence Platform',
      link: '/programme/blueprint',
      viewer: '/resources/viewer/blueprint',
      cover: '/images/document_blueprint.png',
    },
    {
      title: 'National Roadmap',
      description: 'Implementation timeline and milestones',
      link: '/programme/national-roadmap',
      viewer: '/resources/viewer/national-roadmap',
      cover: '/images/document_roadmap.png',
    },
  ]

  return (
    <section id="documents-preview" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-4 text-gcrfip-navy text-center">Key Documents</h2> 
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Review strategic documents and read them online before downloading.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {documents.map((doc) => (
            <div key={doc.title} className="rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={doc.link} className="block" onClick={preserveHomeContext}>
                <div className="relative h-48">
                  <Image
                    src={doc.cover}
                    alt={`${doc.title} cover`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  {/* <div className="absolute left-4 bottom-3 text-white font-semibold text-sm tracking-wide">Document Cover</div> */}
                </div>
              </Link>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{doc.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{doc.description}</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <Link href={doc.link} className="text-gcrfip-green hover:text-gcrfip-navy" onClick={preserveHomeContext}>View Brief</Link>
                  <Link href={doc.viewer} className="text-gcrfip-green hover:text-gcrfip-navy" onClick={preserveHomeContext}>Read Online</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/resources/downloads" className="cta-button" onClick={preserveHomeContext}>
            Open Document Library
          </Link>
        </div>
      </div>
    </section>
  )
}
