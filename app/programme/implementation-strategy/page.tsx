'use client'

export default function ImplementationStrategy() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Implementation Strategy</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Strategic Approach</h2>
        <p className="text-lg text-gray-700 mb-8">
          GCRFIP's implementation strategy is built on integrated systems thinking, multi-stakeholder collaboration,
          and evidence-based planning.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Systems Integration</h3>
            <p className="text-gray-700">Linking technology, governance, research, and community systems.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Stakeholder Engagement</h3>
            <p className="text-gray-700">Inclusive participation from planning through implementation.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Adaptive Management</h3>
            <p className="text-gray-700">Learning and adjustment based on pilot results and feedback.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Capacity Building</h3>
            <p className="text-gray-700">Sustained training and development for all actors.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="card p-8 bg-gcrfip-light-grey">
          <h2 className="text-2xl font-bold mb-4 text-gcrfip-navy">Download Strategy Document</h2>
          <p className="text-gray-700 mb-6">
            Access the comprehensive implementation strategy with detailed action plans and resource requirements.
          </p>
          <button className="cta-button">Download PDF</button>
        </div>
      </section>
    </div>
  )
}
