import React from "react";
import { motion } from "framer-motion";
import checkFat from "../assets/images/CheckFat.png";

const ThreeCards = () => {
  const cardData = [
    {
      id: 1,
      subtitle: "HIZLI GELİŞİM İÇİN",
      title: "ÖZEL DERS",
      description:
        "Zamanı sınırlı, birebir odaklanmak isteyen; sınav, iş, göç gibi hedefleri olanlar için.",
      items: [
        "Öğrenciye özel haftalık ders programı",
        "Eğitime istediğin zaman başlama seçeneği",
        "Telafi dersi seçeneği (24 saat öncesine kadar)",
        "Hedeflere uygun birebir içerik (sınav, iş, akademik)",
        "TOEFL, IELTS, Goethe, telc gibi sınavlar için özel içerik",
        "Hedef odaklı öğrenme, oyunlar, sunumlar, kelime desteği",
        "Bireysel gelişim takibi ve haftalık geri bildirim raporu",
      ],
      buttonText: "Ücretsiz Tanışma Görüşmesi Planla",
      buttonStyle:
        "bg-[#FFAE00] hover:bg-white hover:text-[#FFAE00] hover:border hover:border-[#FFAE00] text-white",
    },
    {
      id: 2,
      subtitle: "ODAKLANMA VE ETKİLEŞİM İÇİN",
      title: "3-4 KİŞİLİK SINIF",
      description:
        "Hem konuşmak hem de küçük, dengeli sınıfta bireysel ilgi almak isteyenler için.",
      items: [
        "Maks. 4 kişilik sınıflar",
        "Öğrenciye özel haftalık ders programı",
        "Eğitime istediğin zaman başlama seçeneği",
        "Telafi dersi seçeneği (24 saat öncesine kadar)",
        " Sinif eslestirmesi: Ayni seviye, benzer yas ve benzer ogrenme stiline sahip ogrenciler bir araya getirilir",
        "Ortak hedeflere gore sinif arkadasi sistemi (sinav, is, akademik)",
        "Egitmen gozlemi ve kisisel geri bildirim",
        "Derslerde konusma odakli aktiviteler, sunumlar, oyunlar",
      ],
      buttonText: "Ücretsiz Tanışma Görüşmesi Planla",
      buttonStyle:
        "bg-[#FFFFFF] text-[#FFAE00] border-[#FFAE00] border hover:bg-[#FFAE00] hover:text-white",
      badge: "EN ÇOK TERCİH EDİLEN",
    },
    {
      id: 3,
      subtitle: "MOTİVASYON VE ETKİLEŞİM İÇİN",
      title: "GRUP DERSİ",
      description:
        "Sosyalleşerek öğrenmeyi seven ve birlikte çalışırken motive olan öğrenciler için.",
      items: [
        "Min. 5 - maks. 10 kişilik aktif sınıf yapısı",
        "3.5 aylık yapılandırılmış sabit eğitim programı",
        "Belirtilen tarihlerde derslere başlama seçeneği",
        "%80 ders katılımında sonunda sertifika",
        "Sinif eslestirmesi: Yas grubu ve seviyeye gore planlanir",
        "Dinamik sinif ortami + konusma guveni kazandiran icerik",
        "Sinif ici mini sunumlar, projeler, konusma oyunlari",
      ],
      buttonText: "Ücretsiz Tanışma Görüşmesi Planla",
      buttonStyle:
        "bg-[#FFAE00] hover:bg-white hover:text-[#FFAE00] hover:border hover:border-[#FFAE00] text-white",
    },
  ];

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
    <div className="py-6 sm:py-8 lg:py-12 xl:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-left mb-6 sm:mb-8 lg:mb-12 xl:mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0E0E0E] mb-2 sm:mb-3 lg:mb-4 font-lato leading-tight tracking-normal capitalize"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Hedefi olanlar için,
            <br className="hidden sm:block" />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0E0E0E] font-lato leading-tight tracking-normal capitalize">
              Tek Yöntem Değil, Doğru Yöntem Lazım
            </span>
          </motion.h1>
          <div className="flex flex-col gap-1 sm:gap-2">
            <span className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#0E0E0E] max-w-2xl sm:max-w-3xl lg:max-w-4xl font-lato font-light leading-relaxed tracking-normal">
              Dil öğrenimi tek bir modelle herkese uyan bir süreç değildir.
            </span>{" "}
            <span className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#0E0E0E] max-w-2xl sm:max-w-3xl lg:max-w-4xl font-lato font-light leading-relaxed tracking-normal">
              Bazı öğrenciler birebir ilgiyle hızla ilerlerken, kimileri küçük
              gruplarda etkileşimle gelişir.
            </span>{" "}
            <span className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#0E0E0E] max-w-2xl sm:max-w-3xl lg:max-w-4xl font-lato font-light leading-relaxed tracking-normal">
              Kimi öğrenciler ise motivasyonu yüksek, sosyal sınıflarda daha çok
              keyif alır.
            </span>{" "}
            <span className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#0E0E0E] max-w-2xl sm:max-w-3xl lg:max-w-4xl font-lato font-light leading-relaxed tracking-normal">
              İşte bu yüzden Antalya Falez Dil Kursu'nda farklı hedeflere,
              farklı tempolara ve farklı öğrenme stillerine göre 3 ayrı eğitim
              modeli sunuyoruz:
            </span>
          </div>
        </motion.div>

        {/* Three Cards Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cardData.map((card, index) => (
            <motion.div
              key={card.id}
              className={`w-full min-h-[450px] sm:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px] bg-white border border-[#CFCFCF] rounded-lg p-3 sm:p-4 lg:p-6 xl:p-8 flex flex-col relative ${
                card.badge ? 'pt-8 sm:pt-10 lg:pt-12 xl:pt-14' : ''
              }`}
              style={{ boxShadow: "4px 4px 2px 0px #FFAE0026" }}
              variants={cardVariants}
              whileHover={{ y: index === 1 ? -10 : -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Badge for Card 2 */}
              {card.badge && (
                <motion.div
                  className="absolute rounded-tl-lg rounded-tr-lg top-0 left-0 right-0 bg-[#FFF7E2] text-gray-800 px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium text-center z-10"
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xs sm:text-sm text-[#FFAE00] font-semibold">{card.badge}</span>
                </motion.div>
              )}

              <motion.div
                className="mb-2 sm:mb-3 lg:mb-4 xl:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-lg sm:text-xl lg:text-2xl text-[#0E0E0E] mb-1 text-left font-lato font-light leading-tight tracking-normal">
                  {card.subtitle}
                </p>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0E0E0E] mb-1 sm:mb-2 text-left font-lato leading-tight tracking-normal">
                  {card.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#0E0E0E] text-left font-lato font-light leading-relaxed tracking-normal">
                  {card.description}
                </p>
              </motion.div>

              <div className="border-t border-[#CFCFCF] mb-2 sm:mb-3 lg:mb-4 xl:mb-6"></div>

              <motion.div
                className="space-y-2 sm:space-y-3 lg:space-y-4 mb-3 sm:mb-4 lg:mb-6 flex-grow"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {card.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="flex items-start gap-2 sm:gap-3"
                    variants={checkItemVariants}
                  >
                    <motion.img
                      src={checkFat}
                      alt="Check"
                      className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-xs sm:text-sm text-[#0E0E0E] text-left font-lato font-light leading-relaxed tracking-normal">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                className={`w-full ${card.buttonStyle} font-semibold py-2 sm:py-3 px-2 sm:px-3 rounded-[4px] text-xs sm:text-sm font-lato leading-tight tracking-normal transition-all duration-100 mt-auto`}
              >
                {card.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ThreeCards;
