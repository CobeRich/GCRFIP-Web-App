'use client'

import Link from 'next/link'

export default function PartnershipCallout() {
  return (
    <section className="py-16 bg-gradient-to-r from-gcrfip-green to-green-700 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Building Flood Resilience</h2>
          <p className="text-xl mb-8 text-gray-100">
            GCRFIP welcomes partnerships from government, academia, civil society, private sector,
            and international organizations. Together, we can transform Ghana's approach to flood management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved/become-partner" className="bg-gcrfip-gold text-gcrfip-navy px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition">
              Become a Partner
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-gcrfip-green transition">
              Contact Us
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl mb-2">🏢</p>
              <p className="font-semibold">Government & NGOs</p>
            </div>
            <div>
              <p className="text-3xl mb-2">🎓</p>
              <p className="font-semibold">Universities & Research</p>
            </div>
            <div>
              <p className="text-3xl mb-2">🌍</p>
              <p className="font-semibold">International Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
