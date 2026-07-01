'use client'

export default function Governance() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Governance</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Governance Structure</h2>
        <p className="text-lg text-gray-700 mb-8">
          GCRFIP operates under a robust governance framework ensuring transparency, accountability, and effective stakeholder participation.
        </p>

        <div className="space-y-6">
          <div className="card p-6 border-l-4 border-gcrfip-green">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-3">Steering Committee</h3>
            <p className="text-gray-700">Provides overall strategic direction and oversight of programme implementation.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-green">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-3">Technical Working Groups</h3>
            <p className="text-gray-700">Specialized groups focusing on specific programme pillars and technical areas.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-green">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-3">Regional Coordination</h3>
            <p className="text-gray-700">Regional committees ensure programme implementation at grassroots level.</p>
          </div>
          <div className="card p-6 border-l-4 border-gcrfip-green">
            <h3 className="text-xl font-bold text-gcrfip-navy mb-3">Stakeholder Forum</h3>
            <p className="text-gray-700">Regular engagement with partners, communities, and civil society organizations.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Core Principles</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-gcrfip-gold mr-3">✓</span>
            <span>Transparency and accountability in all operations</span>
          </li>
          <li className="flex items-start">
            <span className="text-gcrfip-gold mr-3">✓</span>
            <span>Inclusive participation of all stakeholders</span>
          </li>
          <li className="flex items-start">
            <span className="text-gcrfip-gold mr-3">✓</span>
            <span>Evidence-based decision making</span>
          </li>
          <li className="flex items-start">
            <span className="text-gcrfip-gold mr-3">✓</span>
            <span>Equitable benefit sharing</span>
          </li>
          <li className="flex items-start">
            <span className="text-gcrfip-gold mr-3">✓</span>
            <span>Commitment to sustainability</span>
          </li>
        </ul>
      </section>
    </div>
  )
}
