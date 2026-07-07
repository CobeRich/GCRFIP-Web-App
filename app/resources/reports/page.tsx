'use client'

import Link from 'next/link'
import ReadingProgress from '../../../components/layout/ReadingProgress'

const reports = [
  {
    title: 'National Flood Risk Assessment Report',
    description: 'Comprehensive analysis of flood hazards and vulnerabilities across Ghana.',
    year: 2026,
    type: 'Assessment',
  },
  {
    title: 'Baseline Study: Current State of Flood Management',
    description: 'Assessment of current flood management capacities, coordination gaps, and opportunities.',
    year: 2026,
    type: 'Baseline',
  },
  {
    title: 'Climate Projections for Ghana (2025-2050)',
    description: 'Scenario outlook and implications for risk exposure, adaptation, and investment priorities.',
    year: 2025,
    type: 'Projection',
  },
]

export default function ReportsPage() {
  return (
    <div className="container-custom section-padding">
      <ReadingProgress />

      <section className="section-block">
        <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-3">Reports</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gcrfip-navy mb-4">Evidence for Strategic Action</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Access key GCRFIP reports on flood risks, institutional readiness, and climate projections.
        </p>
      </section>

      <section className="section-block">
        <div className="space-y-5">
          {reports.map((report) => (
            <article key={report.title} className="card p-6 border-l-4 border-gcrfip-green ui-transition hover:-translate-y-0.5">
              <div className="flex flex-wrap gap-2 text-xs mb-3">
                <span className="meta-chip bg-emerald-100 text-gcrfip-green">{report.type}</span>
                <span className="meta-chip bg-gray-100 text-gray-700">{report.year}</span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-gcrfip-navy mb-2">{report.title}</h2>
              <p className="text-gray-700 mb-4">{report.description}</p>

              <div className="flex flex-wrap items-center gap-3">
                <a href="/docs/gcrfip-executive-summary.pdf" className="cta-button text-sm">Download PDF</a>
                <Link href="/resources/downloads" className="chip chip-muted text-sm">Open Downloads</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
