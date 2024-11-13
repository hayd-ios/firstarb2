import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
    {
      title: "Tree Removal & Felling",
      description: "Safe and efficient removal of trees in any location, including confined spaces and near buildings. Fully insured with specialist equipment.",
      image: "https://placehold.co/800x600/1a472a/FFFFFF/webp?text=Tree+Removal",
      link: "/services/tree-removal"
    },
    {
      title: "Crown Management",
      description: "Expert crown reduction, thinning, and reshaping services to improve tree health, light penetration, and aesthetic appearance.",
      image: "https://placehold.co/800x600/1a472a/FFFFFF/webp?text=Crown+Management",
      link: "/services/crown-management"
    },
    {
      title: "Hedge & Shrub Care",
      description: "Professional hedge trimming, maintenance, and reshaping services to keep your garden boundaries looking pristine year-round.",
      image: "https://placehold.co/800x600/1a472a/FFFFFF/webp?text=Hedge+Care",
      link: "/services/hedge-care"
    },
    {
      title: "Stump Removal",
      description: "Complete stump grinding and removal services, clearing your space for new landscaping or construction projects.",
      image: "https://placehold.co/800x600/1a472a/FFFFFF/webp?text=Stump+Removal",
      link: "/services/stump-removal"
    },
    {
      title: "Site Clearance",
      description: "Comprehensive site clearance services for development projects, including vegetation removal and land preparation.",
      image: "https://placehold.co/800x600/1a472a/FFFFFF/webp?text=Site+Clearance",
      link: "/services/site-clearance"
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency call-out service for storm damage, fallen trees, and dangerous situations requiring immediate attention.",
      image: "https://placehold.co/800x600/1a472a/FFFFFF/webp?text=Emergency+Services",
      link: "/services/emergency"
    }
  ]

const ServicesSection = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-8 py-24">
        <div className="flex flex-col gap-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-1/3">
              <div className="text-sm font-medium text-green-500 tracking-wide mb-4">
                OUR SERVICES
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight">
                Comprehensive tree care solutions
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-600 leading-relaxed">
                From routine maintenance to emergency tree removal, our expert team delivers 
                professional services tailored to your specific needs. We prioritize safety, 
                efficiency, and environmental responsibility in every project.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                href={service.link} 
                key={index}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-green-500 transition-colors">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-medium text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-green-500 font-medium group-hover:text-green-600">
                      Learn more
                      <svg 
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-900 rounded-3xl p-8 md:p-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-3">
                Ready to get started?
              </h3>
              <p className="text-gray-400">
                Contact us today for a free consultation and quote.
              </p>
            </div>
            <Link 
              href="/quote"
              className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection