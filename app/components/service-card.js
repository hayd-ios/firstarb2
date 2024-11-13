import Link from 'next/link'
import Image from 'next/image'

export default function ServiceCard({ service }) {
  return (
    <Link 
      href={`/services/${service.id}`}
      className="group bg-gray-50 rounded-3xl overflow-hidden hover:bg-gray-100 transition-colors"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/20 transition-colors z-10"></div>
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-normal text-gray-900 mb-4">
          {service.title}
        </h2>
        <p className="text-gray-600 mb-6">
          {service.description}
        </p>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex items-center text-green-600 font-medium group-hover:text-green-700">
          Learn more
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}