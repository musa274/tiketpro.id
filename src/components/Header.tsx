import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo size="md" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Testimoni
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Kontak
            </button>
            <a
              href="https://wa.me/62089652920455?text=Halo admin TiketPro, saya ingin menanyakan layanan booking travel"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
              >
                Testimoni
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
              >
                Kontak
              </button>
              <a
                href="https://wa.me/62089652920455?text=Halo admin TiketPro, saya ingin menanyakan layanan booking travel"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 text-center font-semibold flex items-center justify-center"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;