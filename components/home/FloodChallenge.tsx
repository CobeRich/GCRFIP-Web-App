'use client'

import Link from 'next/link'

export default function FloodChallenge() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-8 text-gcrfip-navy">The Flood Challenge</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              Ghana faces an escalating flood crisis. Every year, flooding causes loss of life, destroys infrastructure,
              displaces communities, and threatens public health. The problem is getting worse due to:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-gcrfip-gold font-bold text-xl">•</span>
                <span className="text-gray-700">Extreme rainfall and climate change</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gcrfip-gold font-bold text-xl">•</span>
                <span className="text-gray-700">Rapid unplanned urbanization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gcrfip-gold font-bold text-xl">•</span>
                <span className="text-gray-700">Inadequate drainage infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gcrfip-gold font-bold text-xl">•</span>
                <span className="text-gray-700">Environmental degradation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gcrfip-gold font-bold text-xl">•</span>
                <span className="text-gray-700">Weak coordination between institutions</span>
              </li>
            </ul>
            <Link href="/about" className="cta-button">
              Learn More
            </Link>
          </div>
          <div className="bg-gcrfip-light-grey rounded-lg p-8 h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <p className="text-2xl font-bold">📊 Infographic</p>
              <p className="mt-2">Ghana's Flood Challenges & Statistics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
