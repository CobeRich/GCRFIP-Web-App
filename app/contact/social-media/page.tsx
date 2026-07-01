'use client'

export default function SocialMedia() {
  const socialLinks = [
    {
      platform: 'Twitter',
      handle: '@GCRFIP_Ghana',
      url: 'https://twitter.com',
      description: 'Latest updates and news',
    },
    {
      platform: 'Facebook',
      handle: '/GCRFIP.Ghana',
      url: 'https://facebook.com',
      description: 'Community engagement and events',
    },
    {
      platform: 'LinkedIn',
      handle: '/company/gcrfip',
      url: 'https://linkedin.com',
      description: 'Professional updates and careers',
    },
    {
      platform: 'Instagram',
      handle: '@GCRFIP_Ghana',
      url: 'https://instagram.com',
      description: 'Visual stories and updates',
    },
    {
      platform: 'YouTube',
      handle: '/GCRFIP',
      url: 'https://youtube.com',
      description: 'Videos and educational content',
    },
  ]

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Social Media</h1>
      
      <section>
        <p className="text-lg text-gray-700 mb-8">
          Follow GCRFIP on social media for the latest updates, news, and engage with our community.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="card p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gcrfip-navy mb-2">{social.platform}</h3>
              <p className="text-gcrfip-green font-semibold mb-3">{social.handle}</p>
              <p className="text-gray-700">{social.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
