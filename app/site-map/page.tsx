import Link from 'next/link'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programme', href: '/programme' },
  { label: 'Research', href: '/research' },
  { label: 'Resources', href: '/resources' },
  { label: 'News', href: '/news' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact', href: '/contact' },
]

export default function SiteMapPage() {
  return (
    <div className="container-custom section-padding max-w-4xl">
      <h1 className="text-4xl font-bold text-gcrfip-navy mb-6">Site Map</h1>
      <p className="text-gray-700 mb-6">Use this index to quickly access the main sections of the website.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="card p-5 hover:shadow-lg transition-shadow">
            <span className="font-semibold text-gcrfip-navy">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
