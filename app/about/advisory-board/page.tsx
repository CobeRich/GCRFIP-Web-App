'use client'

export default function AdvisoryBoard() {
  const board = [
    {
      name: 'Prof. [Name]',
      institution: 'University of Ghana',
      expertise: 'Climate Science',
    },
    {
      name: 'Dr. [Name]',
      institution: 'Kwame Nkrumah University of Science and Technology',
      expertise: 'Hydrology & Water Resources',
    },
    {
      name: '[Name]',
      institution: 'Ghana Meteorological Agency',
      expertise: 'Weather Forecasting',
    },
    {
      name: 'Eng. [Name]',
      institution: 'Ghana Water Company',
      expertise: 'Water Management',
    },
    {
      name: 'Prof. [Name]',
      institution: 'International Partner University',
      expertise: 'Flood Resilience',
    },
    {
      name: 'Dr. [Name]',
      institution: 'Regional Development Partner',
      expertise: 'Community Engagement',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Advisory Board</h1>
      
      <section className="mb-12">
        <p className="text-lg text-gray-700 mb-8">
          GCRFIP is guided by an esteemed Advisory Board comprising leading experts and stakeholders from academia,
          government, civil society, and international organizations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {board.map((member, index) => (
            <div key={index} className="card p-6">
              <div className="w-12 h-12 bg-gcrfip-green rounded-full mb-4"></div>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-1">{member.name}</h3>
              <p className="text-sm text-gcrfip-green font-semibold mb-2">{member.expertise}</p>
              <p className="text-sm text-gray-600">{member.institution}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
