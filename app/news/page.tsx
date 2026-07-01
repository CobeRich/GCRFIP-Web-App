'use client'

export default function News() {
  const news = [
    {
      date: 'July 1, 2026',
      title: 'GCRFIP Platform Launch Announced',
      excerpt: 'Ghana officially announces the Ghana Climate Resilience and Flood Intelligence Programme.',
    },
    {
      date: 'June 15, 2026',
      title: 'Partnership Agreements Signed',
      excerpt: 'Key government agencies and international partners commit to flood resilience initiative.',
    },
    {
      date: 'June 1, 2026',
      title: 'Research Collaboration Begins',
      excerpt: 'Academic institutions launch collaborative flood research projects.',
    },
    {
      date: 'May 20, 2026',
      title: 'Community Consultation Workshops',
      excerpt: 'Stakeholder engagement workshops held across major flood-prone regions.',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">News & Updates</h1>
      
      <section className="max-w-3xl">
        <div className="space-y-8">
          {news.map((item, index) => (
            <article key={index} className="card p-6 border-l-4 border-gcrfip-green">
              <time className="text-sm text-gcrfip-green font-semibold">{item.date}</time>
              <h2 className="text-2xl font-bold text-gcrfip-navy my-3">{item.title}</h2>
              <p className="text-gray-700 mb-4">{item.excerpt}</p>
              <a href="#" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
                Read more →
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
