'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { services as galleryItems } from '../data/services'



// const categories = [
//   { id: 'all', name: 'All Work' },
//   { id: 'tree-removal', name: 'Tree Removal' },
//   { id: 'crown-management', name: 'Crown Management' },
//   { id: 'hedge-care', name: 'Hedge Care' },
//   { id: 'emergency', name: 'Emergency Work' },
//   { id: 'stump-removal', name: 'Stump Removal' },
//   { id: 'site-clearance', name: 'Site Clearance' }
// ]

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredGallery = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <main>
      {/* Hero Section */}
      <div className="bg-gray-50 pt-20">
        <div className="max-w-[1600px] mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
              Our Work
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Browse through our portfolio of completed projects, showcasing our expertise 
              in tree surgery and vegetation management.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-white">
        <div className="max-w-[1600px] mx-auto px-8 py-24">
          {/* Category Filter
          <div className="flex flex-wrap gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category.id 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {category.name}
              </button>
            ))}
          </div> */}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors z-10"></div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-gray-900/90 z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-white">
              <h3 className="text-xl font-medium mb-2">{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default GalleryPage