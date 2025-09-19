import React from 'react';
import { MapPin, MessageCircle, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo size="lg" showText={true} className="text-white" />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              <strong>TIKET PROMO INDONESIA</strong> - Platform booking hotel dan maskapai terpercaya dengan 
              harga lebih murah dari aplikasi manapun + diskon eksklusif hingga 15%. 
              Wujudkan liburan impian dengan harga terjangkau.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/62089652920455"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto:admin@tiketpro.id"
                className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Testimoni
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Kontak
                </a>
              </li>
              <li>
                <a href="https://wa.me/62089652920455" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+62 896-5292-0455</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">admin@tiketpro.id</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span className="text-sm">
                  Jl. Sudirman No. 123<br />
                  Jakarta Pusat 10220
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} TiketPro.id - TIKET PROMO INDONESIA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                FAQ
              </a>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-yellow-600 bg-opacity-20 rounded-lg border border-yellow-600 border-opacity-30">
            <p className="text-yellow-200 text-sm text-center">
              <strong>Disclaimer:</strong> TiketPro.id adalah platform agregator yang menampilkan perbandingan harga. 
              Proses booking akan diarahkan ke mitra resmi kami. Diskon 15% berlaku untuk pemesanan melalui admin WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;