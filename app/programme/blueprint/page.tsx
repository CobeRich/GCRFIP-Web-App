'use client'

export default function Blueprint() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Technical Blueprint</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Platform Architecture</h2>
        <p className="text-lg text-gray-700 mb-8">
          The Technical Blueprint details the architecture and specifications of the National Flood Intelligence Platform.
        </p>
        <div className="card p-8 bg-gcrfip-light-grey">
          <h2 className="text-2xl font-bold mb-4 text-gcrfip-navy">Download Blueprint</h2>
          <p className="text-gray-700 mb-6">
            Access detailed technical specifications for the Flood Intelligence Platform including system architecture,
            data standards, and integration points.
          </p>
          <button className="cta-button">Download PDF</button>
        </div>
      </section>
    </div>
  )
}
