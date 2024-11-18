import React from "react"

export default function TermsOfService() {
    return (
      <main className="bg-white text-gray-900 pt-20">
        {/* Hero Section */}
        <div className="bg-gray-50">
          <div className="max-w-[1600px] mx-auto px-8 py-24">
            <h1 className="text-5xl font-light mb-6">Terms of Service</h1>
            <p className="text-gray-600 text-xl">Last updated: November 18, 2024</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-[1600px] mx-auto px-8 py-16">
          <div className="max-w-3xl">
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-green-800">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                By accessing and using the services provided by First Arb Tree Services, you agree to be bound by these Terms of Service. Please read these terms carefully before engaging our services.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-green-800">2. Description of Services</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">First Arb Tree Services provides professional arboricultural services including:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Tree removal and felling services
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Crown reduction and management
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Emergency tree services
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Stump removal and grinding
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Site clearance and maintenance
                </li>
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-green-800">3. Quotes and Pricing</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">All quotes provided are:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Subject to a site inspection
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Valid for 30 days from the date of issue
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Exclusive of any additional work found necessary during service delivery
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Subject to change based on site conditions and requirements
                </li>
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-green-800">4. Service Delivery</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Our commitment to service delivery includes:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Providing services with reasonable care and skill
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Using qualified and fully insured professionals
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Complying with all relevant health and safety regulations
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Maintaining appropriate insurance coverage
                </li>
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-green-800">5. Cancellation Policy</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We require a minimum of 48 hours notice for any cancellation. Cancellations made with less than 48 hours notice may incur a cancellation fee of up to 50% of the quoted price.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-green-800">6. Insurance and Liability</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We maintain comprehensive public liability insurance. However, our liability is limited to:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Direct damages caused by our services
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  The value of the services provided
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Exclusion of indirect or consequential losses
                </li>
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-green-800">7. Contact Information</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">For any questions about these terms, please contact us:</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center">
                    <span className="font-medium text-green-800 mr-2">Email:</span>
                    <a href="mailto:trees@firstarb.co.uk" className="text-green-600 hover:text-green-700">
                      trees@firstarb.co.uk
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium text-green-800 mr-2">Phone:</span>
                    <a href="tel:01452904720" className="text-green-600 hover:text-green-700">
                      01452 904720
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    )
}