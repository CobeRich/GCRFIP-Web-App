'use client'

export default function DigitalTwin() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Digital Twin</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Virtual Flood Simulation</h2>
        <p className="text-lg text-gray-700 mb-8">
          GCRFIP's Digital Twin creates virtual replicas of Ghana's flood-prone areas, enabling scenario testing
          and contingency planning without risking real-world implementation.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Scenario Modeling</h3>
            <p className="text-gray-700">Testing different response strategies in virtual environment.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Training Simulations</h3>
            <p className="text-gray-700">Immersive environments for emergency responder training.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Decision Support</h3>
            <p className="text-gray-700">Real-time decision support for emergency management during floods.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Infrastructure Planning</h3>
            <p className="text-gray-700">Evaluating flood defense and resilience infrastructure options.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
