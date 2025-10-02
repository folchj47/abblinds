
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100">
            How we protect and handle your personal information
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-600 mb-0">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
            </div>

            <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, request a quote, or contact us for support. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Account credentials (username and password)</li>
              <li>Payment information (processed securely through our payment processors)</li>
              <li>Product preferences and customization requests</li>
              <li>Communications with us (customer service inquiries, feedback)</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Develop new products and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
              Information Sharing
            </h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share your information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>With service providers who assist us in operating our website and conducting our business</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
              <li>With your explicit consent</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-700 mb-6">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Withdraw consent where applicable</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
              Cookies and Tracking
            </h2>
            <p className="text-gray-700 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this privacy policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> info@abblindswindow.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> 2609 E Dale St, Colorado Springs, CO 80909
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> (657) 293-4248
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
