'use client'

export default function StrategicPartners() {
  const partnerCategories = [
    {
      category: 'Government Agencies',
      partners: [
        'Ministry of Interior',
        'Environmental Protection Agency',
        'Ghana Meteorological Agency',
        'Ghana Water Company',
      ],
    },
    {
      category: 'Academic & Research Institutions',
      partners: [
        'University of Ghana',
        'Kwame Nkrumah University of Science and Technology',
        'University of Cape Coast',
        'Accra Institute of Technology',
      ],
    },
    {
      category: 'International Partners',
      partners: [
        'World Bank',
        'African Development Bank',
        'United Nations Development Programme',
        'Global Environment Facility',
      ],
    },
    {
      category: 'Civil Society & NGOs',
      partners: [
        'Red Cross Society Ghana',
        'Environmental Justice Foundation',
        'Climate Action Network',
        'Community Development NGOs',
      ],
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Strategic Partners</h1>
      
      <section className="mb-12">
        <p className="text-lg text-gray-700 mb-8">
          GCRFIP's success depends on strong partnerships across government, academia, civil society, and international organizations.
        </p>

        {partnerCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">{category.category}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {category.partners.map((partner, pIndex) => (
                <div key={pIndex} className="card p-4">
                  <p className="text-gcrfip-navy font-semibold">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
