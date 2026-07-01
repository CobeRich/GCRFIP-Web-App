'use client'

const pillars = [
  {
    number: '1',
    title: 'Flood Intelligence Platform',
    description: 'Real-time monitoring and early warning systems',
    path: '/programme/pillars/1',
  },
  {
    number: '2',
    title: 'Institutional Coordination',
    description: 'Strengthened government and stakeholder coordination',
    path: '/programme/pillars/2',
  },
  {
    number: '3',
    title: 'Community Engagement',
    description: 'Grassroots participation and resilience',
    path: '/programme/pillars/3',
  },
  {
    number: '4',
    title: 'Research & Innovation',
    description: 'Scientific advancement and technology development',
    path: '/programme/pillars/4',
  },
  {
    number: '5',
    title: 'Capacity Building',
    description: 'Training and skill development',
    path: '/programme/pillars/5',
  },
  {
    number: '6',
    title: 'Policy & Governance',
    description: 'Evidence-based policy and governance frameworks',
    path: '/programme/pillars/6',
  },
]

export default function StrategicPillars() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Six Strategic Pillars</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          GCRFIP's framework rests on six interconnected strategic pillars that work together to build comprehensive flood resilience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <a key={pillar.number} href={pillar.path} className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-gcrfip-gold rounded-full flex items-center justify-center mb-4">
                <span className="text-gcrfip-navy font-bold text-lg">{pillar.number}</span>
              </div>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{pillar.title}</h3>
              <p className="text-gray-700">{pillar.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
