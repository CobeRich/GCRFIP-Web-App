'use client'

export default function Careers() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Careers</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Join the Team</h2>
        <p className="text-lg text-gray-700 mb-8">
          GCRFIP is building a talented team of professionals committed to transforming Ghana's flood resilience.
          Career opportunities are available across technical, governance, and engagement functions.
        </p>

        <div className="card p-8 bg-gcrfip-light-grey">
          <h3 className="text-2xl font-bold mb-4 text-gcrfip-navy">Current Opportunities</h3>
          <p className="text-gray-700 mb-6">
            Check back soon for current job openings and career opportunities with GCRFIP.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Interested in working with us?</strong> Contact us to learn about upcoming positions.
          </p>
          <a href="/contact" className="cta-button">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
