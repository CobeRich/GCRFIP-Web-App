'use client'

export default function ResearchThemes() {
  const themes = [
    {
      title: 'Flood Hydrology & Hydraulics',
      description: 'Understanding rainfall-runoff processes and flood behavior',
    },
    {
      title: 'Climate Change & Extremes',
      description: 'Analyzing climate impacts on flood frequency and intensity',
    },
    {
      title: 'Urban Flood Dynamics',
      description: 'Studying floods in urban and informal settlement contexts',
    },
    {
      title: 'Early Warning Systems',
      description: 'Developing advanced forecasting and alert technologies',
    },
    {
      title: 'Vulnerability & Adaptation',
      description: 'Assessing exposure and building adaptive capacity',
    },
    {
      title: 'Infrastructure Resilience',
      description: 'Protecting critical infrastructure from flood damage',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Research Themes</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          GCRFIP research focuses on six key themes addressing different aspects of Ghana's flood challenge.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-lg font-bold text-gcrfip-navy mb-3">{theme.title}</h3>
              <p className="text-gray-700">{theme.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
