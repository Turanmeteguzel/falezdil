import React from "react";
import { motion } from "framer-motion";
import checkFat from "../assets/images/CheckFat.png";

const ThreeCards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const checkItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-left mb-8 sm:mb-12 lg:mb-16 xl:mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-800 mb-3 sm:mb-4 lg:mb-6 leading-tight font-inter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Hedefi olanlar için,
            <br className="hidden sm:block" />
            <span className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Tek Yöntem Değil, Doğru Yöntem Lazım
            </span>
          </motion.h1>
          <div className="flex flex-col gap-2">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-2xl sm:max-w-3xl lg:max-w-4xl leading-relaxed font-inter">
              Dil öğrenimi tek bir modelle herkese uyan bir süreç değildir.
            </span>{" "}
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-2xl sm:max-w-3xl lg:max-w-4xl leading-relaxed font-inter">
              Bazı öğrenciler birebir ilgiyle hızla ilerlerken, kimileri küçük
              gruplarda etkileşimle gelişir.
            </span>{" "}
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-2xl sm:max-w-3xl lg:max-w-4xl leading-relaxed font-inter">
              Kimi öğrenciler ise motivasyonu yüksek, sosyal sınıflarda daha çok
              keyif alır.
            </span>{" "}
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-2xl sm:max-w-3xl lg:max-w-4xl leading-relaxed font-inter">
              İşte bu yüzden Antalya Falez Dil Kursu'nda farklı hedeflere,
              farklı tempolara ve farklı öğrenme stillerine göre 3 ayrı eğitim
              modeli sunuyoruz:
            </span>
          </div>
        </motion.div>

        {/* Three Cards Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Card 1: HIZLI GELİŞİM İÇİN ÖZEL DERS */}
          <motion.div
            className="w-full min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] xl:min-h-[613px] bg-white border border-[#CFCFCF] rounded-lg p-3 sm:p-4 lg:p-6 xl:p-8 flex flex-col"
            style={{ boxShadow: "4px 4px 2px 0px #FFAE0026" }}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mb-3 sm:mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-gray-500 mb-1 text-left">
                HIZLI GELİŞİM İÇİN
              </p>
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 text-left">
                ÖZEL DERS
              </h2>
              <p className="text-xs text-gray-600 text-left">
                Zamanı sınırlı, birebir odaklanmak isteyen; sınav, iş, göç gibi
                hedefleri olanlar için.
              </p>
            </motion.div>

            <div className="border-t border-[#CFCFCF] mb-3 sm:mb-4 lg:mb-6"></div>

            <motion.div
              className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 flex-grow"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Öğrenciye özel haftalık ders programı
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Eğitime istediğin zaman başlama seçeneği
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Telafi dersi seçeneği (24 saat öncesine kadar)
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Hedeflere uygun birebir içerik (sınav, iş, akademik)
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  TOEFL, IELTS, Goethe, telc gibi sınavlar için özel içerik
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Hedef odaklı öğrenme, oyunlar, sunumlar, kelime desteği
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Bireysel gelişim takibi ve haftalık geri bildirim raporu
                </span>
              </motion.div>
            </motion.div>

            <motion.button className="w-full bg-[#FFAE00] hover:bg-white hover:text-[#FFAE00] hover:border hover:border-[#FFAE00] text-white font-bold py-2 sm:py-3 px-1.5 sm:px-2 rounded-lg text-xs sm:text-sm lg:text-base transition-all duration-100 mt-auto">
              Ücretsiz Tanışma Görüşmesi Planla
            </motion.button>
          </motion.div>

          {/* Card 2: ODAKLANMA VE ETKİLEŞİM İÇİN 3-4 KİŞİLİK SINIF */}
          <motion.div
            className="w-full min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] xl:min-h-[613px] bg-white border border-[#CFCFCF] rounded-lg p-3 sm:p-4 lg:p-6 xl:p-8 flex flex-col relative"
            style={{ boxShadow: "4px 4px 2px 0px #FFAE0026" }}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* 5% View Banner */}
            <motion.div
              className="absolute rounded-tl-lg rounded-tr-lg top-0 left-0 right-0 bg-[#FFF7E2] text-gray-800 px-2 sm:px-3 py-1 text-xs font-medium text-center"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="text-xs text-[#FFAE00]">
                EN ÇOK TERCİH EDİLEN
              </span>
            </motion.div>

            <motion.div
              className="mb-3 sm:mb-4 lg:mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-gray-500 mb-1 text-left">
                ODAKLANMA VE ETKİLEŞİM İÇİN
              </p>
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 text-left">
                3-4 KİŞİLİK SINIF
              </h2>
              <p className="text-xs text-gray-600 text-left">
                Hem konuşmak hem de küçük, dengeli sınıfta bireysel ilgi almak
                isteyenler için.
              </p>
            </motion.div>

            <div className="border-t border-[#CFCFCF] mb-3 sm:mb-4 lg:mb-6"></div>

            <motion.div
              className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 flex-grow"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Maks. 4 kişilik sınıflar
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Öğrenciye özel haftalık ders programı
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Eğitime istediğin zaman başlama seçeneği
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Telafi dersi seçeneği (24 saat öncesine kadar)
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Sınıf eşleştirmesi: Aynı seviye, benzer yaş ve benzer öğrenme
                  stiline sahip öğrenciler bir araya getirilir
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Ortak hedeflere göre sınıf arkadaşı sistemi (sınav, iş,
                  akademik)
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Eğitmen gözlemi ve kişisel geri bildirim
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Derslerde konuşma odaklı aktiviteler, sunumlar, oyunlar
                </span>
              </motion.div>
            </motion.div>

            <motion.button className="w-full bg-[#FFFFFF] text-[#FFAE00] border-[#FFAE00] border hover:bg-[#FFAE00] hover:text-white font-bold py-2 sm:py-3 px-1.5 sm:px-2 rounded-lg text-xs sm:text-sm lg:text-base transition-all duration-100 mt-auto">
              Ücretsiz Tanışma Görüşmesi Planla
            </motion.button>
          </motion.div>

          {/* Card 3: MOTİVASYON VE ETKİLEŞİM İÇİN GRUP DERSİ */}
          <motion.div
            className="w-full min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] xl:min-h-[613px] bg-white border border-[#CFCFCF] rounded-lg p-3 sm:p-4 lg:p-6 xl:p-8 flex flex-col relative"
            style={{ boxShadow: "4px 4px 2px 0px #FFAE0026" }}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mb-3 sm:mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-gray-500 mb-1 text-left">
                MOTİVASYON VE ETKİLEŞİM İÇİN
              </p>
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 text-left">
                GRUP DERSİ
              </h2>
              <p className="text-xs text-gray-600 text-left">
                Sosyalleşerek öğrenmeyi seven ve birlikte çalışırken motive olan
                öğrenciler için.
              </p>
            </motion.div>

            <div className="border-t border-[#CFCFCF] mb-3 sm:mb-4 lg:mb-6"></div>

            <motion.div
              className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 flex-grow"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Min. 5 - maks. 10 kişilik aktif sınıf yapısı
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  3.5 aylık yapılandırılmış sabit eğitim programı
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Belirtilen tarihlerde derslere başlama seçeneği
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  %80 ders katılımında sonunda sertifika
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Sınıf eşleştirmesi: Yaş grubu ve seviyeye göre planlanır
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Dinamik sınıf ortamı + konuşma güveni kazandıran içerik
                </span>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                variants={checkItemVariants}
              >
                <motion.img
                  src={checkFat}
                  alt="Check"
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-sm sm:text-base text-gray-700 text-left">
                  Sınıf içi mini sunumlar, projeler, konuşma oyunları
                </span>
              </motion.div>
            </motion.div>

            <motion.button className="w-full bg-[#FFAE00] hover:bg-white hover:text-[#FFAE00] hover:border hover:border-[#FFAE00] text-white font-bold py-2 sm:py-3 px-1.5 sm:px-2 rounded-lg text-xs sm:text-sm lg:text-base transition-all duration-100 mt-auto">
              Ücretsiz Tanışma Görüşmesi Planla
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThreeCards;
