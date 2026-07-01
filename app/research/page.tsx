'use client'

import Link from 'next/link'

export default function Research() {
  const researchAreas = [
    {
      title: 'Flood Hydrology',
      description: 'Understanding rainfall patterns, runoff processes, and flood dynamics in Ghana.',
    },
    {
      title: 'Climate Impacts',
      description: 'Analyzing climate change effects on flood frequency and intensity.',
    },
    {
      title: 'Urban Flood Dynamics',
      description: 'Studying flood behavior in urban environments and informal settlements.',
    },
    {
      title: 'Early Warning Systems',
      description: 'Developing and testing advanced forecasting and warning technologies.',
    },
    {
      title: 'Community Adaptation',
      description: 'Researching community-based adaptation and resilience strategies.',
    },
    {
      title: 'Infrastructure Resilience',
      description: 'Assessing and improving resilience of critical infrastructure.',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Research & Innovation</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Research Areas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-lg font-bold text-gcrfip-navy mb-3">{area.title}</h3>
              <p className="text-gray-700">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Partners & Collaborators</h2>
        <p className="text-gray-700 mb-6">
          GCRFIP collaborates with leading universities, research institutions, and international partners to advance flood resilience research.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Academic Institutions</h3>
            <p className="text-gray-700">Universities and research centers conducting cutting-edge flood science research.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">International Experts</h3>
            <p className="text-gray-700">Global leaders in flood resilience, climate science, and early warning systems.</p>
          </div>
        </div>
      </section>

      <section className="mt-16 pt-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Research Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/research/research-projects" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Research Projects</h3>
            <p className="text-gray-700">Ongoing and completed research projects</p>
          </Link>

          <Link href="/research/research-themes" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Research Themes</h3>
            <p className="text-gray-700">Major research themes and focus areas</p>
          </Link>

          <Link href="/research/publications" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Publications</h3>
            <p className="text-gray-700">Research papers and publications</p>
          </Link>

          <Link href="/research/digital-twin" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Digital Twin</h3>
            <p className="text-gray-700">Digital twin flood modeling platform</p>
          </Link>

          <Link href="/research/flood-intelligence" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Flood Intelligence</h3>
            <p className="text-gray-700">Flood monitoring and intelligence systems</p>
          </Link>

          <Link href="/research/innovation-lab" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Innovation Lab</h3>
            <p className="text-gray-700">Technology innovation and testing center</p>
          </Link>

          <Link href="/research/open-data" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Open Data</h3>
            <p className="text-gray-700">Open data portal and datasets</p>
          </Link>

          <Link href="/research/student-opportunities" className="card p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-2">Student Opportunities</h3>
            <p className="text-gray-700">Research internships and opportunities</p>
          </Link>
        </div>
      </section>
    </div>
  )
