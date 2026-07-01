import Link from 'next/link'

type ViewerProps = {
  params: {
    slug: string
  }
}

const labels: Record<string, string> = {
  'executive-portfolio': 'Executive Portfolio',
  prospectus: 'Programme Prospectus',
  blueprint: 'Technical Blueprint',
  'national-roadmap': 'National Roadmap',
}

export default function DocumentViewerPage({ params }: ViewerProps) {
  const title = labels[params.slug] || 'Document Viewer'

  return (
    <div className="container-custom section-padding">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Online Reader</p>
        <h1 className="text-4xl font-bold text-gcrfip-navy">{title}</h1>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
        <p className="text-gray-700 mb-5">
          This is the document viewer foundation. Final PDF integration and page-by-page rendering will be connected next.
        </p>

        <div className="rounded-xl border border-dashed border-gray-300 bg-[#f8fcff] h-[480px] flex items-center justify-center text-gray-500 text-center px-6">
          Embedded viewer placeholder for {title}
        </div>

        <div className="mt-5 flex flex-wrap gap-4">
          <Link href="/resources/downloads" className="cta-button">Go to Downloads</Link>
          <Link href="/resources" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">Back to Resources</Link>
        </div>
      </div>
    </div>
  )
}
