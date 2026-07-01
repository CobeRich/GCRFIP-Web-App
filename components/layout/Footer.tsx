export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gcrfip-navy text-white mt-24">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-gcrfip-gold">Home</a></li>
              <li><a href="/about" className="hover:text-gcrfip-gold">About</a></li>
              <li><a href="/programme" className="hover:text-gcrfip-gold">Programme</a></li>
              <li><a href="/contact" className="hover:text-gcrfip-gold">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/resources" className="hover:text-gcrfip-gold">Documents</a></li>
              <li><a href="/news" className="hover:text-gcrfip-gold">News</a></li>
              <li><a href="/research" className="hover:text-gcrfip-gold">Research</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/get-involved" className="hover:text-gcrfip-gold">Partnerships</a></li>
              <li><a href="/contact" className="hover:text-gcrfip-gold">Newsletter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm">Email: info@gcrfip.gov.gh</p>
            <p className="text-sm mt-2">Follow us:</p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-gcrfip-gold">LinkedIn</a>
              <a href="#" className="hover:text-gcrfip-gold">Twitter</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8">
          <p className="text-center text-sm">
            &copy; {currentYear} Ghana Climate Resilience and Flood Intelligence Programme. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
