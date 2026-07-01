'use client'

import Link from 'next/link'

export default function PartnershipCallout() {
  return (
    <section className="section-padding bg-gradient-to-r from-gcrfip-green to-gcrfip-navy text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto">
          Are you a government institution, university, development partner, NGO, private sector company, or community organization?
          <br />
          Become part of Ghana's flood resilience revolution.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/get-involved" className="cta-button bg-gcrfip-gold text-gcrfip-navy hover:bg-white">
            Express Your Interest
          </Link>
          <Link href="/contact" className="cta-button-secondary border-white text-white">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
