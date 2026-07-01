'use client'

import { useState } from 'react'

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 5000)
  }

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Newsletter Subscription</h1>
      
      <section className="max-w-2xl">
        <p className="text-lg text-gray-700 mb-8">
          Stay updated on GCRFIP developments, research findings, events, and flood resilience news.
          Subscribe to our mailing list to receive regular updates.
        </p>

        <div className="card p-8">
          <h2 className="text-2xl font-bold mb-6 text-gcrfip-navy">Subscribe Today</h2>
          
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gcrfip-navy mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gcrfip-green"
                required
              />
            </div>
            
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-gcrfip-green"
                  defaultChecked
                />
                <span className="ml-2 text-sm text-gray-700">
                  I agree to receive updates about GCRFIP via email
                </span>
              </label>
            </div>
            
            <button type="submit" className="cta-button w-full">
              Subscribe
            </button>
            
            {subscribed && (
              <p className="text-gcrfip-green font-semibold text-center">
                ✓ Successfully subscribed!
              </p>
            )}
          </form>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">What You'll Receive</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-gcrfip-gold mr-3 font-bold">✓</span>
              <span>Monthly GCRFIP programme updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-gcrfip-gold mr-3 font-bold">✓</span>
              <span>Latest flood resilience research and findings</span>
            </li>
            <li className="flex items-start">
              <span className="text-gcrfip-gold mr-3 font-bold">✓</span>
              <span>Announcements of events and workshops</span>
            </li>
            <li className="flex items-start">
              <span className="text-gcrfip-gold mr-3 font-bold">✓</span>
              <span>Early warning system updates and alerts</span>
            </li>
            <li className="flex items-start">
              <span className="text-gcrfip-gold mr-3 font-bold">✓</span>
              <span>Opportunities for participation and collaboration</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
