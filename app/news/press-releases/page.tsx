'use client'

export default function PressReleases() {
  const releases = [
    {
      date: 'July 1, 2026',
      title: 'Government of Ghana Launches Climate Resilience and Flood Intelligence Programme',
      summary: 'Comprehensive national initiative to address flood risks through integrated science and technology.',
    },
    {
      date: 'June 20, 2026',
      title: 'Major International Partners Pledge Support for GCRFIP',
      summary: 'World Bank, AfDB, and UN agencies commit funding for flood resilience initiative.',
    },
    {
      date: 'June 10, 2026',
      title: 'Universities Form Research Consortium for Flood Science',
      summary: 'Leading Ghanaian universities establish collaborative research partnership.',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Press Releases</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          Official press releases and media announcements about GCRFIP.
        </p>

        <div className="space-y-6">
          {releases.map((release, index) => (
            <article key={index} className="card p-6 border-l-4 border-gcrfip-gold">
              <time className="text-sm text-gcrfip-green font-semibold">{release.date}</time>
              <h3 className="text-lg font-bold text-gcrfip-navy my-2">{release.title}</h3>
              <p className="text-gray-700 mb-4">{release.summary}</p>
              <a href="#" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
                Read full release →
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
