'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { useParams } from 'next/navigation'

type ViewerDoc = {
  title: string
  file: string
  totalPages: number
}

const documents: Record<string, ViewerDoc> = {
  'executive-portfolio': {
    title: 'Executive Portfolio',
    file: '/docs/gcrfip-reference.pdf',
    totalPages: 12,
  },
  prospectus: {
    title: 'Programme Prospectus',
    file: '/docs/gcrfip-reference.pdf',
    totalPages: 12,
  },
  blueprint: {
    title: 'Technical Blueprint',
    file: '/docs/gcrfip-reference.pdf',
    totalPages: 12,
  },
  'national-roadmap': {
    title: 'National Roadmap',
    file: '/docs/gcrfip-reference.pdf',
    totalPages: 12,
  },
  'implementation-strategy': {
    title: 'Implementation Strategy',
    file: '/docs/gcrfip-reference.pdf',
    totalPages: 12,
  },
}

export default function DocumentViewerPage() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug || 'executive-portfolio'
  const doc = documents[slug] || {
    title: 'Document Viewer',
    file: '/docs/gcrfip-reference.pdf',
    totalPages: 12,
  }

  const [page, setPage] = useState(1)

  const embedSrc = useMemo(() => `${doc.file}#page=${page}&view=FitH`, [doc.file, page])

  return (
    <div className="container-custom section-padding">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Online Reader</p>
        <h1 className="text-4xl font-bold text-gcrfip-navy">{doc.title}</h1>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <button
            type="button"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Previous Page
          </button>

          <p className="text-sm text-gray-700">
            Page <span className="font-semibold text-gcrfip-navy">{page}</span> of {doc.totalPages}
          </p>

          <button
            type="button"
            onClick={() => setPage((prev) => Math.min(doc.totalPages, prev + 1))}
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Next Page
          </button>

          <label className="text-sm text-gray-700 ml-auto">
            Jump to page
            <input
              type="number"
              min={1}
              max={doc.totalPages}
              value={page}
              onChange={(e) => {
                const parsed = Number(e.target.value)
                if (Number.isNaN(parsed)) return
                setPage(Math.min(doc.totalPages, Math.max(1, parsed)))
              }}
              className="ml-2 w-20 border border-gray-300 rounded px-2 py-1"
            />
          </label>
        </div>

        <iframe
          title={`${doc.title} document viewer`}
          src={embedSrc}
          className="w-full h-[75vh] rounded-xl border border-gray-200"
        />

        <div className="mt-5 flex flex-wrap gap-4">
          <a href={doc.file} download className="cta-button">Download PDF</a>
          <Link href="/resources/downloads" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">Back to Downloads</Link>
        </div>
      </div>
    </div>
  )
}
