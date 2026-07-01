'use client'

export default function ProgrammeOverview() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Programme Overview</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Comprehensive National Initiative</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          GCRFIP is Ghana's flagship programme for building national flood resilience. It integrates science, technology,
          governance, and community engagement to address flood challenges comprehensively.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Key Objectives</h2>
        <div className="space-y-4">
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Understand Flood Risks</h3>
            <p className="text-gray-700">Build comprehensive understanding of Ghana's flood hazards and vulnerabilities.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Monitor Systems</h3>
            <p className="text-gray-700">Establish real-time monitoring of flood-prone areas and weather patterns.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Provide Early Warnings</h3>
            <p className="text-gray-700">Issue timely flood alerts to enable proactive community response.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Strengthen Resilience</h3>
            <p className="text-gray-700">Build community and institutional capacity for flood management.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Scope & Scale</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <p className="text-4xl font-bold text-gcrfip-gold mb-2">16</p>
            <p className="text-gcrfip-navy font-semibold">Regions</p>
          </div>
          <div className="card p-6 text-center">
            <p className="text-4xl font-bold text-gcrfip-gold mb-2">5+</p>
            <p className="text-gcrfip-navy font-semibold">Years</p>
          </div>
          <div className="card p-6 text-center">
            <p className="text-4xl font-bold text-gcrfip-gold mb-2">Multi</p>
            <p className="text-gcrfip-navy font-semibold">Stakeholder</p>
          </div>
        </div>
      </section>
    </div>
  )
}
