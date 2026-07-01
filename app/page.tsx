'use client'

import Hero from '../components/home/Hero'
import StoryDivider from '../components/home/StoryDivider'
import FloodChallenge from '../components/home/FloodChallenge'
import GCRFIPSolution from '../components/home/GCRFIPSolution'
import SixPillars from '../components/home/SixPillars'
import NationalImpact from '../components/home/NationalImpact'
import DocumentsPreview from '../components/home/DocumentsPreview'
import PartnersSection from '../components/home/PartnersSection'
import PartnershipCallout from '../components/home/PartnershipCallout'

export default function Home() {
  return (
    <div>
      <Hero />
      <StoryDivider />
      <FloodChallenge />
      <GCRFIPSolution />
      <SixPillars />
      <NationalImpact />
      <DocumentsPreview />
      <PartnersSection />
      <PartnershipCallout />
    </div>
  )
}