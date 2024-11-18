import React from "react"

export default function PrivacyPolicy() {
    return (
      <main className="bg-white text-gray-900 pt-20">
        {/* Hero Section */}
        <div className="bg-gray-50">
          <div className="max-w-[1600px] mx-auto px-8 py-24">
            <h1 className="text-5xl font-light mb-6">Privacy Policy</h1>
            <p className="text-gray-600 text-xl">Last updated: November 18, 2024</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-[1600px] mx-auto px-8 py-16">
          <div className="max-w-3xl">
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-green-800">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">We collect information that you provide directly to us, including:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Name, email address, and phone number
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Property address and postcode
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Details about your tree service requirements
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Any additional information you provide in message fields
                </li>
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-green-800">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">We use the information we collect to:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Provide quotes for our services
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Communicate with you about your service requests
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Send you important updates about our services
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Improve our website and services
                </li>
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-green-800">3. Data Storage and Security</h2>
              <p className="text-gray-700 leading-relaxed">
                Your data is stored securely and we implement appropriate security measures to protect your information.
                We use industry-standard encryption and security protocols to ensure your personal information remains private and protected.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-green-800">4. Your Rights</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Under UK GDPR, you have the right to:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Access your personal data
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Correct inaccurate data
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Request deletion of your data
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Object to processing of your data
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Request transfer of your data
                </li>
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-green-800">5. Contact Us</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">For any privacy-related questions, please contact us at:</p>
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