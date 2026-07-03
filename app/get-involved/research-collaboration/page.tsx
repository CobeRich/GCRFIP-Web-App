'use client'

import Link from 'next/link'

export default function ResearchCollaboration() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Research Collaboration</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Join Our Research Network</h2>
        <p className="text-lg text-gray-700 mb-8">
          GCRFIP welcomes research collaboration from universities, institutes, and individual researchers working on
          flood resilience, climate adaptation, and disaster risk reduction.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Joint Research Projects</h3>
            <p className="text-gray-700 mb-4">Collaborate with GCRFIP on research addressing key flood challenges.</p>
            <Link href="/contact/general-enquiries" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
              Propose Project →
            </Link>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Data Access</h3>
            <p className="text-gray-700 mb-4">Access GCRFIP data for your research and publications.</p>
            <Link href="/research/open-data" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
              Request Access →
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="card p-8 bg-gcrfip-light-grey">
          <h2 className="text-2xl font-bold mb-4 text-gcrfip-navy">Contact Research Director</h2>
          <p className="text-gray-700 mb-6">
            Have a research collaboration idea? Contact our Research & Innovation Lead.
          </p>
          <Link href="/contact" className="cta-button">
            Send Inquiry
          </Link>
        </div>
      </section>
    </div>
  )
}
