'use client'

export default function FloodIntelligencePlatform() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Flood Intelligence Platform</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">National Data Hub</h2>
        <p className="text-lg text-gray-700 mb-8">
          The Flood Intelligence Platform is GCRFIP's central technology hub, integrating data from multiple sources
          to provide real-time insights into Ghana's flood risks.
        </p>

        <div className="space-y-4">
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Real-Time Monitoring</h3>
            <p className="text-gray-700">Live data from sensor networks across flood-prone regions.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Predictive Analytics</h3>
            <p className="text-gray-700">Advanced models forecasting flood events 24-72 hours in advance.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Public Access Dashboard</h3>
            <p className="text-gray-700">Interactive maps and data visualizations for public information.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
