import Link from 'next/link'

const index = [
  { title: 'Home', href: '/', category: 'Navigation' },
  { title: 'About', href: '/about', category: 'Navigation' },
  { title: 'Programme', href: '/programme', category: 'Navigation' },
  { title: 'Research', href: '/research', category: 'Navigation' },
  { title: 'Resources', href: '/resources', category: 'Navigation' },
  { title: 'News', href: '/news', category: 'Navigation' },
  { title: 'Get Involved', href: '/get-involved', category: 'Navigation' },
  { title: 'Contact', href: '/contact', category: 'Navigation' },
  { title: 'Executive Portfolio', href: '/programme/executive-portfolio', category: 'Documents' },
  { title: 'Blueprint', href: '/programme/blueprint', category: 'Documents' },
  { title: 'Prospectus', href: '/programme/prospectus', category: 'Documents' },
  { title: 'National Roadmap', href: '/programme/national-roadmap', category: 'Documents' },
  { title: 'Research Themes', href: '/research/research-themes', category: 'Research' },
  { title: 'Research Projects', href: '/research/research-projects', category: 'Research' },
  { title: 'Open Data', href: '/research/open-data', category: 'Research' },
  { title: 'Downloads', href: '/resources/downloads', category: 'Resources' },
  { title: 'Maps', href: '/resources/maps', category: 'Resources' },
]

type SearchPageProps = {
  searchParams?: {
    q?: string
  }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const rawQuery = (searchParams?.q || '').trim()
  const query = rawQuery.toLowerCase()

  const results = query
    ? index.filter((item) => item.title.toLowerCase().includes(query) || item.category.toLowerCase().includes(query))
    : []

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold text-gcrfip-navy mb-3">Search</h1>
      <p className="text-gray-700 mb-8">
        {query ? `Results for "${rawQuery}"` : 'Enter a term in the top search bar to discover pages and documents.'}
      </p>

      {results.length === 0 ? (
        <div className="card p-6">
          <p className="text-gray-700">No results found yet. Try terms like Programme, Prospectus, Maps, or Research.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {results.map((result) => (
            <Link key={result.href} href={result.href} className="card p-6 hover:shadow-lg transition-shadow">
              <p className="text-xs font-semibold uppercase tracking-wide text-gcrfip-green mb-2">{result.category}</p>
              <h2 className="text-lg font-bold text-gcrfip-navy">{result.title}</h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
