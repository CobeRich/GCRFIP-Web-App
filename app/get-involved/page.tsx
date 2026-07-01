'use client'

import Link from 'next/link'

const opportunities = [
  {
    title: 'Government Agencies',
    description: 'Partner with GCRFIP to strengthen flood resilience coordination and institutional capacity.',
    icon: '🏛️',
  },
  {
    title: 'Academic Institutions',
    description: 'Collaborate on research projects and capacity building initiatives.',
    icon: '🎓',
  },
  {
    title: 'Community Organizations',
    description: 'Engage in community-based adaptation and resilience building.',
    icon: '👥',
  },
  {
    title: 'Private Sector',
    description: 'Contribute technology, expertise, and resources to flood resilience.',
    icon: '💼',
  },
  {
    title: 'International Partners',
    description: 'Support programme implementation with funding and technical expertise.',
    icon: '🌍',
  },
  {
    title: 'NGOs & Civil Society',
    description: 'Participate in advocacy, community engagement, and programme support.',
    icon: '🤝',
  },
]

export default function GetInvolved() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Get Involved</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Ways to Participate</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {opportunities.map((opp, index) => (
            <div key={index} className="card p-6">
              <div className="text-4xl mb-4">{opp.icon}</div>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-3">{opp.title}</h3>
              <p className="text-gray-700">{opp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Express Your Interest</h2>
        <div className="card p-8 max-w-2xl">
          <p className="text-gray-700 mb-6">
            Interested in joining GCRFIP? We welcome partnerships from diverse stakeholders committed to building flood resilience in Ghana.
          </p>
          <Link href="/contact" className="cta-button">
            Contact Us to Participate
          </Link>
        </div>
      </section>
    </div>
  )
}
