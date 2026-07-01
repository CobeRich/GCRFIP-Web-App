'use client'

export default function StudentOpportunities() {
  const opportunities = [
    {
      title: 'Research Internships',
      description: 'Opportunities for undergraduate and graduate students to participate in GCRFIP research projects.',
      icon: '🎓',
    },
    {
      title: 'Graduate Scholarships',
      description: 'Funding for graduate students pursuing theses on flood resilience topics.',
      icon: '📚',
    },
    {
      title: 'Fellowship Programs',
      description: 'Postdoctoral and researcher fellowships in flood science and resilience.',
      icon: '🏆',
    },
    {
      title: 'Mentorship',
      description: 'Mentoring relationships with leading experts in flood resilience research.',
      icon: '👥',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Student Opportunities</h1>
      
      <section className="mb-12">
        <p className="text-lg text-gray-700 mb-8">
          GCRFIP is committed to developing Ghana's next generation of flood resilience experts and leaders.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {opportunities.map((opp, index) => (
            <div key={index} className="card p-6">
              <div className="text-4xl mb-4">{opp.icon}</div>
              <h3 className="text-lg font-bold text-gcrfip-navy mb-3">{opp.title}</h3>
              <p className="text-gray-700">{opp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="card p-8 bg-gcrfip-light-grey">
          <h2 className="text-2xl font-bold mb-4 text-gcrfip-navy">Apply Now</h2>
          <p className="text-gray-700 mb-6">
            Interested in joining us? Submit your application and learn more about opportunities.
          </p>
          <button className="cta-button">View Opportunities & Apply</button>
        </div>
      </section>
    </div>
  )
}
