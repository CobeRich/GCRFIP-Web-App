'use client'

export default function InnovationLab() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Innovation Lab</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Testing New Solutions</h2>
        <p className="text-lg text-gray-700 mb-8">
          The GCRFIP Innovation Lab incubates and tests new technologies, approaches, and partnerships for flood resilience.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Pilot Projects</h3>
            <p className="text-gray-700">Testing innovative flood management approaches in selected communities.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Technology Testing</h3>
            <p className="text-gray-700">Evaluating emerging technologies for monitoring and forecasting.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Start-up Support</h3>
            <p className="text-gray-700">Incubating tech start-ups developing flood resilience solutions.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Partnership Innovation</h3>
            <p className="text-gray-700">Exploring new collaboration models and service delivery approaches.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
