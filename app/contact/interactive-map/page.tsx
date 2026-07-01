'use client'

export default function InteractiveMap() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Find Us</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gcrfip-green">GCRFIP Location</h2>
        
        <div className="card p-0 overflow-hidden mb-8">
          <div className="w-full h-96 bg-gcrfip-light-grey flex items-center justify-center">
            <p className="text-gray-600 text-center">
              [Interactive Map will be embedded here]
              <br />
              <span className="text-sm">View location in Accra, Ghana</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Address</h3>
            <p className="text-gray-700 mb-4">
              Ghana Climate Resilience and Flood Intelligence Programme
              <br />
              Office Building, [Street Name]
              <br />
              Accra, Ghana
            </p>
            <a href="#" className="text-gcrfip-green font-semibold hover:text-gcrfip-navy">
              Get Directions →
            </a>
          </div>
          
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gcrfip-navy mb-3">Public Transport</h3>
            <p className="text-gray-700 mb-4">
              The office is accessible by:
              <br />
              • Bus services [route names]
              <br />
              • Shared taxis to [Location]
              <br />
              • Walking distance from metro station
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
