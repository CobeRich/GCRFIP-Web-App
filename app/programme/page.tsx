'use client'

export default function Programme() {
  const pillars = [
    {
      number: '1',
      title: 'Flood Intelligence Platform',
      description: 'Real-time monitoring, forecasting, and early warning systems for flood events.',
    },
    {
      number: '2',
      title: 'Institutional Coordination',
      description: 'Strengthened coordination mechanisms between government agencies and stakeholders.',
    },
    {
      number: '3',
      title: 'Community Engagement',
      description: 'Grassroots participation and community-based adaptation strategies.',
    },
    {
      number: '4',
      title: 'Research & Innovation',
      description: 'Scientific research and technological innovation for flood resilience.',
    },
    {
      number: '5',
      title: 'Capacity Building',
      description: 'Training and development for government, partners, and communities.',
    },
    {
      number: '6',
      title: 'Policy & Governance',
      description: 'Evidence-based policy development and improved governance frameworks.',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Programme Structure</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Six Core Pillars</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="card p-6">
              <div className="w-12 h-12 bg-gcrfip-gold rounded-full flex items-center justify-center mb-4">
                <span className="text-gcrfip-navy font-bold text-lg">{pillar.number}</span>
              </div>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-3">{pillar.title}</h3>
              <p className="text-gray-700">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Implementation Timeline</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-gcrfip-green pl-6">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-2">Phase 1: Foundation (Year 1-2)</h3>
            <p className="text-gray-700">Establish governance structures, initiate research, and pilot early warning systems.</p>
          </div>
          <div className="border-l-4 border-gcrfip-green pl-6">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-2">Phase 2: Development (Year 2-3)</h3>
            <p className="text-gray-700">Scale platforms, expand institutional coordination, and deepen community engagement.</p>
          </div>
          <div className="border-l-4 border-gcrfip-green pl-6">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-2">Phase 3: Integration (Year 3-5)</h3>
            <p className="text-gray-700">Full integration of all systems, nationwide deployment, and sustainable operations.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
