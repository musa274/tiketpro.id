import React, { useState } from 'react';
import { X, Plane, Hotel, User, Phone, Calendar, MapPin, Users, CreditCard, MessageCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'hotel' | 'flight';
  prefilledData?: {
    name?: string;
    location?: string;
  };
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, type, prefilledData }) => {
  const [formData, setFormData] = useState({
    // Common fields
    customerName: '',
    customerPhone: '',
    travelokaPrice: '',
    
    // Hotel specific
    hotelName: prefilledData?.name || '',
    hotelLocation: prefilledData?.location || '',
    checkInDate: '',
    checkOutDate: '',
    roomCount: '1',
    guestCount: '2',
    roomType: '',
    
    // Flight specific
    flightRoute: '',
    departureDate: '',
    returnDate: '',
    airline: '',
    flightClass: 'Ekonomi',
    passengerCount: '1',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateDiscountedPrice = (originalPrice: string) => {
    const price = parseFloat(originalPrice.replace(/[^\d]/g, ''));
    if (isNaN(price)) return 0;
    return Math.round(price * 0.85); // 15% discount
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const generateWhatsAppMessage = () => {
    const originalPrice = parseFloat(formData.travelokaPrice.replace(/[^\d]/g, ''));
    const discountedPrice = calculateDiscountedPrice(formData.travelokaPrice);
    const savings = originalPrice - discountedPrice;

    if (type === 'hotel') {
      return `🏨 *BOOKING HOTEL - TIKET PROMO INDONESIA*

📋 *Detail Pemesanan:*
• Nama Pemesan: ${formData.customerName}
• No. Telepon: ${formData.customerPhone}

🏨 *Detail Hotel:*
• Hotel: ${formData.hotelName}
• Lokasi: ${formData.hotelLocation}
• Check-in: ${formData.checkInDate}
• Check-out: ${formData.checkOutDate}
• Jumlah Kamar: ${formData.roomCount}
• Jumlah Tamu: ${formData.guestCount}
• Tipe Kamar: ${formData.roomType}

💰 *Detail Harga:*
• Harga Traveloka: ${formatPrice(originalPrice)}
• Harga TiketPro (Diskon 15%): ${formatPrice(discountedPrice)}
• *HEMAT: ${formatPrice(savings)}* 🎉

${formData.notes ? `📝 *Catatan:* ${formData.notes}` : ''}

Mohon diproses booking hotel ini dengan harga spesial TiketPro.id. Terima kasih! 🙏`;
    } else {
      return `✈️ *BOOKING TIKET PESAWAT - TIKET PROMO INDONESIA*

📋 *Detail Pemesanan:*
• Nama Pemesan: ${formData.customerName}
• No. Telepon: ${formData.customerPhone}

✈️ *Detail Penerbangan:*
• Rute: ${formData.flightRoute}
• Tanggal Berangkat: ${formData.departureDate}
${formData.returnDate ? `• Tanggal Pulang: ${formData.returnDate}` : ''}
• Maskapai: ${formData.airline}
• Kelas: ${formData.flightClass}
• Jumlah Penumpang: ${formData.passengerCount}

💰 *Detail Harga:*
• Harga Traveloka: ${formatPrice(originalPrice)}
• Harga TiketPro (Diskon 15%): ${formatPrice(discountedPrice)}
• *HEMAT: ${formatPrice(savings)}* 🎉

${formData.notes ? `📝 *Catatan:* ${formData.notes}` : ''}

Mohon diproses booking tiket pesawat ini dengan harga spesial TiketPro.id. Terima kasih! 🙏`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const message = generateWhatsAppMessage();
      const whatsappUrl = `https://wa.me/62089652920455?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {type === 'hotel' ? (
                <Hotel className="h-6 w-6 text-blue-500 mr-3" />
              ) : (
                <Plane className="h-6 w-6 text-blue-500 mr-3" />
              )}
              <h2 className="text-2xl font-bold text-gray-900">
                {type === 'hotel' ? 'Booking Hotel' : 'Booking Tiket Pesawat'}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            Isi detail berdasarkan hasil pencarian Anda di Traveloka
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Customer Information */}
          <div className="bg-blue-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <User className="h-5 w-5 mr-2 text-blue-500" />
              Informasi Pemesan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  No. Telepon *
                </label>
                <input
                  type="tel"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
            </div>
          </div>

          {/* Hotel Specific Fields */}
          {type === 'hotel' && (
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Hotel className="h-5 w-5 mr-2 text-green-500" />
                Detail Hotel
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Hotel *
                    </label>
                    <input
                      type="text"
                      name="hotelName"
                      value={formData.hotelName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Contoh: Grand Hyatt Jakarta"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lokasi *
                    </label>
                    <input
                      type="text"
                      name="hotelLocation"
                      value={formData.hotelLocation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Contoh: Jakarta Pusat"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-in *
                    </label>
                    <input
                      type="date"
                      name="checkInDate"
                      value={formData.checkInDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-out *
                    </label>
                    <input
                      type="date"
                      name="checkOutDate"
                      value={formData.checkOutDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jumlah Kamar
                    </label>
                    <select
                      name="roomCount"
                      value={formData.roomCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {[1,2,3,4,5].map(num => (
                        <option key={num} value={num}>{num} Kamar</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jumlah Tamu
                    </label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {[1,2,3,4,5,6].map(num => (
                        <option key={num} value={num}>{num} Orang</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipe Kamar
                    </label>
                    <input
                      type="text"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Deluxe, Suite, dll"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Flight Specific Fields */}
          {type === 'flight' && (
            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Plane className="h-5 w-5 mr-2 text-purple-500" />
                Detail Penerbangan
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rute Penerbangan *
                  </label>
                  <input
                    type="text"
                    name="flightRoute"
                    value={formData.flightRoute}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Contoh: Jakarta (CGK) - Bali (DPS)"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tanggal Berangkat *
                    </label>
                    <input
                      type="date"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tanggal Pulang (opsional)
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Maskapai *
                    </label>
                    <input
                      type="text"
                      name="airline"
                      value={formData.airline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Garuda, Lion Air, dll"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kelas Penerbangan
                    </label>
                    <select
                      name="flightClass"
                      value={formData.flightClass}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Ekonomi">Ekonomi</option>
                      <option value="Premium Ekonomi">Premium Ekonomi</option>
                      <option value="Bisnis">Bisnis</option>
                      <option value="First Class">First Class</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jumlah Penumpang
                    </label>
                    <select
                      name="passengerCount"
                      value={formData.passengerCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {[1,2,3,4,5,6].map(num => (
                        <option key={num} value={num}>{num} Penumpang</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Price Information */}
          <div className="bg-yellow-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <CreditCard className="h-5 w-5 mr-2 text-yellow-500" />
              Informasi Harga
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Harga dari Traveloka *
              </label>
              <input
                type="text"
                name="travelokaPrice"
                value={formData.travelokaPrice}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Contoh: Rp 1,200,000"
              />
              {formData.travelokaPrice && (
                <div className="mt-4 p-4 bg-green-100 rounded-xl border border-green-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Harga Traveloka:</span>
                    <span className="font-medium text-gray-900">{formatPrice(parseFloat(formData.travelokaPrice.replace(/[^\d]/g, '')) || 0)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-green-600 font-medium">Harga TiketPro (Diskon 15%):</span>
                    <span className="font-bold text-green-600">{formatPrice(calculateDiscountedPrice(formData.travelokaPrice))}</span>
                  </div>
                  <div className="border-t border-green-300 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-green-700">HEMAT:</span>
                      <span className="font-bold text-green-700">{formatPrice((parseFloat(formData.travelokaPrice.replace(/[^\d]/g, '')) || 0) - calculateDiscountedPrice(formData.travelokaPrice))}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Catatan Tambahan (opsional)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Permintaan khusus, preferensi, dll..."
            />
          </div>

          {/* Submit Button */}
          <div className="sticky bottom-0 bg-white pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Memproses...
                </>
              ) : (
                <>
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Kirim ke WhatsApp Admin
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;