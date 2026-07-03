'use client'

import Link from 'next/link'

export default function Conferences() {
  const conferences = [
    {
      title: 'African Climate Resilience Conference 2026',
      date: 'November 15-17, 2026',
      location: 'Accra, Ghana',
      description: 'Continental conference on climate resilience and disaster risk reduction.',
    },
    {
      title: 'West Africa Flood Management Summit',
      date: 'December 5-7, 2026',
      location: 'Regional (TBD)',
      description: 'Regional dialogue on transboundary flood management.',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Conferences</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          Major conferences and symposia featuring GCRFIP and partner research.
        </p>

        <div className="space-y-6">
          {conferences.map((conference, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-xl font-bold text-gcrfip-navy mb-3">{conference.title}</h3>
              <div className="space-y-2 mb-4 text-gray-700">
                <p><span className="font-semibold">📅 Date:</span> {conference.date}</p>
                <p><span className="font-semibold">📍 Location:</span> {conference.location}</p>
              </div>
              <p className="text-gray-700 mb-4">{conference.description}</p>
              <Link href="/contact/general-enquiries" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
