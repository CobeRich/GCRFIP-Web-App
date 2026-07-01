'use client'

export default function BecomePartner() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Become a Partner</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Partnership Types</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Government Agencies</h3>
            <p className="text-gray-700 mb-4">
              Collaborate on institutional coordination and policy development.
            </p>
            <a href="/contact" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
              Get in Touch →
            </a>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Academic Institutions</h3>
            <p className="text-gray-700 mb-4">
              Partner on research projects and capacity building programs.
            </p>
            <a href="/contact" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
              Get in Touch →
            </a>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">International Organizations</h3>
            <p className="text-gray-700 mb-4">
              Support programme implementation and provide technical expertise.
            </p>
            <a href="/contact" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
              Get in Touch →
            </a>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Private Sector</h3>
            <p className="text-gray-700 mb-4">
              Contribute technology, resources, or services to flood resilience.
            </p>
            <a href="/contact" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
              Get in Touch →
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Partner Benefits</h2>
        <ul className="space-y-3 text-gray-700 mb-8">
          <li className="flex items-start">
            <span className="text-gcrfip-gold mr-3 font-bold">✓</span>
            <span>Recognition and visibility for partnership contributions</span>
          </li>
          <li className="flex items-start">
            <span className="text-gcrfip-gold mr-3 font-bold">✓</span>
            <span>Access to GCRFIP data, research, and platforms</span>
          </li>
          <li className="flex items-start">
            <span className="text-gcrfip-gold mr-3 font-bold">✓</span>
            <span>Participation in coordination and governance structures</span>
          </li>
          <li className="flex items-start">
            <span className="text-gcrfip-gold mr-3 font-bold">✓</span>
            <span>Collaboration opportunities with other partners</span>
          </li>
        </ul>
      </section>
    </div>
  )
}
