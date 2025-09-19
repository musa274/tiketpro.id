import React from 'react';
import { User, MapPin, Calendar, Award } from 'lucide-react';

const OwnerProfile = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tentang Founder TiketPro.id
          </h2>
          <p className="text-lg text-gray-600">
            Mengenal lebih dekat sosok di balik layanan travel terpercaya
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-8">
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="Ahmad Santoso - Founder TiketPro.id"
                  className="w-48 h-48 rounded-2xl object-cover shadow-lg"
                />
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Musa Alhadi Pulungan
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-6">
                  Founder & CEO TiketPro.id
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center justify-center lg:justify-start">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-600">Surabaya, Indonesia</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-600">7+ Tahun Travel</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <Award className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-600">3,200+ Customer</span>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Halo! Saya Ahmad Santoso, founder TiketPro.id. Sebagai traveler aktif yang sudah menjelajahi 
                    lebih dari 75 kota di Indonesia dan Asia Tenggara, saya memahami betapa pentingnya 
                    mendapatkan harga terbaik untuk akomodasi dan transportasi.
                  </p>
                  <p>
                    Dengan pengalaman 7+ tahun di industri travel dan teknologi, saya melihat kesempatan 
                    untuk membantu fellow travelers mendapatkan pengalaman luar biasa tanpa harus 
                    menguras kantong. TiketPro.id hadir sebagai solusi untuk mendapatkan diskon eksklusif 
                    yang tidak tersedia di tempat lain.
                  </p>
                  <p className="font-semibold text-blue-600">
                    "Misi kami sederhana: membuat liburan impian menjadi lebih terjangkau untuk semua orang. 
                    Setiap rupiah yang Anda hemat adalah langkah lebih dekat menuju petualangan berikutnya!"
                  </p>
                </div>
                
                <div className="mt-8">
                  <a
                    href="https://wa.me/62089652920455?text=Halo Bang Ahmad, saya ingin tahu lebih lanjut tentang TiketPro.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <User className="h-5 w-5 mr-2" />
                    Chat Langsung dengan Founder
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerProfile;