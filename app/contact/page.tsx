'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Get in Touch</h2>
          
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-bold text-gcrfip-navy mb-2">Email</h3>
              <a href="mailto:info@gcrfip.gh" className="text-gcrfip-green hover:text-gcrfip-navy">
                info@gcrfip.gh
              </a>
            </div>
            
            <div>
              <h3 className="font-bold text-gcrfip-navy mb-2">Phone</h3>
              <a href="tel:+233XXXXXXXXX" className="text-gcrfip-green hover:text-gcrfip-navy">
                +233 (0) XXX XXX XXX
              </a>
            </div>
            
            <div>
              <h3 className="font-bold text-gcrfip-navy mb-2">Address</h3>
              <p className="text-gray-700">
                Accra, Ghana
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gcrfip-navy mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gcrfip-green"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gcrfip-navy mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gcrfip-green"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gcrfip-navy mb-2">Organization</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gcrfip-green"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gcrfip-navy mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gcrfip-green"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="cta-button w-full">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}
