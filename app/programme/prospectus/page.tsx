'use client'

export default function ProgrammeProspectus() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Programme Prospectus</h1>
      
      <section className="mb-12">
        <p className="text-lg text-gray-700 mb-8">
          The Programme Prospectus provides detailed descriptions of GCRFIP's structure, components, activities, and expected outcomes.
        </p>
        <div className="card p-8 bg-gcrfip-light-grey">
          <h2 className="text-2xl font-bold mb-4 text-gcrfip-navy">Download Document</h2>
          <p className="text-gray-700 mb-6">
            Explore the comprehensive Programme Prospectus detailing all components and implementation strategies.
          </p>
          <button className="cta-button">Download PDF</button>
        </div>
      </section>
    </div>
  )
}
