import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CookiesSettings = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    preferences: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleCookieChange = (type) => {
    if (type === "necessary") return; // Necessary cookies cannot be disabled

    setCookiePreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleSavePreferences = () => {
    // Save cookie preferences to localStorage or send to server
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify(cookiePreferences)
    );
    alert("Çerez tercihleriniz kaydedildi!");
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted));
    alert("Tüm çerezler kabul edildi!");
  };

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setCookiePreferences(allRejected);
    localStorage.setItem("cookiePreferences", JSON.stringify(allRejected));
    alert("Gereksiz çerezler reddedildi!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Content */}
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sol Sütun - Geri Dön Linki */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="sticky top-24"
              >
                <Link
                  to="/"
                  className="inline-flex items-center px-4 py-2 bg-white rounded-[8px] border border-[#CFCFCF] text-[#FFAE00] hover:text-[#FF8C00] font-medium text-lg transition-all duration-300 font-lato"
                  style={{ boxShadow: "4px 4px 2px 0px #FFAE0026" }}
                >
                  ← Geri Dön
                </Link>
              </motion.div>
            </div>

            {/* Sağ Sütun - İçerik */}
            <div className="lg:col-span-3">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  variants={itemVariants}
                  className="text-center mb-12"
                >
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Çerez Ayarları
                  </h1>
                  <p className="text-lg text-gray-600">
                    Web sitemizde kullanılan çerezler ve tercihleriniz
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-lg border border-[#CFCFCF] p-8 mb-8"
                  style={{ boxShadow: "4px 4px 2px 0px #FFAE0026" }}
                >
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                      <svg
                        className="w-8 h-8 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      Çerez Nedir?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Web sitemizi ziyaret ettiğinizde tarayıcınıza gönderilen
                      küçük metin dosyaları
                    </p>
                  </div>

                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange-500">
                      <p className="text-lg">
                        Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınıza
                        gönderilen küçük metin dosyalarıdır. Bu dosyalar,
                        sitemizin daha iyi çalışmasını sağlar ve kullanıcı
                        deneyimini iyileştirir.
                      </p>
                    </div>

                    <div className="grid gap-6">
                      {/* Necessary Cookies */}
                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:border-orange-300">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                              <svg
                                className="w-6 h-6 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900">
                                Gerekli Çerezler
                              </h3>
                              <p className="text-sm text-gray-600">
                                Web sitesinin temel işlevleri için gerekli
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="relative">
                              <input
                                type="checkbox"
                                checked={cookiePreferences.necessary}
                                disabled
                                className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-not-allowed opacity-50"
                              />
                              <div className="absolute inset-0 bg-green-100 rounded opacity-20"></div>
                            </div>
                            <span className="ml-3 text-sm text-green-600 font-medium">
                              Her zaman aktif
                            </span>
                          </div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <p className="text-sm text-green-800">
                            Bu çerezler web sitesinin temel işlevlerini yerine
                            getirmek için gereklidir. Güvenlik, oturum yönetimi
                            ve temel site işlevleri için kullanılır.
                          </p>
                        </div>
                      </div>

                      {/* Analytics Cookies */}
                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:border-blue-300">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                              <svg
                                className="w-6 h-6 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900">
                                Analitik Çerezler
                              </h3>
                              <p className="text-sm text-gray-600">
                                Site kullanımını analiz etmek için
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={cookiePreferences.analytics}
                                onChange={() => handleCookieChange("analytics")}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-sm text-blue-800">
                            Bu çerezler, web sitesinin nasıl kullanıldığını
                            anlamamıza yardımcı olur. Hangi sayfaların ziyaret
                            edildiği, kullanıcıların sitede ne kadar kaldığı
                            gibi bilgileri toplar.
                          </p>
                        </div>
                      </div>

                      {/* Marketing Cookies */}
                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:border-purple-300">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                              <svg
                                className="w-6 h-6 text-purple-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                                />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900">
                                Pazarlama Çerezleri
                              </h3>
                              <p className="text-sm text-gray-600">
                                Kişiselleştirilmiş reklamlar için
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={cookiePreferences.marketing}
                                onChange={() => handleCookieChange("marketing")}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                            </label>
                          </div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                          <p className="text-sm text-purple-800">
                            Bu çerezler, size daha ilgili reklamlar göstermek
                            için kullanılır. Ziyaret ettiğiniz web sitelerini
                            takip eder ve ilgi alanlarınızı belirler.
                          </p>
                        </div>
                      </div>

                      {/* Preferences Cookies */}
                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:border-yellow-300">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                              <svg
                                className="w-6 h-6 text-yellow-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900">
                                Tercih Çerezleri
                              </h3>
                              <p className="text-sm text-gray-600">
                                Kullanıcı tercihlerini hatırlamak için
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={cookiePreferences.preferences}
                                onChange={() =>
                                  handleCookieChange("preferences")
                                }
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-600"></div>
                            </label>
                          </div>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                          <p className="text-sm text-yellow-800">
                            Bu çerezler, dil tercihleriniz, bölge ayarlarınız ve
                            diğer kişisel tercihlerinizi hatırlar, böylece her
                            ziyaretinizde bu ayarları tekrar yapmanız gerekmez.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-4 h-4 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">
                            Önemli Bilgi
                          </h4>
                          <p className="text-sm text-blue-800">
                            Gerekli çerezler web sitesinin düzgün çalışması için
                            her zaman aktif olmalıdır. Diğer çerez türlerini
                            kapatabilirsiniz, ancak bu durumda bazı özellikler
                            düzgün çalışmayabilir.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiesSettings;
