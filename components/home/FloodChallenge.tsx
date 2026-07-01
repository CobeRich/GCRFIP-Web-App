'use client'

import Image from 'next/image'

export default function FloodChallenge() {
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

        <div className="grid lg:grid-cols-5 gap-8 mb-12 items-stretch">
          <div className="lg:col-span-3 relative min-h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/hero_banner.png"
              alt="Flooded community landscape in Ghana"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02163f]/85 via-[#02163f]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
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
