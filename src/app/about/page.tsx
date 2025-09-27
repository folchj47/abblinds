import Image from "next/image";

export default function About() {
  const values = [
    {
      title: "Quality",
      description: "We use only the finest materials and employ skilled craftsmen to ensure every product meets our high standards of excellence.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Elegance",
      description: "Our designs blend timeless elegance with modern aesthetics to create window treatments that enhance any space.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      title: "Customization",
      description: "Every project is unique. We work closely with our clients to create bespoke solutions that perfectly match their vision.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <Image
          src="/images/about-hero.avif"
          alt="About ABBlinds - Window treatment specialists"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            About ABBlinds
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Crafting beautiful window treatments for over two decades
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a design-focused blinds and curtains manufacturer, dedicated to creating modern, 
                durable, and elegant window coverings. Our mission is to blend functionality with style, 
                offering solutions that fit every space.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2000, ABBlinds has grown from a small family business to a trusted name in 
                window treatments. We&apos;ve always believed that windows are the eyes of a home, and the 
                right window treatment can transform not just a room, but the entire atmosphere of a space.
              </p>
              <p className="text-lg text-gray-600">
                Today, we serve both residential and commercial clients, bringing our expertise in 
                design, manufacturing, and installation to every project. From custom motorized blinds 
                for luxury homes to energy-efficient solutions for office buildings, we create window 
                treatments that are as functional as they are beautiful.
              </p>
            </div>
            <div className="relative h-96 lg:h-[500px]">
                <Image
                  src="/images/company-story-image.jpg"
                  alt="ABBlinds manufacturing facility and team"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Skilled professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src="/images/Sarah-Johnson.avif"
                    alt="Sarah Johnson - Design Director"
                    fill
                    className="object-cover rounded-full"
                  />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                Sarah Johnson
              </h3>
              <p className="text-primary font-medium mb-2">Design Director</p>
              <p className="text-gray-600">
                With 15 years of experience in interior design, Sarah leads our design team in creating 
                beautiful, functional window treatments.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                  alt="Michael Chen - Production Manager"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                Michael Chen
              </h3>
              <p className="text-primary font-medium mb-2">Production Manager</p>
              <p className="text-gray-600">
                Michael ensures every product meets our quality standards with his expertise in 
                manufacturing and attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src="/images/Emily-Rodriguez.avif"
                    alt="Emily Rodriguez - Customer Relations"
                    fill
                    className="object-cover rounded-full"
                  />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                Emily Rodriguez
              </h3>
              <p className="text-primary font-medium mb-2">Customer Relations</p>
              <p className="text-gray-600">
                Emily is your first point of contact and ensures every client receives personalized 
                service throughout their project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss your project and see how we can bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
