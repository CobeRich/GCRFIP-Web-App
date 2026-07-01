'use client'

export default function About() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">About GCRFIP</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gcrfip-green">Programme Overview</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          The Ghana Climate Resilience and Flood Intelligence Programme (GCRFIP) is a comprehensive national initiative
          designed to address Ghana's growing flood challenges through integrated science, technology, governance, and community engagement.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gcrfip-green">Vision</h2>
        <p className="text-lg leading-relaxed text-gray-700 italic">
          A Ghana where flood risks are understood, monitored, and managed through integrated national systems,
          protecting communities and enabling sustainable development.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gcrfip-green">Mission</h2>
        <p className="text-lg leading-relaxed text-gray-700 italic">
          To build a national flood resilience ecosystem through science, technology, institutional coordination,
          and community participation.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gcrfip-green">Programme Philosophy</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-3">Prevent</h3>
            <p>Reduce flood risks through proactive measures and prevention strategies.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-3">Understand</h3>
            <p>Build scientific understanding of flood risks and their drivers.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-3">Monitor</h3>
            <p>Continuously monitor flood systems and environmental changes.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-3">Predict</h3>
            <p>Forecast flood events and anticipate risks.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-3">Protect</h3>
            <p>Implement protective measures for vulnerable communities.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-3">Strengthen</h3>
            <p>Build institutional and community resilience.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
