'use client'

export default function Volunteer() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Volunteer</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Make a Difference</h2>
        <p className="text-lg text-gray-700 mb-8">
          GCRFIP welcomes volunteers passionate about building flood resilience in Ghana. There are many ways
          to contribute your time and skills.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Community Mobilizers</h3>
            <p className="text-gray-700 mb-4">Help raise awareness and mobilize communities on flood preparedness.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Data Collectors</h3>
            <p className="text-gray-700 mb-4">Contribute local observations and data from your community.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Technical Support</h3>
            <p className="text-gray-700 mb-4">Assist with platform operation and technical support in your region.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Advocates</h3>
            <p className="text-gray-700 mb-4">Promote flood resilience and GCRFIP across your networks.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="card p-8 bg-gcrfip-light-grey">
          <h2 className="text-2xl font-bold mb-4 text-gcrfip-navy">Express Your Interest</h2>
          <p className="text-gray-700 mb-6">
            Tell us how you\'d like to volunteer with GCRFIP.
          </p>
          <a href="/contact" className="cta-button">
            Volunteer Registration Form
          </a>
        </div>
      </section>
    </div>
  )
}
