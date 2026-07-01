'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ReadingProgress from '../../components/layout/ReadingProgress'
import PageAtmosphere from '../../components/layout/PageAtmosphere'

const heroAssetVersion = '20260701'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
  }

  const quickChannels = [
    {
      title: 'General Enquiries',
      text: 'Questions about GCRFIP, partnerships, research, or programme delivery.',
      href: '/contact/general-enquiries',
    },
    {
      title: 'Office Information',
      text: 'Address, office hours, and direct contact channels.',
      href: '/contact/office-information',
    },
    {
      title: 'Social Media',
      text: 'Follow updates, announcements, and public engagement activities.',
      href: '/contact/social-media',
    },
    {
      title: 'Interactive Map',
      text: 'Locate offices and future regional partner touchpoints.',
      href: '/contact/interactive-map',
    },
  ]

  return (
    <div className="relative overflow-hidden">
      <PageAtmosphere variant="contact" />
      <ReadingProgress />

      <section className="relative min-h-[57vh] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`/images/hero_contact.png?v=${heroAssetVersion}`}
            alt="Contact GCRFIP"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#02163f]/90 via-[#03245a]/72 to-[#02122e]/80" />

        <div className="relative container-custom py-20 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200 mb-3">Contact</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Let's Build Flood Resilience Together</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mb-8">
            Connect with the GCRFIP team to collaborate, partner, or request programme and research information.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#contact-form" className="cta-button">Send a Message</Link>
            <Link href="/get-involved/become-partner" className="chip border-white/60 text-white bg-white/10 hover:bg-white hover:text-gcrfip-navy">
              Become a Founding Partner
            </Link>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding relative">
        <section id="contact-form" className="section-block grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 md:p-7">
            <h2 className="text-2xl font-bold text-gcrfip-navy mb-4">Contact Information</h2>
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-1">Email</p>
                <a href="mailto:info@gcrfip.gh" className="text-gcrfip-green hover:text-gcrfip-navy font-semibold">
                  info@gcrfip.gh
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-1">Phone</p>
                <a href="tel:+233000000000" className="text-gcrfip-green hover:text-gcrfip-navy font-semibold">
                  +233 (0) XXX XXX XXX
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-1">Office</p>
                <p className="text-gray-700">Accra, Ghana</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-700 mb-1">Emergency Contacts (Future)</p>
                <p className="text-sm text-amber-700">
                  Dedicated emergency escalation channels will be published as the national operations centre expands.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl border border-gray-200 bg-white p-6 md:p-7">
            <h2 className="text-2xl font-bold text-gcrfip-navy mb-5">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gcrfip-navy mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gcrfip-green"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gcrfip-navy mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gcrfip-green"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gcrfip-navy mb-2">Organisation</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gcrfip-green"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gcrfip-navy mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gcrfip-green"
                  required
                />
              </div>

              <div className="md:col-span-2 flex flex-wrap gap-3 items-center">
                <button type="submit" className="cta-button">
                  Submit Enquiry
                </button>
                <p className="text-sm text-gray-600">We aim to respond within 2-3 working days.</p>
              </div>
            </form>
          </div>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Office & Interactive Map</h2>
          <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
            <div className="h-72 bg-gcrfip-light-grey flex items-center justify-center text-center px-5">
              <div>
                <p className="text-gray-700 font-semibold">Interactive Office and Partner Map</p>
                <p className="text-sm text-gray-600 mt-2">Regional office and partner location overlays will be expanded in upcoming releases.</p>
              </div>
            </div>
            <div className="p-5 border-t border-gray-200 flex flex-wrap gap-3">
              <Link href="/contact/interactive-map" className="chip chip-muted">Open Full Map</Link>
              <Link href="/contact/office-information" className="chip chip-muted">Office Information</Link>
            </div>
          </div>
        </section>

        <section className="section-block">
          <h2 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-6">Contact Channels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickChannels.map((channel) => (
              <Link key={channel.title} href={channel.href} className="card p-6 ui-transition hover:-translate-y-0.5">
                <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{channel.title}</h3>
                <p className="text-gray-700 mb-4">{channel.text}</p>
                <span className="text-gcrfip-green font-semibold">Open Channel &gt;</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section-block grid md:grid-cols-2 gap-6">
          <div className="card p-7 border-l-4 border-gcrfip-green">
            <h3 className="text-2xl font-bold text-gcrfip-navy mb-3">Newsletter</h3>
            <p className="text-gray-700 mb-5">
              Receive programme milestones, research updates, and event announcements.
            </p>
            <Link href="/get-involved/newsletter" className="cta-button">Subscribe to Newsletter</Link>
          </div>

          <div className="card p-7 border-l-4 border-gcrfip-gold">
            <h3 className="text-2xl font-bold text-gcrfip-navy mb-3">Social Media</h3>
            <p className="text-gray-700 mb-5">
              Follow real-time updates and community engagement activities across our official channels.
            </p>
            <Link href="/contact/social-media" className="cta-button-secondary">View Social Channels</Link>
          </div>
        </section>
      </div>
    </div>
  )
}
