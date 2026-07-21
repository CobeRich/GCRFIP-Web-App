'use client'

import Link from 'next/link'
import ReadingProgress from '../../../components/layout/ReadingProgress'
import { downloadCategories, resourceDocuments } from '../document-library'

export default function DownloadsPage() {
  return (
    <div className="container-custom section-padding">
      <ReadingProgress />

      <section className="section-block">
        <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-3">Downloads</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gcrfip-navy mb-4">Strategic Files and Technical Assets</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Access key GCRFIP resources for planning, implementation, and resilience delivery.
        </p>
      </section>

      {downloadCategories.map((category) => (
        <section key={category.category} className="section-block">
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gcrfip-navy mb-2">{category.category}</h2>
            <p className="text-gray-700">{category.lead}</p>
          </div>

          <div className="space-y-3">
            {category.files.map((file) => (
              <div key={file.name} className="card p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ui-transition hover:-translate-y-0.5">
                <div>
                  <p className="font-semibold text-gcrfip-navy">{file.name}</p>
                  <p className="text-sm text-gray-600">{file.format} | {file.size}</p>
                </div>

                <div className="flex items-center gap-3">
                  {file.slug ? (
                    <Link href={`/resources/viewer/${file.slug}`} className="chip chip-muted text-sm">
                      Read Online
                    </Link>
                  ) : (
                    <span className="meta-chip bg-gray-100 text-gray-500">Viewer N/A</span>
                  )}

                  {file.slug ? (
                    <a href={resourceDocuments[file.slug].file} download className="cta-button text-sm">
                      Download
                    </a>
                  ) : (
                    <span className="meta-chip bg-gray-100 text-gray-500">Download N/A</span>
                  )}
                </div>
              </div>
            ))} 
          </div>
        </section>
      ))}

      <section className="section-block rounded-2xl border border-gray-200 bg-white p-6 md:p-7">
        <h2 className="text-2xl font-bold text-gcrfip-navy mb-3">Need a Curated Pack?</h2>
        <p className="text-gray-700 mb-5">
          Request tailored document bundles for policy teams, technical departments, and partner institutions.
        </p>
        <Link href="/contact/general-enquiries" className="cta-button-secondary">
          Request Curated Pack
        </Link>
      </section>
    </div>
  )
}
