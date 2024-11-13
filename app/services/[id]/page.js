import { services } from '@/app/data/services'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function ServicePage({ params }) {
  const service = services.find(s => s.id === params.id)

  if (!service) {
    notFound()
  }

  return (
    <main>
      {/* Hero Section */}
      <div className="bg-gray-50 pt-20">
        <div className="max-w-[1600px] mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <Link 
              href="/services"
              className="inline-flex items-center text-green-600 hover:text-green-700 mb-8"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="bg-white">
        <div className="max-w-[1600px] mx-auto px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-normal text-gray-900 mb-6">About This Service</h2>
              <div className="prose prose-lg text-gray-600">{service.fullDescription}</div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-normal text-gray-900 mb-6">Our Process</h3>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="sticky top-8">
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-8">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="bg-gray-50 rounded-3xl p-8">
                  <h3 className="text-xl font-normal text-gray-900 mb-6">Get a Quote</h3>
                  <p className="text-gray-600 mb-8">
                    Contact us for a free, no-obligation quote for your {service.title.toLowerCase()} needs.
                  </p>
                  <Link 
                    href="/contact"
                    className="block w-full bg-green-500 text-white text-center px-8 py-4 rounded-full hover:bg-green-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}