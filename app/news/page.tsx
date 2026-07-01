import Link from 'next/link'

type NewsItem = {
  date: string
  title: string
  excerpt: string
  category: 'News' | 'Events' | 'Press Releases' | 'Conferences' | 'Research' | 'Announcements' | 'Newsletter'
  region: 'National' | 'Greater Accra' | 'Ashanti' | 'Northern' | 'Volta'
  year: '2026' | '2025'
}

type NewsPageProps = {
  searchParams?: {
    category?: string
    year?: string
    region?: string
  }
}

const newsItems: NewsItem[] = [
  {
    date: 'July 1, 2026',
    title: 'GCRFIP Platform Launch Announced',
    excerpt: 'Ghana officially announces the Ghana Climate Resilience and Flood Intelligence Programme.',
    category: 'Announcements',
    region: 'National',
    year: '2026',
  },
  {
    date: 'June 15, 2026',
    title: 'Partnership Agreements Signed',
    excerpt: 'Key government agencies and international partners commit to flood resilience initiative.',
    category: 'News',
    region: 'Greater Accra',
    year: '2026',
  },
  {
    date: 'June 1, 2026',
    title: 'Research Collaboration Begins',
    excerpt: 'Academic institutions launch collaborative flood research projects.',
    category: 'Research',
    region: 'Ashanti',
    year: '2026',
  },
  {
    date: 'May 20, 2026',
    title: 'Community Consultation Workshops',
    excerpt: 'Stakeholder engagement workshops held across major flood-prone regions.',
    category: 'Events',
    region: 'Northern',
    year: '2026',
  },
  {
    date: 'October 10, 2025',
    title: 'Hydrology and GIS Conference Track',
    excerpt: 'Technical teams presented integrated modelling results.',
    category: 'Conferences',
    region: 'Volta',
    year: '2025',
  },
]

const categories = ['All', 'News', 'Events', 'Press Releases', 'Conferences', 'Research', 'Announcements', 'Newsletter']
const years = ['All', '2026', '2025']
const regions = ['All', 'National', 'Greater Accra', 'Ashanti', 'Northern', 'Volta']

function buildFilterHref(next: { category?: string; year?: string; region?: string }) {
  const params = new URLSearchParams()

  if (next.category && next.category !== 'All') params.set('category', next.category)
  if (next.year && next.year !== 'All') params.set('year', next.year)
  if (next.region && next.region !== 'All') params.set('region', next.region)

  const query = params.toString()
  return query ? `/news?${query}` : '/news'
}

export default function News({ searchParams }: NewsPageProps) {
  const category = searchParams?.category || 'All'
  const year = searchParams?.year || 'All'
  const region = searchParams?.region || 'All'

  const filtered = newsItems.filter((item) => {
    const categoryMatch = category === 'All' || item.category === category
    const yearMatch = year === 'All' || item.year === year
    const regionMatch = region === 'All' || item.region === region
    return categoryMatch && yearMatch && regionMatch
  })

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-4 text-gcrfip-navy">News & Updates</h1>
      <p className="text-gray-700 mb-8">Filter by category, year, and region.</p>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 section-block">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm font-semibold text-gcrfip-navy mb-2">Category</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((option) => (
                <Link
                  key={option}
                  href={buildFilterHref({ category: option, year, region })}
                  className={`chip ${
                    category === option ? 'chip-active' : 'chip-muted'
                  }`}
                >
                  {option}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gcrfip-navy mb-2">Year</p>
            <div className="flex flex-wrap gap-2">
              {years.map((option) => (
                <Link
                  key={option}
                  href={buildFilterHref({ category, year: option, region })}
                  className={`chip ${
                    year === option ? 'chip-active' : 'chip-muted'
                  }`}
                >
                  {option}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gcrfip-navy mb-2">Region</p>
            <div className="flex flex-wrap gap-2">
              {regions.map((option) => (
                <Link
                  key={option}
                  href={buildFilterHref({ category, year, region: option })}
                  className={`chip ${
                    region === option ? 'chip-active' : 'chip-muted'
                  }`}
                >
                  {option}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl">
        <div className="space-y-8">
          {filtered.length === 0 && (
            <article className="card p-6 border-l-4 border-gcrfip-green ui-transition">
              <h2 className="text-xl font-bold text-gcrfip-navy mb-2">No results found</h2>
              <p className="text-gray-700">Try clearing one of the filters to broaden results.</p>
            </article>
          )}

          {filtered.map((item) => (
            <article key={`${item.title}-${item.date}`} className="card p-6 border-l-4 border-gcrfip-green ui-transition hover:-translate-y-0.5">
              <div className="flex flex-wrap gap-2 text-xs mb-2">
                <span className="meta-chip bg-emerald-100 text-gcrfip-green">{item.category}</span>
                <span className="meta-chip bg-gray-100 text-gray-700">{item.year}</span>
                <span className="meta-chip bg-blue-100 text-blue-700">{item.region}</span>
              </div>
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
