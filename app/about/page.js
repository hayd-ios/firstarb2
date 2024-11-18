import React from 'react'
import Image from 'next/image'
import Footer from '../components/footer'

const AboutPage = () => {
  const values = [
    {
      title: "Expertise",
      description: "Our team consists of fully qualified and experienced arborists who stay up-to-date with the latest tree care techniques.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Safety",
      description: "Safety is our top priority. We follow strict safety protocols and are fully insured for your peace of mind.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Sustainability",
      description: "We're committed to environmental responsibility, using eco-friendly practices and recycling all suitable tree waste.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      )
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <div className="bg-gray-50 pt-20">
        <div className="max-w-[1600px] mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
              About FirstArb
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional tree surgery services with over 15 years of experience serving 
              Cheltenham and surrounding areas.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white">
        <div className="max-w-[1600px] mx-auto px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gray-900/10"></div>
              <Image
                src="/assets/img1.jpg"
                alt="Professional Tree Surgery"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-normal text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2008, FirstArb has grown to become one of Cheltenham's most trusted tree surgery companies. 
                  Our journey began with a simple mission: to provide professional, reliable tree care services while 
                  maintaining the highest standards of safety and environmental responsibility.
                </p>
                <p>
                  Over the years, we've built a reputation for excellence in all aspects of tree surgery, from routine 
                  maintenance to complex removals. Our team's expertise and commitment to quality have earned us the trust 
                  of homeowners, businesses, and local authorities throughout Gloucestershire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-8 py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-normal text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg text-gray-600">
              At FirstArb, our work is guided by core values that ensure we deliver the highest 
              quality service while protecting both our clients and the environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-8">
                <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-[1600px] mx-auto px-8 py-24">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-normal text-white mb-6">
              Ready to work with us?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our expert team is ready 
              to help with all your tree care needs.
            </p>
            <a href="/contact" className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutPage