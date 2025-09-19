import React, { useState, useEffect } from 'react';
import { Star, Quote, ThumbsUp, MessageSquare } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Andi Setiawan",
      username: "@AndiTraveler",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      comment: "Terima kasih TiketPro! Dapat hotel mewah di Bali cuma Rp2,3jt/malam. Di aplikasi lain Rp2,8jt. Pelayanannya juga ramah banget!",
      location: "Jakarta",
      verified: true,
      likes: 24
    },
    {
      id: 2,
      name: "Sari Melati",
      username: "@SariExplorer",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      comment: "Sudah 3x pake TiketPro untuk booking tiket pesawat. Selalu dapat harga lebih murah dari aplikasi manapun. Recommended banget!",
      location: "Surabaya",
      verified: true,
      likes: 31
    },
    {
      id: 3,
      name: "Budi Hartono",
      username: "@BudiTrip",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      comment: "Awalnya ragu, tapi ternyata legit! Hotel Grand Hyatt Jakarta dapat harga Rp1,02jt padahal di aplikasi lain Rp1,2jt. Mantap!",
      location: "Bandung",
      verified: true,
      likes: 18
    },
    {
      id: 4,
      name: "Lisa Anggraini",
      username: "@LisaWanderlust",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      comment: "Tim TiketPro responsive banget di WhatsApp. Booking hotel di Yogya jadi lebih mudah dan tentunya lebih hemat. Thank you!",
      location: "Medan",
      verified: true,
      likes: 27
    },
    {
      id: 5,
      name: "Reza Pratama",
      username: "@RezaAdventure",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      comment: "Tiket Jakarta-Surabaya PP biasanya Rp1,6jt, lewat TiketPro cuma Rp1,36jt. Lumayan banget buat kantong mahasiswa!",
      location: "Yogyakarta",
      verified: true,
      likes: 42
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Kata Mereka Tentang TiketPro.id
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 mt-4">
            Ribuan customer puas dengan layanan dan harga terbaik kami
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="mb-12">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full transform translate-x-32 -translate-y-32 opacity-50"></div>
              
              <div className="relative z-10">
                <Quote className="h-12 w-12 text-blue-500 mb-6 mx-auto opacity-50" />
                
                <div className="text-center mb-8">
                  <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].comment}"
                  </p>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                      <Star key={index} className="h-6 w-6 text-yellow-400 fill-current mx-1" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-lg"
                  />
                  <div className="text-left">
                    <div className="flex items-center">
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      {testimonials[currentTestimonial].verified && (
                        <div className="ml-2 bg-blue-500 text-white rounded-full p-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].username}</p>
                    <p className="text-gray-400 text-xs">{testimonials[currentTestimonial].location}</p>
                    <div className="flex items-center mt-1">
                      <ThumbsUp className="h-3 w-3 text-gray-400 mr-1" />
                      <span className="text-xs text-gray-400">{testimonials[currentTestimonial].likes} likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 ${
                index === currentTestimonial ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-200"
                />
                <div className="flex-1">
                  <div className="flex items-center">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <div className="ml-1 bg-blue-500 text-white rounded-full p-0.5">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{testimonial.username}</p>
                  <p className="text-xs text-gray-400">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 italic text-sm leading-relaxed mb-3">
                "{testimonial.comment}"
              </p>

              <div className="flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  <span>{testimonial.likes}</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white rounded-2xl px-8 py-6 shadow-xl border border-gray-200">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-4xl font-bold text-blue-600 mb-1">4.9/5</p>
              <p className="text-sm text-gray-600">Rating dari 2,500+ customer</p>
            </div>
            <div className="mx-8 h-16 w-px bg-gray-300"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-1">98%</p>
              <p className="text-sm text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;