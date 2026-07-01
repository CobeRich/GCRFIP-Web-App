'use client'

import Link from 'next/link'

export default function LatestNews() {
  const stories = [
    {
      title: 'National Flood Intelligence Rollout Milestones Announced',
      date: '01 Jul 2026',
      href: '/news/latest',
    },
    {
      title: 'Universities Join Research Collaboration on Digital Twin Models',
      date: '24 Jun 2026',
      href: '/news/blog',
    },
    {
      title: 'Cross-Agency Simulation Exercise Improves Emergency Readiness',
      date: '12 Jun 2026',
      href: '/news/events',
    },
  ]

  return (
    <section className="py-20 bg-[#f7fbff]">
      <div className="container-custom">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-2">Latest News</h2>
            <p className="text-gray-700">Recent programme, research, and partnership intelligence.</p>
          </div>
          <Link href="/news" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
            Explore all news →
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Link key={story.title} href={story.href} className="card p-6 hover:shadow-lg transition-shadow">
              <p className="text-sm font-semibold text-gcrfip-green mb-3">{story.date}</p>
              <h3 className="text-xl font-bold text-gcrfip-navy leading-snug">{story.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
