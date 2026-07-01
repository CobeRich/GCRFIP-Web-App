'use client'

import Link from 'next/link'
import ReadingProgress from '../../../components/layout/ReadingProgress'

const officeHours = [
  { day: 'Monday - Friday', time: '8:00 AM - 5:00 PM' },
  { day: 'Saturday', time: 'Closed' },
  { day: 'Sunday', time: 'Closed' },
]

export default function OfficeInformationPage() {
  return (
    <div className="container-custom section-padding">
      <ReadingProgress />

      <section className="section-block">
        <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-3">Office Information</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gcrfip-navy mb-4">Visit or Contact Headquarters</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Find official office details, operating hours, and direct contact channels for the GCRFIP coordination team.
        </p>
      </section>

      <section className="section-block grid lg:grid-cols-2 gap-6">
        <article className="card p-7 border-l-4 border-gcrfip-green">
          <h2 className="text-2xl font-bold text-gcrfip-navy mb-4">Headquarters</h2>
          <p className="text-gray-700 mb-1">Ghana Climate Resilience and Flood Intelligence Programme</p>
          <p className="text-gray-700 mb-1">Office Building, [Street Name]</p>
          <p className="text-gray-700 mb-4">Accra, Ghana</p>

          <p className="text-gray-700 mb-1">
            <span className="font-semibold text-gcrfip-navy">Phone:</span>{' '}
            <a href="tel:+233000000000" className="text-gcrfip-green hover:text-gcrfip-navy">+233 (0) XXX XXX XXX</a>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-gcrfip-navy">Email:</span>{' '}
            <a href="mailto:info@gcrfip.gh" className="text-gcrfip-green hover:text-gcrfip-navy">info@gcrfip.gh</a>
          </p>
        </article>

        <article className="card p-7 border-l-4 border-gcrfip-gold">
          <h2 className="text-2xl font-bold text-gcrfip-navy mb-4">Office Hours</h2>
          <ul className="space-y-3 text-gray-700">
            {officeHours.map((hour) => (
              <li key={hour.day} className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="font-semibold text-gcrfip-navy">{hour.day}</span>
                <span>{hour.time}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600 mt-5">Closed on national holidays and announced observance days.</p>
        </article>
      </section>

      <section className="section-block rounded-2xl border border-gray-200 bg-white p-6 md:p-7">
        <h2 className="text-2xl font-bold text-gcrfip-navy mb-3">Navigate to Related Contact Channels</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact/interactive-map" className="chip chip-muted">Interactive Map</Link>
          <Link href="/contact/general-enquiries" className="chip chip-muted">General Enquiries</Link>
          <Link href="/contact/social-media" className="chip chip-muted">Social Media</Link>
          <Link href="/contact" className="chip chip-muted">Back to Contact</Link>
        </div>
      </section>
    </div>
  )
}
