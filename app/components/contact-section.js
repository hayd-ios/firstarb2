import React from 'react'

const ContactSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1600px] mx-auto px-8 py-24">
        <div className="flex flex-col gap-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-1/3">
              <div className="text-sm font-medium text-green-500 tracking-wide mb-4">
                GET IN TOUCH
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight">
                Ready to work with us?
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-600 leading-relaxed">
                Contact us for a free consultation and quote. We serve Cheltenham and surrounding 
                areas with professional tree surgery services.
              </p>
            </div>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map */}
            <div className="bg-gray-100 rounded-3xl overflow-hidden aspect-square md:aspect-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39852.83665805776!2d-2.0955!3d51.8979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871068c82498925%3A0x7a02e3fdc6eb25e9!2sCheltenham!5e0!3m2!1sen!2suk!4v1647901234567!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                className="grayscale"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">01242 000000</p>
                    <p className="text-gray-600">24/7 Emergency: 07000 000000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@firstarb.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Serving Cheltenham and surrounding areas</p>
                    <p className="text-gray-600">Gloucestershire, GL50</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="font-medium text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-900">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-900">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-900">Emergency Only</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    24/7 Emergency Service Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection