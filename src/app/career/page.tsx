import Image from "next/image";

export default function Career() {
  const openPositions = [
    {
      title: "Window Treatment Specialist",
      department: "Sales",
      location: "New York, NY",
      type: "Full-time",
      description: "We're looking for an experienced window treatment specialist to join our sales team. You'll work directly with clients to understand their needs and recommend the perfect blinds and curtains for their space.",
      requirements: [
        "2+ years experience in home improvement or interior design sales",
        "Strong customer service skills",
        "Knowledge of window treatments and home decor",
        "Valid driver's license for client visits"
      ]
    },
    {
      title: "Production Supervisor",
      department: "Manufacturing",
      location: "Brooklyn, NY",
      type: "Full-time",
      description: "Lead our manufacturing team in creating high-quality custom window treatments. This role involves overseeing production processes, quality control, and team management.",
      requirements: [
        "5+ years experience in manufacturing or production",
        "Leadership and team management skills",
        "Experience with quality control processes",
        "Knowledge of textile and window treatment manufacturing"
      ]
    },
    {
      title: "Installation Technician",
      department: "Installation",
      location: "Metro Area",
      type: "Full-time",
      description: "Join our installation team to deliver professional window treatment installations. You'll work in various locations, ensuring perfect fit and customer satisfaction.",
      requirements: [
        "3+ years experience in home installation",
        "Strong attention to detail",
        "Excellent customer service skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      title: "Marketing Coordinator",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time",
      description: "Help us grow our brand and reach new customers through creative marketing initiatives. You'll work on digital marketing, content creation, and brand development.",
      requirements: [
        "Bachelor's degree in Marketing or related field",
        "2+ years digital marketing experience",
        "Proficiency in social media and content creation",
        "Strong written and verbal communication skills"
      ]
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "We offer competitive compensation packages that reflect your experience and contribution to our team.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision insurance plans to keep you and your family healthy.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Career Development",
      description: "We invest in our team with training programs, workshops, and opportunities for advancement within the company.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Work-Life Balance",
      description: "Flexible scheduling and paid time off to help you maintain a healthy balance between work and personal life.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Build your career with a company that values quality, craftsmanship, and innovation
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Work With ABBlinds?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're more than just a window treatment company - we're a team of passionate professionals dedicated to creating beautiful spaces
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
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore current opportunities and find your perfect role
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
                    href={`mailto:careers@abblinds.com?subject=Application for ${position.title}`}
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

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              How to Apply
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to join our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                Find Your Role
              </h3>
              <p className="text-gray-600">
                Browse our open positions and find the role that matches your skills and interests.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                Send Your Application
              </h3>
              <p className="text-gray-600">
                Email us your resume and cover letter, specifying the position you're interested in.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                Interview Process
              </h3>
              <p className="text-gray-600">
                We'll review your application and invite qualified candidates for an interview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Don&apos;t See Your Perfect Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We&apos;re always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
          </p>
          <a
            href="mailto:careers@abblinds.com?subject=General Application"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Send Your Resume
          </a>
        </div>
      </section>
    </div>
  );
}
