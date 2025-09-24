import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/images/hero/hero.png";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center bg-[#FEFDF9] pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 lg:pb-16 xl:pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Sol taraf - Yazı içeriği */}
          <motion.div
            className="space-y-3 sm:space-y-4 lg:space-y-6 xl:space-y-8 text-left order-1 lg:order-1 "
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="space-y-2 sm:space-y-3 lg:space-y-4 xl:space-y-6"
              variants={itemVariants}
            >
              <motion.h1
                className="font-lato text-left mb-5"
                variants={itemVariants}
              >
                <motion.span
                  className="block font-light text-2xl sm:text-3xl lg:text-4xl leading-tight mt-2 sm:mt-3 font-lato"
                  variants={itemVariants}
                >
                  Antalya'nın Eşsiz Manzarasında
                </motion.span>
                <motion.span
                  className="block font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mt-2 sm:mt-3 font-lato"
                  variants={itemVariants}
                >
                  İngilizceye Açılan Kapınız!
                </motion.span>
              </motion.h1>

              <motion.div
                className="space-y-1 sm:space-y-1 lg:space-y-2"
                variants={itemVariants}
              >
                <motion.p
                  className="text-md sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8 xl:text-xl text-[#0E0E0E] leading-relaxed font-light font-lato text-left"
                  variants={itemVariants}
                >
                  Bizce İngilizce sadece bir ders değil, hayatın içine
                  yerleşmesi gereken bir alışkanlık!
                </motion.p>

                <motion.p
                  className="text-md sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#0E0E0E] leading-relaxed font-light font-lato text-left"
                  variants={itemVariants}
                >
                  Antalya'da konuşma odaklı İngilizce eğitimi hiç bu kadar
                  keyifli ve etkili olmamıştı!
                </motion.p>
                <motion.p
                  className="text-md sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#0E0E0E] leading-relaxed font-light font-lato text-left"
                  variants={itemVariants}
                >
                  Butik sınıflarda, profesyonel eğitmenlerle kendi hızında
                  öğren, gerçek hayatta kullanabileceğin şekilde pratik yap.
                </motion.p>
                <motion.p
                  className="text-md sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#0E0E0E] leading-relaxed font-light font-lato text-left"
                  variants={itemVariants}
                >
                  Antalya Falez Dil Kursu olarak; ister özel ders, ister küçük
                  grup eğitimi tercih et, sana uygun programı birlikte
                  oluşturalım.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              className="pt-2 sm:pt-3 lg:pt-4 mt-4 sm:mt-0"
              variants={itemVariants}
            >
              <motion.button
                className="w-auto px-8 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5 mt-3 bg-[#FFAE00] text-white font-normal rounded-[4px] border border-[#FFAE00] transition-all duration-300 text-xs sm:text-sm lg:text-md hover:bg-white hover:text-[#FFAE00] font-lato"
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Deneme Dersi Oluştur
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Sağ taraf - Fotoğraf */}
          <motion.div
            className="relative order-2 lg:order-2 mb-6 sm:mb-8 lg:mb-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative z-10"
              transition={{ duration: 0.3 }}
            >
              <img
                src={heroImage}
                alt="Antalya Falez Dil Kursu Hero"
                className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
