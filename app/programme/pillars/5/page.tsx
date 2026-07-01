'use client'

export default function Pillar5() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Pillar 5: Capacity Building</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Overview</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Building human and institutional capacity is critical for sustainable flood resilience. This pillar
          develops skills, knowledge, and capabilities across all stakeholder groups.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Training & Development</h2>
        <div className="space-y-4">
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Government Training</h3>
            <p className="text-gray-700">Equipping government officials with flood management and platform operation skills.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Technical Training</h3>
            <p className="text-gray-700">Training technicians and operators on platform systems and data analysis.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Community Capacity</h3>
            <p className="text-gray-700">Building community understanding of flood risks and response measures.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-gold">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Academic Programs</h3>
            <p className="text-gray-700">Supporting university programs in flood science and disaster risk reduction.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
