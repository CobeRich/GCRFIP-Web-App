'use client'

export default function FloodChallenge() {
  const challenges = [
    {
      number: '1',
      title: 'Growing Threat',
      description: 'Millions of Ghanaians affected annually by floods',
    },
    {
      number: '2',
      title: 'Data Gaps',
      description: 'Limited real-time monitoring and forecasting capacity',
    },
    {
      number: '3',
      title: 'Climate Change',
      description: 'Increasing frequency and intensity of extreme events',
    },
    {
      number: '4',
      title: 'Coordination',
      description: 'Fragmented institutional responses reduce effectiveness',
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-4 text-gcrfip-navy text-center">Ghana's Flood Challenge</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Ghana faces increasing flood risks that require comprehensive, coordinated action across all sectors.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <div key={index} className="card p-6">
              <div className="w-12 h-12 bg-gcrfip-gold rounded-full flex items-center justify-center mb-4">
                <span className="text-gcrfip-navy font-bold">{challenge.number}</span>
              </div>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{challenge.title}</h3>
              <p className="text-gray-700">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
