import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    language: "",
    level: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Form başarıyla gönderildi! En kısa sürede size dönüş yapacağız.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        language: "",
        level: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dil öğrenme yolculuğunuza başlamak için hemen iletişime geçin. Size
            en uygun programı birlikte belirleyelim.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-[#FFFFC7] p-6  transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Ad Soyad */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  {/* Telefon */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>

                  {/* Dil Seçimi */}
                  <div>
                    <label
                      htmlFor="language"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Öğrenmek İstediğiniz Dil *
                    </label>
                    <select
                      id="language"
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50"
                    >
                      <option value="">Dil seçiniz</option>
                      <option value="ingilizce">İngilizce</option>
                      <option value="almanca">Almanca</option>
                      <option value="fransizca">Fransızca</option>
                      <option value="ispanyolca">İspanyolca</option>
                      <option value="italyanca">İtalyanca</option>
                      <option value="rusca">Rusça</option>
                      <option value="arapca">Arapça</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>

                  {/* Seviye */}
                  <div>
                    <label
                      htmlFor="level"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mevcut Seviyeniz
                    </label>
                    <select
                      id="level"
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50"
                    >
                      <option value="">Seviye seçiniz</option>
                      <option value="baslangic">Başlangıç (A1)</option>
                      <option value="temel">Temel (A2)</option>
                      <option value="orta">Orta (B1)</option>
                      <option value="iyi">İyi (B2)</option>
                      <option value="ileri">İleri (C1)</option>
                      <option value="uzman">Uzman (C2)</option>
                      <option value="bilmiyorum">Bilmiyorum</option>
                    </select>
                  </div>

                  {/* Haftalık Ders Saati */}
                  <div>
                    <label
                      htmlFor="hours"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Haftalık Ders Saati
                    </label>
                    <select
                      id="hours"
                      name="hours"
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50"
                    >
                      <option value="">Saat seçiniz</option>
                      <option value="2">2 saat</option>
                      <option value="4">4 saat</option>
                      <option value="6">6 saat</option>
                      <option value="8">8 saat</option>
                      <option value="10">10+ saat</option>
                    </select>
                  </div>
                </div>

                {/* Mesaj */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Ek Bilgiler / Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50"
                    placeholder="Özel istekleriniz, sorularınız veya ek bilgilerinizi buraya yazabilirsiniz..."
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="w-5 h-5 text-[#FFAE00] border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-700">
                      <a
                        href="#"
                        className="text-[#FFAE00] hover:text-[#FF8C00] underline"
                      >
                        Gizlilik Politikası
                      </a>{" "}
                      ve{" "}
                      <a
                        href="#"
                        className="text-[#FFAE00] hover:text-[#FF8C00] underline"
                      >
                        Kullanım Şartları
                      </a>{" "}
                      nı okudum ve kabul ediyorum. *
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-gradient-to-r from-[#FFAE00] to-[#FF8C00] text-white font-semibold rounded-xl hover:from-[#FF8C00] hover:to-[#FFAE00] focus:ring-4 focus:ring-[#FFAE00]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Gönderiliyor...
                      </div>
                    ) : (
                      "Formu Gönder"
                    )}
                  </button>
                </div>

                {/* Info Text */}
                <div className="text-center text-sm text-gray-600">
                  <p>
                    * işaretli alanlar zorunludur. Form gönderildikten sonra en
                    kısa sürede size dönüş yapacağız.
                  </p>
                </div>
              </form>
            </div>

            {/* Sağ Taraf - Fotoğraf Alanı */}
            <div className="space-y-6">
              {/* Ana Fotoğraf */}
              <div className="bg-gradient-to-br from-[#FEFDF9] to-[#FFF8E1] rounded-2xl shadow-xl border-2 border-[#FFFFC7] p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Dil Öğrenmeye Hazır mısınız?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Profesyonel eğitmenlerimizle birlikte dil öğrenme
                  yolculuğunuza başlayın. Size özel programlar ve esnek ders
                  saatleri ile hedeflerinize ulaşın.
                </p>
                <div className="flex items-center justify-center space-x-2 text-[#FFAE00]">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">Ücretsiz Deneme Dersi</span>
                </div>
              </div>

              {/* İstatistikler */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-bold text-[#FFAE00] mb-1">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">Mutlu Öğrenci</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-bold text-[#FFAE00] mb-1">
                    8
                  </div>
                  <div className="text-sm text-gray-600">Farklı Dil</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
