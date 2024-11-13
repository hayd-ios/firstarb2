'use client'
import React, { useState } from 'react'
import { services } from '@/app/data/services'

const QuotePage = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    details: {
      treeCount: '1',
      treeHeight: 'medium',
      access: 'easy',
      urgency: 'normal'
    },
    location: {
      address: '',
      postcode: '',
      propertyType: 'residential'
    },
    contact: {
      name: '',
      email: '',
      phone: '',
      preferredContact: 'email',
      notes: ''
    }
  })

  const handleServiceSelect = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      service: serviceId
    }))
    setStep(2)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <main>
      {/* Hero Section */}
      <div className="bg-gray-50 pt-20">
        <div className="max-w-[1600px] mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
              Get a Free Quote
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tell us about your requirements and we'll provide you with a comprehensive quote for our services.
            </p>
          </div>
        </div>
      </div>

      {/* Quote Form */}
      <div className="bg-white text-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 py-24">
          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex justify-between">
              {['Select Service', 'Project Details', 'Location', 'Contact Info'].map((label, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 
                    ${step > index + 1 ? 'bg-green-500 text-white' : 
                      step === index + 1 ? 'bg-green-500 text-white' : 
                      'bg-gray-100 text-gray-400'}`}>
                    {step > index + 1 ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className={`text-sm ${step === index + 1 ? 'text-gray-900' : 'text-gray-400'}`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Steps */}
          <div className="max-w-4xl mx-auto">
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className={`text-left p-8 rounded-3xl border-2 transition-colors
                      ${formData.service === service.id ? 
                        'border-green-500 bg-green-50' : 
                        'border-gray-100 hover:border-green-500 hover:bg-gray-50'}`}
                  >
                    <h3 className="text-xl font-medium text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Trees/Items
                    </label>
                    <select
                      value={formData.details.treeCount}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        details: { ...prev.details, treeCount: e.target.value }
                      }))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="1">1</option>
                      <option value="2-5">2-5</option>
                      <option value="6+">6+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Height/Size
                    </label>
                    <select
                      value={formData.details.treeHeight}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        details: { ...prev.details, treeHeight: e.target.value }
                      }))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="small">Small (under 20ft)</option>
                      <option value="medium">Medium (20-40ft)</option>
                      <option value="large">Large (40ft+)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Access
                    </label>
                    <select
                      value={formData.details.access}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        details: { ...prev.details, access: e.target.value }
                      }))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="easy">Easy access</option>
                      <option value="limited">Limited access</option>
                      <option value="difficult">Difficult access</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency
                    </label>
                    <select
                      value={formData.details.urgency}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        details: { ...prev.details, urgency: e.target.value }
                      }))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <form className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    value={formData.location.address}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      location: { ...prev.location, address: e.target.value }
                    }))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your address"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postcode
                    </label>
                    <input
                      type="text"
                      value={formData.location.postcode}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        location: { ...prev.location, postcode: e.target.value }
                      }))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter postcode"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type
                    </label>
                    <select
                      value={formData.location.propertyType}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        location: { ...prev.location, propertyType: e.target.value }
                      }))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}

            {step === 4 && (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.contact.name}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        contact: { ...prev.contact, name: e.target.value }
                      }))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.contact.phone}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        contact: { ...prev.contact, phone: e.target.value }
                      }))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.contact.email}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      contact: { ...prev.contact, email: e.target.value }
                    }))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    value={formData.contact.preferredContact}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      contact: { ...prev.contact, preferredContact: e.target.value }
                    }))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    value={formData.contact.notes}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      contact: { ...prev.contact, notes: e.target.value }
                    }))}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Any additional information..."
                  ></textarea>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Submit Quote Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default QuotePage