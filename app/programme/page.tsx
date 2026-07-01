'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import ReadingProgress from '../../components/layout/ReadingProgress'
import PageAtmosphere from '../../components/layout/PageAtmosphere'

const heroAssetVersion = '20260701'

type TimelineItem = {
  year: string
  phase: string
  detail: string[]
}

type PillarItem = {
  number: string
  title: string
  summary: string
  href: string
}

type EcosystemKey = 'science' | 'government' | 'communities' | 'infrastructure'

const pillars: PillarItem[] = [
  {
    number: '1',
    title: 'Community Resilience',
    summary: 'Local preparedness systems and participatory adaptation pathways.',
    href: '/programme/pillars/1',
  },
  {
    number: '2',
    title: 'Science and Innovation',
    summary: 'Research-led insights, modeling, and operational intelligence tools.',
    href: '/programme/pillars/2',
  },
  {
    number: '3',
    title: 'National Coordination',
    summary: 'Institutional alignment and shared decision architecture.',
    href: '/programme/pillars/3',
  },
  {
    number: '4',
    title: 'Health and Safety Readiness',
    summary: 'Risk-informed health protection and emergency preparedness systems.',
    href: '/programme/pillars/4',
  },
  {
    number: '5',
    title: 'Resilient Infrastructure',
    summary: 'Infrastructure planning designed for future climate pressures.',
    href: '/programme/pillars/5',
  },
  {
    number: '6',
    title: 'Sustainable Growth and Investment',
    summary: 'Long-term resilience financing and development integration.',
    href: '/programme/pillars/6',
  },
]

const timeline: TimelineItem[] = [
  {
    year: '2026',
    phase: 'Launch and Alignment',
    detail: ['National setup and governance alignment', 'Baseline studies', 'Partner onboarding'],
  },
  {
    year: '2027',
    phase: 'Systems Build',
    detail: ['Flood intelligence platform build-out', 'Early warning pilots', 'Regional training starts'],
  },
  {
    year: '2028',
    phase: 'Scale',
    detail: ['Regional expansion', 'National Flood Intelligence Platform', 'Pilot Digital Twin and capacity building'],
  },
  {
    year: '2030',
    phase: 'Optimization',
    detail: ['Data-driven refinement', 'Policy and planning integration', 'Institutional performance scaling'],
  },
  {
    year: '2035',
    phase: 'National Resilience Maturity',
    detail: ['Nationwide predictive ecosystem', 'Regional center leadership', 'Long-horizon resilience outcomes'],
  },
]

const programmeDocuments = [
  {
    title: 'Executive Portfolio',
    description: 'High-level strategic narrative and delivery model.',
    readHref: '/programme/executive-portfolio',
    cover: '/images/hero_programme.png',
  },
  {
    title: 'Blueprint',
    description: 'Technical and operational architecture overview.',
    readHref: '/programme/blueprint',
    cover: '/images/gcrfip_pillars.png',
  },
  {
    title: 'Prospectus',
    description: 'Programme case and investment pathway.',
    readHref: '/programme/prospectus',
    cover: '/images/hero_programme.png',
  },
  {
    title: 'National Roadmap',
    description: 'Phased implementation priorities and outcomes.',
    readHref: '/programme/national-roadmap',
    cover: '/images/gcrfip_pillars.png',
  },
  {
    title: 'Implementation Strategy',
    description: 'Execution framework and governance approach.',
    readHref: '/programme/implementation-strategy',
    cover: '/images/hero_programme.png',
  },
]

const architectureLayers = [
  'Earth Observation',
  'National Platform',
  'Regions',
  'Districts',
  'Communities',
  'Citizens',
]

const governanceFlow = [
  'Government',
  'National Steering Committee',
  'Programme Office',
  'Research Institutions',
  'Regional Authorities',
  'Communities',
]

const roadmapFlow = [
  'Vision',
  'Foundation',
  'Research',
  'Technology',
  'Partnerships',
  'Implementation',
  'National Scale',
  'African Leadership',
]

const ecosystemDomains: Record<
  EcosystemKey,
  {
    label: string
    blurb: string
    highlights: string[]
    links: { title: string; href: string }[]
  }
> = {
  science: {
    label: 'Science',
    blurb: 'Transforms observation and research into predictive intelligence for national action.',
    highlights: ['Pillar 2: Science and Innovation', 'Research Collaboration', 'Digital Twin and Earth Observation'],
    links: [
      { title: 'Science and Innovation Pillar', href: '/programme/pillars/2' },
      { title: 'Research and Innovation', href: '/research' },
      { title: 'Digital Twin', href: '/research/digital-twin' },
    ],
  },
  government: {
    label: 'Government',
    blurb: 'Aligns institutions, governance, policy, and coordinated response pathways.',
    highlights: ['Pillar 3: National Coordination', 'Governance and Policy Integration', 'Decision Support and Steering'],
    links: [
      { title: 'National Coordination Pillar', href: '/programme/pillars/3' },
      { title: 'Implementation Strategy', href: '/programme/implementation-strategy' },
      { title: 'Governance Snapshot', href: '/about/governance' },
    ],
  },
  communities: {
    label: 'Communities',
    blurb: 'Anchors resilience in local preparedness, public safety, and inclusive adaptation.',
    highlights: ['Pillar 1: Community Resilience', 'Pillar 4: Health and Safety Readiness', 'Capacity Building and Local Response'],
    links: [
      { title: 'Community Resilience Pillar', href: '/programme/pillars/1' },
      { title: 'Health and Safety Readiness Pillar', href: '/programme/pillars/4' },
      { title: 'Training Materials', href: '/resources/training-materials' },
    ],
  },
  infrastructure: {
    label: 'Infrastructure',
    blurb: 'Connects resilient systems planning with long-term investment and national growth.',
    highlights: ['Pillar 5: Resilient Infrastructure', 'Pillar 6: Sustainable Growth and Investment', 'Infrastructure Risk and Adaptation Planning'],
    links: [
      { title: 'Resilient Infrastructure Pillar', href: '/programme/pillars/5' },
      { title: 'Sustainable Growth and Investment Pillar', href: '/programme/pillars/6' },
      { title: 'National Roadmap', href: '/programme/national-roadmap' },
    ],
  },
}

function StatCounter({ target, suffix, label }: { target: number; suffix?: string; label: string }) {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!visible) return

    let frame = 0
    const duration = 900
    const stepMs = 20
    const totalFrames = Math.ceil(duration / stepMs)

    const timer = setInterval(() => {
      frame += 1
      const progress = Math.min(frame / totalFrames, 1)
      setValue(Math.round(target * progress))
      if (progress >= 1) clearInterval(timer)
    }, stepMs)

    return () => clearInterval(timer)
  }, [visible, target])

  return (
    <div
      className="card p-6"
      ref={(node) => {
        if (!node || visible) return
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0]?.isIntersecting) {
              setVisible(true)
              observer.disconnect()
            }
          },
          { threshold: 0.35 }
        )
        observer.observe(node)
      }}
    >
      <p className="text-4xl font-bold text-gcrfip-navy mb-2">
        {value}
        {suffix || ''}
      </p>
      <p className="text-gray-700">{label}</p>
    </div>
  )
}

export default function ProgrammePage() {
  const [selectedYear, setSelectedYear] = useState('2026')
  const [activeEcosystem, setActiveEcosystem] = useState<EcosystemKey>('science')

  const activeTimeline = useMemo(
    () => timeline.find((item) => item.year === selectedYear) || timeline[0],
    [selectedYear]
  )

  const activeEcosystemData = ecosystemDomains[activeEcosystem]

  return (
    <div className="relative overflow-hidden">
      <PageAtmosphere variant="programme" />

      <ReadingProgress />

      <section className="relative min-h-[62vh] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`/images/hero_programme.png?v=${heroAssetVersion}`}
            alt="Programme hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#02163f]/92 via-[#03245a]/78 to-[#02122e]/84" />

        <div className="relative container-custom py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200 mb-3">Programme</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">Building Ghana's National Flood Resilience Ecosystem</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-4xl mb-8">
            A long-term national programme integrating science, technology, governance, infrastructure, and
            communities to create a safer, climate-resilient Ghana.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/programme/blueprint" className="cta-button">Explore the Blueprint</Link>
            <Link href="/programme/national-roadmap" className="chip border-white/60 text-white bg-white/10 hover:bg-white hover:text-gcrfip-navy">
              View the Roadmap
            </Link>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding relative">
        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Programme Overview: Connected System</h2>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <div className="grid md:grid-cols-6 gap-3 items-center text-center">
              {['Research', 'Observation', 'Intelligence', 'Decision Support', 'Action', 'Community Resilience'].map((step, idx) => (
                <div key={step} className="relative">
                  <div className="card p-4 ui-transition hover:-translate-y-0.5">
                    <p className="font-semibold text-gcrfip-navy text-sm md:text-base">{step}</p>
                  </div>
                  {idx < 5 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-gcrfip-green font-bold">&gt;</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Six Strategic Pillars</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            GCRFIP is an integrated system. Each pillar is distinct, but all pillars operate together around one shared national mission.
          </p>

          <div className="hidden lg:grid grid-cols-3 gap-5 items-center max-w-6xl mx-auto">
            <Link href={pillars[1].href} className="card p-5 text-center ui-transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-xs text-gcrfip-green font-semibold mb-1">PILLAR 2</p>
              <h3 className="font-bold text-gcrfip-navy mb-1">{pillars[1].title}</h3>
              <p className="text-sm text-gray-700">{pillars[1].summary}</p>
            </Link>
            <div className="text-center">
              <div className="mx-auto h-40 w-40 rounded-full border-4 border-gcrfip-green/40 bg-[#edf6ff] flex items-center justify-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gcrfip-green">Integrated Core</p>
                  <p className="text-2xl font-bold text-gcrfip-navy">GCRFIP</p>
                </div>
              </div>
            </div>
            <Link href={pillars[4].href} className="card p-5 text-center ui-transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-xs text-gcrfip-green font-semibold mb-1">PILLAR 5</p>
              <h3 className="font-bold text-gcrfip-navy mb-1">{pillars[4].title}</h3>
              <p className="text-sm text-gray-700">{pillars[4].summary}</p>
            </Link>

            <Link href={pillars[0].href} className="card p-5 text-center ui-transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-xs text-gcrfip-green font-semibold mb-1">PILLAR 1</p>
              <h3 className="font-bold text-gcrfip-navy mb-1">{pillars[0].title}</h3>
              <p className="text-sm text-gray-700">{pillars[0].summary}</p>
            </Link>
            <div className="text-center text-gcrfip-green font-semibold">System Integration</div>
            <Link href={pillars[3].href} className="card p-5 text-center ui-transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-xs text-gcrfip-green font-semibold mb-1">PILLAR 4</p>
              <h3 className="font-bold text-gcrfip-navy mb-1">{pillars[3].title}</h3>
              <p className="text-sm text-gray-700">{pillars[3].summary}</p>
            </Link>

            <Link href={pillars[5].href} className="card p-5 text-center ui-transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-xs text-gcrfip-green font-semibold mb-1">PILLAR 6</p>
              <h3 className="font-bold text-gcrfip-navy mb-1">{pillars[5].title}</h3>
              <p className="text-sm text-gray-700">{pillars[5].summary}</p>
            </Link>
            <div />
            <Link href={pillars[2].href} className="card p-5 text-center ui-transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-xs text-gcrfip-green font-semibold mb-1">PILLAR 3</p>
              <h3 className="font-bold text-gcrfip-navy mb-1">{pillars[2].title}</h3>
              <p className="text-sm text-gray-700">{pillars[2].summary}</p>
            </Link>
          </div>

          <div className="lg:hidden grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <Link key={pillar.number} href={pillar.href} className="card p-5 ui-transition hover:-translate-y-0.5">
                <p className="text-xs text-gcrfip-green font-semibold mb-1">PILLAR {pillar.number}</p>
                <h3 className="font-bold text-gcrfip-navy mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-700 mb-3">{pillar.summary}</p>
                <span className="text-gcrfip-green font-semibold">Learn More &gt;</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section-block grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-5">Interactive Programme Ecosystem</h2>
            <p className="text-gray-700 mb-6">
              Select a domain to see how the programme connects pillars, systems, and delivery pathways into one national resilience engine.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="relative mx-auto w-full max-w-md h-72">
                <button
                  type="button"
                  onClick={() => setActiveEcosystem('communities')}
                  className={`absolute top-0 left-1/2 -translate-x-1/2 chip ${
                    activeEcosystem === 'communities' ? 'chip-active' : 'chip-muted'
                  }`}
                >
                  Communities
                </button>

                <button
                  type="button"
                  onClick={() => setActiveEcosystem('infrastructure')}
                  className={`absolute top-1/2 left-0 -translate-y-1/2 chip ${
                    activeEcosystem === 'infrastructure' ? 'chip-active' : 'chip-muted'
                  }`}
                >
                  Infrastructure
                </button>

                <button
                  type="button"
                  onClick={() => setActiveEcosystem('science')}
                  className={`absolute top-1/2 right-0 -translate-y-1/2 chip ${
                    activeEcosystem === 'science' ? 'chip-active' : 'chip-muted'
                  }`}
                >
                  Science
                </button>

                <button
                  type="button"
                  onClick={() => setActiveEcosystem('government')}
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 chip ${
                    activeEcosystem === 'government' ? 'chip-active' : 'chip-muted'
                  }`}
                >
                  Government
                </button>

                <div className="absolute inset-0 m-auto h-28 w-28 rounded-full border-4 border-gcrfip-green/40 bg-[#edf6ff] flex items-center justify-center">
                  <p className="text-xl font-bold text-gcrfip-navy">GCRFIP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Active Domain</p>
            <h3 className="text-2xl font-bold text-gcrfip-navy mb-3">{activeEcosystemData.label}</h3>
            <p className="text-gray-700 mb-5">{activeEcosystemData.blurb}</p>

            <div className="space-y-2 mb-5">
              {activeEcosystemData.highlights.map((item) => (
                <p key={item} className="text-gray-700">
                  - {item}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {activeEcosystemData.links.map((link) => (
                <Link key={link.title} href={link.href} className="chip chip-muted">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-5">Programme Timeline</h2>
            <p className="text-gray-700 mb-6">Select a milestone year to expand key programme outcomes and delivery priorities.</p>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="flex flex-wrap gap-2 mb-5">
                {timeline.map((item) => (
                  <button
                    key={item.year}
                    onClick={() => setSelectedYear(item.year)}
                    className={`chip ${selectedYear === item.year ? 'chip-active' : 'chip-muted'}`}
                    type="button"
                  >
                    {item.year}
                  </button>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gcrfip-navy mb-2">{activeTimeline.year}: {activeTimeline.phase}</h3>
              <ul className="space-y-2 text-gray-700">
                {activeTimeline.detail.map((line) => (
                  <li key={line}>- {line}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-5">How GCRFIP Works</h2>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              {['Observation', 'Monitoring', 'Forecasting', 'Risk Analysis', 'Decision Support', 'Government Action', 'Community Response'].map(
                (stage, idx, arr) => (
                  <div key={stage} className="text-center">
                    <div className="card p-3 mb-2">
                      <p className="font-semibold text-gcrfip-navy">{stage}</p>
                    </div>
                    {idx < arr.length - 1 && <div className="text-gcrfip-green font-bold mb-2">v</div>}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Expected National Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCounter target={50} suffix="%" label="Flood Loss Reduction" />
            <StatCounter target={16} label="Regional Coverage" />
            <StatCounter target={100} suffix="+" label="Strategic Partners" />
            <StatCounter target={2035} label="Long-term National Vision" />
          </div>
        </section>

        <section className="section-block grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">National Architecture Snapshot</h2>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              {architectureLayers.map((layer, idx) => (
                <div key={layer} className="text-center">
                  <div className="card p-3 mb-2">
                    <p className="font-semibold text-gcrfip-navy">{layer}</p>
                  </div>
                  {idx < architectureLayers.length - 1 && <div className="text-gcrfip-green font-bold mb-2">^</div>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Governance Snapshot</h2>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              {governanceFlow.map((node, idx) => (
                <div key={node} className="text-center">
                  <div className="card p-3 mb-2">
                    <p className="font-semibold text-gcrfip-navy">{node}</p>
                  </div>
                  {idx < governanceFlow.length - 1 && <div className="text-gcrfip-green font-bold mb-2">v</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Programme Roadmap</h2>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <div className="grid md:grid-cols-4 gap-4 items-center">
              {roadmapFlow.map((step, idx) => (
                <div key={step} className="relative card p-4 text-center">
                  <p className="font-semibold text-gcrfip-navy">{step}</p>
                  {idx < roadmapFlow.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-gcrfip-green font-bold">&gt;</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Programme Documents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programmeDocuments.map((doc) => (
              <article key={doc.title} className="card p-4 ui-transition hover:-translate-y-0.5">
                <div className="relative h-44 rounded-lg overflow-hidden mb-4">
                  <Image src={doc.cover} alt={doc.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{doc.title}</h3>
                <p className="text-gray-700 mb-4">{doc.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Link href={doc.readHref} className="chip chip-muted">Read Online</Link>
                  <Link href="/resources/downloads" className="chip chip-muted">Download PDF</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#02214f] via-[#033e74] to-[#075985]" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200 mb-2">Join the Journey</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Become Part of Ghana's Flood Resilience Journey</h2>
              <p className="text-gray-100">
                Government, universities, NGOs, private sector, students, and development partners all have a place in GCRFIP.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/get-involved/become-partner" className="cta-button bg-white text-gcrfip-navy hover:bg-gcrfip-gold hover:text-gcrfip-navy">
                Become a Strategic Partner
              </Link>
              <Link href="/resources/downloads" className="chip border-white/60 text-white bg-white/10 hover:bg-white hover:text-gcrfip-navy">
                Download Programme Documents
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
