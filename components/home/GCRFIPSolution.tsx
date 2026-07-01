export default function GCRFIPSolution() {
  return (
    <section className="section-padding bg-gcrfip-light-grey">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-4 text-gcrfip-navy">The GCRFIP Solution</h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl">
          GCRFIP is an integrated national programme that brings together government, universities, development partners,
          technology companies, and communities to build a comprehensive flood resilience ecosystem.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card p-8">
            <div className="w-16 h-16 bg-gcrfip-green rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gcrfip-navy">Science-Led</h3>
            <p className="text-gray-600">Grounded in solid research and flood science to understand and predict risks.</p>
          </div>

          <div className="card p-8">
            <div className="w-16 h-16 bg-gcrfip-navy rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gcrfip-navy">Data-Driven</h3>
            <p className="text-gray-600">Leverages satellite data, sensors, GIS, and AI for intelligent decision-making.</p>
          </div>

          <div className="card p-8">
            <div className="w-16 h-16 bg-gcrfip-gold rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-gcrfip-navy">🤝</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gcrfip-navy">Collaborative</h3>
            <p className="text-gray-600">Brings together all stakeholders to coordinate action and build shared resilience.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
