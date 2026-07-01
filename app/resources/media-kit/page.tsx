export default function MediaKitPage() {
  const assets = [
    {
      title: 'Programme Logos',
      description: 'Primary and secondary logo files for approved use.',
    },
    {
      title: 'Photography Pack',
      description: 'Official fieldwork, workshop, and event photography.',
    },
    {
      title: 'Brand Guide',
      description: 'Typography, colors, and communication usage standards.',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold text-gcrfip-navy mb-5">Media Kit</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl">
        Access communication assets for media, partners, and stakeholders supporting GCRFIP outreach.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {assets.map((asset) => (
          <div key={asset.title} className="card p-6">
            <h2 className="text-xl font-bold text-gcrfip-navy mb-2">{asset.title}</h2>
            <p className="text-gray-700">{asset.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
