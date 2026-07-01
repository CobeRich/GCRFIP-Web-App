'use client'

export default function Leadership() {
  const leaders = [
    {
      name: 'Dr. [Name]',
      role: 'Executive Director',
      bio: 'Leading GCRFIP vision and strategic direction.',
    },
    {
      name: 'Eng. [Name]',
      role: 'Technical Director',
      bio: 'Overseeing flood intelligence platform development.',
    },
    {
      name: 'Prof. [Name]',
      role: 'Research & Innovation Lead',
      bio: 'Directing research initiatives and partnerships.',
    },
    {
      name: '[Name]',
      role: 'Partnerships & Engagement Director',
      bio: 'Leading stakeholder engagement and partnerships.',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Leadership</h1>
      
      <section className="mb-12">
        <p className="text-lg text-gray-700 mb-8">
          GCRFIP is led by a team of experienced professionals committed to building Ghana's flood resilience.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="card p-6">
              <div className="w-16 h-16 bg-gcrfip-gold rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-gcrfip-navy mb-1">{leader.name}</h3>
              <p className="text-gcrfip-green font-semibold mb-3">{leader.role}</p>
              <p className="text-gray-700">{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
