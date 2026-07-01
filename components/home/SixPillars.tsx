'use client'

import Link from 'next/link'

export default function SixPillars() {
  const pillars = [
    {
      number: '1',
      title: 'Flood Intelligence Platform',
      description: 'Real-time monitoring and early warning systems',
      icon: '🌊',
    },
    {
      number: '2',
      title: 'Institutional Coordination',
      description: 'Strengthened government and stakeholder coordination',
      icon: '🤝',
    },
    {
      number: '3',
      title: 'Community Engagement',
      description: 'Grassroots participation and resilience building',
      icon: '👥',
    },
    {
      number: '4',
      title: 'Research & Innovation',
      description: 'Scientific advancement and technology development',
      icon: '🔬',
    },
    {
      number: '5',
      title: 'Capacity Building',
      description: 'Training and skill development for all stakeholders',
      icon: '📚',
    },
    {
      number: '6',
      title: 'Policy & Governance',
      description: 'Evidence-based policy and governance frameworks',
      icon: '⚖️',
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-4 text-gcrfip-navy text-center">Six Strategic Pillars</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          GCRFIP's framework rests on six interconnected pillars working together to build comprehensive flood resilience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
              <p className="text-4xl mb-3">{pillar.icon}</p>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{pillar.title}</h3>
              <p className="text-gray-700">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/programme/pillars" className="cta-button">
            Explore All Pillars
          </Link>
        </div>
      </div>
    </section>
  )
}
