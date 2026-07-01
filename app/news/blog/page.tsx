'use client'

export default function Blog() {
  const posts = [
    {
      date: 'June 28, 2026',
      title: 'Understanding Ghana\'s Urban Flood Challenge',
      author: 'GCRFIP Communications',
      excerpt: 'An in-depth look at why cities like Accra face increasing flood risks.',
    },
    {
      date: 'June 20, 2026',
      title: 'How Early Warning Systems Save Lives',
      author: 'Dr. [Expert Name]',
      excerpt: 'A technical explanation of how flood forecasting can enable proactive response.',
    },
    {
      date: 'June 10, 2026',
      title: 'Climate Change and Ghana\'s Future Floods',
      author: 'GCRFIP Research Team',
      excerpt: 'What climate projections tell us about flood risks in the coming decades.',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Blog</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          Articles and insights on flood resilience, climate adaptation, and disaster risk reduction.
        </p>

        <div className="max-w-3xl space-y-6">
          {posts.map((post, index) => (
            <article key={index} className="card p-6">
              <div className="flex justify-between items-start mb-2">
                <time className="text-sm text-gcrfip-green font-semibold">{post.date}</time>
                <span className="text-sm text-gray-600">by {post.author}</span>
              </div>
              <h2 className="text-xl font-bold text-gcrfip-navy mb-3">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <a href="#" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
                Read article →
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
