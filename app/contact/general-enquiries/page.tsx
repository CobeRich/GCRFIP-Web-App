'use client'

export default function GeneralEnquiries() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">General Enquiries</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-8">
          Have questions about GCRFIP? Contact us using the form below or reach out directly.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <div>
            <h3 className="text-lg font-bold text-gcrfip-navy mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gcrfip-green hover:text-gcrfip-navy font-semibold">
                  Learn about GCRFIP →
                </a>
              </li>
              <li>
                <a href="/programme" className="text-gcrfip-green hover:text-gcrfip-navy font-semibold">
                  Explore the Programme →
                </a>
              </li>
              <li>
                <a href="/research" className="text-gcrfip-green hover:text-gcrfip-navy font-semibold">
                  View Research →
                </a>
              </li>
              <li>
                <a href="/resources/faqs" className="text-gcrfip-green hover:text-gcrfip-navy font-semibold">
                  Read FAQs →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gcrfip-navy mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gcrfip-navy mb-1">Email</p>
                <a href="mailto:info@gcrfip.gh" className="text-gcrfip-green hover:text-gcrfip-navy">
                  info@gcrfip.gh
                </a>
              </div>
              <div>
                <p className="font-semibold text-gcrfip-navy mb-1">Phone</p>
                <a href="tel:+233XXXXXXXXX" className="text-gcrfip-green hover:text-gcrfip-navy">
                  +233 (0) XXX XXX XXX
                </a>
              </div>
              <div>
                <p className="font-semibold text-gcrfip-navy mb-1">Address</p>
                <p className="text-gray-700">Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
