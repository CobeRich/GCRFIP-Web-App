'use client'

export default function StoryDivider() {
  return (
    <section className="bg-white py-8 md:py-10">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-[#9dc4e8] to-transparent mb-4" />
          <p className="text-lg md:text-xl text-gcrfip-navy font-semibold leading-tight">
            From Disaster Response to Climate Intelligence
          </p>
          <p className="text-gcrfip-green text-2xl mt-2">▼</p>
        </div>
      </div>
    </section>
  )
}
