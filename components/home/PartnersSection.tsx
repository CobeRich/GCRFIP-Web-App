'use client'

export default function PartnersSection() {
  const partners = [
    'Government Ministries',
    'Metropolitan Assemblies',
    'Hydrological Services',
    'Universities',
    'Civil Society',
    'Private Sector',
    'Development Partners',
    'Community Networks',
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-4 text-gcrfip-navy text-center">Partners</h2>
        <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          National and international partners align expertise, financing, and delivery capacity to scale resilience.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.map((partner) => (
            <div key={partner} className="rounded-xl border border-[#dbe9f6] bg-[#f8fbff] px-5 py-4 text-center">
              <p className="font-semibold text-gcrfip-navy">{partner}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
