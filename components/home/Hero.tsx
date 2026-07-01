'use client'

import Link from 'next/link'
import Image from 'next/image'

const heroAssetVersion = '20260701'

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={`/images/hero_banner.png?v=${heroAssetVersion}`}
          alt="GCRFIP flood resilience hero banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#02163f]/92 via-[#03245a]/70 to-[#020f2d]/82" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(56,189,248,0.22),transparent_34%)]" />

      <div className="relative container-custom pt-14 pb-6 md:pt-20 md:pb-10 xl:pt-24">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-start">
          <div className="pt-2 lg:pt-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-[1.05] max-w-3xl">
              Building Africa&apos;s Future in Climate Resilience
            </h1>
            <div className="h-1 w-28 bg-gcrfip-gold mb-5 rounded-full" />
            <p className="text-xl sm:text-[2rem] font-semibold text-gcrfip-gold mb-4 tracking-tight">
              Science. Technology. Communities. Resilience.
            </p>
            <p className="text-base sm:text-[1.65rem] sm:leading-[1.25] text-gray-100 max-w-2xl mb-7 md:mb-8">
              GCRFIP integrates real-time data, advanced analytics, and coordinated national action to
              anticipate, prepare for, and respond to flood risks across Ghana.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link
                href="/programme"
                className="bg-gcrfip-gold text-gcrfip-navy px-6 md:px-8 py-3 rounded-xl font-bold text-base md:text-lg hover:bg-yellow-500 transition"
              >
                Explore the Programme
              </Link>
              <Link
                href="/get-involved/become-partner"
                className="border border-white/65 text-white px-6 md:px-8 py-3 rounded-xl font-bold text-base md:text-lg bg-white/8 hover:bg-white hover:text-gcrfip-navy transition"
              >
                Become a Founding Partner
              </Link>
            </div>
          </div>

          <div className="hidden lg:block pt-6 lg:pl-10 xl:pl-14 opacity-80">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full border border-cyan-300/55 bg-cyan-300/12 flex items-center justify-center text-cyan-200 font-bold text-sm">
                  RT
                </div>
                <div>
                  <p className="font-semibold text-[1.05rem] uppercase tracking-wide">Real-time Monitoring</p>
                  <p className="text-sm text-gray-200">24/7 data collection</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full border border-cyan-300/55 bg-cyan-300/12 flex items-center justify-center text-cyan-200 font-bold text-sm">
                  EW
                </div>
                <div>
                  <p className="font-semibold text-[1.05rem] uppercase tracking-wide">Early Warning Systems</p>
                  <p className="text-sm text-gray-200">Timely alerts, safer communities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full border border-cyan-300/55 bg-cyan-300/12 flex items-center justify-center text-cyan-200 font-bold text-sm">
                  AI
                </div>
                <div>
                  <p className="font-semibold text-[1.05rem] uppercase tracking-wide">Advanced Analytics</p>
                  <p className="text-sm text-gray-200">AI and modelling for better decisions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full border border-cyan-300/55 bg-cyan-300/12 flex items-center justify-center text-cyan-200 font-bold text-sm">
                  CR
                </div>
                <div>
                  <p className="font-semibold text-[1.05rem] uppercase tracking-wide">Community Resilience</p>
                  <p className="text-sm text-gray-200">Empowered, prepared, protected</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full border border-gcrfip-gold/70 bg-gcrfip-gold/15 flex items-center justify-center text-gcrfip-gold font-bold text-sm">
                  ST
                </div>
                <div>
                  <p className="font-semibold text-[1.05rem] uppercase tracking-wide">Stronger Together</p>
                  <p className="text-sm text-gray-200">Partners in a resilient Ghana</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-2 xl:grid-cols-5 gap-0 bg-[#00183f]/68 border border-cyan-300/30 rounded-2xl p-3 sm:p-4 md:p-5 backdrop-blur-sm">
          <div className="px-3 py-3 border-r border-cyan-300/20">
            <p className="text-3xl font-bold">1M+</p>
            <p className="text-sm text-gray-200">People Reached</p>
          </div>
          <div className="px-3 py-3 xl:border-r border-cyan-300/20">
            <p className="text-3xl font-bold">50%</p>
            <p className="text-sm text-gray-200">Target Reduction in Losses</p>
          </div>
          <div className="px-3 py-3 border-r border-cyan-300/20">
            <p className="text-3xl font-bold">16</p>
            <p className="text-sm text-gray-200">Regions Covered</p>
          </div>
          <div className="px-3 py-3 xl:border-r border-cyan-300/20">
            <p className="text-3xl font-bold">100+</p>
            <p className="text-sm text-gray-200">Partners Targeted</p>
          </div>
          <div className="col-span-2 xl:col-span-1 px-3 py-3 flex items-center">
            <p className="text-base md:text-lg font-semibold text-gray-100">
              A smarter, safer and more resilient future for Ghana.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
