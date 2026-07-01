'use client'

export default function Videos() {
  const videos = [
    {
      title: 'GCRFIP Overview',
      description: 'Introduction to the Ghana Climate Resilience and Flood Intelligence Programme',
      duration: '5:30',
    },
    {
      title: 'How the Flood Intelligence Platform Works',
      description: 'Technical explanation of real-time monitoring and early warning systems',
      duration: '8:45',
    },
    {
      title: 'Community Flood Preparedness',
      description: 'Practical guide for households preparing for flood events',
      duration: '6:20',
    },
    {
      title: 'Climate Change and Ghana\'s Floods',
      description: 'Understanding climate impacts on flood frequency and intensity',
      duration: '7:15',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Videos</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          Video resources explaining GCRFIP concepts, flood science, and preparedness strategies.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="card p-6">
              <div className="w-full h-32 bg-gcrfip-light-grey rounded mb-4 flex items-center justify-center">
                <span className="text-4xl">▶️</span>
              </div>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{video.title}</h3>
              <p className="text-gray-700 mb-2">{video.description}</p>
              <p className="text-sm text-gray-600">{video.duration}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
