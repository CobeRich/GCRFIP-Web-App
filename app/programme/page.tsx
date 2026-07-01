'use client'

import Link from 'next/link'
import ReadingProgress from '../../components/layout/ReadingProgress'

const pillars = [
  { number: '1', title: 'Community Resilience', href: '/programme/pillars/1' },
  { number: '2', title: 'Science & Innovation', href: '/programme/pillars/2' },
  { number: '3', title: 'National Coordination', href: '/programme/pillars/3' },
  { number: '4', title: 'Health & Safety Readiness', href: '/programme/pillars/4' },
  { number: '5', title: 'Resilient Infrastructure', href: '/programme/pillars/5' },
  { number: '6', title: 'Sustainable Growth & Investment', href: '/programme/pillars/6' },
]

const roadmap = [
  { year: '2026', phase: 'Launch & Alignment', detail: 'National setup, governance alignment, baseline studies.' },
  { year: '2027', phase: 'Systems Build', detail: 'Flood intelligence platform, early warning pilots, regional training.' },
  { year: '2028', phase: 'Scale', detail: 'Cross-region expansion, institutional integrations, community rollouts.' },
  { year: '2030', phase: 'Optimization', detail: 'Data-driven refinement and stronger policy integration.' },
  { year: '2035', phase: 'National Resilience Maturity', detail: 'Sustained nationwide predictive resilience ecosystem.' },
]

const programmeResources = [
  { title: 'Executive Portfolio', href: '/programme/executive-portfolio', desc: 'High-level strategic narrative and delivery model.' },
  { title: 'Blueprint', href: '/programme/blueprint', desc: 'Technical and operational architecture overview.' },
  { title: 'Prospectus', href: '/programme/prospectus', desc: 'Programme case, opportunities, and investment pathway.' },
  { title: 'National Roadmap', href: '/programme/national-roadmap', desc: 'Phased implementation priorities and outcomes.' },
  { title: 'Implementation Strategy', href: '/programme/implementation-strategy', desc: 'Execution framework and governance approach.' },
]

export default function Programme() {
  return (
    <div className="container-custom section-padding">
      <ReadingProgress />
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gcrfip-navy">Programme</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          The GCRFIP programme is Ghana's long-horizon resilience engine, connecting science, policy, communities,
          and infrastructure to shift from response-led action to predictive national preparedness.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Programme Overview</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-bold text-gcrfip-navy mb-2">National Scope</h3>
            <p className="text-gray-700">Integrated implementation across all regions with coordinated response systems.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold text-gcrfip-navy mb-2">Predictive Model</h3>
            <p className="text-gray-700">Intelligence-led decisions anchored on forecasting, GIS, and real-time monitoring.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold text-gcrfip-navy mb-2">Institutional Delivery</h3>
            <p className="text-gray-700">Shared governance and execution across agencies, research, and partners.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Six Pillars (Clickable)</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar) => (
            <Link key={pillar.number} href={pillar.href} className="card p-6 hover:shadow-lg transition-shadow">
              <p className="text-xs font-semibold text-gcrfip-green mb-2">PILLAR {pillar.number}</p>
              <h3 className="text-lg font-bold text-gcrfip-navy">{pillar.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Programme Timeline (2026-2035)</h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <div className="grid md:grid-cols-5 gap-4">
            {roadmap.map((item) => (
              <div key={item.year} className="relative border border-gray-200 rounded-xl p-4 bg-[#f8fcff]">
                <p className="text-sm font-semibold text-gcrfip-green">{item.year}</p>
                <h3 className="font-bold text-gcrfip-navy mt-1 mb-2">{item.phase}</h3>
                <p className="text-sm text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Expected National Impact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="card p-6"><p className="text-3xl font-bold text-gcrfip-navy">50%</p><p className="text-gray-700">Targeted reduction in flood losses</p></div>
          <div className="card p-6"><p className="text-3xl font-bold text-gcrfip-navy">16</p><p className="text-gray-700">Regions with enhanced readiness</p></div>
          <div className="card p-6"><p className="text-3xl font-bold text-gcrfip-navy">100+</p><p className="text-gray-700">Institutional and delivery partners</p></div>
          <div className="card p-6"><p className="text-3xl font-bold text-gcrfip-navy">2035</p><p className="text-gray-700">Long-term resilience horizon</p></div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Programme Documents & Downloads</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmeResources.map((resource) => (
            <Link key={resource.title} href={resource.href} className="card p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{resource.title}</h3>
              <p className="text-gray-700">{resource.desc}</p>
            </Link>
          ))}
          <Link href="/resources/downloads" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Downloads</h3>
            <p className="text-gray-700">Open reports, briefs, and implementation files.</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
