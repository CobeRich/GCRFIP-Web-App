import Image from 'next/image'
import Link from 'next/link'
import ReadingProgress from '../../components/layout/ReadingProgress'
import PageAtmosphere from '../../components/layout/PageAtmosphere'

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

function countWithFilter(list: NewsItem[], field: 'category' | 'year' | 'region', value: string) {
  if (value === 'All') return list.length
  return list.filter((item) => item[field] === value).length
}

export default function NewsPage({ searchParams }: NewsPageProps) {
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
    <div className="relative overflow-hidden">
      <PageAtmosphere variant="news" />
      <ReadingProgress />

      <section className="relative min-h-[52vh] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_banner.png"
            alt="News and programme intelligence"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#02163f]/92 via-[#03245a]/78 to-[#02122e]/84" />

        <div className="relative container-custom py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200 mb-3">News and Insights</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">Programme Intelligence for a Resilient Ghana</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mb-8">
            Track programme intelligence by category, year, and region.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/news/latest" className="cta-button">View Latest Intelligence</Link>
            <Link href="/resources/media-kit" className="chip border-white/60 text-white bg-white/10 hover:bg-white hover:text-gcrfip-navy">
              Open Media Kit
            </Link>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding relative">
        <section className="section-block grid md:grid-cols-4 gap-4">
          <div className="card p-5 border-l-4 border-gcrfip-green">
            <p className="text-sm text-gray-600 mb-1">Visible Updates</p>
            <p className="text-3xl font-bold text-gcrfip-navy">{filtered.length}</p>
          </div>
          <div className="card p-5">
            <p className="text-sm text-gray-600 mb-1">Category Focus</p>
            <p className="text-xl font-bold text-gcrfip-navy">{category}</p>
          </div>
          <div className="card p-5">
            <p className="text-sm text-gray-600 mb-1">Year Focus</p>
            <p className="text-xl font-bold text-gcrfip-navy">{year}</p>
          </div>
          <div className="card p-5">
            <p className="text-sm text-gray-600 mb-1">Region Focus</p>
            <p className="text-xl font-bold text-gcrfip-navy">{region}</p>
          </div>
        </section>

        <section className="section-block rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
          <h2 className="text-2xl font-bold text-gcrfip-navy mb-5">Filter Intelligence Feed</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div>
              <p className="text-sm font-semibold text-gcrfip-navy mb-2">Category</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((option) => (
                  <Link
                    key={option}
                    href={buildFilterHref({ category: option, year, region })}
                    className={`chip ${category === option ? 'chip-active' : 'chip-muted'}`}
                  >
                    {option} ({countWithFilter(newsItems, 'category', option)})
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
                    className={`chip ${year === option ? 'chip-active' : 'chip-muted'}`}
                  >
                    {option} ({countWithFilter(newsItems, 'year', option)})
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
                    className={`chip ${region === option ? 'chip-active' : 'chip-muted'}`}
                  >
                    {option} ({countWithFilter(newsItems, 'region', option)})
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-block max-w-4xl">
          <div className="space-y-6">
            {filtered.length === 0 && (
              <article className="card p-6 border-l-4 border-gcrfip-green ui-transition">
                <h2 className="text-xl font-bold text-gcrfip-navy mb-2">No intelligence found</h2>
                <p className="text-gray-700">Adjust one or more filters to broaden the feed.</p>
              </article>
            )}

            {filtered.map((item) => (
              <article key={`${item.title}-${item.date}`} className="card p-6 border-l-4 border-gcrfip-green ui-transition hover:-translate-y-0.5">
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <span className="meta-chip bg-emerald-100 text-gcrfip-green">{item.category}</span>
                  <span className="meta-chip bg-gray-100 text-gray-700">{item.year}</span>
                  <span className="meta-chip bg-blue-100 text-blue-700">{item.region}</span>
                </div>
                <time className="text-sm text-gcrfip-green font-semibold">{item.date}</time>
                <h2 className="text-2xl font-bold text-gcrfip-navy my-3">{item.title}</h2>
                <p className="text-gray-700 mb-4">{item.excerpt}</p>
                <a href="#" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
                  Read article &gt;
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">News Channels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/news/latest" className="card p-6 ui-transition hover:-translate-y-0.5">
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Latest News</h3>
              <p className="text-gray-700 mb-4">Most recent programme updates and announcements.</p>
              <span className="text-gcrfip-green font-semibold">Open Channel &gt;</span>
            </Link>

            <Link href="/news/blog" className="card p-6 ui-transition hover:-translate-y-0.5">
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Blog</h3>
              <p className="text-gray-700 mb-4">Analysis and thought leadership on flood resilience.</p>
              <span className="text-gcrfip-green font-semibold">Open Channel &gt;</span>
            </Link>

            <Link href="/news/press-releases" className="card p-6 ui-transition hover:-translate-y-0.5">
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Press Releases</h3>
              <p className="text-gray-700 mb-4">Official media statements and public announcements.</p>
              <span className="text-gcrfip-green font-semibold">Open Channel &gt;</span>
            </Link>

            <Link href="/news/events" className="card p-6 ui-transition hover:-translate-y-0.5">
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Events</h3>
              <p className="text-gray-700 mb-4">Workshops, technical forums, and programme events.</p>
              <span className="text-gcrfip-green font-semibold">Open Channel &gt;</span>
            </Link>

            <Link href="/news/conferences" className="card p-6 ui-transition hover:-translate-y-0.5">
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Conferences</h3>
              <p className="text-gray-700 mb-4">Conference reports, presentations, and outcomes.</p>
              <span className="text-gcrfip-green font-semibold">Open Channel &gt;</span>
            </Link>

            <Link href="/news/workshops" className="card p-6 ui-transition hover:-translate-y-0.5">
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Workshops</h3>
              <p className="text-gray-700 mb-4">Capacity-building sessions and technical trainings.</p>
              <span className="text-gcrfip-green font-semibold">Open Channel &gt;</span>
            </Link>
          </div>
        </section>

        <section className="section-block rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#02214f] via-[#033e74] to-[#075985]" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200 mb-2">Stay Informed</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Get Programme Intelligence as It Develops</h2>
              <p className="text-gray-100">
                Subscribe for curated resilience updates, policy signals, and technical opportunities.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/get-involved/newsletter" className="cta-button bg-white text-gcrfip-navy hover:bg-gcrfip-gold hover:text-gcrfip-navy">
                Subscribe to Newsletter
              </Link>
              <Link href="/contact/general-enquiries" className="chip border-white/60 text-white bg-white/10 hover:bg-white hover:text-gcrfip-navy">
                Contact Communications Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
