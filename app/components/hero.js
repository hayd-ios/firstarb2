import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className=" bg-gray-50 pt-20">
      <div className="mx-auto px-8 py-12">
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden bg-gray-900">
          <Image 
            src="/assets/hero.jpg" 
            alt="Professional Tree Surgery" 
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 max-w-[1600px] mx-auto">
            <div className="h-full flex flex-col justify-center max-w-3xl px-12">
              <div className="text-sm font-medium text-green-400 tracking-wide mb-4">
                PROFESSIONAL TREE CARE SERVICES
              </div>
              <h1 className="text-[3.5rem] md:text-[4.5rem] font-normal text-white mb-6 leading-[1.1] tracking-[-0.02em]">
                A better way to care for your trees
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Expert tree surgery and maintenance services delivered with precision and care. 
                Serving Cheltenham and surrounding areas in Gloucestershire.
              </p>
              <Link 
                href="/quote" 
                className="inline-flex items-center text-white border-b-2 border-green-400 hover:border-green-500 pb-1 transition-colors group w-fit"
              >
                Request a Quote
                <svg 
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
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
    </div>
  )
}

export default Hero