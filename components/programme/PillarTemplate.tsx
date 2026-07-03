'use client'

import Image from 'next/image'
import Link from 'next/link'

export type PillarCard = {
  code: string
  title: string
  description: string
}

export type PillarLink = {
  title: string
  href: string
}

export type PillarGalleryItem = {
  src: string
  alt: string
  caption: string
}

export type PillarContent = {
  title: string
  tagline: string
  heroImage: string
  overview: string[]
  focusAreas: PillarCard[]
  workflow: string[]
  featuredInitiatives: PillarCard[]
  technologies: string[]
  expectedOutcomes: string[]
  relatedDocuments: PillarLink[]
  relatedNews: PillarLink[]
  relatedGallery: PillarGalleryItem[]
  cta: {
    title: string
    description: string
    primary: PillarLink
    secondary: PillarLink
  }
}

type PillarTemplateProps = {
  content: PillarContent
}

export default function PillarTemplate({ content }: PillarTemplateProps) {
  return (
    <div>
      <section className="relative overflow-hidden min-h-[48vh] text-white">
        <Image
          src={content.heroImage}
          alt={`${content.title} hero image`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02163f]/88 via-[#03245a]/68 to-[#02163f]/52" />
        <div className="relative container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200 mb-3">GCRFIP Programme Pillars</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{content.title}</h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl">{content.tagline}</p>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gcrfip-green">Overview</h2>
          <div className="max-w-3xl space-y-5">
            {content.overview.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gcrfip-green">Key Focus Areas</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {content.focusAreas.map((area) => (
              <article key={area.title} className="card p-6 border-t-4 border-gcrfip-gold/80">
                <div className="inline-flex rounded-full bg-[#eaf3ff] border border-[#bfd8f4] px-3 py-1 text-xs font-bold text-gcrfip-navy mb-3">
                  {area.code}
                </div>
                <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gcrfip-green">How This Pillar Works</h2>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 max-w-3xl">
            {content.workflow.map((stage, index) => (
              <div key={stage} className="text-center">
                <div className="card p-4 mb-2">
                  <p className="font-semibold text-gcrfip-navy">{stage}</p>
                </div>
                {index < content.workflow.length - 1 && <div className="text-gcrfip-green font-bold mb-2">v</div>}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gcrfip-green">Featured Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {content.featuredInitiatives.map((initiative) => (
              <article key={initiative.title} className="card p-6 border-t-4 border-gcrfip-green/70">
                <h3 className="text-lg font-bold text-gcrfip-navy mb-2">{initiative.title}</h3>
                <p className="text-gray-700 leading-relaxed">{initiative.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gcrfip-green">Technologies & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {content.technologies.map((technology) => (
              <span key={technology} className="chip chip-muted">
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gcrfip-green">Expected Outcomes</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {content.expectedOutcomes.map((outcome) => (
              <div key={outcome} className="card p-6 border-l-4 border-gcrfip-green">
                <p className="font-semibold text-gcrfip-navy">{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gcrfip-green">Related Documents</h2>
          <div className="flex flex-wrap gap-3">
            {content.relatedDocuments.map((item) => (
              <Link key={item.title} href={item.href} className="chip chip-muted">
                {item.title}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gcrfip-green">Related News</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {content.relatedNews.map((item) => (
              <Link key={item.title} href={item.href} className="card p-6 border-t-4 border-[#d8e6f6] ui-transition hover:-translate-y-0.5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gcrfip-green mb-2">News Update</p>
                <h3 className="text-lg font-bold text-gcrfip-navy">{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gcrfip-green">Related Gallery</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-5">
            {content.relatedGallery.map((image) => (
              <figure key={image.src} className="card overflow-hidden border border-[#dbeafe]">
                <div className="relative h-52">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <figcaption className="p-4 bg-white text-gray-700">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
          <Link href="/resources#flood-gallery" className="chip chip-muted">View Full Gallery</Link>
        </section>

        <section className="rounded-2xl border border-[#d8e6f6] bg-gradient-to-r from-[#02214f] via-[#033e74] to-[#075985] px-6 py-8 md:px-8 md:py-10 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{content.cta.title}</h2>
          <p className="text-gray-100 max-w-3xl mb-5">{content.cta.description}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={content.cta.primary.href} className="cta-button bg-white text-gcrfip-navy hover:bg-gcrfip-gold hover:text-gcrfip-navy">
              {content.cta.primary.title}
            </Link>
            <Link href={content.cta.secondary.href} className="chip border-white/60 text-white bg-white/10 hover:bg-white hover:text-gcrfip-navy">
              {content.cta.secondary.title}
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
