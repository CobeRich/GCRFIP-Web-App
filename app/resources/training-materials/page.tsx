'use client'

export default function TrainingMaterials() {
  const trainingSeries = [
    {
      title: 'Understanding Flood Risks',
      modules: 3,
      duration: '2 hours',
      description: 'Introduction to flood science and Ghana\'s flood challenges',
    },
    {
      title: 'Using the Flood Intelligence Platform',
      modules: 4,
      duration: '3.5 hours',
      description: 'Technical training on platform features and data access',
    },
    {
      title: 'Community Flood Preparedness',
      modules: 3,
      duration: '2.5 hours',
      description: 'Preparing households and communities for flood events',
    },
    {
      title: 'Emergency Response Procedures',
      modules: 4,
      duration: '4 hours',
      description: 'Protocols and procedures for flood emergency response',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Training Materials</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          Comprehensive training resources for government, partners, communities, and the public.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {trainingSeries.map((series, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-lg font-bold text-gcrfip-navy mb-3">{series.title}</h3>
              <div className="space-y-2 mb-4 text-sm text-gray-700">
                <p><span className="font-semibold">Modules:</span> {series.modules}</p>
                <p><span className="font-semibold">Duration:</span> {series.duration}</p>
              </div>
              <p className="text-gray-700 mb-4">{series.description}</p>
              <a href="#" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
                Access Course →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
