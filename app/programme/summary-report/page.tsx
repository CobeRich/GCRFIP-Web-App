'use client'

import Link from 'next/link'

export default function SummaryReport() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Summary Report</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Implementation Timeline</h2>
        <p className="text-lg text-gray-700 mb-8">
          The Summary Report outlines a summary of GCRFIP's Technical Blueprint and key milestones.
        </p>

        <div className="space-y-6">
          <div className="card p-6 border-l-4 border-gcrfip-green">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-2">Overview: Climate Resilience as a National Development Imperative</h3>
            <p className="text-gray-700">It provides a comprehensive framework for strengthening Ghana's ability to anticipate, understand, manage, and adapt to flood-related risks through coordinated action across government, academia, communities, the private sector, and development partners.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-green">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-2">Ghana's Flood Challenge: Responding to an Increasingly Complex National Risk Landscape</h3>
            <p className="text-gray-700">Flood events frequently disrupt transportation systems, damage homes, schools, healthcare facilities, energy infrastructure, and water supply networks. They interrupt business operations, reduce agricultural production, displace communities, and impose substantial financial burdens on households, local authorities, and national government.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-green">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-2">Why GCRFIP?: From Flood Management to National Resilience</h3>
            <p className="text-gray-700">GCRFIP introduces a fundamentally different approach. Rather than treating floods as isolated disasters, the programme views flood resilience as an integrated national capability that connects communities, scientific knowledge, digital technologies, public health systems, governance structures, education, and innovation.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="card p-8 bg-gcrfip-light-grey">
          <h2 className="text-2xl font-bold mb-4 text-gcrfip-navy">Download Summary Report</h2>
          <p className="text-gray-700 mb-6">
            Access the Summary Report with milestones, deliverables, and key activities.
          </p>
          <Link href="/resources/downloads" className="cta-button">Download PDF</Link>
        </div>
      </section>
    </div>
  )
}
