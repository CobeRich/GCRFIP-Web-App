'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function SixPillars() {
  const pillars = [
    {
      number: '1',
      title: 'Community Resilience',
      description: 'Strengthen local preparedness, awareness, and volunteer response systems.',
      visualTags: ['Communities', 'Volunteers', 'River Monitoring'],
      href: '/programme/pillars/1',
      image: '/images/hero_banner.png',
    },
    {
      number: '2',
      title: 'Science & Innovation',
      description: 'Advance research, AI modelling, GIS, and climate intelligence capacity.',
      visualTags: ['Satellite', 'GIS', 'Weather Radar'],
      href: '/programme/pillars/2',
      image: '/images/gcrfip_pillars.png',
    },
    {
      number: '3',
      title: 'National Coordination',
      description: 'Align emergency operations, agencies, and real-time flood warning systems.',
      visualTags: ['EOC', 'Dashboards', 'Warning'],
      href: '/programme/pillars/3',
      image: '/images/hero_banner.png',
    },
    {
      number: '4',
      title: 'Health & Safety Readiness',
      description: 'Improve sanitation response, ambulance readiness, and public health resilience.',
      visualTags: ['Health', 'Sanitation', 'Emergency Care'],
      href: '/programme/pillars/4',
      image: '/images/gcrfip_pillars.png',
    },
    {
      number: '5',
      title: 'Resilient Infrastructure',
      description: 'Design smarter drainage, roads, bridges, and adaptive urban systems.',
      visualTags: ['Drainage', 'Resilient Roads', 'Smart Cities'],
      href: '/programme/pillars/5',
      image: '/images/hero_banner.png',
    },
    {
      number: '6',
      title: 'Sustainable Growth & Investment',
      description: 'Protect development gains through climate finance, innovation, and policy reform.',
      visualTags: ['Economy', 'Investment', 'Sustainability'],
      href: '/programme/pillars/6',
      image: '/images/gcrfip_pillars.png',
    },
  ]

  return (
    <section className="py-20 bg-[#f6fbff] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
        backgroundImage:
          'radial-gradient(circle at 10% 20%, #0b3d91 0, transparent 33%), radial-gradient(circle at 85% 75%, #1d4ed8 0, transparent 30%), repeating-radial-gradient(circle at center, #0f4c81 0, #0f4c81 1px, transparent 1px, transparent 22px)'
      }} />

      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-4 text-gcrfip-navy text-center">Six Strategic Pillars</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Six interconnected pillars working together to build a resilient, intelligent, and climate-ready Ghana.
        </p>

        <div className="hidden xl:flex justify-center mb-12">
          <div className="relative w-[760px] h-[330px]">
            <div className="absolute top-[132px] left-[324px] w-[112px] h-[112px] rounded-full bg-gcrfip-navy text-white flex items-center justify-center text-lg font-bold shadow-xl z-10">
              GCRFIP
            </div>
            <div className="absolute top-[40px] left-[320px] w-[120px] h-[1px] bg-gcrfip-navy/35 rotate-90" />
            <div className="absolute top-[205px] left-[320px] w-[120px] h-[1px] bg-gcrfip-navy/35 rotate-90" />
            <div className="absolute top-[155px] left-[140px] w-[195px] h-[1px] bg-gcrfip-navy/35" />
            <div className="absolute top-[155px] left-[432px] w-[195px] h-[1px] bg-gcrfip-navy/35" />

            {pillars.map((pillar, index) => {
              const positions = [
                'top-[20px] left-[110px]',
                'top-[20px] left-[530px]',
                'top-[120px] left-[20px]',
                'top-[120px] left-[620px]',
                'top-[235px] left-[110px]',
                'top-[235px] left-[530px]'
              ]

              return (
                <Link
                  key={pillar.number}
                  href={pillar.href}
                  className={`absolute ${positions[index]} w-[120px] h-[72px] rounded-2xl border border-gcrfip-navy/15 bg-white text-gcrfip-navy flex flex-col items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all`}
                >
                  <span className="text-xs font-semibold text-gcrfip-green">PILLAR {pillar.number}</span>
                  <span className="text-xs font-bold text-center px-2 leading-tight">{pillar.title}</span>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 mb-12">
          {pillars.map((pillar, index) => (
            <Link
              key={index}
              href={pillar.href}
              className="group rounded-2xl overflow-hidden bg-white border border-[#d5e7f5] shadow-md hover:shadow-[0_16px_40px_rgba(30,64,175,0.18)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={`${pillar.title} illustration template`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031e4e]/90 via-[#0b2f6b]/55 to-transparent" />
                <div className="absolute top-4 left-4 rounded-full border border-white/55 bg-white/20 px-3 py-1 text-xs font-semibold text-white tracking-wide">
                  PILLAR {pillar.number}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {pillar.visualTags.map((tag) => (
                    <span key={tag} className="text-[11px] rounded-full bg-white/20 text-white px-2 py-1 border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 min-h-[220px] flex flex-col">
                <h3 className="text-xl font-bold text-gcrfip-navy mb-3">{pillar.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{pillar.description}</p>
                <span className="mt-auto text-gcrfip-green font-semibold opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/programme/pillars" className="cta-button">
            Explore the Six Strategic Pillars →
          </Link>
        </div>
      </div>
    </section>
  )
}
