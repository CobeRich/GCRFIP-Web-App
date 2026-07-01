'use client'

import Link from 'next/link'
import ReadingProgress from '../../../components/layout/ReadingProgress'

const socialLinks = [
  {
    platform: 'X (Twitter)',
    handle: '@GCRFIP_Ghana',
    url: 'https://twitter.com',
    description: 'Real-time programme updates and announcements.',
  },
  {
    platform: 'Facebook',
    handle: '/GCRFIP.Ghana',
    url: 'https://facebook.com',
    description: 'Community outreach, stories, and local event updates.',
  },
  {
    platform: 'LinkedIn',
    handle: '/company/gcrfip',
    url: 'https://linkedin.com',
    description: 'Institutional partnerships, policy updates, and career opportunities.',
  },
  {
    platform: 'Instagram',
    handle: '@GCRFIP_Ghana',
    url: 'https://instagram.com',
    description: 'Visual highlights from programme activities and field engagements.',
  },
  {
    platform: 'YouTube',
    handle: '/GCRFIP',
    url: 'https://youtube.com',
    description: 'Webinars, explainers, and training media resources.',
  },
]

export default function SocialMediaPage() {
  return (
    <div className="container-custom section-padding">
      <ReadingProgress />

      <section className="section-block">
        <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-3">Social Media</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gcrfip-navy mb-4">Stay Connected Across Channels</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Follow GCRFIP across official channels for updates, opportunities, and resilience intelligence.
        </p>
      </section>

      <section className="section-block grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {socialLinks.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-6 ui-transition hover:-translate-y-0.5 border-t-4 border-gcrfip-green/70"
          >
            <h2 className="text-xl font-bold text-gcrfip-navy mb-2">{social.platform}</h2>
            <p className="text-gcrfip-green font-semibold mb-3">{social.handle}</p>
            <p className="text-gray-700">{social.description}</p>
          </a>
        ))}
      </section>

      <section className="section-block rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#02214f] via-[#033e74] to-[#075985]" />
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200 mb-2">Stay Updated</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Get Curated Intelligence in Your Inbox</h2>
            <p className="text-gray-100">Subscribe for programme updates, events, and resilience insights.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/get-involved/newsletter" className="cta-button bg-white text-gcrfip-navy hover:bg-gcrfip-gold hover:text-gcrfip-navy">
              Subscribe to Newsletter
            </Link>
            <Link href="/contact" className="chip border-white/60 text-white bg-white/10 hover:bg-white hover:text-gcrfip-navy">
              Contact Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
