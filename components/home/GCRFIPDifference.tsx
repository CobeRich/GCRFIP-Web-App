'use client'

export default function GCRFIPDifference() {
  const rows = [
    {
      area: 'Decision model',
      traditional: 'Actions begin after floods have already caused damage.',
      gcrfip: 'Predictive analytics support action before impact peaks.',
    },
    {
      area: 'Data flow',
      traditional: 'Fragmented data sources and delayed reporting.',
      gcrfip: 'Integrated climate, hydrology, GIS, and community intelligence.',
    },
    {
      area: 'Coordination',
      traditional: 'Institutions respond in isolated operational silos.',
      gcrfip: 'Shared dashboards and national multi-agency coordination.',
    },
    {
      area: 'Community outcomes',
      traditional: 'Preparedness is inconsistent and difficult to scale.',
      gcrfip: 'Early warning and resilience programmes reach vulnerable communities.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-gcrfip-green uppercase tracking-wide mb-2">Signature Section</p>
          <h2 className="text-4xl font-bold text-gcrfip-navy mb-4">The GCRFIP Difference</h2>
          <p className="text-lg text-gray-700">
            Ghana moves from reactive flood response to predictive intelligence-led resilience.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <div className="grid grid-cols-12 bg-gcrfip-navy text-white">
            <div className="col-span-12 md:col-span-3 px-5 py-4 font-semibold">Capability</div>
            <div className="col-span-12 md:col-span-4 px-5 py-4 font-semibold border-t md:border-t-0 md:border-l border-white/20">Legacy Response Model</div>
            <div className="col-span-12 md:col-span-5 px-5 py-4 font-semibold border-t md:border-t-0 md:border-l border-white/20">GCRFIP Predictive Model</div>
          </div>

          {rows.map((row) => (
            <div key={row.area} className="grid grid-cols-12 border-t border-gray-200 bg-white">
              <div className="col-span-12 md:col-span-3 px-5 py-5 font-semibold text-gcrfip-navy">{row.area}</div>
              <div className="col-span-12 md:col-span-4 px-5 py-5 text-gray-700 border-t md:border-t-0 md:border-l border-gray-200">{row.traditional}</div>
              <div className="col-span-12 md:col-span-5 px-5 py-5 text-gray-700 border-t md:border-t-0 md:border-l border-gray-200">{row.gcrfip}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
