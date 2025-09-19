import React, { useState } from 'react';
import { Star, MapPin, Wifi, Car, Coffee, MessageCircle } from 'lucide-react';
import BookingModal from './BookingModal';

const HotelListings = () => {
  const [bookingModal, setBookingModal] = useState<{
    isOpen: boolean;
    type: 'hotel' | 'flight';
    prefilledData?: {
      name?: string;
      location?: string;
    };
  }>({
    isOpen: false,
    type: 'hotel'
  });

  const hotels = [
    {
      id: 1,
      name: "Mercure Bengkulu",
      location: "Bengkulu",
      rating: 4.8,
      reviews: 2847,
      price: 550000,
      originalPrice: 831000,
      image: "https://i.imgur.com/PP8INd5.jpeg?auto=compress&cs=tinysrgb&w=400",
      amenities: ["WiFi Gratis", "Kolam Renang", "Spa", "Gym"],
      discount: 15
    },
    {
      id: 2,
      name: "The Ritz-Carlton Bali",
      location: "Nusa Dua, Bali",
      rating: 4.9,
      reviews: 1923,
      price: 2300000,
      originalPrice: 2800000,
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400",
      amenities: ["Beach Access", "WiFi Gratis", "Spa", "Restaurant"],
      discount: 18
    },
    {
      id: 3,
      name: "Shangri-La Surabaya",
      location: "Surabaya",
      rating: 4.7,
      reviews: 1456,
      price: 850000,
      originalPrice: 1000000,
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400",
      amenities: ["WiFi Gratis", "Business Center", "Gym", "Pool"],
      discount: 15
    },
    {
      id: 4,
      name: "Hotel Mulia Senayan",
      location: "Jakarta Selatan",
      rating: 4.8,
      reviews: 2156,
      price: 1800000,
      originalPrice: 2100000,
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=400",
      amenities: ["Luxury Spa", "Fine Dining", "WiFi", "Concierge"],
      discount: 14
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const openBookingModal = (hotel: typeof hotels[0]) => {
    setBookingModal({
      isOpen: true,
      type: 'hotel',
      prefilledData: {
        name: hotel.name,
        location: hotel.location
      }
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hotel Pilihan Terbaik
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 mt-4">
              Dapatkan harga terbaik untuk hotel-hotel premium di Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {hotels.map((hotel, index) => (
              <div 
                key={hotel.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                      -{hotel.discount}%
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      {hotel.rating}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{hotel.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star 
                          key={starIndex} 
                          className={`h-4 w-4 ${starIndex < Math.floor(hotel.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({hotel.reviews} ulasan)</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 3).map((amenity, amenityIndex) => (
                      <span 
                        key={amenityIndex}
                        className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
                      >
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        +{hotel.amenities.length - 3} lainnya
                      </span>
                    )}
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 line-through mr-2">
                            {formatPrice(hotel.originalPrice)}
                          </span>
                          <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-bold">
                            HEMAT {formatPrice(hotel.originalPrice - hotel.price)}
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-blue-600 mt-1">
                          {formatPrice(hotel.price)}
                          <span className="text-sm text-gray-500 font-normal">/malam</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <a
                        href="https://www.traveloka.com/id-id/hotel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-all duration-300 flex items-center justify-center font-semibold text-sm border border-gray-200"
                      >
                        <Coffee className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-all duration-300" />
                        Cek Detail di Traveloka
                      </a>
                      
                      <button
                        onClick={() => openBookingModal(hotel)}
                        className="group/btn relative w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-green-400/30 overflow-hidden"
                      >
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Pulse effect */}
                        <div className="absolute top-2 right-2 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                        
                        {/* WhatsApp logo watermark */}
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-20 group-hover/btn:opacity-40 transition-opacity duration-300">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                        </div>
                        
                        <div className="relative z-10 flex items-center">
                          <MessageCircle className="h-4 w-4 mr-2 group-hover/btn:bounce transition-all duration-300" />
                          Pesan Sekarang via WhatsApp
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-blue-50 rounded-2xl px-8 py-6 border border-blue-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600 mb-1">💰 HEMAT HINGGA 15%</p>
                <p className="text-sm text-blue-700">Dari harga aplikasi manapun + diskon eksklusif</p>
              </div>
              <div className="mx-6 h-12 w-px bg-blue-300"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600 mb-1">⚡ 5 MENIT</p>
                <p className="text-sm text-green-700">Respon admin WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={closeBookingModal}
        type={bookingModal.type}
        prefilledData={bookingModal.prefilledData}
      />
    </>
  );
};

export default HotelListings;