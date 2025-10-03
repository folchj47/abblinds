import Image from "next/image";

export default function Career() {
  const openPositions = [
    {
      title: "Installation Technician",
      department: "Installation",
      location: "On-site",
      type: "Full-time",
      description: "Responsible for measuring, fitting, and installing blinds and window treatments. You'll work directly with customers to ensure perfect installation and satisfaction.",
      requirements: [
        "Basic carpentry/handywork skills",
        "Attention to detail",
        "Valid driver's license",
        "Ability to work independently and with customers"
      ]
    },
    {
      title: "Customer Service Representative",
      department: "Customer Service",
      location: "Hybrid",
      type: "Full-time",
      description: "Handle customer inquiries, schedule installations, and provide after-sales support. You'll be the first point of contact for our valued customers.",
      requirements: [
        "Good communication skills",
        "Computer literacy",
        "Problem-solving attitude",
        "Customer service experience preferred"
      ]
    },
    {
      title: "Administrative Assistant",
      department: "Administration",
      location: "Office",
      type: "Full-time",
      description: "Manage office records, assist with scheduling, and support day-to-day operations. You'll play a key role in keeping our business running smoothly.",
      requirements: [
        "Organizational skills",
        "MS Office proficiency",
        "Teamwork mindset",
        "Administrative experience preferred"
      ]
    }
  ];

  const benefits = [
    {
      title: "Trusted Brand",
      description: "Be part of a trusted and expanding home improvement brand with a strong reputation in the community.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Friendly Environment",
      description: "Join a friendly team environment with room to grow and advance your career in the home improvement industry.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Hands-on Training",
      description: "We provide comprehensive hands-on training for new hires to ensure you have the skills and knowledge to succeed.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Make an Impact",
      description: "Opportunity to make an impact with every project, bringing comfort and style to homes and offices.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
          src="/images/modern-living-room-blinds.jpg"
          alt="Join the ABBlinds team - Career opportunities"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Careers at ABBlinds
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Join our team and help bring comfort and style to homes and offices
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              At ABBlinds, we provide high-quality blinds, curtains, and window solutions. Our success comes from dedicated people who care about craftsmanship, customer service, and teamwork. We are growing and always looking for motivated individuals to join us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-gray-50 p-8 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our current job opportunities and find your perfect role
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:info@abblindswindow.com?subject=Application for ${position.title}`}
                    className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {position.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {position.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              How to Apply
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              If you're interested in joining ABBlinds, please send your CV and cover letter to:
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <div className="mb-6">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:info@abblindswindow.com?subject=Job Application"
                  className="text-2xl font-semibold text-primary hover:text-primary-dark transition-colors duration-200"
                >
                  info@abblindswindow.com
                </a>
              </div>
              <p className="text-gray-600 mb-4">Or call us at:</p>
              <a 
                href="tel:+16572934248"
                className="text-2xl font-semibold text-primary hover:text-primary-dark transition-colors duration-200"
              >
                (657) 293-4248
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Equal Opportunity Employer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Equal Opportunity Employer
            </h2>
            <p className="text-lg text-gray-600">
              ABBlinds is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
