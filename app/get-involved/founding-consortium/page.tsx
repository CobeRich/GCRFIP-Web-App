'use client'

export default function FoundingConsortium() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Join the Founding Consortium</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Exclusive Early Partnership</h2>
        <p className="text-lg text-gray-700 mb-8">
          Founding consortium members have the opportunity to shape GCRFIP's direction from the start and play a key role
          in Ghana's flood resilience transformation.
        </p>

        <div className="card p-8 bg-gcrfip-light-grey mb-8">
          <h3 className="text-xl font-bold text-gcrfip-navy mb-4">Founding Member Positions</h3>
          <p className="text-gray-700 mb-6">
            We are seeking founding members across multiple sectors who can commit to GCRFIP's mission and provide
            leadership during the critical launch phase.
          </p>
          <a href="/contact" className="cta-button">
            Apply as Founding Member
          </a>
        </div>
      </section>
    </div>
  )
}
