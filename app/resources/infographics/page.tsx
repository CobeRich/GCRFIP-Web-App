'use client'

export default function Infographics() {
  const infographics = [
    {
      title: 'Ghana Flood Risk Map',
      description: 'Spatial distribution of flood hazards across Ghana',
    },
    {
      title: 'Flood Preparedness Checklist',
      description: 'What households and communities should do to prepare for floods',
    },
    {
      title: 'Early Warning System Flow',
      description: 'How the Flood Intelligence Platform generates and disseminates warnings',
    },
    {
      title: 'GCRFIP Programme Structure',
      description: 'Overview of the six pillars and implementation strategy',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Infographics</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          Visual resources explaining key GCRFIP concepts and flood resilience information.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {infographics.map((graphic, index) => (
            <div key={index} className="card p-6">
              <div className="w-full h-32 bg-gcrfip-light-grey rounded mb-4"></div>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{graphic.title}</h3>
              <p className="text-gray-700 mb-4">{graphic.description}</p>
              <a href="#" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
                Download →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
