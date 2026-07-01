'use client'

export default function PolicyBriefs() {
  const briefs = [
    {
      title: 'Early Warning Systems for Flood Preparedness',
      topic: 'Early Warning',
      description: 'Policy recommendations for establishing effective early warning systems',
    },
    {
      title: 'Institutional Coordination for Flood Management',
      topic: 'Governance',
      description: 'Best practices for coordinating flood management across government',
    },
    {
      title: 'Community-Based Flood Adaptation',
      topic: 'Community',
      description: 'Strategies for strengthening community flood resilience',
    },
    {
      title: 'Climate Change and Flood Risk Policy',
      topic: 'Climate',
      description: 'Policy considerations for climate adaptation and disaster risk reduction',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Policy Briefs</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          Evidence-based policy briefs providing guidance on key flood resilience topics.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {briefs.map((brief, index) => (
            <div key={index} className="card p-6">
              <span className="inline-block px-3 py-1 bg-gcrfip-light-grey text-gcrfip-green text-sm font-semibold rounded mb-3">
                {brief.topic}
              </span>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-3">{brief.title}</h3>
              <p className="text-gray-700 mb-4">{brief.description}</p>
              <a href="#" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
