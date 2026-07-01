'use client'

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

export default function Home() {
  return (
    <div>
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