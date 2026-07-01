'use client'

export default function OfficeInformation() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Office Information</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">GCRFIP Headquarters</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-4">Address</h3>
            <p className="text-gray-700 mb-2">Ghana Climate Resilience and Flood Intelligence Programme</p>
            <p className="text-gray-700 mb-2">Office Building, [Street Name]</p>
            <p className="text-gray-700 mb-4">Accra, Ghana</p>
          </div>
          
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-4">Contact Details</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Phone:</span>
              <a href="tel:+233XXXXXXXXX" className="text-gcrfip-green hover:text-gcrfip-navy">
                {' '} +233 (0) XXX XXX XXX
              </a>
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Email:</span>
              <a href="mailto:info@gcrfip.gh" className="text-gcrfip-green hover:text-gcrfip-navy">
                {' '} info@gcrfip.gh
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">Office Hours</h2>
        <div className="card p-6">
          <ul className="space-y-3 text-gray-700">
            <li><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 5:00 PM</li>
            <li><span className="font-semibold">Saturday:</span> Closed</li>
            <li><span className="font-semibold">Sunday:</span> Closed</li>
          </ul>
          <p className="text-gray-600 text-sm mt-6">Closed on national holidays</p>
        </div>
      </section>
    </div>
  )
}
