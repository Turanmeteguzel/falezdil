import React, { useState } from "react";
import { motion } from "framer-motion";

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
        <div className="text-left mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6 font-lato leading-none tracking-normal capitalize">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl font-lato font-light leading-[30px] tracking-normal">
            Dil öğrenme yolculuğunuza başlamak için hemen iletişime geçin. Size
            en uygun programı birlikte belirleyelim.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div
              className="bg-white rounded-[8px]  border border-[#CFCFCF]  p-6  transition-all duration-300"
              style={{ boxShadow: "4px 4px 2px 0px #FFAE0026" }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Ad Soyad */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-left font-medium text-gray-700 mb-2"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-[4px] focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50 font-inter"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-left  font-medium text-gray-700 mb-2"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-[4px] focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50 font-inter"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  {/* Telefon */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm text-left  font-medium text-gray-700 mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2  border-gray-200 rounded-[4px] focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50 font-inter"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>

                  {/* Dil Seçimi */}
                  <div>
                    <label
                      htmlFor="language"
                      className="block text-sm font-medium text-left  text-gray-700 mb-2"
                    >
                      Öğrenmek İstediğiniz Dil *
                    </label>
                    <select
                      id="language"
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2  border-gray-200 rounded-[4px] focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50 font-inter"
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
                      className="block text-sm text-left  font-medium text-gray-700 mb-2"
                    >
                      Mevcut Seviyeniz
                    </label>
                    <select
                      id="level"
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-[4px] focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50 font-inter"
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
                      className="block text-sm text-left  font-medium text-gray-700 mb-2"
                    >
                      Haftalık Ders Saati
                    </label>
                    <select
                      id="hours"
                      name="hours"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-[4px] focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50 font-inter"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-[4px] focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50 font-inter"
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
                  <motion.button className="w-full px-1.5 sm:px-2 lg:px-3 py-2 sm:py-3 text-sm sm:text-base bg-[#FFAE00] text-white rounded-[4px] hover:bg-white hover:text-[#FFAE00] hover:border hover:border-[#FFAE00]  duration-300 font-semibold">
                    Formu Gönder
                  </motion.button>
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

            {/* Sağ Taraf - Modern Tasarım */}
            <div className="space-y-6">
              {/* Ana Bilgi Kartı */}
              <motion.div
                className="bg-white rounded-[8px] border border-[#CFCFCF] p-8 text-center transition-all duration-300"
                style={{ boxShadow: "4px 4px 2px 0px #FFAE0026" }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-24 h-24 bg-[#FFAE00] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">
                  Dil Öğrenmeye Hazır mısınız?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm font-inter">
                  Profesyonel eğitmenlerimizle birlikte dil öğrenme
                  yolculuğunuza başlayın. Size özel programlar ve esnek ders
                  saatleri ile hedeflerinize ulaşın.
                </p>
                <div className="flex items-center justify-center space-x-2 text-[#FFAE00] font-semibold text-sm">
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
                  <span>Ücretsiz Deneme Dersi</span>
                </div>
              </motion.div>

              {/* İstatistikler */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="bg-white rounded-[8px] border border-[#CFCFCF] p-4 text-center transition-all duration-300"
                  style={{ boxShadow: "2px 2px 1px 0px #FFAE0026" }}
                >
                  <div className="text-2xl font-bold text-[#FFAE00] mb-1 font-inter">
                    500+
                  </div>
                  <div className="text-sm text-gray-600 font-inter">
                    Mutlu Öğrenci
                  </div>
                </div>
                <div
                  className="bg-white rounded-[8px] border border-[#CFCFCF] p-4 text-center transition-all duration-300"
                  style={{ boxShadow: "2px 2px 1px 0px #FFAE0026" }}
                >
                  <div className="text-2xl font-bold text-[#FFAE00] mb-1 font-inter">
                    500+
                  </div>
                  <div className="text-sm text-gray-600 font-inter">
                    Mutlu Öğrenci
                  </div>
                </div>{" "}
                <div
                  className="bg-white rounded-[8px] border border-[#CFCFCF] p-4 text-center transition-all duration-300"
                  style={{ boxShadow: "2px 2px 1px 0px #FFAE0026" }}
                >
                  <div className="text-2xl font-bold text-[#FFAE00] mb-1 font-inter">
                    500+
                  </div>
                  <div className="text-sm text-gray-600 font-inter">
                    Mutlu Öğrenci
                  </div>
                </div>
                <div
                  className="bg-white rounded-[8px] border border-[#CFCFCF] p-4 text-center transition-all duration-300"
                  style={{ boxShadow: "2px 2px 1px 0px #FFAE0026" }}
                >
                  <div className="text-2xl font-bold text-[#FFAE00] mb-1 font-inter">
                    8
                  </div>
                  <div className="text-sm text-gray-600 font-inter">
                    Farklı Dil
                  </div>
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
