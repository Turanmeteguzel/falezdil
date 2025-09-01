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
    <section id="home" className="min-h-[90vh] flex items-center bg-[#FEFDF9] -mt-5 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Sol taraf - Yazı içeriği */}
          <motion.div
            className="space-y-3 sm:space-y-4 lg:space-y-6 xl:space-y-8 text-left order-1 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="space-y-2 sm:space-y-3 lg:space-y-4 xl:space-y-6"
              variants={itemVariants}
            >
              <motion.h1
                className="font-lato text-left"
                variants={itemVariants}
              >
                <motion.span
                  className="block font-light text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight sm:leading-[1.2] lg:leading-[1.2] mt-2 sm:mt-3 font-lato"
                  variants={itemVariants}
                >
                  Antalya'nın Eşsiz Manzarasında
                </motion.span>
                <motion.span
                  className="block font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight sm:leading-[1.2] lg:leading-[1.2] mt-2 sm:mt-3 font-lato"
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
                  className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 xl:text-xl text-[#0E0E0E] leading-relaxed font-light font-lato text-left"
                  variants={itemVariants}
                >
                  Bizce İngilizce sadece bir ders değil, hayatın içine
                  yerleşmesi gereken bir alışkanlık!
                </motion.p>

                <motion.p
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#0E0E0E] leading-relaxed font-light font-lato text-left"
                  variants={itemVariants}
                >
                  Antalya'da konuşma odaklı İngilizce eğitimi hiç bu kadar
                  keyifli ve etkili olmamıştı!
                </motion.p>
                <motion.p
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#0E0E0E] leading-relaxed font-light font-lato text-left"
                  variants={itemVariants}
                >
                  Butik sınıflarda, profesyonel eğitmenlerle kendi hızında
                  öğren, gerçek hayatta kullanabileceğin şekilde pratik yap.
                </motion.p>
                <motion.p
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#0E0E0E] leading-relaxed font-light font-lato text-left"
                  variants={itemVariants}
                >
                  Antalya Falez Dil Kursu olarak; ister özel ders, ister küçük
                  grup eğitimi tercih et, sana uygun programı birlikte
                  oluşturalım.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              className="pt-2 sm:pt-3 lg:pt-4"
              variants={itemVariants}
            >
              <motion.button
                className="w-full sm:w-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 bg-[#FFAE00] text-white font-semibold rounded-[4px] transition-all duration-300 text-xs sm:text-sm lg:text-md hover:bg-white hover:text-[#FFAE00] hover:border hover:border-[#FFAE00] font-lato"
                whileTap={{ scale: 0.95 }}
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
