'use client'

import Link from 'next/link'

export default function Events() {
  const events = [
    {
      date: 'August 15, 2026',
      title: 'GCRFIP Launch Event',
      location: 'Accra',
      description: 'Official launch event with government officials and partners.',
    },
    {
      date: 'September 10, 2026',
      title: 'Community Awareness Campaign',
      location: 'Nationwide',
      description: 'Multi-regional community engagement on flood preparedness.',
    },
    {
      date: 'October 5, 2026',
      title: 'Platform Training Workshops',
      location: 'Regional Centers',
      description: 'Technical training for government staff and partners.',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Events</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          Upcoming GCRFIP events and community engagement activities.
        </p>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="card p-6 border-l-4 border-gcrfip-green">
              <p className="text-sm text-gcrfip-green font-semibold mb-2">{event.date}</p>
              <h3 className="text-xl font-bold text-gcrfip-navy mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-3"><span className="font-semibold">📍</span> {event.location}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <Link href="/contact/general-enquiries" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
