'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function GCRFIPSolution() {
  const [counts, setCounts] = useState({ pillars: 0, regions: 0, years: 0, coordination: 0 })

  useEffect(() => {
    const duration = 1200
    const start = performance.now()

    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1)

      setCounts({
        pillars: Math.round(6 * progress),
        regions: Math.round(16 * progress),
        years: Math.round(5 * progress),
        coordination: Math.round(100 * progress),
      })

      if (progress < 1) {
        window.requestAnimationFrame(animate)
      }
    }

    const rafId = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(rafId)
  }, [])

  const steps = ['Observe', 'Monitor', 'Predict', 'Analyse', 'Decide', 'Warn', 'Respond', 'Recover', 'Learn']

  return (
    <section className="py-16 bg-[#f8fcff]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gcrfip-navy">The GCRFIP Solution</h2>
            <p className="text-lg text-gray-700 mb-6">
              GCRFIP transforms flood management from reactive response into a continuous intelligence cycle.
              Decisions are grounded in real-time monitoring, predictive analytics, and coordinated institutional action.
            </p>

            <div className="rounded-2xl border border-[#d4e6f7] bg-white p-6 md:p-8 mb-8">
              <p className="text-sm uppercase tracking-wide text-gcrfip-green font-semibold mb-4">
                Climate intelligence cycle
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {steps.map((step, idx) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gcrfip-navy text-white text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-gcrfip-navy font-semibold">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/programme" className="cta-button inline-block">
              See How the Programme Works
            </Link>
          </div>

          <div className="bg-[#09234d] rounded-2xl p-6 md:p-8 border border-cyan-300/20 shadow-xl">
            <h3 className="text-white text-2xl font-bold mb-6">National Delivery Outcomes</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/10 border border-cyan-300/25 rounded-xl p-5">
                <p className="text-4xl font-bold text-gcrfip-gold mb-1">{counts.pillars}</p>
                <p className="text-cyan-100 font-semibold">Strategic Pillars</p>
              </div>
              <div className="bg-white/10 border border-cyan-300/25 rounded-xl p-5">
                <p className="text-4xl font-bold text-gcrfip-gold mb-1">{counts.regions}</p>
                <p className="text-cyan-100 font-semibold">Regions</p>
              </div>
              <div className="bg-white/10 border border-cyan-300/25 rounded-xl p-5">
                <p className="text-4xl font-bold text-gcrfip-gold mb-1">{counts.years}+</p>
                <p className="text-cyan-100 font-semibold">Year Implementation</p>
              </div>
              <div className="bg-white/10 border border-cyan-300/25 rounded-xl p-5">
                <p className="text-4xl font-bold text-gcrfip-gold mb-1">{counts.coordination}%</p>
                <p className="text-cyan-100 font-semibold">National Coordination</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
