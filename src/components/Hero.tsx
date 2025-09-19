import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Search, MessageCircle, Plane, MapPin, Star } from 'lucide-react';
import BookingModal from './BookingModal';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [bookingModal, setBookingModal] = useState<{
    isOpen: boolean;
    type: 'hotel' | 'flight';
  }>({
    isOpen: false,
    type: 'hotel'
  });

  const highlights = [
    "TIKET PROMO INDONESIA",
    "Lebih Murah dari Aplikasi Manapun", 
    "Diskon 15% Dijamin",
    "2,500+ Customer Puas", 
    "Support 24/7"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openTravelokaHotelSearch = () => {
    window.open('https://www.traveloka.com/id-id/hotel', '_blank');
  };

  const openTravelokaFlightSearch = () => {
    window.open('https://www.traveloka.com/id-id/flight', '_blank');
  };

  const openFlightBookingModal = () => {
    setBookingModal({
      isOpen: true,
      type: 'flight'
    });
  };

  const closeBookingModal = () => {
    setBookingModal({
      isOpen: false,
      type: 'hotel'
    });
  };

  return (
    <>
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-16 lg:py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Plane className="absolute top-20 right-20 h-8 w-8 text-white/20 animate-bounce delay-300" />
        <MapPin className="absolute bottom-32 left-16 h-6 w-6 text-white/20 animate-bounce delay-700" />
        <Star className="absolute top-40 left-1/4 h-5 w-5 text-yellow-300/30 animate-pulse delay-500" />
        <Sparkles className="absolute bottom-40 right-1/4 h-7 w-7 text-white/20 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 rounded-full px-6 py-2 mb-4 border border-yellow-300 shadow-lg animate-pulse">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-bold">🇮🇩 TIKET PROMO INDONESIA 🇮🇩</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            TiketPro.id
          </h1>
          
          <div className="mb-6">
            <p className="text-xl md:text-3xl mb-2 font-semibold">
              Booking Hotel & Maskapai Termurah!
            </p>
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-32"></div>
              <Star className="h-6 w-6 mx-4 text-yellow-300 fill-current animate-spin-slow" />
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-32"></div>
            </div>
            <p className="text-lg md:text-xl opacity-90">
              Harga lebih murah dari <span className="font-bold text-yellow-300">aplikasi manapun</span> + diskon tambahan hingga <span className="font-bold text-yellow-300 text-2xl animate-pulse">15%</span>
            </p>
          </div>

          {/* Rotating Highlights */}
          <div className="mb-8 h-8">
            <div className="relative overflow-hidden">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    index === currentSlide 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm">
                    ✨ {highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={openTravelokaHotelSearch}
              className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-white/20"
            >
              <Search className="mr-3 h-5 w-5 group-hover:rotate-12 transition-all duration-300" />
              Cek Harga Hotel Terbaru
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={openTravelokaFlightSearch}
              className="group bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-800 px-8 py-4 rounded-2xl font-bold hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 flex items-center transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-yellow-300/30"
            >
              <Search className="mr-3 h-5 w-5 group-hover:rotate-12 transition-all duration-300" />
              Cek Harga Tiket Pesawat
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Additional CTA for booking after price check */}
          <div className="text-center mb-8 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="mb-6">
              <div className="inline-flex items-center bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full px-6 py-2 mb-4 shadow-lg animate-pulse">
                <MessageCircle className="h-5 w-5 mr-2" />
                <span className="font-bold">LANGSUNG CHAT ADMIN!</span>
              </div>
            </div>
            <p className="text-xl font-semibold mb-2">
              Sudah Cek Harga di Traveloka?
            </p>
            <p className="text-lg opacity-90 mb-6">
              Dapatkan <span className="font-bold text-yellow-300 text-xl">DISKON 15%</span> dengan chat admin WhatsApp sekarang!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setBookingModal({ isOpen: true, type: 'hotel' })}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-green-400/30"
              >
                <MessageCircle className="mr-3 h-5 w-5 animate-bounce" />
                PESAN HOTEL VIA WHATSAPP
              </button>
              <button
                onClick={openFlightBookingModal}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-blue-400/30"
              >
                <MessageCircle className="mr-3 h-5 w-5 animate-bounce" />
                PESAN TIKET VIA WHATSAPP
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              💬 Respon cepat dalam 5 menit • 🔒 Pembayaran aman • 💰 Harga terjamin termurah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Sparkles,
                title: "Harga Termurah",
                description: "Lebih murah dari aplikasi manapun + diskon tambahan 15%",
                delay: "delay-0"
              },
              {
                icon: Search,
                title: "Mudah & Cepat",
                description: "Proses booking yang simple dan respon admin dalam 5 menit",
                delay: "delay-300"
              },
              {
                icon: MessageCircle,
                title: "Support 24/7",
                description: "Tim customer service siap membantu kapan saja via WhatsApp",
                delay: "delay-600"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`group text-center transform hover:scale-105 transition-all duration-500 ${feature.delay}`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <feature.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-gray-50">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>

    <BookingModal
      isOpen={bookingModal.isOpen}
      onClose={closeBookingModal}
      type={bookingModal.type}
    />
    </>
  );
};

export default Hero;