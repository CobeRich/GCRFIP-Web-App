'use client'

export default function Publications() {
  const publications = [
    {
      title: 'Flood Risk in Ghana: A Comprehensive Assessment',
      authors: 'GCRFIP Research Team',
      year: 2026,
      type: 'Report',
    },
    {
      title: 'Climate Change and Extreme Rainfall in West Africa',
      authors: 'International Climate Research Network',
      year: 2025,
      type: 'Journal Article',
    },
    {
      title: 'Early Warning Systems for Flood Preparedness',
      authors: 'GCRFIP & Partner Universities',
      year: 2026,
      type: 'Technical Brief',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Publications</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          Research publications from GCRFIP and partner institutions contribute to global knowledge on flood resilience.
        </p>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{pub.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{pub.authors} ({pub.year})</p>
              <span className="inline-block px-3 py-1 bg-gcrfip-light-grey text-gcrfip-navy rounded text-sm font-semibold">
                {pub.type}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
