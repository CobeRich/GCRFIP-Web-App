'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ReadingProgress from '../../components/layout/ReadingProgress'
import PageAtmosphere from '../../components/layout/PageAtmosphere'
import VideoPlayer from '../../components/resources/VideoPlayer'
import { videoLibrary } from './videos/video-library'

const heroAssetVersion = '20260701'
type FloodGalleryCategory =
  | 'Urban Flooding'
  | 'Transport Disruption'
  | 'Rescue Response'
  | 'Infrastructure Damage'
  | 'Communities at Risk'
  | 'Economic Disruption'
  | 'Recovery & Community Response'

type FloodGalleryItem = {
  src: string
  title: string
  category: FloodGalleryCategory
  caption: string
  location: string
  year: string
}

type FloodComparison = {
  id: string
  title: string
  description: string
  beforeLabel: string
  afterLabel: string
  beforeImage: string
  afterImage: string
}

const archiveStats = [
  { value: '12', label: 'Flood Photographs' },
  { value: '6', label: 'Flood Categories' },
  { value: '4', label: 'Comparison Studies' },
  { value: '2018-2026', label: 'Coverage Period' },
]

const galleryMapLocations = ['Accra', 'Kumasi', 'Tamale', 'Sekondi', 'Takoradi', 'Ho', 'Koforidua']
const gallerySearchTags = ['Accra', 'Kumasi', 'Rescue', 'Roads', 'Bridge', 'Markets', '2024', 'Infrastructure']

const floodGalleryFilters: Array<'All' | FloodGalleryCategory> = [
  'All',
  'Urban Flooding',
  'Transport Disruption',
  'Rescue Response',
  'Infrastructure Damage',
  'Communities at Risk',
  'Economic Disruption',
  'Recovery & Community Response',
]

const floodGalleryItems: FloodGalleryItem[] = [
  { src: '/images/flood_gallery1.png', title: 'Urban Flooding', category: 'Urban Flooding', caption: 'Rising water in built-up neighbourhoods shows how quickly storm runoff can overwhelm drainage and everyday movement.', location: 'Accra', year: '2024' },
  { src: '/images/flood_gallery2.png', title: 'Transport Disruption', category: 'Transport Disruption', caption: 'Flooded roads can isolate communities, delay emergency services, and interrupt daily economic activity.', location: 'Kumasi', year: '2024' },
  { src: '/images/flood_gallery3.png', title: 'Economic Disruption', category: 'Economic Disruption', caption: 'Urban runoff around homes and roadside structures quickly turns into stalled livelihoods and interrupted trade.', location: 'Sekondi', year: '2023' },
  { src: '/images/flood_gallery4.png', title: 'Communities at Risk', category: 'Communities at Risk', caption: 'Floodwater spreading through low-lying neighbourhood corridors keeps families exposed to repeated seasonal risk.', location: 'Volta Region', year: '2024' },
  { src: '/images/flood_gallery5.png', title: 'Rescue Response', category: 'Rescue Response', caption: 'Emergency responders moving through floodwater underline the urgency of rapid coordination and safe access.', location: 'Tamale', year: '2024' },
  { src: '/images/flood_gallery6.png', title: 'Recovery & Community Response', category: 'Recovery & Community Response', caption: 'Flood-affected streets reveal the difficult recovery phase communities enter once the water begins to recede.', location: 'Accra', year: '2023' },
  { src: '/images/flood_gallery7.png', title: 'Infrastructure Damage', category: 'Infrastructure Damage', caption: 'Drainage pressure builds when water starts to overrun the systems meant to carry it away safely.', location: 'Eastern Region', year: '2024' },
  { src: '/images/flood_gallery8.png', title: 'Communities at Risk', category: 'Communities at Risk', caption: 'Residents in low-lying areas remain exposed when water rises around homes, public spaces, and walkways.', location: 'Northern Region', year: '2023' },
  { src: '/images/flood_gallery9.png', title: 'Infrastructure Damage', category: 'Infrastructure Damage', caption: 'Water intrusion near roads, buildings, and drainage systems weakens the infrastructure meant to protect communities.', location: 'Accra', year: '2024' },
  { src: '/images/flood_gallery10.png', title: 'Transport Disruption', category: 'Transport Disruption', caption: 'Surface flooding can cut off access for residents, responders, and the movement of essential goods.', location: 'Koforidua', year: '2024' },
  { src: '/images/flood_gallery11.png', title: 'Economic Disruption', category: 'Economic Disruption', caption: 'Flood-affected roads slow relief and recovery while also delaying work, trade, and school travel.', location: 'Ho', year: '2024' },
  { src: '/images/flood_gallery12.png', title: 'Urban Flooding', category: 'Urban Flooding', caption: 'Widespread inundation shows the scale of urban flood vulnerability when rainfall and drainage fall out of balance.', location: 'Accra', year: '2024' },
]

const floodComparisons: FloodComparison[] = [
  {
    id: 'urban-comparison',
    title: 'Urban Flood Progression',
  description: 'A side-by-side comparison of how surface water intensifies across an urban corridor during heavy rainfall.',
  beforeLabel: 'Before',
  afterLabel: 'After',
    beforeImage: '/images/flood_gallery1.png',
    afterImage: '/images/flood_gallery12.png',
  },
  {
    id: 'transport-comparison',
    title: 'Transport Disruption Progression',
  description: 'A comparison of how road access shifts from difficult to severely constrained as floodwaters rise.',
  beforeLabel: 'Before',
  afterLabel: 'After',
    beforeImage: '/images/flood_gallery2.png',
    afterImage: '/images/flood_gallery10.png',
  },
]

const comparisonResearchLinks: Record<string, Array<{ label: string; href: string }>> = {
  'urban-comparison': [
    { label: 'Urban Flood Risk Assessment', href: '/resources/reports' },
    { label: 'Flood Hazard Maps', href: '/resources/maps' },
    { label: 'Open Data Portal', href: '/research/open-data' },
  ],
  'transport-comparison': [
  { label: 'Transport Corridor Risk Notes', href: '/resources/reports' },
  { label: 'Critical Access Maps', href: '/resources/maps' },
  { label: 'Emergency Routing Guide', href: '/resources/downloads' },
  ],
}

const galleryResearchByCategory: Record<FloodGalleryCategory, Array<{ label: string; href: string }>> = {
  'Urban Flooding': [
    { label: 'Urban Flood Risk Assessment', href: '/resources/reports' },
    { label: 'Flood Hazard Maps', href: '/resources/maps' },
    { label: 'Open Data Portal', href: '/research/open-data' },
  ],
  'Transport Disruption': [
  { label: 'Road Network Risk Notes', href: '/resources/reports' },
  { label: 'Transport Corridor Maps', href: '/resources/maps' },
  { label: 'Emergency Routing Guidance', href: '/resources/downloads' },
  ],
  'Rescue Response': [
    { label: 'Emergency Response Report', href: '/resources/reports' },
  { label: 'Operational Briefing Materials', href: '/resources/downloads' },
  { label: 'Flood Intelligence Workflows', href: '/research/flood-intelligence' },
  ],
  'Infrastructure Damage': [
    { label: 'Infrastructure Resilience Report', href: '/resources/reports' },
  { label: 'Critical Assets Map', href: '/resources/maps' },
  { label: 'Technical Guides', href: '/resources/downloads' },
  ],
  'Communities at Risk': [
    { label: 'Community Vulnerability Study', href: '/resources/reports' },
    { label: 'Flood Exposure Mapping', href: '/resources/maps' },
    { label: 'Preparedness Materials', href: '/resources/training-materials' },
  ],
  'Economic Disruption': [
    { label: 'Economic Impact Assessment', href: '/resources/reports' },
    { label: 'Recovery Planning Brief', href: '/resources/downloads' },
    { label: 'National Resilience Outlook', href: '/programme/overview' },
  ],
  'Recovery & Community Response': [
  { label: 'Recovery Lessons Report', href: '/resources/reports' },
  { label: 'Community Response Toolkit', href: '/resources/training-materials' },
  { label: 'Flood Recovery Media', href: '/resources/videos' },
  ],
}

const resourceGroups = [
  {
    category: 'Documents',
    lead: 'Programme strategy, execution, and governance documentation.',
    items: [
      { title: 'Executive Portfolio', description: 'High-level programme direction and strategic intent.', href: '/resources/downloads' },
      { title: 'Summary Report', description: 'Summary of GCRFIP\'s Technical Blueprint and key insights.', href: '/resources/downloads' },
      { title: 'Programme Prospectus', description: 'Detailed implementation framing and partner opportunities.', href: '/resources/downloads' },
      { title: 'Founder Roadmap', description: 'Long-horizon delivery milestones and institutional progression.', href: '/resources/downloads' },
      { title: 'Blueprint Summary', description: 'Technical architecture overview for resilience systems.', href: '/resources/downloads' },
      { title: 'National Roadmap', description: 'Strategic direction for national resilience initiatives.', href: '/resources/downloads' },
      { title: 'Implementation Strategy', description: 'Actionable plans for programme execution and impact.', href: '/resources/downloads' },
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
  { title: 'Flood Gallery', description: 'A curated archive of real flood photographs from Ghana.', href: '/resources#flood-gallery' },
  { title: 'Reports', description: 'Research and analytical products for evidence-led action.', href: '/resources/reports' },
  { title: 'Downloads', description: 'Strategic files, guides, and datasets for immediate use.', href: '/resources/downloads' },
  { title: 'Maps', description: 'Interactive map tools and spatial intelligence references.', href: '/resources/maps' },
  { title: 'Videos', description: 'Recorded briefings, webinars, and explanatory media.', href: '/resources/videos' },
  { title: 'Training Materials', description: 'Capacity-building resources for teams and communities.', href: '/resources/training-materials' },
  { title: 'Infographics', description: 'Visual assets that simplify technical resilience concepts.', href: '/resources/infographics' },
  { title: 'Policy Briefs', description: 'Short policy notes for strategic decision-making.', href: '/resources/policy-briefs' },
  { title: 'FAQs', description: 'Answers to frequently asked programme and platform questions.', href: '/resources/faqs' },
  { title: 'Media Kit', description: 'Logos, approved imagery, and communications assets.', href: '/resources/media-kit' },
]

export default function ResourcesPage() {
  const [activeFloodFilter, setActiveFloodFilter] = useState<'All' | FloodGalleryCategory>('All')
  const [selectedFloodImage, setSelectedFloodImage] = useState<FloodGalleryItem | null>(null)
  const [comparisonPositions, setComparisonPositions] = useState<Record<string, number>>({
    'urban-comparison': 50,
    'transport-comparison': 50,
  })

  const visibleFloodGallery =
    activeFloodFilter === 'All'
      ? floodGalleryItems
      : floodGalleryItems.filter((item) => item.category === activeFloodFilter)

  const featuredVideo = videoLibrary[6]

  return (
    <div className="relative overflow-hidden">
      <PageAtmosphere variant="resources" />
      <ReadingProgress />

      <section className="relative min-h-[56vh] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`/images/hero_resources.png?v=${heroAssetVersion}`}
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

      <div className="container-custom pt-10 md:pt-14">
        <section className="section-block">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6 items-stretch">
            <Link
              href="/resources#flood-gallery"
              className="group relative overflow-hidden rounded-2xl min-h-[320px] md:min-h-[420px] shadow-lg border border-[#d8e9f9] bg-[#0b2b56]"
            >
              <div className="absolute inset-0">
                <Image
                  src="/images/flood_gallery12.png"
                  alt="Featured flood gallery preview"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#02163f]/88 via-[#02163f]/55 to-transparent transition-all duration-300 group-hover:from-[#02163f]/92 group-hover:via-[#02163f]/65" />
              </div>

              <div className="relative z-10 h-full flex items-end p-6 md:p-8">
                <div className="max-w-2xl text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200 mb-2">Featured Gallery</p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">Real Floods. Real Communities. Real Need.</h2>
                  <p className="text-gray-100 max-w-xl mb-5">
                    Step into the full flood gallery to explore evidence, compare events, and connect the imagery to reports and research.
                  </p>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm border border-white/20">
                    Explore the Complete Gallery →
                  </span>
                </div>
              </div>
            </Link>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { src: '/images/flood_gallery1.png', label: 'Urban Flooding' },
                { src: '/images/flood_gallery2.png', label: 'Transport Disruption' },
                { src: '/images/flood_gallery5.png', label: 'Rescue Response' },
                { src: '/images/flood_gallery9.png', label: 'Infrastructure Damage' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href="/resources#flood-gallery"
                  className="group relative overflow-hidden rounded-2xl min-h-[150px] md:min-h-[200px] shadow-md border border-[#d8e9f9] bg-[#0b2b56]"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 18vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02163f]/80 via-[#02163f]/22 to-transparent transition-all duration-300 group-hover:from-[#02163f]/88 group-hover:via-[#02163f]/30" />
                  <div className="absolute inset-x-0 bottom-0 p-3 transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="container-custom pb-8 md:pb-12">
        <section className="section-block rounded-2xl border border-[#d8e9f9] bg-white p-6 md:p-8 shadow-sm">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 items-stretch">
            <div className="rounded-2xl overflow-hidden border border-[#dbeafe] bg-[#f7fbff] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Interactive Flood Map</p>
              <h2 className="text-3xl font-bold text-gcrfip-navy mb-3">National Flood Archive Map</h2>
              <p className="text-gray-700 mb-5">
                Search the gallery geographically and connect locations to reports, photos, and flood intelligence products.
              </p>

              <div className="rounded-2xl border border-[#dbeafe] bg-white p-4 mb-5">
                <label className="block text-sm font-semibold text-gcrfip-navy mb-2" htmlFor="gallery-search">
                  Search flood photographs
                </label>
                <input
                  id="gallery-search"
                  type="search"
                  placeholder="Accra, rescue, roads, 2024, bridge..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-gcrfip-green focus:outline-none"
                />
              </div>

              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-navy mb-3">Ghana Map</p>
                <div className="grid grid-cols-2 gap-2">
                  {galleryMapLocations.map((location) => (
                    <span key={location} className="inline-flex items-center justify-center rounded-full border border-[#dbeafe] bg-white px-3 py-2 text-sm font-semibold text-gcrfip-navy">
                      {location}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {gallerySearchTags.slice(0, 4).map((tag) => (
                  <span key={tag} className="meta-chip bg-[#edf6ff] text-gcrfip-navy border border-[#dbeafe]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <Link href="/resources#flood-gallery" className="cta-button text-center">Open Gallery</Link>
                <Link href="/resources/maps" className="chip chip-muted justify-center">Open Maps</Link>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {archiveStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#dbeafe] bg-[#f7fbff] p-5 text-center flex flex-col justify-center min-h-[150px] shadow-sm">
                  <p className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-2">{stat.value}</p>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-700">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div id="flood-gallery" className="container-custom section-padding">
        <section className="section-block rounded-2xl border border-[#d8e9f9] bg-[#f7fbff] p-6 md:p-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Flood Gallery</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-3">Real Flood Events Across Ghana</h2>
            <p className="text-gray-700">
              Explore real flood photographs as a national evidence repository. Click any image for a larger view,
              caption details, and related research links.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {floodGalleryFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFloodFilter(filter)}
                className={`chip ${activeFloodFilter === filter ? 'chip-active' : 'chip-muted'}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleFloodGallery.map((item) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setSelectedFloodImage(item)}
                className="group card overflow-hidden border border-[#dbeafe] text-left ui-transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-52">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02163f]/72 via-[#02163f]/20 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
                  <div className="absolute bottom-4 left-4 right-4 transition-transform duration-500 group-hover:-translate-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 mb-1">{item.category}</p>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-gray-100 mt-1">{item.location} · {item.year}</p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">{item.caption}</p>
                  <span className="mt-3 inline-flex text-gcrfip-green font-semibold">Open image details &gt;</span>
                </div>
              </button>
            ))}
          </div>

          <p className="mt-6 text-sm italic text-gray-600 text-center">
            Images used for public awareness and flood-risk communication.
          </p>
        </section>
      </div>

      {selectedFloodImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 md:p-6 flex items-center justify-center"
          onClick={() => setSelectedFloodImage(null)}
        >
          <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-[560px] bg-slate-100">
                <Image src={selectedFloodImage.src} alt={selectedFloodImage.caption} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">{selectedFloodImage.category}</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-gcrfip-navy">{selectedFloodImage.title}</h3>
                  </div>
                  <button type="button" onClick={() => setSelectedFloodImage(null)} className="chip chip-muted">
                    Close
                  </button>
                </div>

                <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">{selectedFloodImage.location} · {selectedFloodImage.year}</p>
                <p className="text-gray-700 leading-relaxed mb-6">{selectedFloodImage.caption}</p>

                <div className="rounded-2xl border border-[#d8e9f9] bg-[#f7fbff] p-5 mb-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-navy mb-2">Image note</p>
                  <p className="text-gray-700 text-sm">Public awareness image from the GCRFIP flood gallery.</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-navy mb-3">Related Research</p>
                  <div className="grid gap-3">
                    {galleryResearchByCategory[selectedFloodImage.category].map((research) => (
                      <Link key={research.label} href={research.href} className="card p-4 ui-transition hover:-translate-y-0.5 border border-[#dbeafe] group">
                        <span className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Related Research</span>
                        <span className="text-gcrfip-green font-semibold group-hover:translate-x-1 transition-transform inline-flex">{research.label} &gt;</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/resources/reports" className="cta-button">Open Reports</Link>
                  <Link href="/resources/maps" className="chip chip-muted">Explore Maps</Link>
                  <Link href="/research/open-data" className="chip chip-muted">Open Data</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container-custom pb-8 md:pb-12">
        <section className="section-block rounded-2xl border border-[#d8e9f9] bg-white p-6 md:p-8 shadow-sm">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Video Preview</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-3">Sample GCRFIP Media Library</h2>
              <p className="text-gray-700 mb-5 max-w-2xl">
                Watch a sample GCRFIP video asset directly from the resource library. This preview now gives the Videos section a real media experience instead of a placeholder-only listing.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/resources/videos" className="cta-button">Open Video Library</Link>
                <Link href="/contact/social-media" className="chip chip-muted">View Media Channels</Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#dbeafe] bg-[#02163f] p-3 shadow-sm">
              <VideoPlayer
                src={featuredVideo.src}
                poster={featuredVideo.poster}
                title={featuredVideo.title}
                className="w-full rounded-xl bg-black aspect-video"
              />
            </div>
          </div>
        </section>

        <section className="section-block rounded-2xl border border-[#d8e9f9] bg-white p-6 md:p-8 shadow-sm">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Before & After</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-3">Compare flood impact over time</h2>
            <p className="text-gray-700">
              Use the slider to compare selected flood scenes from the gallery and understand how impacts change as water levels rise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-4">
            {floodComparisons.map((comparison) => {
              const position = comparisonPositions[comparison.id] ?? 50

              return (
                <article key={comparison.id} className="overflow-hidden rounded-2xl border border-[#dbeafe] bg-[#f7fbff] shadow-sm">
                  <div className="p-5 border-b border-[#dbeafe] bg-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gcrfip-green mb-2">Comparison Slider</p>
                    <h3 className="text-2xl font-bold text-gcrfip-navy mb-2">{comparison.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{comparison.description}</p>
                  </div>

                  <div className="relative h-[360px] md:h-[420px] overflow-hidden bg-slate-100">
                    <Image src={comparison.beforeImage} alt={comparison.beforeLabel} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />

                    <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
                      <Image src={comparison.afterImage} alt={comparison.afterLabel} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#02163f]/35 via-transparent to-transparent" />

                    <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-white/90 shadow-md" style={{ left: `${position}%` }} />
                    <div className="absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 flex items-center justify-center" style={{ left: `${position}%` }}>
                      <div className="h-8 w-8 rounded-full border-2 border-white bg-gcrfip-navy shadow-lg" />
                    </div>

                    <div className="absolute top-4 left-4 right-4 flex justify-between gap-3 text-white text-sm font-semibold">
                      <span className="rounded-full bg-gcrfip-navy/75 px-3 py-1 backdrop-blur">{comparison.beforeLabel}</span>
                      <span className="rounded-full bg-gcrfip-navy/75 px-3 py-1 backdrop-blur">{comparison.afterLabel}</span>
                    </div>
                  </div>

                  <div className="p-5 bg-white border-t border-[#dbeafe]">
                    <label className="block text-sm font-semibold text-gcrfip-navy mb-2" htmlFor={`${comparison.id}-slider`}>
                      Move the slider
                    </label>
                    <input
                      id={`${comparison.id}-slider`}
                      type="range"
                      min="0"
                      max="100"
                      value={position}
                      onChange={(event) =>
                        setComparisonPositions((current) => ({
                          ...current,
                          [comparison.id]: Number(event.target.value),
                        }))
                      }
                      aria-label={`${comparison.title} before and after comparison slider`}
                      className="w-full accent-[#0f4c81]"
                    />
                    <p className="mt-3 text-sm text-gray-600">Template comparison using current flood gallery images.</p>
                  </div>

                  <div className="px-5 pb-5 bg-white border-t border-[#dbeafe]">
                    <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-navy mb-3">Related Research</p>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {comparisonResearchLinks[comparison.id].map((item) => (
                        <Link key={item.label} href={item.href} className="card p-4 ui-transition hover:-translate-y-0.5 border border-[#dbeafe] bg-white group">
                          <span className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Related Research</span>
                          <span className="text-gcrfip-green font-semibold group-hover:translate-x-1 transition-transform inline-flex">{item.label} &gt;</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </div>

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
              <p className="text-gray-100">Contact us for curated resource packs, technical briefs, and stakeholder-ready materials.</p>
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
