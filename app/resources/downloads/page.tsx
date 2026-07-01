'use client'

import Link from 'next/link'

export default function Downloads() {
  const downloadCategories = [
    {
      category: 'Strategic Documents',
      files: [
          { name: 'Executive Portfolio', format: 'PDF', size: '2.4 MB', viewer: '/resources/viewer/executive-portfolio' },
          { name: 'Programme Prospectus', format: 'PDF', size: '4.1 MB', viewer: '/resources/viewer/prospectus' },
          { name: 'Technical Blueprint', format: 'PDF', size: '3.8 MB', viewer: '/resources/viewer/blueprint' },
      ],
    },
    {
      category: 'Data & Analysis',
      files: [
          { name: 'Flood Risk Assessment', format: 'PDF', size: '5.2 MB', viewer: '/resources/viewer/national-roadmap' },
          { name: 'Climate Projections', format: 'Excel', size: '1.9 MB', viewer: '' },
          { name: 'Baseline Report', format: 'PDF', size: '3.5 MB', viewer: '/resources/viewer/national-roadmap' },
      ],
    },
    {
      category: 'Training Materials',
      files: [
          { name: 'Platform User Guide', format: 'PDF', size: '2.1 MB', viewer: '/resources/viewer/blueprint' },
          { name: 'Flood Preparedness Guide', format: 'PDF', size: '1.8 MB', viewer: '/resources/viewer/prospectus' },
          { name: 'Training Slides', format: 'PPT', size: '8.3 MB', viewer: '' },
      ],
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Downloads</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          Download all key GCRFIP resources, documents, data, and training materials.
        </p>

        {downloadCategories.map((category, index) => (
          <div key={index} className="section-block">
            <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">{category.category}</h2>
            <div className="space-y-3">
              {category.files.map((file, fileIndex) => (
                <div key={fileIndex} className="card p-4 flex justify-between items-center ui-transition hover:-translate-y-0.5">
                  <div>
                    <p className="font-semibold text-gcrfip-navy">{file.name}</p>
                    <p className="text-sm text-gray-600">{file.format} • {file.size}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {file.viewer ? (
                      <Link href={file.viewer} className="chip chip-muted text-sm">
                        Read Online
                      </Link>
                    ) : (
                      <span className="meta-chip bg-gray-100 text-gray-500">Viewer N/A</span>
                    )}
                    <a href="/docs/gcrfip-reference.pdf" className="cta-button text-sm">
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
