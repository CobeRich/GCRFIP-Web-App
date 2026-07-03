'use client'

import Link from 'next/link'

export default function LatestNews() {
  const newsArticles = [
    {
      date: 'July 1, 2026',
      title: 'GCRFIP Platform Launch Announced',
      excerpt: 'Ghana officially launches the Climate Resilience and Flood Intelligence Programme.',
      category: 'Announcement',
    },
    {
      date: 'June 15, 2026',
      title: 'Government Agencies Sign Partnership Agreement',
      excerpt: 'Key stakeholders commit to coordinated flood management efforts.',
      category: 'Partnership',
    },
    {
      date: 'June 1, 2026',
      title: 'Research Collaboration Begins',
      excerpt: 'Academic institutions launch collaborative flood science projects.',
      category: 'Research',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Latest News</h1>
      
      <section>
        <div className="space-y-6">
          {newsArticles.map((article, index) => (
            <article key={index} className="card p-6">
              <div className="flex justify-between items-start mb-3">
                <time className="text-sm text-gcrfip-green font-semibold">{article.date}</time>
                <span className="px-3 py-1 bg-gcrfip-light-grey text-gcrfip-navy text-sm font-semibold rounded">
                  {article.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gcrfip-navy mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-4">{article.excerpt}</p>
              <Link href="/news" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
                Explore all updates →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
