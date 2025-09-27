import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const blinds = [
    {
      name: "Roller Blinds",
      description: "Clean, modern design with smooth operation and excellent light control",
      image: "/images/Roller-Blinds.jpg",
      features: ["Smooth operation", "Light control", "Modern design", "Easy maintenance"]
    },
    {
      name: "Vertical Blinds",
      description: "Perfect for large windows and sliding doors with adjustable light control",
      image: "/images/Vertical-Blinds.jpg",
      features: ["Large window coverage", "Adjustable slats", "Durable materials", "Easy cleaning"]
    },
    {
      name: "Venetian Blinds",
      description: "Classic horizontal slats offering precise light and privacy control",
      image: "/images/Venetian-Blinds.jpg",
      features: ["Precise control", "Timeless design", "Privacy options", "Multiple materials"]
    },
    {
      name: "Motorized Blinds",
      description: "Smart, automated blinds controlled by remote or smartphone app",
      image: "/images/Motorized-Blinds.jpg",
      features: ["Smart control", "Remote operation", "App integration", "Energy efficient"]
    }
  ];

  const curtains = [
    {
      name: "Sheer Curtains",
      description: "Elegant, lightweight curtains that filter light while maintaining privacy",
      image: "/images/Sheer-Curtains.jpg",
      features: ["Light filtering", "Elegant drape", "Privacy", "Versatile styling"]
    },
    {
      name: "Blackout Curtains",
      description: "Complete light blocking for bedrooms and media rooms",
      image: "/images/Blackout-Curtains.jpg",
      features: ["Complete darkness", "Energy saving", "Noise reduction", "Privacy"]
    },
    {
      name: "Custom Fabric Curtains",
      description: "Bespoke curtains made from your choice of premium fabrics",
      image: "/images/Custom-Fabric-Curtains.jpg",
      features: ["Custom fabrics", "Perfect fit", "Design consultation", "Premium quality"]
    }
  ];

  const customTreatments = [
    {
      name: "Custom Window Treatments",
      description: "Bespoke solutions designed specifically for your space and requirements",
      image: "/images/Custom-Window-Treatments.jpg",
      features: ["Bespoke design", "Perfect measurements", "Premium materials", "Expert installation"]
    },
    {
      name: "Commercial Solutions",
      description: "Professional window treatments for offices, hotels, and commercial spaces",
      image: "/images/Commercial-Solutions.jpg",
      features: ["Commercial grade", "Bulk pricing", "Professional installation", "Maintenance support"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <Image
          src="/images/Products-hero.avif"
          alt="Our Products - Blinds, Curtains, and Window Treatments"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Discover our comprehensive range of window treatment solutions
          </p>
        </div>
      </section>

      {/* Blinds Section */}
      <section id="blinds" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Blinds
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern, functional blinds for every window and style preference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blinds.map((blind, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={blind.image}
                    alt={blind.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                    {blind.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {blind.description}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {blind.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                        <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curtains Section */}
      <section id="curtains" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Curtains
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beautiful curtains that add elegance and functionality to your space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curtains.map((curtain, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={curtain.image}
                    alt={curtain.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                    {curtain.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {curtain.description}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {curtain.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                        <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Window Treatments Section */}
      <section id="custom" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Custom Window Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bespoke solutions tailored to your exact specifications and style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customTreatments.map((treatment, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                    {treatment.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {treatment.description}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {treatment.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                        <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our design experts are here to help you find the perfect window treatments for your space.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
