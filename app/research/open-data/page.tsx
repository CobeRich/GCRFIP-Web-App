'use client'

export default function OpenData() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Open Data</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Transparent Data Access</h2>
        <p className="text-lg text-gray-700 mb-8">
          GCRFIP is committed to making flood and climate data publicly available to support research, planning,
          and decision-making across Ghana.
        </p>

        <div className="space-y-4">
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Historical Data</h3>
            <p className="text-gray-700">Complete records of past floods and weather patterns.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Real-Time Feeds</h3>
            <p className="text-gray-700">Live data from monitoring stations and forecasting models.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Data Visualization Tools</h3>
            <p className="text-gray-700">Interactive maps and dashboards for data exploration.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">API Access</h3>
            <p className="text-gray-700">Programmatic access for developers and researchers.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="card p-8 bg-gcrfip-light-grey">
          <h2 className="text-2xl font-bold mb-4 text-gcrfip-navy">Access Data Portal</h2>
          <p className="text-gray-700 mb-6">
            Visit our data portal to access all available datasets, documentation, and tools.
          </p>
          <button className="cta-button">Open Data Portal</button>
        </div>
      </section>
    </div>
  )
}
