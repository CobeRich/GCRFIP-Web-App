export type ResourceDocumentSlug =
  | 'executive-portfolio'
  | 'summary-report'
  | 'prospectus'
  | 'blueprint'
  | 'national-roadmap'
  | 'implementation-strategy'
  | 'founder-roadmap'

export type ResourceDocument = {
  title: string
  file: string
  totalPages: number
}

export const resourceDocuments: Record<ResourceDocumentSlug, ResourceDocument> = {
  'executive-portfolio': {
    title: 'Executive Portfolio',
    file: '/docs/gcrfip-executive-summary.pdf',
    totalPages: 12,
  },
  'summary-report': {
    title: 'Summary Report',
    file: '/docs/gcrfip-summary-report.pdf',
    totalPages: 17,
  },
  prospectus: {
    title: 'Programme Prospectus',
    file: '/docs/gcrfip-executive-summary.pdf',
    totalPages: 12,
  },
  blueprint: {
    title: 'Technical Blueprint',
    file: '/docs/gcrfip-executive-summary.pdf',
    totalPages: 12,
  },
  'national-roadmap': {
    title: 'National Roadmap',
    file: '/docs/gcrfip-executive-summary.pdf',
    totalPages: 12,
  },
  'implementation-strategy': {
    title: 'Implementation Strategy',
    file: '/docs/gcrfip-executive-summary.pdf',
    totalPages: 12,
  },
  'founder-roadmap': {
    title: 'Founder Roadmap',
    file: '/docs/gcrfip-executive-summary.pdf',
    totalPages: 12,
  },
}

type DownloadItem = {
  name: string
  format: string
  size: string
  slug?: ResourceDocumentSlug
}

export type DownloadCategory = {
  category: string
  lead: string
  files: DownloadItem[]
}

export const downloadCategories: DownloadCategory[] = [
  {
    category: 'Strategic Documents',
    lead: 'Core strategic references for programme planning and engagement.',
    files: [
      { name: 'Executive Portfolio', format: 'PDF', size: '2.4 MB', slug: 'executive-portfolio' },
      { name: 'Summary Report', format: 'PDF', size: '3.8 MB', slug: 'summary-report' },
      { name: 'Programme Prospectus', format: 'PDF', size: '4.1 MB', slug: 'prospectus' },
      { name: 'Technical Blueprint', format: 'PDF', size: '3.8 MB', slug: 'blueprint' },
      { name: 'National Roadmap', format: 'PDF', size: '3.8 MB', slug: 'national-roadmap' },
      { name: 'Implementation Strategy', format: 'PDF', size: '3.8 MB', slug: 'implementation-strategy' },
      { name: 'Founder Roadmap', format: 'PDF', size: '3.8 MB', slug: 'founder-roadmap' },
    ],
  },
  {
    category: 'Data and Analysis',
    lead: 'Analytical files supporting risk profiling and planning workflows.',
    files: [
      { name: 'Flood Risk Assessment', format: 'PDF', size: '5.2 MB', slug: 'national-roadmap' },
      { name: 'Climate Projections', format: 'Excel', size: '1.9 MB' },
      { name: 'Baseline Report', format: 'PDF', size: '3.5 MB', slug: 'summary-report' },
    ],
  },
  {
    category: 'Training Materials',
    lead: 'Learning assets for institutional and field-level capacity building.',
    files: [
      { name: 'Platform User Guide', format: 'PDF', size: '2.1 MB', slug: 'blueprint' },
      { name: 'Flood Preparedness Guide', format: 'PDF', size: '1.8 MB', slug: 'prospectus' },
      { name: 'Training Slides', format: 'PPT', size: '8.3 MB' },
    ],
  },
]
