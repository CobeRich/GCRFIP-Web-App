'use client'

import { useMemo, useState } from 'react'

type RegionData = {
  name: string
  projects: number
  risk: 'High' | 'Medium' | 'Low'
  partners: number
}

const regions: RegionData[] = [
  { name: 'Greater Accra', projects: 6, risk: 'High', partners: 14 },
  { name: 'Ashanti', projects: 5, risk: 'High', partners: 10 },
  { name: 'Northern', projects: 4, risk: 'Medium', partners: 8 },
  { name: 'Volta', projects: 4, risk: 'High', partners: 9 },
  { name: 'Western', projects: 3, risk: 'Medium', partners: 7 },
  { name: 'Bono East', projects: 2, risk: 'Low', partners: 5 },
]

function riskColor(risk: RegionData['risk']) {
  if (risk === 'High') return 'text-red-600'
  if (risk === 'Medium') return 'text-amber-600'
  return 'text-emerald-600'
}

export default function GhanaMapExplorer() {
  const [activeRegion, setActiveRegion] = useState<RegionData>(regions[0])

  const totalProjects = useMemo(
    () => regions.reduce((sum, region) => sum + region.projects, 0),
    []
  )

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-gcrfip-navy mb-3">Interactive Ghana Map</h3>
          <p className="text-gray-700 mb-6">
            Select a region to view current projects, flood risk level, and partner presence.
            This architecture will power the future national dashboard map.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {regions.map((region) => (
              <button
                key={region.name}
                type="button"
                onClick={() => setActiveRegion(region)}
                className={`text-left rounded-xl border px-4 py-3 transition-colors ${
                  activeRegion.name === region.name
                    ? 'border-gcrfip-green bg-emerald-50'
                    : 'border-gray-200 hover:border-gcrfip-green/60'
                }`}
              >
                <p className="font-semibold text-gcrfip-navy">{region.name}</p>
                <p className={`text-sm ${riskColor(region.risk)}`}>Risk: {region.risk}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[#f7fbff] border border-[#dbeaf8] p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Region Snapshot</p>
          <h4 className="text-2xl font-bold text-gcrfip-navy mb-5">{activeRegion.name}</h4>

          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-sm text-gray-600">Active Projects</p>
              <p className="text-2xl font-bold text-gcrfip-navy">{activeRegion.projects}</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-sm text-gray-600">Flood Risk</p>
              <p className={`text-2xl font-bold ${riskColor(activeRegion.risk)}`}>{activeRegion.risk}</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-sm text-gray-600">Strategic Partners</p>
              <p className="text-2xl font-bold text-gcrfip-navy">{activeRegion.partners}</p>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            Current demonstrator coverage: {regions.length} regions, {totalProjects} listed projects.
          </p>
        </div>
      </div>
    </section>
  )
}
