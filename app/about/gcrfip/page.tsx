'use client'

export default function AboutGCRFIP() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">About GCRFIP</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">What is GCRFIP?</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          The Ghana Climate Resilience and Flood Intelligence Programme (GCRFIP) is a comprehensive national initiative
          designed to address Ghana's growing flood challenges through integrated science, technology, governance, and community engagement.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          GCRFIP represents a paradigm shift in how Ghana approaches flood management—from reactive disaster response to proactive,
          data-driven resilience building.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Why GCRFIP Matters</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-3">Growing Flood Threat</h3>
            <p className="text-gray-700">Flooding affects millions of Ghanaians annually, with impacts intensifying due to climate change.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-3">Data Gaps</h3>
            <p className="text-gray-700">Limited real-time flood monitoring and forecasting capacity hinders effective response.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-3">Coordination Challenges</h3>
            <p className="text-gray-700">Fragmented institutional responses reduce effectiveness and waste resources.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-3">Vulnerable Communities</h3>
            <p className="text-gray-700">Low-income and informal settlements face disproportionate flood impacts.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Our Commitment</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          GCRFIP is committed to building a Ghana where flood risks are understood, monitored, and managed through integrated national systems,
          protecting communities and enabling sustainable development for all.
        </p>
      </section>
    </div>
  )
}
