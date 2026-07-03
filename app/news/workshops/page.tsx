'use client'

import Link from 'next/link'

export default function Workshops() {
  const workshops = [
    {
      title: 'Flood Data Analysis Workshop',
      date: 'August 20-22, 2026',
      target: 'Government analysts and researchers',
      description: 'Advanced techniques for analyzing flood data and risk assessment.',
    },
    {
      title: 'Community Resilience Building',
      date: 'September 12-14, 2026',
      target: 'Community leaders and NGOs',
      description: 'Practical approaches for building community flood resilience.',
    },
    {
      title: 'Emergency Response Planning',
      date: 'October 10-12, 2026',
      target: 'Emergency management officials',
      description: 'Developing effective emergency response and coordination protocols.',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Workshops</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          Capacity building workshops for government, partners, and communities.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {workshops.map((workshop, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-lg font-bold text-gcrfip-navy mb-3">{workshop.title}</h3>
              <div className="space-y-2 text-sm mb-4">
                <p><span className="font-semibold text-gcrfip-green">📅</span> {workshop.date}</p>
                <p><span className="font-semibold text-gcrfip-green">👥</span> {workshop.target}</p>
              </div>
              <p className="text-gray-700 mb-4">{workshop.description}</p>
              <Link href="/contact/general-enquiries" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
                Register →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
