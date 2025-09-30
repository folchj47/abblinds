import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AB</span>
              </div>
              <span className="text-xl font-heading font-semibold">ABBlinds</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transform your windows with high-quality blinds, curtains, and custom window treatments. 
              Modern, elegant solutions for homes and offices.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-medium">Phone:</span> (555) 123-4567
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Email:</span> info@abblindswindow.com
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Address:</span> 2609 E Dale St, Colorado Springs, CO 80909
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Custom Blinds</li>
              <li className="text-gray-300">Window Curtains</li>
              <li className="text-gray-300">Motorized Blinds</li>
              <li className="text-gray-300">Commercial Solutions</li>
              <li className="text-gray-300">Free Consultation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 ABBlinds. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
