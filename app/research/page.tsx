'use client'

import Image from 'next/image'
import Link from 'next/link'
import ReadingProgress from '../../components/layout/ReadingProgress'
import PageAtmosphere from '../../components/layout/PageAtmosphere'

const researchThemes = [
  {
    title: 'Flood Hydrology and Basin Systems',
    description: 'Understand rainfall-runoff behavior, river basin pressures, and flood dynamics in Ghana.',
  },
  {
    title: 'Climate Risk and Scenario Intelligence',
    description: 'Assess how changing climate conditions shape flood frequency, intensity, and exposure.',
  },
  {
    title: 'Urban and Coastal Flood Dynamics',
    description: 'Model compound risk in dense settlements, transport corridors, and coastal zones.',
  },
  {
    title: 'Early Warning and Predictive Analytics',
    description: 'Advance forecasting pipelines and warning systems for faster decision cycles.',
  },
  {
    title: 'Community Adaptation and Inclusion',
    description: 'Translate science into local action through participatory resilience strategies.',
  },
  {
    title: 'Infrastructure and Systems Resilience',
    description: 'Improve resilience of critical infrastructure and essential service networks.',
  },
]

const capabilityCards = [
  {
    title: 'Research Projects',
    description: 'Track ongoing and completed projects driving the national resilience evidence base.',
    href: '/research/research-projects',
  },
  {
    title: 'Research Themes',
    description: 'Explore priority thematic areas guiding GCRFIP scientific workstreams.',
    href: '/research/research-themes',
  },
  {
    title: 'Publications',
    description: 'Access papers, briefs, and technical outputs from partner institutions.',
    href: '/research/publications',
  },
  {
    title: 'Digital Twin',
    description: 'View system-level simulations supporting scenario planning and response testing.',
    href: '/research/digital-twin',
  },
  {
    title: 'Flood Intelligence',
    description: 'Understand monitoring and intelligence models that enable predictive action.',
    href: '/research/flood-intelligence',
  },
  {
    title: 'Innovation Lab',
    description: 'Prototype and test technologies for operational resilience deployment.',
    href: '/research/innovation-lab',
  },
  {
    title: 'Open Data',
    description: 'Access shareable datasets and tools that improve cross-sector coordination.',
    href: '/research/open-data',
  },
  {
    title: 'Student Opportunities',
    description: 'Join internships and applied research pathways for future resilience leaders.',
    href: '/research/student-opportunities',
  },
]

const pipeline = [
  {
    stage: '1',
    title: 'Observe',
    detail: 'Collect climate, hydrological, geospatial, and community-grounded data streams.',
  },
  {
    stage: '2',
    title: 'Model',
    detail: 'Convert raw data into risk scenarios, forecasts, and intervention insights.',
  },
  {
    stage: '3',
    title: 'Validate',
    detail: 'Test models with field partners and operational institutions.',
  },
  {
    stage: '4',
    title: 'Deploy',
    detail: 'Translate validated evidence into decision tools, guidance, and practice.',
  },
]

export default function ResearchPage() {
  return (
    <div className="relative overflow-hidden">
      <PageAtmosphere variant="research" />
      <ReadingProgress />

      <section className="relative min-h-[60vh] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_banner.png"
            alt="Research and innovation at GCRFIP"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#02163f]/92 via-[#03245a]/78 to-[#02122e]/84" />

        <div className="relative container-custom py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200 mb-3">Research and Innovation</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">Science to Decision Advantage</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mb-8">
            Research at GCRFIP translates scientific insight into national decision advantage.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/research/research-projects" className="cta-button">Explore Research Projects</Link>
            <Link href="/get-involved/research-collaboration" className="chip border-white/60 text-white bg-white/10 hover:bg-white hover:text-gcrfip-navy">
              Research Collaboration
            </Link>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding relative">
        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-4">National Research Platform</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            GCRFIP integrates universities, technical agencies, and international experts to build an evidence-led
            flood resilience system that informs policy, planning, and emergency action.
          </p>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Research Themes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchThemes.map((theme) => (
              <div key={theme.title} className="card p-6 ui-transition hover:-translate-y-0.5 border-t-4 border-gcrfip-green/70">
                <h3 className="text-xl font-bold text-gcrfip-navy mb-2">{theme.title}</h3>
                <p className="text-gray-700">{theme.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-5">Research-to-Impact Pipeline</h2>
            <p className="text-gray-700 mb-6">
              Our approach ensures research does not stop at publication. It flows into operational intelligence,
              planning frameworks, and practical resilience outcomes.
            </p>
            <div className="space-y-4">
              {pipeline.map((item) => (
                <div key={item.stage} className="rounded-xl border border-gray-200 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gcrfip-green mb-1">Stage {item.stage}</p>
                  <h3 className="text-xl font-bold text-gcrfip-navy mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
            <div className="relative h-[420px]">
              <Image
                src="/images/gcrfip_pillars.png"
                alt="GCRFIP research systems"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02163f]/72 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white font-semibold">
                Data - Models - Collaboration - Decision Support - Resilience Impact
              </div>
            </div>
          </div>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Research Resources and Programmes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilityCards.map((card) => (
              <Link key={card.title} href={card.href} className="card p-6 ui-transition hover:-translate-y-0.5">
                <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{card.title}</h3>
                <p className="text-gray-700 mb-4">{card.description}</p>
                <span className="text-gcrfip-green font-semibold">Open Resource &gt;</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section-block grid md:grid-cols-2 gap-6">
          <div className="card p-7 border-l-4 border-gcrfip-green">
            <h3 className="text-2xl font-bold text-gcrfip-navy mb-3">Partners and Collaborators</h3>
            <p className="text-gray-700 mb-5">
              GCRFIP works with academic institutions, technical agencies, and global research partners to strengthen
              the national resilience evidence ecosystem.
            </p>
            <Link href="/about/strategic-partners" className="cta-button-secondary">View Strategic Partners</Link>
          </div>

          <div className="card p-7 border-l-4 border-gcrfip-gold">
            <h3 className="text-2xl font-bold text-gcrfip-navy mb-3">Student and Early Career Pathways</h3>
            <p className="text-gray-700 mb-5">
              Future resilience leaders can access internships, applied projects, and mentoring opportunities.
            </p>
            <Link href="/research/student-opportunities" className="cta-button-secondary">Explore Opportunities</Link>
          </div>
        </section>

        <section className="section-block rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#02214f] via-[#033e74] to-[#075985]" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200 mb-2">Collaborate</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Advance National Flood Intelligence Through Research</h2>
              <p className="text-gray-100">
                Connect with the programme team to co-design high-impact research and innovation initiatives.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/get-involved/research-collaboration" className="cta-button bg-white text-gcrfip-navy hover:bg-gcrfip-gold hover:text-gcrfip-navy">
                Start Collaboration
              </Link>
              <Link href="/contact/general-enquiries" className="chip border-white/60 text-white bg-white/10 hover:bg-white hover:text-gcrfip-navy">
                Speak with Research Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
