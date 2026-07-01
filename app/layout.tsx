import type { Metadata } from 'next'
import './globals.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

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
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
