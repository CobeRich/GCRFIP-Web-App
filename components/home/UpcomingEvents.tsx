'use client'

import Link from 'next/link'

export default function UpcomingEvents() {
  const events = [
    {
      type: 'Workshop',
      title: 'Community Flood Preparedness Training',
      place: 'Kumasi',
      date: '18 Aug 2026',
      href: '/news/workshops',
    },
    {
      type: 'Training',
      title: 'GIS and Forecasting for Regional Teams',
      place: 'Accra',
      date: '02 Sep 2026',
      href: '/news/events',
    },
    {
      type: 'Conference',
      title: 'National Climate Intelligence Forum',
      place: 'Tamale',
      date: '21 Oct 2026',
      href: '/news/conferences',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-2">Upcoming Events</h2>
            <p className="text-gray-700">Workshops, technical training, and conferences across Ghana's resilience network.</p>
          </div>
          <Link href="/news/events" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
            View event calendar →
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link key={event.title} href={event.href} className="rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-lg transition-shadow">
              <p className="text-xs font-semibold uppercase tracking-wide text-gcrfip-green mb-2">{event.type}</p>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-4">{event.title}</h3>
              <p className="text-gray-700 text-sm">{event.place}</p>
              <p className="text-gray-700 text-sm font-semibold mt-1">{event.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
