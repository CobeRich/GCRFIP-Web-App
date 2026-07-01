import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import BackToTop from '../components/layout/BackToTop'

export const metadata: Metadata = {
  title: 'GCRFIP - Ghana Climate Resilience and Flood Intelligence Programme',
  description: 'Intelligence Today. Resilience Tomorrow. The official platform for GCRFIP.',
  keywords: 'flood resilience, climate intelligence, Ghana, disaster risk reduction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const motionMode = (process.env.NEXT_PUBLIC_MOTION_MODE || 'balanced').toLowerCase()
  const motionClass =
    motionMode === 'conservative'
      ? 'motion-conservative'
      : motionMode === 'presentation'
      ? 'motion-presentation'
      : 'motion-balanced'

  return (
    <html lang="en">
      <body className={motionClass}>
        <Header />
        <Breadcrumbs />
        <main>
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
