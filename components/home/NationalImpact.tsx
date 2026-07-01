export default function NationalImpact() {
  const impacts = [
    {
      title: 'Safer Communities',
      description: 'Protected from flood risks through early warning and preparedness.',
    },
    {
      title: 'Stronger Institutions',
      description: 'Better coordinated government and partner response.',
    },
    {
      title: 'Better Flood Intelligence',
      description: 'Real-time data and forecasting for decision-making.',
    },
    {
      title: 'Improved Public Health',
      description: 'Reduced disease outbreaks and health impacts from flooding.',
    },
    {
      title: 'Climate Resilience',
      description: 'National systems adapted to climate change impacts.',
    },
  ]

  return (
    <section className="section-padding bg-gcrfip-navy text-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12 text-center">National Impact</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gcrfip-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gcrfip-navy font-bold text-2xl">{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{impact.title}</h3>
              <p className="text-sm text-gray-300">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
