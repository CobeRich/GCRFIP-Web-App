'use client'

export default function Research() {
  const researchAreas = [
    {
      title: 'Flood Hydrology',
      description: 'Understanding rainfall patterns, runoff processes, and flood dynamics in Ghana.',
    },
    {
      title: 'Climate Impacts',
      description: 'Analyzing climate change effects on flood frequency and intensity.',
    },
    {
      title: 'Urban Flood Dynamics',
      description: 'Studying flood behavior in urban environments and informal settlements.',
    },
    {
      title: 'Early Warning Systems',
      description: 'Developing and testing advanced forecasting and warning technologies.',
    },
    {
      title: 'Community Adaptation',
      description: 'Researching community-based adaptation and resilience strategies.',
    },
    {
      title: 'Infrastructure Resilience',
      description: 'Assessing and improving resilience of critical infrastructure.',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Research & Innovation</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Research Areas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-lg font-bold text-gcrfip-navy mb-3">{area.title}</h3>
              <p className="text-gray-700">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Partners & Collaborators</h2>
        <p className="text-gray-700 mb-6">
          GCRFIP collaborates with leading universities, research institutions, and international partners to advance flood resilience research.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Academic Institutions</h3>
            <p className="text-gray-700">Universities and research centers conducting cutting-edge flood science research.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">International Experts</h3>
            <p className="text-gray-700">Global leaders in flood resilience, climate science, and early warning systems.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
