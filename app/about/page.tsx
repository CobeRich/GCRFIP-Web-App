'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReadingProgress from '../../components/layout/ReadingProgress'
import PageAtmosphere from '../../components/layout/PageAtmosphere'

const heroAssetVersion = '20260701'

const philosophy = ['Prevent', 'Understand', 'Monitor', 'Predict', 'Protect', 'Strengthen']

const values = [
  { title: 'Integrity', detail: 'Transparent and accountable stewardship.' },
  { title: 'Innovation', detail: 'Practical, science-led problem solving.' },
  { title: 'Collaboration', detail: 'Cross-sector delivery through partnership.' },
  { title: 'Inclusiveness', detail: 'Community-centered participation and voice.' },
  { title: 'Sustainability', detail: 'Long-term resilience and development gains.' },
  { title: 'Scientific Excellence', detail: 'Evidence-driven decisions and standards.' },
]

const leaders = [
  { role: 'Richard Owusu', note: 'Founder: Strategic vision and programme direction' },
  { role: 'Scientific Director', note: 'Research quality and innovation pipeline' },
  { role: 'Programme Director', note: 'Implementation delivery and coordination' },
  { role: 'Advisory Board', note: 'Independent guidance and oversight' },
]

const milestones = [
  { year: '2026', phase: 'Concept', detail: 'National resilience concept and strategic framing.' },
  { year: '2027', phase: 'Consortium', detail: 'Institutional alignment and partner consortium formation.' },
  { year: '2028', phase: 'Pilot', detail: 'Pilot deployments and early warning workflow testing.' },
  { year: '2030', phase: 'National Rollout', detail: 'Scaled implementation across regions and sectors.' },
  { year: '2035', phase: 'African Centre', detail: 'Position Ghana as a regional resilience innovation hub.' },
]

const exploreCards = [
  {
    title: 'Leadership',
    description: 'Meet the team guiding national implementation and delivery.',
    href: '/about/leadership',
    image: `/images/gcrfip_about-leadership.png?v=${heroAssetVersion}`,
  },
  {
    title: 'Governance',
    description: 'Understand structures that ensure accountability and execution.',
    href: '/about/governance',
    image: `/images/gcrfip_about-governance.png?v=${heroAssetVersion}`,
  },
  {
    title: 'Strategic Partners',
    description: 'Explore institutions collaborating to scale resilience outcomes.',
    href: '/about/strategic-partners',
    image: `/images/gcrfip_about-partners.png?v=${heroAssetVersion}`,
  },
  {
    title: 'Advisory Board',
    description: 'See expert guidance supporting long-term programme quality.',
    href: '/about/advisory-board',
    image: `/images/gcrfip_about-advisoryboard.png?v=${heroAssetVersion}`,
  },
]

export default function AboutPage() {
  const [isDiagramOpen, setIsDiagramOpen] = useState(false)

  useEffect(() => {
    if (!isDiagramOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDiagramOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isDiagramOpen])

  return (
    <div className="relative overflow-hidden">
      <PageAtmosphere variant="about" />

      <ReadingProgress />

      <section className="relative min-h-[68vh] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`/images/hero_about.png?v=${heroAssetVersion}`}
            alt="About GCRFIP hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#02163f]/92 via-[#03245a]/78 to-[#02122e]/82" />

        <div className="relative container-custom py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200 mb-3">About GCRFIP</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">Building a Climate-Resilient Future for Ghana</h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8">
              A national initiative integrating science, technology, governance, and communities to transform flood resilience.
            </p>
            <Link href="/programme/blueprint" className="cta-button">
              Explore the Blueprint
            </Link>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding relative">
        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            GCRFIP is Ghana's integrated flood resilience platform, bringing together research institutions,
            public agencies, technical experts, and communities to deliver coordinated climate intelligence and risk reduction.
          </p>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Why GCRFIP Was Created</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Floods remain one of Ghana's most significant climate-related challenges. GCRFIP was created to move the country
            from fragmented reactive response to a unified, predictive, and prevention-focused national model.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="card p-6 border-t-4 border-gcrfip-green/70">
              <p className="text-3xl font-bold text-gcrfip-navy mb-2">Rising</p>
              <p className="text-gray-700">Flood event frequency in vulnerable corridors.</p>
            </div>
            <div className="card p-6 border-t-4 border-gcrfip-green/70">
              <p className="text-3xl font-bold text-gcrfip-navy mb-2">Millions</p>
              <p className="text-gray-700">Of citizens affected directly and indirectly.</p>
            </div>
            <div className="card p-6 border-t-4 border-gcrfip-green/70">
              <p className="text-3xl font-bold text-gcrfip-navy mb-2">Critical</p>
              <p className="text-gray-700">Infrastructure under increasing climate pressure.</p>
            </div>
            <div className="card p-6 border-t-4 border-gcrfip-green/70">
              <p className="text-3xl font-bold text-gcrfip-navy mb-2">Persistent</p>
              <p className="text-gray-700">Climate uncertainty requiring coordinated foresight.</p>
            </div>
          </div>
        </section>

        <section className="section-block grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden border border-[#d8e6f6] bg-gradient-to-b from-[#eef5ff] to-white shadow-sm">
            <div className="flex items-center justify-between gap-3 border-b border-[#d8e6f6] bg-white/80 px-4 py-3">
              {/* <p className="text-sm font-semibold text-gcrfip-navy">How GCRFIP Works Diagram</p> */}
              <a
                href="/images/gcrfip_aboutus.png"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gcrfip-green hover:text-gcrfip-navy"
              >
                Open Full Resolution
              </a>
            </div>

            <div className="px-3 py-3 md:px-4 md:py-4">
              <button
                type="button"
                onClick={() => setIsDiagramOpen(true)}
                className="group relative block w-full overflow-hidden rounded-lg border border-[#d8e6f6] bg-white"
                aria-label="Open workflow diagram in large view"
              >
                <Image
                  src="/images/gcrfip_aboutus.png"
                  alt="GCRFIP six-step workflow diagram"
                  width={1536}
                  height={1024}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 56vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#02163f]/80 px-3 py-1 text-xs font-semibold text-white shadow-sm transition-colors group-hover:bg-[#033b78]">
                  Click to zoom
                </span>
              </button>
            </div>

            {/* <div className="border-t border-[#d8e6f6] bg-white px-4 py-3">
              <p className="text-sm text-gray-700">
                Tip: Open the full-resolution version for maximum text clarity, especially on smaller screens.
              </p>
            </div> */}
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-4">How GCRFIP Works</h2>
            <p className="text-gray-700 mb-4">
              GCRFIP follows a continuous and collaborative process to reduce flood risk, strengthen resilience, and protect communities.
            </p>
            <p className="text-gray-700 mb-4">
              The project connects field data, atmospheric and hydrological analysis, digital decision tools, and institutional coordination into one operational resielience ecosystem to deliver actionable intelligence and early warning before flood impact peaks.
            </p>
            <p className="text-gray-700 mb-5">
              This integrated model enables earlier warnings, smarter resource allocation, and better outcomes for communities, infrastructure, and national development planning. It allows
              Ghana to move from reactive flood response to predictive intelligence-led resilience.
            </p>

            <div className="rounded-xl border border-[#d8e6f6] bg-[#f7fbff] p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Six Core Stages</p>
              <p className="text-gcrfip-navy font-semibold leading-relaxed">
                Assess &amp; Analyze, Plan &amp; Design, Implement &amp; Invest, Monitor &amp; Evaluate, Build Capacity, Sustain &amp; Grow.
              </p>
            </div>
          </div>
        </section>

        <section className="section-block grid md:grid-cols-2 gap-6">
          <div className="card p-7 border-l-4 border-gcrfip-green">
            <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Vision</p>
            <h3 className="text-2xl font-bold text-gcrfip-navy mb-3">A Ghana where flood risks are anticipated and managed proactively.</h3>
            <p className="text-gray-700">A smarter, safer, and climate-resilient Ghana where science, technology, strong institutions, and empowered communities work together to prevent flood disasters and safeguard sustainable development.</p>
          </div>

          <div className="card p-7 border-l-4 border-gcrfip-gold">
            <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Mission</p>
            <h3 className="text-2xl font-bold text-gcrfip-navy mb-3">Build a national resilience platform through science, technology, and coordination.</h3>
            <p className="text-gray-700">To establish an integrated national flood intelligence ecosystem that combines scientific research, community participation, digital innovation, public health, governance, and capacity development to anticipate, prevent, monitor, and manage flood risks across Ghana.</p>
          </div>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Our Guiding Philosophy</h2>
          {/* <p className="text-gray-700 mb-8 max-w-3xl">A continuous resilience workflow from prevention to long-term strengthening.</p> */}
          <p className="text-gray-700 mb-8 max-w-3xl">Building resilience is not about responding better to disasters; it is about creating the knowledge, systems, partnerships, and capacity that prevent disasters from becoming crises.</p>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4 items-center">
              {philosophy.map((step, index) => (
                <div key={step} className="relative">
                  <div className="card p-4 text-center ui-transition hover:-translate-y-0.5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gcrfip-green mb-1">Step {index + 1}</p>
                    <p className="font-bold text-gcrfip-navy">{step}</p>
                  </div>
                  {index < philosophy.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-gcrfip-green font-bold">&gt;</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value) => (
              <div key={value.title} className="card p-6 ui-transition hover:-translate-y-0.5">
                <h3 className="text-xl font-bold text-gcrfip-navy mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Leadership & Governance</h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {leaders.map((leader) => (
                <div key={leader.role} className="card p-5 text-center">
                  <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-[#e5eef8] border border-[#cddff2] flex items-center justify-center text-gcrfip-navy font-bold">
                    {leader.role.split(' ').map((part) => part[0]).join('').slice(0, 2)}
                  </div>
                  <h3 className="font-bold text-gcrfip-navy mb-1">{leader.role}</h3>
                  <p className="text-sm text-gray-700">{leader.note}</p>
                </div>
              ))}
            </div>

            <Link href="/about/leadership" className="chip chip-muted">Explore Leadership Details</Link>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gcrfip-navy mb-4">Governance Structure</h3>
            <div className="space-y-3">
              <div className="card p-4 text-center">Government</div>
              <div className="text-center text-gcrfip-green font-bold">v</div>
              <div className="card p-4 text-center">National Steering Committee</div>
              <div className="text-center text-gcrfip-green font-bold">v</div>
              <div className="card p-4 text-center">Programme Office</div>
              <div className="text-center text-gcrfip-green font-bold">v</div>
              <div className="card p-4 text-center">Research Institutions</div>
              <div className="text-center text-gcrfip-green font-bold">v</div>
              <div className="card p-4 text-center">Communities</div>
            </div>
          </div>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Strategic Partnerships</h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Partnership is central to delivery. The programme is designed to align government institutions,
            universities, development partners, industry, and communities around shared national outcomes.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Government', 'Universities', 'Industry', 'NGOs', 'Development Partners', 'Research Institutes'].map((group) => (
              <div key={group} className="h-24 rounded-xl border border-gray-300 bg-gray-50 flex items-center justify-center text-gray-700 font-semibold ui-transition hover:shadow-md">
                {group}
              </div>
            ))}
          </div>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Programme Timeline</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="card p-5 relative">
                <p className="text-sm font-semibold text-gcrfip-green mb-1">{milestone.year}</p>
                <h3 className="font-bold text-gcrfip-navy mb-2">{milestone.phase}</h3>
                <p className="text-sm text-gray-700">{milestone.detail}</p>
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-gcrfip-green font-bold">&gt;</div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="section-block rounded-2xl border border-gray-200 bg-white p-7 md:p-9">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-4">From Vision to National Programme</h2>
          <p className="text-gray-700 max-w-4xl">
            GCRFIP emerged from sustained work in atmospheric modelling, climate resilience, and flood intelligence.
            What began as research into prediction and risk systems has evolved into a broader national mission:
            translating knowledge into coordinated implementation that protects lives, livelihoods, and long-term development.
          </p>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Explore More</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exploreCards.map((card) => (
              <Link key={card.title} href={card.href} className="group rounded-2xl overflow-hidden border border-gray-200 bg-white ui-transition hover:shadow-xl">
                <div className="relative h-40 overflow-hidden">
                  <Image src={card.image} alt={card.title} fill className="object-cover ui-transition group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gcrfip-navy mb-2">{card.title}</h3>
                  <p className="text-gray-700 mb-3">{card.description}</p>
                  <span className="text-gcrfip-green font-semibold">Open section &gt;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <section className="py-16 bg-gradient-to-r from-gcrfip-green to-green-700 text-white">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-5">Together We Can Build a Flood-Resilient Ghana</h2>
          <p className="text-lg text-gray-100 mb-8">
            Join the mission to strengthen resilience through evidence, collaboration, and long-term national delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved/become-partner" className="bg-gcrfip-gold text-gcrfip-navy px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition">
              Become a Partner
            </Link>
            <Link href="/programme/blueprint" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-gcrfip-green transition">
              Explore the Blueprint
            </Link>
          </div>
        </div>
      </section>

      {isDiagramOpen && (
        <div
          className="fixed inset-0 z-[110] bg-[#02163f]/85 backdrop-blur-sm p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="How GCRFIP Works diagram preview"
          onClick={() => setIsDiagramOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsDiagramOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gcrfip-navy hover:bg-gray-100"
            aria-label="Close diagram preview"
          >
            Close
          </button>

          <div
            className="relative mx-auto mt-12 h-[80vh] w-full max-w-7xl overflow-hidden rounded-2xl border border-white/30 bg-[#0a2652]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src="/images/gcrfip_aboutus.png"
              alt="GCRFIP six-step workflow diagram"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </div>
  )
}
