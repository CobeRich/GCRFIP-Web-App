'use client'

import Link from 'next/link'

export default function Hero() {
  return (
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
  )
}
