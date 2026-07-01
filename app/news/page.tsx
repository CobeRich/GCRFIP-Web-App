'use client'

import Link from 'next/link'

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

      <section className="mt-16 pt-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">News Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/news/latest" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Latest News</h3>
            <p className="text-gray-700">Most recent updates and announcements</p>
          </Link>

          <Link href="/news/blog" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Blog</h3>
            <p className="text-gray-700">Insights and articles on flood resilience</p>
          </Link>

          <Link href="/news/press-releases" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Press Releases</h3>
            <p className="text-gray-700">Official announcements and media releases</p>
          </Link>

          <Link href="/news/events" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Events</h3>
            <p className="text-gray-700">Upcoming workshops and conferences</p>
          </Link>

          <Link href="/news/conferences" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Conferences</h3>
            <p className="text-gray-700">Major conference presentations and reports</p>
          </Link>

          <Link href="/news/workshops" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Workshops</h3>
            <p className="text-gray-700">Training and capacity building workshops</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
