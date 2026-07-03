'use client'

import Link from 'next/link'
import GhanaMapExplorer from '../../../components/shared/GhanaMapExplorer'

export default function Maps() {
  const maps = [
    {
      title: 'National Flood Hazard Map',
      description: 'Spatial representation of flood hazards by region',
    },
    {
      title: 'Flood-Prone Urban Areas',
      description: 'Detailed mapping of flood risks in major cities',
    },
    {
      title: 'Rainfall & Runoff Patterns',
      description: 'Historical rainfall distribution and surface water flow',
    },
    {
      title: 'Vulnerable Communities Map',
      description: 'Identification of communities most vulnerable to flooding',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Maps</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          Interactive and downloadable maps showing Ghana's flood risks and vulnerable areas.
        </p>

        <div className="mb-10">
          <GhanaMapExplorer />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {maps.map((map, index) => (
            <div key={index} className="card p-6">
              <div className="w-full h-40 bg-gcrfip-light-grey rounded mb-4"></div>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{map.title}</h3>
              <p className="text-gray-700 mb-4">{map.description}</p>
              <Link href="/resources/downloads" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
                View Map →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
