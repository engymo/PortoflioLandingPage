import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  return (
    <>
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Haylo
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Strategic marketing partner for established business owners ready to scale their success.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="block text-gray-400 hover:text-pink-400 transition-colors duration-200">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <div className="space-y-2">
                {['Strategic Planning', 'Customer Acquisition', 'Brand Development', 'Digital Marketing'].map((service) => (
                  <div key={service} className="text-gray-400">{service}</div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+64 21 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>hello@haylo.nz</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Auckland, New Zealand</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">© 2024 Haylo. All rights reserved.</div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-400" />
              <span>for business growth Eng/Angie Ali</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;

