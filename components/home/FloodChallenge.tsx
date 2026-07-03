'use client'

import Image from 'next/image'

function StatIcon({ icon }: { icon: 'events' | 'people' | 'infrastructure' | 'economy' }) {
  const baseClass = 'h-5 w-5 text-[#1f8a3b]'

  if (icon === 'events') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass} aria-hidden="true">
        <path d="M3 19h18" />
        <path d="M6 19V8l3 2 3-4 3 3 3-2v12" />
        <path d="M3 14l3-2 3 2 3-2 3 2 3-2 3 2" />
      </svg>
    )
  }

  if (icon === 'people') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass} aria-hidden="true">
        <circle cx="8" cy="8" r="2.5" />
        <circle cx="16" cy="8" r="2.5" />
        <path d="M3.5 18c0-2.3 2-4 4.5-4s4.5 1.7 4.5 4" />
        <path d="M11.5 18c0-2.1 1.8-3.7 4.1-3.7s4.1 1.6 4.1 3.7" />
      </svg>
    )
  }

  if (icon === 'infrastructure') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass} aria-hidden="true">
        <path d="M4 20h16" />
        <path d="M7 20V6h10v14" />
        <path d="M10 9h4" />
        <path d="M10 12h4" />
        <path d="M10 15h4" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass} aria-hidden="true">
      <path d="M4 19h16" />
      <path d="M7 16l3-4 3 2 4-6" />
      <path d="M17 8h3v3" />
    </svg>
  )
}

export default function FloodChallenge() {
  const floodGallery = [
    {
      src: '/images/flood_gallery12.png',
      category: 'Urban Flooding',
      caption: 'Rising water in built-up neighbourhoods shows how quickly storm runoff can overwhelm drainage and everyday movement.',
    },
    {
      src: '/images/flood_gallery11.png',
      category: 'Transport Disruption',
      caption: 'Flooded roads can isolate communities, delay emergency services, and disrupt daily economic activity.',
    },
    {
      src: '/images/flood_gallery4.png',
      category: 'Rescue Response',
      caption: 'Emergency responders moving through floodwater underline the urgency of rapid coordination and safe access.',
    },
    {
      src: '/images/flood_reality3.png',
      category: 'Infrastructure Damage',
      caption: 'Water intrusion around roads, buildings, and drainage systems weakens the infrastructure meant to protect communities.',
    },
    {
      src: '/images/flood_gallery9.png',
      category: 'Community Exposure',
      caption: 'Residents in low-lying areas remain exposed when water rises around homes, public spaces, and walkways.',
    },
    {
      src: '/images/flood_reality1.png',
      category: 'Economic Disruption',
      caption: 'Submerged streets and stalled activity show how floods interrupt livelihoods, trade, and local recovery.',
    },
  ]

  const statistics = [
    {
      value: '214+',
      title: 'Recurring Flood Events',
      label: 'Ghana has recorded more than 214 major flood events between 1995 and 2024.',
      source: 'NADMO (2024)',
      icon: 'events' as const,
      image: '/images/flood_gallery1.png',
      alt: 'Flooded urban street in Ghana',
    },
    {
      value: '1.2M+',
      title: 'People Exposed',
      label: 'Over 1.2 million Ghanaians are exposed to flood risk every year, with thousands displaced annually.',
      source: 'World Bank (2023)',
      icon: 'people' as const,
      image: '/images/flood_gallery10.png',
      alt: 'Residents exposed to standing floodwater',
    },
    {
      value: '3,400+',
      title: 'Critical Infrastructure at Risk',
      label: 'More than 3,400 km of roads and hundreds of public facilities are at high risk of flooding or damage.',
      source: 'MI (2023)',
      icon: 'infrastructure' as const,
      image: '/images/flood_gallery13.png',
      alt: 'Flooded road infrastructure in Ghana',
    },
    {
      value: 'GHS 580M+',
      title: 'Economic Losses',
      label: 'Annual flood losses in Ghana are estimated at over GHS 580 million, affecting livelihoods and local economies.',
      source: 'NDPC (2024)',
      icon: 'economy' as const,
      image: '/images/flood_gallery12.png',
      alt: 'Flood water disrupting economic activity',
    },
  ]

  const challenges = [
    {
      icon: '🌊',
      title: 'Flood Events',
      description: 'Increasing frequency of severe floods across urban and peri-urban settlements.',
    },
    {
      icon: '👥',
      title: 'People Affected',
      description: 'Communities, markets, and households exposed to recurring disruptions each year.',
    },
    {
      icon: '🏛️',
      title: 'Infrastructure at Risk',
      description: 'Roads, schools, health facilities, and drainage systems face rising pressure.',
    },
    {
      icon: '💰',
      title: 'Economic Impact',
      description: 'Flood losses continue to strain households, businesses, and national development.',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-4 text-gcrfip-navy text-center">The Flood Reality in Ghana</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Climate pressure, rapid urbanisation, and stressed infrastructure are reshaping Ghana's risk profile.
        </p>

        <div className="mb-12 rounded-2xl border border-[#d8e9f9] bg-[#f7fbff] p-6 md:p-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Why current approaches are not enough</p>
            <h3 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-4">Reactive response starts too late</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Reactive disaster response reduces losses only after impacts occur. GCRFIP shifts Ghana toward
              proactive, intelligence-driven resilience before flood events escalate.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The challenge is not only the water itself, but the repeated failure to anticipate, coordinate,
              and protect communities before floods become disasters.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-12 items-stretch">
          <div className="lg:col-span-3 relative min-h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              controls
              preload="metadata"
              playsInline
              poster="/images/flood_gallery3.png"
            >
              <source src="/videos/gcrfip-flood-videos8.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#02163f]/85 via-[#02163f]/30 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white text-lg md:text-xl font-semibold max-w-xl leading-snug">
                Flood emergencies are no longer isolated events. They are a recurring national challenge requiring
                continuous intelligence and coordinated action.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-[#f7fbff] border border-[#d8e9f9] rounded-2xl p-6 md:p-7">
            <h3 className="text-2xl font-bold text-gcrfip-navy mb-4">Why Ghana Needs GCRFIP</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Flooding remains one of Ghana&apos;s most significant climate-related risks, affecting lives,
              livelihoods, infrastructure, public health, and economic productivity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rapid urbanisation, changing rainfall patterns, inadequate drainage systems, and fragmented
              institutional coordination continue to increase national vulnerability.
            </p>
            <div className="rounded-lg bg-white border border-[#e4eef8] p-4">
              <p className="text-sm font-semibold tracking-wide text-gcrfip-navy uppercase mb-1">
                Why current approaches are not enough
              </p>
              <p className="text-gray-700 text-sm">
                Reactive disaster response reduces losses only after impacts occur. GCRFIP shifts Ghana toward
                proactive, intelligence-driven resilience before flood events escalate.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 rounded-2xl border border-[#d8e9f9] bg-[#f7fbff] p-6 md:p-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            {/* <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Featured Flood Gallery</p> */}
            <h3 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-3">Real Floods. Real Communities. Real Need.</h3>
            <p className="text-gray-700">
              A featured set of photographs that tells the flood story and highlights the urgent need for proactive flood management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {floodGallery.map((item) => (
              <figure key={item.src} className="card overflow-hidden border border-[#dbeafe]">
                <div className="relative h-56">
                  <Image src={item.src} alt={item.caption} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
                <figcaption className="p-4 bg-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gcrfip-green mb-1">{item.category}</p>
                  <p className="text-gray-700 leading-relaxed">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <a href="/resources#flood-gallery" className="chip chip-muted">
              Explore the Complete Flood Gallery in Resources →
            </a>
          </div>

          {/* <p className="mt-6 text-sm italic text-gray-600 text-center">
            Images used for public awareness and flood-risk communication.
          </p> */}
        </div>

        <div className="mb-14">
          <div className="max-w-3xl mx-auto text-center mb-8">
            {/* <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Statistics Section</p> */}
            <h3 className="text-3xl md:text-4xl font-bold text-gcrfip-navy mb-3">Evidence-backed flood pressures</h3>
            <p className="text-gray-700">
              Each statistic is paired with a supporting real photograph so the message feels grounded in lived reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {statistics.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-[#d8e9f9] bg-white shadow-sm"
              >
                <div className="relative h-48">
                  <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#7dc58f] bg-[#eaf8ef]">
                      <StatIcon icon={item.icon} />
                    </div>
                    <p className="text-[2.05rem] font-extrabold leading-none text-[#1457b2]">{item.value}</p>
                  </div>
                  <h4 className="text-[2rem] font-bold text-[#1f8a3b] mb-2 leading-tight">{item.title}</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">{item.label}</p>
                  <p className="text-[1.65rem] italic text-gray-600">
                    <span className="font-semibold">Source:</span> {item.source}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center italic text-gray-600">
            Figures are based on the latest available national and international reports.
          </p>
        </div>

        <div className="mb-14 rounded-2xl bg-gcrfip-navy text-white px-6 py-8 md:px-8 md:py-10 shadow-lg border border-[#0f2f5f]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200 mb-3">
            From recurring flood losses to intelligent flood resilience.
          </p>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl">
            GCRFIP turns flood evidence into action through observation, forecasting, coordinated governance, and community response.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <div key={index} className="card p-6 border-t-4 border-gcrfip-green/70">
              <p className="text-3xl mb-3">{challenge.icon}</p>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{challenge.title}</h3>
              <p className="text-gray-700">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
