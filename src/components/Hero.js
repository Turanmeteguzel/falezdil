import React from "react";
import heroImage from "../assets/images/hero/hero.png";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-[#FEFDF9] -mt-5 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Sol taraf - Yazı içeriği */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-left order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h1 className="font-lato text-left">
                <span className="block text-[45px] font-light leading-tight text-gray-900 whitespace-nowrap">
                  Antalya'nın Essiz Manzarasında
    </span>        
                <span className="block font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight sm:leading-[1.2] lg:leading-[1.2]">
                  İngilizceye Açılan Kapınız!
                </span>
              </h1>

              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 leading-relaxed font-lato text-left">
                  Bizce İngilizce sadece bir ders değil, hayatın içine
                  yerleşmesi gereken bir alışkanlık!
                </p>

                <p className="text-xs sm:text-sm md:text-base lg:text-[18px] xl:text-[20px] text-[#0E0E0E] leading-relaxed font-light font-lato text-left">
                  Antalya'da konuşma odaklı İngilizce eğitimi hiç bu kadar
                  keyifli ve etkili olmamıştı!
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-[18px] xl:text-[20px] text-[#0E0E0E] leading-relaxed font-light font-lato text-left">
                  Butik sınıflarda, profesyonel eğitmenlerle kendi hızında
                  öğren, gerçek hayatta kullanabileceğin şekilde pratik yap.
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-[18px] xl:text-[20px] text-[#0E0E0E] leading-relaxed font-light font-lato text-left">
                  Antalya Falez Dil Kursu olarak; ister özel ders, ister küçük
                  grup eğitimi tercih et, sana uygun programı birlikte
                  oluşturalım.
                </p>
              </div>
            </div>

            <div className="pt-2 sm:pt-3 lg:pt-4">
              <button className="w-full sm:w-auto px-4 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 bg-[#FFAE00] text-white font-semibold rounded-[4px] transition-all duration-500  text-sm sm:text-base lg:text-lg hover:bg-white hover:text-[#FFAE00] hover:border hover:border-[#FFAE00]">
                Deneme Dersi Oluştur
              </button>
            </div>
          </div>

          {/* Sağ taraf - Fotoğraf */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Antalya Falez Dil Kursu Hero"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
