'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-r from-gcrfip-navy to-blue-900 text-white py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Building Ghana's Flood Resilience
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                The Ghana Climate Resilience and Flood Intelligence Programme (GCRFIP) is transforming how Ghana
                manages flood risks through integrated science, technology, and community engagement.
              </p>
              <p className="text-lg text-gray-200 mb-8">
                Protecting communities. Enabling prosperity. Advancing adaptation.
              </p>
              <div className="flex gap-4">
                <Link href="/about" className="bg-gcrfip-gold text-gcrfip-navy px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition">
                  Learn More
                </Link>
                <Link href="/get-involved" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-gcrfip-navy transition">
                  Get Involved
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-10 rounded-lg p-12 backdrop-blur">
                <div className="text-center">
                  <p className="text-6xl mb-4">🌊</p>
                  <p className="text-gray-100">Real-time Flood Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flood Challenge Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-4 text-gcrfip-navy text-center">Ghana's Flood Challenge</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ghana faces increasing flood risks that require comprehensive, coordinated action across all sectors.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6">
              <div className="w-12 h-12 bg-gcrfip-gold rounded-full flex items-center justify-center mb-4">
                <span className="text-gcrfip-navy font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Growing Threat</h3>
              <p className="text-gray-700">Millions of Ghanaians affected annually by floods</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 bg-gcrfip-gold rounded-full flex items-center justify-center mb-4">
                <span className="text-gcrfip-navy font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Data Gaps</h3>
              <p className="text-gray-700">Limited real-time monitoring and forecasting capacity</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 bg-gcrfip-gold rounded-full flex items-center justify-center mb-4">
                <span className="text-gcrfip-navy font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Climate Change</h3>
              <p className="text-gray-700">Increasing frequency and intensity of extreme events</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 bg-gcrfip-gold rounded-full flex items-center justify-center mb-4">
                <span className="text-gcrfip-navy font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Coordination</h3>
              <p className="text-gray-700">Fragmented institutional responses reduce effectiveness</p>
            </div>
          </div>
        </div>
      </section>

      {/* GCRFIP Solution Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gcrfip-navy">GCRFIP: Integrated Solution</h2>
              <p className="text-lg text-gray-700 mb-6">
                GCRFIP represents a paradigm shift in flood management—from reactive disaster response to proactive,
                data-driven resilience building through six interconnected strategic pillars.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-gcrfip-gold font-bold mr-3">✓</span>
                  <span className="text-gray-700"><strong>Real-time monitoring</strong> through integrated sensor networks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gcrfip-gold font-bold mr-3">✓</span>
                  <span className="text-gray-700"><strong>Advanced forecasting</strong> with 24-72 hour predictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gcrfip-gold font-bold mr-3">✓</span>
                  <span className="text-gray-700"><strong>Institutional coordination</strong> across sectors and regions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gcrfip-gold font-bold mr-3">✓</span>
                  <span className="text-gray-700"><strong>Community engagement</strong> for building resilience</span>
                </li>
              </ul>

              <Link href="/programme" className="cta-button inline-block">
                Explore the Programme
              </Link>
            </div>

            <div className="bg-gcrfip-light-grey rounded-lg p-8">
              <div className="space-y-6">
                <div className="bg-white p-4 rounded">
                  <p className="text-2xl font-bold text-gcrfip-gold mb-2">6</p>
                  <p className="text-gcrfip-navy font-semibold">Strategic Pillars</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-2xl font-bold text-gcrfip-gold mb-2">16</p>
                  <p className="text-gcrfip-navy font-semibold">Regions Covered</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-2xl font-bold text-gcrfip-gold mb-2">5+</p>
                  <p className="text-gcrfip-navy font-semibold">Years Implementation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Pillars Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-4 text-gcrfip-navy text-center">Six Strategic Pillars</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            GCRFIP's framework rests on six interconnected pillars working together to build comprehensive flood resilience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <p className="text-4xl mb-3">🌊</p>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Flood Intelligence Platform</h3>
              <p className="text-gray-700">Real-time monitoring and early warning systems</p>
            </div>
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <p className="text-4xl mb-3">🤝</p>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Institutional Coordination</h3>
              <p className="text-gray-700">Strengthened government and stakeholder coordination</p>
            </div>
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <p className="text-4xl mb-3">👥</p>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Community Engagement</h3>
              <p className="text-gray-700">Grassroots participation and resilience building</p>
            </div>
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <p className="text-4xl mb-3">🔬</p>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Research & Innovation</h3>
              <p className="text-gray-700">Scientific advancement and technology development</p>
            </div>
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <p className="text-4xl mb-3">📚</p>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Capacity Building</h3>
              <p className="text-gray-700">Training and skill development for all stakeholders</p>
            </div>
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <p className="text-4xl mb-3">⚖️</p>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Policy & Governance</h3>
              <p className="text-gray-700">Evidence-based policy and governance frameworks</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/programme/pillars" className="cta-button">
              Explore All Pillars
            </Link>
          </div>
        </div>
      </section>

      {/* National Impact Section */}
      <section className="py-16 bg-gcrfip-navy text-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">Expected National Impact</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-5xl font-bold text-gcrfip-gold mb-3">50%</p>
              <p className="text-lg">Reduction in flood-related losses</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-gcrfip-gold mb-3">16</p>
              <p className="text-lg">Regions with early warning systems</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-gcrfip-gold mb-3">1M+</p>
              <p className="text-lg">People reached with resilience programs</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-gcrfip-gold mb-3">100%</p>
              <p className="text-lg">Institutional coordination achieved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Documents Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-4 text-gcrfip-navy text-center">Key Documents</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Access essential GCRFIP documents and resources to understand the programme in detail.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link href="/programme/executive-portfolio" className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <p className="text-4xl mb-3">📋</p>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Executive Portfolio</h3>
              <p className="text-gray-700 text-sm">High-level overview of GCRFIP vision and strategy</p>
            </Link>
            <Link href="/programme/prospectus" className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <p className="text-4xl mb-3">📘</p>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Programme Prospectus</h3>
              <p className="text-gray-700 text-sm">Detailed programme structure and implementation approach</p>
            </Link>
            <Link href="/programme/blueprint" className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <p className="text-4xl mb-3">🏗️</p>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Technical Blueprint</h3>
              <p className="text-gray-700 text-sm">Specifications for Flood Intelligence Platform</p>
            </Link>
            <Link href="/programme/national-roadmap" className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <p className="text-4xl mb-3">🗺️</p>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">National Roadmap</h3>
              <p className="text-gray-700 text-sm">Implementation timeline and milestones</p>
            </Link>
          </div>

          <div className="text-center">
            <Link href="/resources/downloads" className="cta-button">
              View All Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Callout Section */}
      <section className="py-16 bg-gradient-to-r from-gcrfip-green to-green-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Us in Building Flood Resilience</h2>
            <p className="text-xl mb-8 text-gray-100">
              GCRFIP welcomes partnerships from government, academia, civil society, private sector,
              and international organizations. Together, we can transform Ghana's approach to flood management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved/become-partner" className="bg-gcrfip-gold text-gcrfip-navy px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition">
                Become a Partner
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-gcrfip-green transition">
                Contact Us
              </Link>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl mb-2">🏢</p>
                <p className="font-semibold">Government & NGOs</p>
              </div>
              <div>
                <p className="text-3xl mb-2">🎓</p>
                <p className="font-semibold">Universities & Research</p>
              </div>
              <div>
                <p className="text-3xl mb-2">🌍</p>
                <p className="font-semibold">International Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
