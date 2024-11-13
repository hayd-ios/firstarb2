'use client'

import React, { useState } from 'react'

const faqs = [
  {
    question: "How much does tree removal cost?",
    answer: "The cost of tree removal varies depending on factors such as tree size, location, and accessibility. We provide free, no-obligation quotes after assessing your specific requirements."
  },
  {
    question: "Are you fully insured?",
    answer: "Yes, we carry comprehensive insurance coverage including public liability and professional indemnity insurance for all tree surgery work we undertake."
  },
  {
    question: "How quickly can you respond to emergency tree work?",
    answer: "We offer 24/7 emergency response for urgent tree work. In most cases, we can be on-site within 2 hours for emergency situations in the Cheltenham area."
  },
  {
    question: "Do you clear away all waste after tree work?",
    answer: "Yes, we provide complete site clearance after all tree work. We recycle wood waste where possible and ensure your property is left clean and tidy."
  },
  {
    question: "Do I need permission to remove a tree?",
    answer: "Some trees are protected by Tree Preservation Orders (TPOs) or are in Conservation Areas. We can help check if you need permission and assist with the application process."
  },
  {
    question: "What areas do you cover?",
    answer: "We primarily serve Cheltenham and surrounding areas in Gloucestershire, including Gloucester, Tewkesbury, Stroud, and the Cotswolds."
  }
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-8 py-24">
        <div className="flex flex-col gap-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-1/3">
              <div className="text-sm font-medium text-green-500 tracking-wide mb-4">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight">
                Common questions about our services
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-600 leading-relaxed">
                Find answers to frequently asked questions about our tree surgery services. 
                If you can't find what you're looking for, feel free to contact us directly.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  className="flex justify-between items-start w-full py-6 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <span className="ml-6 flex-shrink-0">
                    <svg
                      className={`w-6 h-6 transform ${openIndex === index ? 'rotate-180' : ''} text-gray-400 transition-transform duration-200`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`${
                    openIndex === index ? 'pb-6' : 'h-0 overflow-hidden'
                  } transition-all duration-200`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-8">
            <div className="bg-gray-900 rounded-3xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-normal text-white mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-400 mb-8">
                  Our team is here to help. Contact us for expert advice and free quotes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+441242000000" 
                    className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us
                  </a>
                  <button className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQSection