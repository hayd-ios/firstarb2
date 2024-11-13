import { services } from '@/app/data/services'
import ServiceCard from '@/app/components/service-card'

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="bg-gray-50 pt-20">
        <div className="max-w-[1600px] mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive tree surgery services delivered by qualified professionals. 
              Click through to learn more about each service.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white">
        <div className="max-w-[1600px] mx-auto px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}