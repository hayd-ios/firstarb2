import React from 'react'

const StatsSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1600px] mx-auto px-8 py-24">
        <div className="flex flex-col gap-16">
          {/* Top Section with Title */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 md:w-1/3 leading-tight">
              Trusted by Cheltenham's homeowners and businesses
            </h2>
            <p className="text-lg text-gray-600 md:w-2/3 leading-relaxed">
              With over a decade of experience in professional tree surgery, we combine expertise 
              with cutting-edge techniques to deliver exceptional results for every project.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-green-500 transition-colors">
              <div className="text-4xl font-light text-gray-900 mb-4">15+</div>
              <div className="text-lg text-gray-600">Years of Experience</div>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-green-500 transition-colors">
              <div className="text-4xl font-light text-gray-900 mb-4">2,500+</div>
              <div className="text-lg text-gray-600">Projects Completed</div>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-green-500 transition-colors">
              <div className="text-4xl font-light text-gray-900 mb-4">100%</div>
              <div className="text-lg text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="space-y-4">
              <svg 
                className="w-12 h-12 text-green-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-900">Fully Insured</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive insurance coverage for complete peace of mind on every project.
              </p>
            </div>
            <div className="space-y-4">
              <svg 
                className="w-12 h-12 text-green-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-900">Fast Response</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick response times for emergencies and flexible scheduling for all services.
              </p>
            </div>
            <div className="space-y-4">
              <svg 
                className="w-12 h-12 text-green-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
              <h3 className="text-xl font-medium text-gray-900">Eco-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Environmentally conscious approaches to tree care and waste management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsSection