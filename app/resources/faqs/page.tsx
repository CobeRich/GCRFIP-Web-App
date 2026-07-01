'use client'

export default function FAQs() {
  const faqs = [
    {
      question: 'What is GCRFIP?',
      answer: 'GCRFIP is Ghana\'s comprehensive programme for building national flood resilience through integrated science, technology, governance, and community engagement.',
    },
    {
      question: 'How does the Early Warning System work?',
      answer: 'The system uses real-time data from monitoring stations combined with advanced forecasting models to predict floods 24-72 hours in advance and issue alerts to communities.',
    },
    {
      question: 'How can I access flood data?',
      answer: 'Data is available through our Open Data Portal. You can download historical records, view real-time feeds, or use our API for programmatic access.',
    },
    {
      question: 'How can my organization partner with GCRFIP?',
      answer: 'Visit our Get Involved page to learn about partnership opportunities or contact us directly at info@gcrfip.gh.',
    },
    {
      question: 'Are there student opportunities?',
      answer: 'Yes! We offer internships, scholarships, fellowships, and mentorship programs for students and early-career researchers.',
    },
    {
      question: 'How is GCRFIP funded?',
      answer: 'GCRFIP is supported by government budgets, international donor funding, and in-kind contributions from partners.',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Frequently Asked Questions</h1>
      
      <section className="max-w-3xl">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-lg font-bold text-gcrfip-navy mb-3">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
