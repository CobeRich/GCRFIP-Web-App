'use client'

export default function Reports() {
  const reports = [
    {
      title: 'National Flood Risk Assessment Report',
      description: 'Comprehensive analysis of flood hazards and vulnerabilities across Ghana',
      year: 2026,
    },
    {
      title: 'Baseline Study: Current State of Flood Management',
      description: 'Assessment of existing flood management capacities and gaps',
      year: 2026,
    },
    {
      title: 'Climate Projections for Ghana (2025-2050)',
      description: 'Future climate scenarios and implications for flood risks',
      year: 2025,
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Reports</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          Access key GCRFIP reports on flood risks, management capacities, and climate projections.
        </p>

        <div className="space-y-6">
          {reports.map((report, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{report.title}</h3>
              <p className="text-gray-700 mb-3">{report.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{report.year}</span>
                <a href="#" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
                  Download PDF →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
