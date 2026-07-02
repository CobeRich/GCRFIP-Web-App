'use client'

import { useEffect } from 'react'
import Hero from '../components/home/Hero'
import StoryDivider from '../components/home/StoryDivider'
import FloodChallenge from '../components/home/FloodChallenge'
import GCRFIPSolution from '../components/home/GCRFIPSolution'
import GCRFIPDifference from '../components/home/GCRFIPDifference'
import SixPillars from '../components/home/SixPillars'
import NationalImpact from '../components/home/NationalImpact'
import DocumentsPreview from '../components/home/DocumentsPreview'
import LatestNews from '../components/home/LatestNews'
import UpcomingEvents from '../components/home/UpcomingEvents'
import PartnersSection from '../components/home/PartnersSection'
import PartnershipCallout from '../components/home/PartnershipCallout'
import PageAtmosphere from '../components/layout/PageAtmosphere'

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash

    if (!hash) {
      return
    }

    const target = document.querySelector(hash)

    if (!target) {
      return
    }

    const scrollToHashTarget = () => {
      target.scrollIntoView({ block: 'start' })
    }

    requestAnimationFrame(scrollToHashTarget)

    const retryOne = window.setTimeout(scrollToHashTarget, 250)
    const retryTwo = window.setTimeout(scrollToHashTarget, 800)

    return () => {
      window.clearTimeout(retryOne)
      window.clearTimeout(retryTwo)
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      <PageAtmosphere variant="home" />
      <Hero />
      <StoryDivider />
      <FloodChallenge />
      <GCRFIPSolution />
      <GCRFIPDifference />
      <SixPillars />
      <NationalImpact />
      <DocumentsPreview />
      <LatestNews />
      <UpcomingEvents />
      <PartnersSection />
      <PartnershipCallout />
    </div>                                                                                                                                                                                                                                          
  )
}