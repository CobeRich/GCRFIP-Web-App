'use client'

import Link from 'next/link'

export default function GCRFIPSolution() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gcrfip-navy">GCRFIP: Integrated Solution</h2>
            <p className="text-lg text-gray-700 mb-6">
              GCRFIP represents a paradigm shift in flood management—from reactive disaster response to proactive,
              data-driven resilience building through six interconnected strategic pillars.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-gcrfip-gold font-bold mr-3">✓</span>
                <span className="text-gray-700"><strong>Real-time monitoring</strong> through integrated sensor networks</span>
              </li>
              <li className="flex items-start">
                <span className="text-gcrfip-gold font-bold mr-3">✓</span>
                <span className="text-gray-700"><strong>Advanced forecasting</strong> with 24-72 hour predictions</span>
              </li>
              <li className="flex items-start">
                <span className="text-gcrfip-gold font-bold mr-3">✓</span>
                <span className="text-gray-700"><strong>Institutional coordination</strong> across sectors and regions</span>
              </li>
              <li className="flex items-start">
                <span className="text-gcrfip-gold font-bold mr-3">✓</span>
                <span className="text-gray-700"><strong>Community engagement</strong> for building resilience</span>
              </li>
            </ul>

            <Link href="/programme" className="cta-button inline-block">
              Explore the Programme
            </Link>
          </div>

          <div className="bg-gcrfip-light-grey rounded-lg p-8">
            <div className="space-y-6">
              <div className="bg-white p-4 rounded">
                <p className="text-2xl font-bold text-gcrfip-gold mb-2">6</p>
                <p className="text-gcrfip-navy font-semibold">Strategic Pillars</p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="text-2xl font-bold text-gcrfip-gold mb-2">16</p>
                <p className="text-gcrfip-navy font-semibold">Regions Covered</p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="text-2xl font-bold text-gcrfip-gold mb-2">5+</p>
                <p className="text-gcrfip-navy font-semibold">Years Implementation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
