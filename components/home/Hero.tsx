'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero-gradient text-white py-24 md:py-32">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ghana Climate Resilience and Flood Intelligence Programme
          </h1>
          <p className="text-2xl font-semibold mb-4 text-gcrfip-gold">
            Intelligence Today. Resilience Tomorrow.
          </p>
          <p className="text-lg mb-8 leading-relaxed">
            A comprehensive national initiative integrating science, technology, governance, and community engagement
            to build flood resilience and protect Ghana's people and economy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/programme" className="cta-button bg-white text-gcrfip-navy hover:bg-gcrfip-gold">
              Explore the Programme
            </Link>
            <Link href="/get-involved" className="cta-button-secondary border-white text-white">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
