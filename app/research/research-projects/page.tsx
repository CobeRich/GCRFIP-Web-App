'use client'

export default function ResearchProjects() {
  const projects = [
    {
      title: 'Accra Urban Flood Risk Study',
      status: 'Ongoing',
      description: 'Comprehensive assessment of flood risks in Accra and surrounding urban areas.',
    },
    {
      title: 'Climate Projections for Ghana',
      status: 'Ongoing',
      description: 'Developing climate scenarios to inform long-term flood risk planning.',
    },
    {
      title: 'Community Adaptation Strategies',
      status: 'Ongoing',
      description: 'Testing and evaluating community-based flood adaptation approaches.',
    },
    {
      title: 'Early Warning System Validation',
      status: 'Completed',
      description: 'Validation and optimization of flood forecasting models.',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Research Projects</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          GCRFIP is currently implementing numerous research projects advancing flood resilience in Ghana.
        </p>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="card p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gcrfip-navy">{project.title}</h3>
                <span className={`px-3 py-1 text-sm font-semibold rounded ${
                  project.status === 'Ongoing' 
                    ? 'bg-gcrfip-green text-white' 
                    : 'bg-gray-300 text-gray-700'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
