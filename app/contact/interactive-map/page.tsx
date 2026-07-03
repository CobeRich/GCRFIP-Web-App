'use client'

import Link from 'next/link'
import ReadingProgress from '../../../components/layout/ReadingProgress'

export default function InteractiveMapPage() {
  return (
    <div className="container-custom section-padding">
      <ReadingProgress />

      <section className="section-block">
        <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-3">Interactive Map</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gcrfip-navy mb-4">Locate Offices and Access Points</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Use the interactive map to locate GCRFIP offices and future regional collaboration points across Ghana.
        </p>
      </section>

      <section className="section-block">
        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
          <div className="w-full h-96 bg-gcrfip-light-grey flex items-center justify-center px-6 text-center">
            <div>
              <p className="text-gray-700 font-semibold">Interactive Office and Partner Map</p>
              <p className="text-sm text-gray-600 mt-2">
                Map layers for offices, partner institutions, and regional support nodes will continue to expand.
              </p>
            </div>
          </div>

          <div className="p-5 border-t border-gray-200 grid md:grid-cols-2 gap-5">
            <article className="card p-5">
              <h2 className="text-lg font-bold text-gcrfip-navy mb-2">Headquarters Address</h2>
              <p className="text-gray-700 mb-4">
                Ghana Climate Resilience and Flood Intelligence Programme
                <br />
                Office Building, [Street Name]
                <br />
                Accra, Ghana
              </p>
              <Link href="/contact/office-information" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">Get Directions &gt;</Link>
            </article>

            <article className="card p-5">
              <h2 className="text-lg font-bold text-gcrfip-navy mb-2">Travel Notes</h2>
              <p className="text-gray-700">
                Public transport options and route-level guidance will be updated as regional office mapping expands.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block rounded-2xl border border-gray-200 bg-white p-6 md:p-7">
        <h2 className="text-2xl font-bold text-gcrfip-navy mb-3">Related Contact Pages</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="chip chip-muted">Contact Form</Link>
          <Link href="/contact/office-information" className="chip chip-muted">Office Information</Link>
          <Link href="/contact/general-enquiries" className="chip chip-muted">General Enquiries</Link>
          <Link href="/contact/social-media" className="chip chip-muted">Social Media</Link>
        </div>
      </section>
    </div>
  )
}
