'use client'

import Image from 'next/image'
import Link from 'next/link'
import ReadingProgress from '../../components/layout/ReadingProgress'
import PageAtmosphere from '../../components/layout/PageAtmosphere'

const resourceGroups = [
  {
    category: 'Documents',
    lead: 'Programme strategy, execution, and governance documentation.',
    items: [
      { title: 'Executive Portfolio', description: 'High-level programme direction and strategic intent.', href: '/resources/downloads' },
      { title: 'Programme Prospectus', description: 'Detailed implementation framing and partner opportunities.', href: '/resources/downloads' },
      { title: 'Founder Roadmap', description: 'Long-horizon delivery milestones and institutional progression.', href: '/resources/downloads' },
      { title: 'Blueprint Summary', description: 'Technical architecture overview for resilience systems.', href: '/resources/downloads' },
    ],
  },
  {
    category: 'Data and Reports',
    lead: 'Evidence products supporting planning, investment, and operations.',
    items: [
      { title: 'Flood Risk Assessment', description: 'National risk analysis across exposure zones and systems.', href: '/resources/reports' },
      { title: 'Climate Projections', description: 'Forward-looking scenario outlooks for resilience planning.', href: '/resources/reports' },
      { title: 'Baseline Report', description: 'Starting-point assessment for programme performance tracking.', href: '/resources/reports' },
      { title: 'Case Studies', description: 'Applied implementation insights from partner interventions.', href: '/resources/reports' },
    ],
  },
  {
    category: 'Technical Resources',
    lead: 'Tools, standards, and guides for implementation and capacity building.',
    items: [
      { title: 'API Documentation', description: 'Reference material for platform integration and automation.', href: '/resources/downloads' },
      { title: 'Data Standards', description: 'Interoperability rules for consistent resilience data exchange.', href: '/resources/downloads' },
      { title: 'Technical Guides', description: 'Implementation manuals for systems, workflows, and operations.', href: '/resources/downloads' },
      { title: 'Training Materials', description: 'Learning resources for institutional and community users.', href: '/resources/training-materials' },
    ],
  },
]

const librarySections = [
  { title: 'Downloads', description: 'Strategic files, guides, and datasets for immediate use.', href: '/resources/downloads' },
  { title: 'Reports', description: 'Research and analytical products for evidence-led action.', href: '/resources/reports' },
  { title: 'Training Materials', description: 'Capacity-building resources for teams and communities.', href: '/resources/training-materials' },
  { title: 'Videos', description: 'Recorded briefings, webinars, and explanatory media.', href: '/resources/videos' },
  { title: 'Infographics', description: 'Visual assets that simplify technical resilience concepts.', href: '/resources/infographics' },
  { title: 'FAQs', description: 'Answers to frequently asked programme and platform questions.', href: '/resources/faqs' },
  { title: 'Maps', description: 'Interactive map tools and spatial intelligence references.', href: '/resources/maps' },
  { title: 'Policy Briefs', description: 'Short policy notes for strategic decision-making.', href: '/resources/policy-briefs' },
  { title: 'Media Kit', description: 'Logos, approved imagery, and communications assets.', href: '/resources/media-kit' },
]

export default function ResourcesPage() {
  return (
    <div className="relative overflow-hidden">
      <PageAtmosphere variant="resources" />
      <ReadingProgress />

      <section className="relative min-h-[56vh] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_banner.png"
            alt="GCRFIP resources library"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#02163f]/92 via-[#03245a]/78 to-[#02122e]/84" />

        <div className="relative container-custom py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200 mb-3">Resources</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">National Resilience Knowledge Library</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mb-8">
            Explore the national library of documents, data, and technical tools supporting flood resilience delivery.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/resources/downloads" className="cta-button">Open Document Library</Link>
            <Link href="/resources/maps" className="chip border-white/60 text-white bg-white/10 hover:bg-white hover:text-gcrfip-navy">
              Explore Maps
            </Link>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding">
        {resourceGroups.map((group) => (
          <section key={group.category} className="section-block">
            <div className="mb-5">
              <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-2">{group.category}</h2>
              <p className="text-gray-700">{group.lead}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {group.items.map((item) => (
                <Link key={item.title} href={item.href} className="card p-6 ui-transition hover:-translate-y-0.5 border-t-4 border-gcrfip-green/70">
                  <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <span className="text-gcrfip-green font-semibold">Open Resource &gt;</span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Browse the Library</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {librarySections.map((section) => (
              <Link key={section.title} href={section.href} className="card p-6 ui-transition hover:-translate-y-0.5">
                <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{section.title}</h3>
                <p className="text-gray-700 mb-4">{section.description}</p>
                <span className="text-gcrfip-green font-semibold">Browse Section &gt;</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section-block rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#02214f] via-[#033e74] to-[#075985]" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200 mb-2">Need Specific Support?</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Request Targeted Resources for Your Team</h2>
              <p className="text-gray-100">
                Contact us for curated resource packs, technical briefs, and stakeholder-ready materials.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact/general-enquiries" className="cta-button bg-white text-gcrfip-navy hover:bg-gcrfip-gold hover:text-gcrfip-navy">
                Request Resources
              </Link>
              <Link href="/resources/media-kit" className="chip border-white/60 text-white bg-white/10 hover:bg-white hover:text-gcrfip-navy">
                Open Media Kit
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
