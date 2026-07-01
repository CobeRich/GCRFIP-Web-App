'use client'

import Image from 'next/image'
import Link from 'next/link'
import ReadingProgress from '../../components/layout/ReadingProgress'
import GhanaMapExplorer from '../../components/shared/GhanaMapExplorer'

const opportunityTracks = [
  {
    title: 'Government Agencies',
    description: 'Shape policy coordination, data-sharing standards, and emergency readiness workflows.',
    icon: 'Policy and Operations',
    href: '/get-involved/become-partner',
  },
  {
    title: 'Academic Institutions',
    description: 'Co-develop research, modeling tools, and capacity-building programmes.',
    icon: 'Research and Innovation',
    href: '/get-involved/research-collaboration',
  },
  {
    title: 'Community Organizations',
    description: 'Lead grassroots resilience planning and community participation pathways.',
    icon: 'Community Action',
    href: '/get-involved/volunteer',
  },
  {
    title: 'Private Sector',
    description: 'Contribute technologies, logistics, and implementation expertise at scale.',
    icon: 'Industry Partnerships',
    href: '/get-involved/sponsorship-funding',
  },
  {
    title: 'International Partners',
    description: 'Support institutional delivery with funding and technical collaboration.',
    icon: 'Global Cooperation',
    href: '/get-involved/founding-consortium',
  },
  {
    title: 'NGOs and Civil Society',
    description: 'Expand awareness, advocacy, and localized programme support.',
    icon: 'Public Engagement',
    href: '/get-involved/become-partner',
  },
]

const actionCards = [
  {
    title: 'Volunteer',
    description: 'Join field initiatives and awareness campaigns in high-risk areas.',
    href: '/get-involved/volunteer',
  },
  {
    title: 'Careers',
    description: 'Build your career in climate resilience, geospatial intelligence, and policy delivery.',
    href: '/get-involved/careers',
  },
  {
    title: 'Research Collaboration',
    description: 'Partner on advanced flood intelligence and adaptation research.',
    href: '/get-involved/research-collaboration',
  },
  {
    title: 'Become a Partner',
    description: 'Join our ecosystem of strategic institutions and implementation partners.',
    href: '/get-involved/become-partner',
  },
  {
    title: 'Sponsorship and Funding',
    description: 'Invest in scalable projects that protect communities and infrastructure.',
    href: '/get-involved/sponsorship-funding',
  },
  {
    title: 'Newsletter',
    description: 'Receive programme milestones, opportunities, and event updates.',
    href: '/get-involved/newsletter',
  },
  {
    title: 'Founding Consortium',
    description: 'Explore the institutions shaping the programme from inception.',
    href: '/get-involved/founding-consortium',
  },
]

const participationFlow = [
  {
    step: '1',
    title: 'Identify Fit',
    detail: 'Find the pathway that aligns with your institution, goals, and capability.',
  },
  {
    step: '2',
    title: 'Express Interest',
    detail: 'Share your focus areas and partnership intent with the programme team.',
  },
  {
    step: '3',
    title: 'Co-Design Scope',
    detail: 'Define collaboration outcomes, workstreams, timelines, and governance.',
  },
  {
    step: '4',
    title: 'Deliver Impact',
    detail: 'Implement jointly and track measurable resilience outcomes.',
  },
]

export default function GetInvolvedPage() {
  return (
    <div className="relative overflow-hidden">
      <ReadingProgress />

      <section className="relative min-h-[60vh] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_banner.png"
            alt="Get involved with GCRFIP"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#02163f]/92 via-[#03245a]/78 to-[#02122e]/84" />

        <div className="relative container-custom py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200 mb-3">Get Involved</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">Join Ghana's National Flood Resilience Movement</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mb-8">
            Help shape a future where communities, infrastructure, and institutions are better prepared for climate risk.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/get-involved/become-partner" className="cta-button">Become a Partner</Link>
            <Link href="/contact" className="chip border-white/60 text-white bg-white/10 hover:bg-white hover:text-gcrfip-navy">
              Speak to the Team
            </Link>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding relative">
        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-4">Why Your Participation Matters</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            Flood resilience is a shared responsibility. GCRFIP creates a structured platform where policy, science,
            technology, and communities work together to reduce risk and improve national preparedness.
          </p>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Opportunity Tracks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {opportunityTracks.map((track) => (
              <Link key={track.title} href={track.href} className="card p-6 ui-transition hover:-translate-y-0.5 border-t-4 border-gcrfip-green/70">
                <p className="text-xs font-semibold uppercase tracking-wide text-gcrfip-green mb-2">{track.icon}</p>
                <h3 className="text-xl font-bold text-gcrfip-navy mb-2">{track.title}</h3>
                <p className="text-gray-700">{track.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section-block grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-5">How Participation Works</h2>
            <p className="text-gray-700 mb-6">
              Every collaboration follows a clear pathway to ensure alignment, accountability, and measurable outcomes.
            </p>
            <div className="space-y-4">
              {participationFlow.map((item) => (
                <div key={item.step} className="rounded-xl border border-gray-200 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gcrfip-green mb-1">Step {item.step}</p>
                  <h3 className="text-xl font-bold text-gcrfip-navy mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-5">Current Partner Footprint</h2>
            <p className="text-gray-700 mb-6">
              Explore the evolving partner network and regional collaboration pathways supporting programme implementation.
            </p>
            <GhanaMapExplorer />
          </div>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Ways to Take Action</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {actionCards.map((card) => (
              <Link key={card.title} href={card.href} className="card p-6 ui-transition hover:-translate-y-0.5">
                <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{card.title}</h3>
                <p className="text-gray-700 mb-4">{card.description}</p>
                <span className="text-gcrfip-green font-semibold">Explore Option &gt;</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section-block rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#02214f] via-[#033e74] to-[#075985]" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200 mb-2">Ready to Start?</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Co-Create Resilience Outcomes With GCRFIP</h2>
              <p className="text-gray-100">
                Engage with our team to define your participation pathway and begin a high-impact collaboration.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="cta-button bg-white text-gcrfip-navy hover:bg-gcrfip-gold hover:text-gcrfip-navy">
                Contact Programme Team
              </Link>
              <Link href="/get-involved/newsletter" className="chip border-white/60 text-white bg-white/10 hover:bg-white hover:text-gcrfip-navy">
                Subscribe for Updates
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
