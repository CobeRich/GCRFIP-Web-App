'use client'

import Link from 'next/link'
import ReadingProgress from '../../../components/layout/ReadingProgress'

const enquiryTypes = [
  {
    title: 'Programme Enquiries',
    detail: 'Questions about implementation priorities, delivery timelines, and engagement pathways.',
  },
  {
    title: 'Partnership Enquiries',
    detail: 'Institutional collaboration, co-funding opportunities, and strategic alignment requests.',
  },
  {
    title: 'Research Enquiries',
    detail: 'Scientific collaboration, publications, innovation lab engagement, and data requests.',
  },
]

export default function GeneralEnquiriesPage() {
  return (
    <div className="container-custom section-padding">
      <ReadingProgress />

      <section className="section-block">
        <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-3">General Enquiries</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gcrfip-navy mb-4">Speak with the GCRFIP Team</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Connect with us for programme, partnership, and research enquiries. We coordinate responses through the
          most relevant teams to ensure timely and actionable support.
        </p>
      </section>

      <section className="section-block grid md:grid-cols-3 gap-5">
        {enquiryTypes.map((item) => (
          <article key={item.title} className="card p-6 border-t-4 border-gcrfip-green/70 ui-transition hover:-translate-y-0.5">
            <h2 className="text-xl font-bold text-gcrfip-navy mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="section-block grid lg:grid-cols-2 gap-6">
        <div className="card p-7">
          <h2 className="text-2xl font-bold text-gcrfip-navy mb-4">Direct Contacts</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold text-gcrfip-navy">Email:</span>{' '}
              <a href="mailto:info@gcrfip.gh" className="text-gcrfip-green hover:text-gcrfip-navy">info@gcrfip.gh</a>
            </p>
            <p>
              <span className="font-semibold text-gcrfip-navy">Phone:</span>{' '}
              <a href="tel:+233000000000" className="text-gcrfip-green hover:text-gcrfip-navy">+233 (0) XXX XXX XXX</a>
            </p>
            <p>
              <span className="font-semibold text-gcrfip-navy">Office:</span> Accra, Ghana
            </p>
            <p className="text-sm text-gray-600">Response target: within 2-3 working days.</p>
          </div>
        </div>

        <div className="card p-7">
          <h2 className="text-2xl font-bold text-gcrfip-navy mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-1 gap-3">
            <Link href="/contact" className="chip chip-muted justify-center">Open Contact Form</Link>
            <Link href="/about" className="chip chip-muted justify-center">About GCRFIP</Link>
            <Link href="/programme" className="chip chip-muted justify-center">Explore Programme</Link>
            <Link href="/research" className="chip chip-muted justify-center">Research and Innovation</Link>
            <Link href="/resources/faqs" className="chip chip-muted justify-center">Read FAQs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
