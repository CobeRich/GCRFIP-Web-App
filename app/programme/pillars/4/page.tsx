'use client'

export default function Pillar4() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Pillar 4: Research & Innovation</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Overview</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Ongoing research and innovation drive GCRFIP's effectiveness. This pillar advances flood science,
          develops new technologies, and tests emerging adaptation strategies.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Research Themes</h2>
        <div className="space-y-4">
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Flood Hydrology</h3>
            <p className="text-gray-700">Understanding flood processes, rainfall patterns, and water movement.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Climate Impacts</h3>
            <p className="text-gray-700">Analyzing climate change effects on flood frequency and intensity.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Technology Development</h3>
            <p className="text-gray-700">Creating new monitoring, forecasting, and early warning technologies.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Community Adaptation</h3>
            <p className="text-gray-700">Testing and scaling effective adaptation and resilience strategies.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
