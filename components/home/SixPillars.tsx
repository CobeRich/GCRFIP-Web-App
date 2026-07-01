'use client'

const pillars = [
  {
    title: 'Community Flood Monitoring and Prevention',
    description: 'Empowering communities to monitor and report flood risks.',
    icon: '👥',
  },
  {
    title: 'Scientific Research and Flood System Understanding',
    description: 'Building knowledge about flood mechanisms and impacts.',
    icon: '🔬',
  },
  {
    title: 'Smart Flood Intelligence and Decision Support',
    description: 'Creating AI-powered systems for forecasting and early warning.',
    icon: '🧠',
  },
  {
    title: 'Public Health, Sanitation and Community Resilience',
    description: 'Protecting health and building community resilience.',
    icon: '🏥',
  },
  {
    title: 'Governance and Institutional Strengthening',
    description: 'Strengthening coordination and institutional frameworks.',
    icon: '🏛️',
  },
  {
    title: 'Capacity Building and Knowledge Transfer',
    description: 'Training and upskilling the national workforce.',
    icon: '📚',
  },
]

export default function SixPillars() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-4 text-gcrfip-navy">Six Strategic Pillars</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          GCRFIP is built on six integrated pillars that work together as one national flood resilience system.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div key={index} className="card p-6 hover:border-l-4 hover:border-gcrfip-green">
              <div className="text-4xl mb-3">{pillar.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-gcrfip-navy">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
