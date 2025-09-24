import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, initializeEmailJS } from "../config/emailjs";
import Notification from "./Notification";
import SuccessMessage from "./SuccessMessage";
import LoadingSpinner from "./LoadingSpinner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    language: "",
    level: "",
    hours: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [notification, setNotification] = useState({
    isVisible: false,
    type: "",
    message: "",
  });

  // EmailJS'i başlat
  useEffect(() => {
    initializeEmailJS();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showNotification = (type, message) => {
    setNotification({
      isVisible: true,
      type,
      message,
    });
  };

  const hideNotification = () => {
    setNotification({
      isVisible: false,
      type: "",
      message: "",
    });
  };

  const resetForm = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      language: "",
      level: "",
      hours: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS ile email gönder
      const templateParams = {
        ...EMAILJS_CONFIG.TEMPLATE_PARAMS,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        language: formData.language,
        level: formData.level,
        hours: formData.hours,
        message: formData.message,
        current_date: new Date().toLocaleDateString("tr-TR"),
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("Email gönderildi:", result);

      // Başarılı bildirim göster
      showNotification(
        "success",
        "Form başarıyla gönderildi! En kısa sürede size dönüş yapacağız."
      );

      // Başarılı durumu göster
      setIsSuccess(true);
    } catch (error) {
      console.error("Email gönderme hatası:", error);

      // Hata bildirimi göster
      showNotification(
        "error",
        "Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Bildirim */}
      <Notification
        isVisible={notification.isVisible}
        type={notification.type}
        message={notification.message}
        onClose={hideNotification}
      />

      <section
        id="contact"
        className="py-10 sm:py-12 lg:py-16 xl:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0E0E0E] mb-3 sm:mb-4 lg:mb-6 font-lato leading-tight tracking-normal capitalize">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-md sm:text-sm md:text-base lg:text-lg mb-6 xl:text-xl text-[#0E0E0E] leading-relaxed font-light font-lato text-left">
              Dil öğrenme yolculuğunuza başlamak için hemen iletişime geçin.
              Size en uygun programı birlikte belirleyelim.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
              {/* Form veya Loading veya Success */}
              {isSubmitting ? (
                <LoadingSpinner message="Email gönderiliyor..." />
              ) : isSuccess ? (
                <SuccessMessage onReset={resetForm} />
              ) : (
                <div
                  className="bg-white rounded-[8px]  border border-[#CFCFCF]  p-4 sm:p-6  transition-all duration-300"
                  style={{ boxShadow: "4px 4px 2px 0px #FFAE0026" }}
                >
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-3 sm:space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {/* Ad Soyad */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs sm:text-sm text-left font-medium text-gray-700 mb-1 sm:mb-2"
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
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-[4px] focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50 font-lato text-sm sm:text-base"
                          placeholder="Adınız ve soyadınız"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs sm:text-sm text-left  font-medium text-gray-700 mb-1 sm:mb-2"
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
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-[4px] focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50 font-lato text-sm sm:text-base"
                          placeholder="ornek@email.com"
                        />
                      </div>

                      {/* Telefon */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs sm:text-sm text-left  font-medium text-gray-700 mb-1 sm:mb-2"
                        >
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2  border-gray-200 rounded-[4px] focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50 font-lato text-sm sm:text-base"
                          placeholder="05XX XXX XX XX"
                        />
                      </div>

                      {/* Dil Seçimi */}
                      <div>
                        <label
                          htmlFor="language"
                          className="block text-xs sm:text-sm font-medium text-left  text-gray-700 mb-1 sm:mb-2"
                        >
                          Öğrenmek İstediğiniz Dil *
                        </label>
                        <select
                          id="language"
                          name="language"
                          value={formData.language}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2  border-gray-200 rounded-[4px] focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50 font-lato text-sm sm:text-base"
                        >
                          <option value="">Dil seçiniz</option>
                          <option value="ingilizce">İngilizce</option>
                          <option value="almanca">Almanca</option>
                          <option value="turkce">Türkçe</option>
                        </select>
                      </div>

                      {/* Seviye */}
                      <div>
                        <label
                          htmlFor="level"
                          className="block text-xs sm:text-sm text-left  font-medium text-gray-700 mb-1 sm:mb-2"
                        >
                          Mevcut Seviyeniz
                        </label>
                        <select
                          id="level"
                          name="level"
                          value={formData.level}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-[4px] focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50 font-lato text-sm sm:text-base"
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
                          className="block text-xs sm:text-sm text-left  font-medium text-gray-700 mb-1 sm:mb-2"
                        >
                          Haftalık Ders Saati
                        </label>
                        <select
                          id="hours"
                          name="hours"
                          value={formData.hours}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-[4px] focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50 font-lato text-sm sm:text-base"
                        >
                          <option value="">Saat seçiniz</option>
                          <option value="2">2 saat</option>
                          <option value="3">3 saat</option>
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
                        className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                      >
                        Ek Bilgiler / Mesajınız
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-[4px] focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300 hover:border-[#FFAE00]/50 font-lato text-sm sm:text-base"
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
                          className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFAE00] border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-[#FFAE00]/30 focus:border-[#FFAE00] transition-all duration-300"
                        />
                      </div>
                      <div className="ml-2 sm:ml-3 text-xs sm:text-sm">
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
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm bg-[#FFAE00] text-white rounded-[4px] hover:bg-white hover:text-[#FFAE00] hover:border hover:border-[#FFAE00] duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Gönderiliyor..." : "Formu Gönder"}
                      </motion.button>
                    </div>

                    {/* Info Text */}
                    <div className="text-center text-xs sm:text-sm text-gray-600">
                      <p>
                        * işaretli alanlar zorunludur. Form gönderildikten sonra
                        en kısa sürede size dönüş yapacağız.
                      </p>
                    </div>
                  </form>
                </div>
              )}

              {/* Sağ Taraf - Modern Tasarım */}
              <div className="space-y-4 sm:space-y-6">
                {/* Ana Bilgi Kartı */}
                <motion.div
                  className="bg-white rounded-[8px] border border-[#CFCFCF] p-4 sm:p-6 lg:p-8 text-center transition-all duration-300"
                  style={{ boxShadow: "4px 4px 2px 0px #FFAE0026" }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#FFAE00] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white"
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
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 font-lato">
                    Dil Öğrenmeye Hazır mısınız?
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm font-lato">
                    Profesyonel eğitmenlerimizle birlikte dil öğrenme
                    yolculuğunuza başlayın. Size özel programlar ve esnek ders
                    saatleri ile hedeflerinize ulaşın.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-[#FFAE00] font-semibold text-xs sm:text-sm">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
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
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div
                    className="bg-white rounded-[8px] border border-[#CFCFCF] p-3 sm:p-4 text-center transition-all duration-300"
                    style={{ boxShadow: "2px 2px 1px 0px #FFAE0026" }}
                  >
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FFAE00] mb-1 font-lato">
                      5+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-lato">
                      Yıllık Deneyim
                    </div>
                  </div>
                  <div
                    className="bg-white rounded-[8px] border border-[#CFCFCF] p-3 sm:p-4 text-center transition-all duration-300"
                    style={{ boxShadow: "2px 2px 1px 0px #FFAE0026" }}
                  >
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FFAE00] mb-1 font-lato">
                      500+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-lato">
                      Mutlu Öğrenci
                    </div>
                  </div>
                  <div
                    className="bg-white rounded-[8px] border border-[#CFCFCF] p-3 sm:p-4 text-center transition-all duration-300"
                    style={{ boxShadow: "2px 2px 1px 0px #FFAE0026" }}
                  >
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FFAE00] mb-1 font-lato">
                      95%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-lato">
                      Başarı Oranı
                    </div>
                  </div>
                  <div
                    className="bg-white rounded-[8px] border border-[#CFCFCF] p-3 sm:p-4 text-center transition-all duration-300"
                    style={{ boxShadow: "2px 2px 1px 0px #FFAE0026" }}
                  >
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FFAE00] mb-1 font-lato">
                      3
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-lato">
                      Farklı Dil
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
