'use client'

export default function NationalRoadmap() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">National Roadmap</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Implementation Timeline</h2>
        <p className="text-lg text-gray-700 mb-8">
          The National Roadmap outlines GCRFIP's phased implementation strategy over the next 5 years.
        </p>

        <div className="space-y-6">
          <div className="card p-6 border-l-4 border-gcrfip-green">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-2">Phase 1: Foundation (2026-2027)</h3>
            <p className="text-gray-700">Establish governance, launch research initiatives, and deploy pilot systems.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-green">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-2">Phase 2: Development (2027-2028)</h3>
            <p className="text-gray-700">Scale technology platforms, expand partnerships, and integrate systems.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-green">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-2">Phase 3: Integration (2028-2031)</h3>
            <p className="text-gray-700">Nationwide deployment, full system integration, and sustainable operations.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="card p-8 bg-gcrfip-light-grey">
          <h2 className="text-2xl font-bold mb-4 text-gcrfip-navy">Download Roadmap</h2>
          <p className="text-gray-700 mb-6">
            Access the detailed National Roadmap with milestones, deliverables, and key activities.
          </p>
          <button className="cta-button">Download PDF</button>
        </div>
      </section>
    </div>
  )
}
