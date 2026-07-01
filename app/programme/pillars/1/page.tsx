'use client'

export default function Pillar1() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Pillar 1: Flood Intelligence Platform</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Overview</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          The Flood Intelligence Platform is the technological backbone of GCRFIP. It provides real-time monitoring,
          data analysis, and early warning capabilities to support proactive flood management.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Key Components</h2>
        <div className="space-y-4">
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Real-Time Monitoring</h3>
            <p className="text-gray-700">Network of sensors and weather stations providing continuous data streams.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Data Integration</h3>
            <p className="text-gray-700">Aggregating data from multiple sources for comprehensive analysis.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Forecasting Models</h3>
            <p className="text-gray-700">Advanced computational models predicting flood events with high accuracy.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Early Warning System</h3>
            <p className="text-gray-700">Multi-channel alert system reaching communities with critical flood information.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
