'use client'

import Link from 'next/link'

export default function ExecutivePortfolio() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Executive Portfolio</h1>
      
      <section className="mb-12">
        <p className="text-lg text-gray-700 mb-8">
          The Executive Portfolio provides a high-level overview of GCRFIP's vision, strategic objectives, and implementation approach.
        </p>
        <div className="card p-8 bg-gcrfip-light-grey">
          <h2 className="text-2xl font-bold mb-4 text-gcrfip-navy">Download Document</h2>
          <p className="text-gray-700 mb-6">
            Access the complete Executive Portfolio which outlines GCRFIP's strategic direction and key value propositions.
          </p>
          <Link href="/resources/downloads" className="cta-button">Download PDF</Link>
        </div>
      </section>
    </div>
  )
}
