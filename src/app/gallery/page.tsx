'use client';

import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/images/gallery-1.jpg",
      alt: "Window blinds in office",
      category: "Commercial"
    },
    {
      src: "/images/gallery-2.jpg",
      alt: "Curtains in modern home",
      category: "Residential"
    },
    {
      src: "/images/gallery-3.jpg",
      alt: "Luxury living room with curtains",
      category: "Residential"
    },
    {
      src: "/images/gallery-4.jpg",
      alt: "Modern living room with custom blinds",
      category: "Residential"
    },
    {
      src: "/images/gallery-5.jpg",
      alt: "Elegant bedroom with blackout curtains",
      category: "Residential"
    },
    {
      src: "/images/gallery-6.jpg",
      alt: "Contemporary office with vertical blinds",
      category: "Commercial"
    },
    {
      src: "/images/gallery-7.jpg",
      alt: "Luxury home with motorized blinds",
      category: "Residential"
    },
    {
      src: "/images/gallery-8.jpg",
      alt: "Hotel lobby with custom window treatments",
      category: "Commercial"
    },
    {
      src: "/images/gallery-9.jpg",
      alt: "Modern kitchen with roller blinds",
      category: "Residential"
    },
    {
      src: "/images/gallery-10.jpg",
      alt: "Conference room with Venetian blinds",
      category: "Commercial"
    },
    {
      src: "/images/gallery-11.jpg",
      alt: "Master bedroom with sheer curtains",
      category: "Residential"
    },
    {
      src: "/images/gallery-12.jpg",
      alt: "Restaurant with custom fabric treatments",
      category: "Commercial"
    }
  ];

  const categories = ["All", "Residential", "Commercial"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <img
          src="/images/Gallery-hero.jpg"
          alt="Our Gallery - Window Treatment Installations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Explore our portfolio of beautiful window treatment installations
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative h-64">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                  <p className="text-gray-300 text-xs">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Love What You See?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us create beautiful window treatments for your space too.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}
