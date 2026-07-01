'use client'

export default function Sponsorship() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Sponsorship & Funding</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Support GCRFIP</h2>
        <p className="text-lg text-gray-700 mb-8">
          GCRFIP welcomes financial contributions and in-kind support from organizations and individuals
          committed to building Ghana's flood resilience.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Financial Contributions</h3>
            <p className="text-gray-700 mb-4">
              Direct funding for programme implementation, research, or specific initiatives.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">In-Kind Support</h3>
            <p className="text-gray-700 mb-4">
              Equipment, technology, expertise, or services to support programme activities.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Event Sponsorship</h3>
            <p className="text-gray-700 mb-4">
              Support for major programme events, workshops, and conferences.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Research Funding</h3>
            <p className="text-gray-700 mb-4">
              Support for specific research projects or innovation initiatives.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="card p-8 bg-gcrfip-light-grey">
          <h2 className="text-2xl font-bold mb-4 text-gcrfip-navy">Sponsorship Information</h2>
          <p className="text-gray-700 mb-6">
            Contact us to discuss funding and sponsorship opportunities.
          </p>
          <a href="/contact" className="cta-button">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
