import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-medium text-white">
              FirstArb
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Professional tree surgery services in Cheltenham and surrounding areas. 
              Fully qualified and insured arborists.
            </p>
            <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/nik-mawdsley-b54a64220" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/quote" className="text-gray-400 hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services/tree-removal" className="text-gray-400 hover:text-white transition-colors">Tree Removal</Link></li>
              <li><Link href="/services/crown-reduction" className="text-gray-400 hover:text-white transition-colors">Crown Management</Link></li>
              <li><Link href="/services/emergency" className="text-gray-400 hover:text-white transition-colors">Emergency Services</Link></li>
              <li><Link href="/services/stump-removal" className="text-gray-400 hover:text-white transition-colors">Stump Removal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">
                <span className="block text-sm">Phone</span>
                01452 904720
              </li>
              <li className="text-gray-400">
                <span className="block text-sm">Email</span>
                trees@firstarb.co.uk
              </li>
              <li className="text-gray-400">
                <span className="block text-sm">Emergency 24/7</span>
                07821 908487
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} FirstArb. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer