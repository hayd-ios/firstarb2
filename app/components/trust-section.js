import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const testimonials = [
  {
    quote: "Excellent service from start to finish. The team was professional, efficient, and left our property spotless.",
    author: "Sarah Thompson",
    role: "Homeowner in Cheltenham",
    rating: 5
  },
  {
    quote: "FirstArb handled our emergency tree removal quickly and safely. Highly recommend their services.",
    author: "James Wilson",
    role: "Property Manager",
    rating: 5
  },
  {
    quote: "Regular maintenance of our commercial property's trees has never been easier. Great team to work with.",
    author: "Michael Roberts",
    role: "Business Owner",
    rating: 5
  }
]

const accreditations = [
    {
      name: "NPTC Qualified",
      icon: (
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      name: "Trading Standards Approved",
      icon: (
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: "Fully Insured",
      icon: (
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      name: "Environmental Care",
      icon: (
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      )
    }
  ]

const TrustSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1600px] mx-auto px-8 py-24">
        <div className="flex flex-col gap-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-1/3">
              <div className="text-sm font-medium text-green-500 tracking-wide mb-4">
                WHY CHOOSE US
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight">
                Trusted by local residents and businesses
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-600 leading-relaxed">
                With years of experience serving Cheltenham and surrounding areas, we've built 
                our reputation on reliability, expertise, and exceptional customer service.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Accreditations */}
          <div className="border-t border-gray-200 pt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-normal text-gray-900 mb-4">
                Our Accreditations
              </h3>
              <p className="text-gray-600">
                Certified professionals you can trust
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {accreditations.map((accred, index) => (
                <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    {accred.icon}
                </div>
                <div className="text-sm text-gray-600 text-center">{accred.name}</div>
                </div>
            ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-normal mb-3">
                  Need expert tree care?
                </h3>
                <p className="text-green-50">
                  Get in touch for a free, no-obligation quote today.
                </p>
              </div>
              <Link href="/contact" className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-green-50 transition-colors">
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustSection