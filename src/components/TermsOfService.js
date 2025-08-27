import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsOfService = () => {
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
                    Kullanım Şartları
                  </h1>
                  <p className="text-lg text-gray-600">
                    Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      Falez Yabancı Dil Kursu Kullanım Şartları
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Web sitemizi kullanarak bu şartları kabul etmiş
                      sayılırsınız
                    </p>
                  </div>

                  <div className="space-y-8 text-gray-700 leading-relaxed">
                    <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange-500">
                      <p className="text-lg">
                        Bu kullanım şartları, Falez Yabancı Dil Kursu'nun web
                        sitesini kullanımınızı ve sunduğumuz hizmetlerden
                        yararlanmanızı düzenler. Sitemizi kullanarak bu şartları
                        kabul etmiş sayılırsınız.
                      </p>
                    </div>

                    <div className="grid gap-6">
                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                            <span className="text-blue-600 font-bold text-lg">
                              1
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            Hizmet Tanımı
                          </h3>
                        </div>
                        <p className="text-gray-600">
                          Falez Yabancı Dil Kursu, Antalya'da yabancı dil
                          eğitimi veren bir kurumdur. Web sitemiz aracılığıyla
                          kurs bilgileri, kayıt formları ve iletişim imkanları
                          sunarız.
                        </p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                            <span className="text-green-600 font-bold text-lg">
                              2
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            Kullanım Koşulları
                          </h3>
                        </div>
                        <p className="mb-3 text-gray-600">
                          Web sitemizi kullanırken aşağıdaki kurallara uymanız
                          gerekir:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Yasal ve etik kurallara uygun davranmak</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Başkalarının haklarına saygı göstermek</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>
                              Site güvenliğini tehdit edecek davranışlarda
                              bulunmamak
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Telif haklarına uygun hareket etmek</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                            <span className="text-purple-600 font-bold text-lg">
                              3
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            Kayıt ve Ödeme
                          </h3>
                        </div>
                        <p className="mb-3 text-gray-600">
                          Kurs kayıtları için aşağıdaki koşullar geçerlidir:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span>
                              Kayıt formunda doğru bilgi verilmesi zorunludur
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span>
                              Ödeme koşulları kurs başlangıcında belirtilir
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span>
                              İptal ve iade koşulları kurs türüne göre değişir
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span>
                              Kurs materyalleri kurs ücretine dahildir
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                            <span className="text-red-600 font-bold text-lg">
                              4
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            Sorumluluk Sınırları
                          </h3>
                        </div>
                        <p className="text-gray-600">
                          Falez Yabancı Dil Kursu, web sitesi kullanımından
                          doğabilecek dolaylı zararlardan sorumlu değildir.
                          Hizmet kalitesi için elimizden geleni yaparız, ancak
                          kesintisiz hizmet garantisi veremeyiz.
                        </p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                            <span className="text-yellow-600 font-bold text-lg">
                              5
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            Fikri Mülkiyet
                          </h3>
                        </div>
                        <p className="text-gray-600">
                          Web sitemizdeki tüm içerik, tasarım ve yazılım Falez
                          Yabancı Dil Kursu'na aittir. Bu içeriklerin
                          kopyalanması, dağıtılması veya ticari amaçla
                          kullanılması yasaktır.
                        </p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                            <span className="text-indigo-600 font-bold text-lg">
                              6
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            Gizlilik
                          </h3>
                        </div>
                        <p className="text-gray-600">
                          Kişisel verilerinizin işlenmesi hakkında detaylı bilgi
                          için
                          <Link
                            to="/privacy-policy"
                            className="text-orange-600 hover:text-orange-700 underline ml-1 font-medium"
                          >
                            Gizlilik Politikamızı
                          </Link>{" "}
                          inceleyebilirsiniz.
                        </p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                            <span className="text-teal-600 font-bold text-lg">
                              7
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            Değişiklikler
                          </h3>
                        </div>
                        <p className="text-gray-600">
                          Bu kullanım şartlarını önceden haber vermeksizin
                          değiştirme hakkını saklı tutarız. Güncel şartlar her
                          zaman web sitemizde yayınlanır.
                        </p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                            <span className="text-pink-600 font-bold text-lg">
                              8
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            İletişim ve Destek
                          </h3>
                        </div>
                        <p className="mb-4 text-gray-600">
                          Kullanım şartları hakkında sorularınız için bizimle
                          iletişime geçebilirsiniz:
                        </p>
                        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6">
                          <div className="text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                              <svg
                                className="w-6 h-6 text-orange-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                            <p className="font-semibold text-orange-900 mb-1">
                              Falez Yabancı Dil Kursu
                            </p>
                            <p className="text-orange-800 text-sm">
                              Gençlik Mahallesi, Tevfik Işık Caddesi, 2. Kural
                              Apartmanı No:13A
                            </p>
                            <p className="text-orange-800 text-sm">
                              07100 Muratpaşa/Antalya
                            </p>
                            <p className="text-orange-800 text-sm">
                              Telefon: 0552 671 96 07
                            </p>
                            <p className="text-orange-800 text-sm">
                              E-posta: info@falezdil.com
                            </p>
                          </div>
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

export default TermsOfService;
