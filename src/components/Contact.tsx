import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, MapPin, Send, Clock, Shield, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const whatsappMessage = `Halo admin TiketPro, saya ${formData.name} (${formData.email}). ${formData.message}`;
      window.open(`https://wa.me/62089652920455?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Hubungi Kami
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 mt-4">
            Ada pertanyaan? Tim kami siap membantu Anda 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Send className="h-6 w-6 mr-3 text-blue-500" />
              Kirim Pesan
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300"
                  placeholder="nama@email.com"
                />
              </div>
              
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-300 resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Kirim via WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MessageCircle className="h-6 w-6 mr-3 text-green-500" />
              Kontak Langsung
            </h3>
            
            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/62089652920455?text=Halo admin TiketPro, saya ingin menanyakan layanan booking travel"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl hover:from-green-100 hover:to-green-200 transition-all duration-300 border border-green-200 transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-green-300 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                {/* Pulse effect */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                
                <div className="bg-green-500 p-3 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-8 w-8 text-white group-hover:animate-bounce" />
                </div>
                <div className="flex-1 relative z-10">
                  <h4 className="font-bold text-gray-900 text-lg">WhatsApp</h4>
                  <p className="text-gray-600 font-medium">+62 896-5292-0455</p>
                  <p className="text-sm text-green-600 font-semibold flex items-center">
                    <Zap className="h-4 w-4 mr-1" />
                    Respon cepat dalam 5 menit!
                  </p>
                </div>
                
                {/* WhatsApp logo */}
                <div className="absolute right-4 top-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
              </a>

              {/* Email */}
              <div className="flex items-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-500 p-3 rounded-2xl mr-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                  <p className="text-gray-600 font-medium">admin@tiketpro.id</p>
                  <p className="text-sm text-blue-600 font-semibold flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Respon dalam 2-4 jam
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="bg-purple-500 p-3 rounded-2xl mr-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Telepon</h4>
                  <p className="text-gray-600 font-medium">089652920455</p>
                  <p className="text-sm text-purple-600 font-semibold">Senin-Minggu 08:00-22:00</p>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200 hover:shadow-lg transition-all duration-300">
                <div className="bg-yellow-500 p-3 rounded-2xl mr-4 mt-1">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Kantor</h4>
                  <p className="text-gray-600 font-medium">
                    Jl. Sudirman No. 123<br />
                    Jakarta Pusat 10220<br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Service Guarantee */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 mr-3" />
                <h4 className="font-bold text-lg">Jaminan Layanan Terbaik</h4>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <div className="bg-white/20 rounded-full p-1 mr-3">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Respon WhatsApp dalam 5 menit
                </li>
                <li className="flex items-center">
                  <div className="bg-white/20 rounded-full p-1 mr-3">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Harga transparan tanpa biaya tersembunyi
                </li>
                <li className="flex items-center">
                  <div className="bg-white/20 rounded-full p-1 mr-3">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Bantuan booking 24/7
                </li>
                <li className="flex items-center">
                  <div className="bg-white/20 rounded-full p-1 mr-3">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Garansi harga terbaik atau uang kembali
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;