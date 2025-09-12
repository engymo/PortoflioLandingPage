import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50  transition-all duration-500 
     ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-300 via-orange-300 to-rose-300 rounded-full
             flex items-center justify-center shadow-lg group-hover:shadow-xl
              transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-pink-400
             via-orange-400 to-rose-400 bg-clip-text text-transparent">
              Haylo
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative text-gray-700 
              hover:text-pink-400 transition-all duration-300 font-medium group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5
                 bg-gradient-to-r from-pink-400 to-orange-400 group-hover:w-full
                  transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+64 21 123 4567</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span className="text-sm">hello@haylo.nz</span>
            </div>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg
           hover:bg-gray-100 transition-colors duration-200">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 
          backdrop-blur-md shadow-xl border-t border-gray-100">
            <nav className="px-4 py-6 space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-700
                 hover:text-pink-400 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
