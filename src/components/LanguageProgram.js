import React from "react";
import coffeImage from "../assets/images/hero/coffe.png";
import checkFat from "../assets/images/CheckFat.png";

const LanguageProgram = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-[#FEFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-left mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-4xl font-normal text-gray-800 mb-4 sm:mb-6 leading-tight">
            Senin İçin En Uygun İngilizce Veya Almanca,
            <br />
            <span className="font-bold text-4xl">
              Eğitim Programını Birlikte Belirleyelim
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl leading-relaxed">
            Her öğrencinin dil öğrenme ihtiyacı ve süreci birbirinden farklıdır.
            Biz de bu yolculuğa sizi tanıyarak başlıyoruz. Amacımız sadece ders
            vermek değil; hedefinize en uygun, size özel bir öğrenme süreci
            sunmak. İngilizce veya Almanca öğrenmek isteyen herkesin hayatında
            bu süreci kolay, keyifli ve etkili hale getiriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left Column - Content Blocks */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* First Block - HADİ TANIŞALIM! */}
            <div className="bg-white border border-[#FFFFC7] rounded-lg p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 uppercase tracking-wide text-left">
                HADİ TANIŞALIM!
              </h2>
              <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-left">
                <p className="text-xl">
                  Kurs ortamımızı birlikte gezelim, kahvemizi içerken seni biraz
                  daha tanıyalım.
                </p>
                <p className="text-xl">
                  Hangi dili neden öğrenmek istediğini öğrenelim, hedeflerini
                  dinleyelim.
                </p>
                <p className="text-xl">
                  Danışmanımız, bu görüşmede sana özel planlamanın temelini
                  atar.
                </p>
              </div>
            </div>

            {/* Second Block - DENEME DERSİNE KATIL */}
            <div className="bg-white border border-[#FFFFC7] rounded-lg p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 uppercase tracking-wide text-left">
                DENEME DERSİNE KATIL
              </h2>
              <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-left">
                <p className="text-sm sm:text-base">
                  Gerçek bir ders ortamında kendini deneyimle.
                </p>
                <p className="text-sm sm:text-base">
                  Eğitmenimiz seni sadece dinlemez; nasıl daha iyi öğrendiğini,
                  hangi yöntemle daha çok motive olduğunu da gözlemler.
                </p>
                <p className="text-sm sm:text-base">
                  Dilersen bu dersi birlikte değerlendiririz.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Coffee Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto">
              <img
                src={coffeImage}
                alt="Coffee and language learning"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - Full Width */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-yellow-50 border border-yellow-200 rounded-lg p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Left Side - Text and Button */}
            <div className="text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 uppercase tracking-wide">
                KİŞİSEL EĞİTİM PLANIN HAZIR !
              </h2>
              <div className="space-y-2 sm:space-y-3 text-gray-700 mb-6 sm:mb-8">
                <p className="text-base sm:text-lg">
                  Her şey sana özel ve esnek şekilde planlandı.
                </p>
                <p className="text-base sm:text-lg">
                  Sen sadece öğrenmeye odaklan.
                </p>
              </div>
              <button className="w-full sm:w-auto bg-[#FFAE00] hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-colors duration-200 shadow-lg">
                Ücretsiz Tanışma Görüşmesi Planla
              </button>
            </div>

            {/* Right Side - Feature List */}
            <div className="flex gap-2 sm:gap-3 justify-between w-full">
              {[
                { title: "DİL", subtitle: "Seçildi" },
                { title: "HEDEF", subtitle: "Belirlendi" },
                { title: "SEVİYENİZ", subtitle: "Belirlendi" },
                { title: "ÖĞRENME METODU", subtitle: "Belirlendi" },
                { title: "YAŞ GRUBU", subtitle: "Belirlendi" },
                { title: "SINIF YAPISI", subtitle: "Belirlendi" },
              ].map((feature, index) => (
                <div key={index} className="text-center flex-1">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    <img
                      src={checkFat}
                      alt="Check"
                      className="w-4 h-4 sm:w-6 sm:h-6"
                    />
                  </div>
                  <div className="font-bold text-[#FFAE00] text-xs sm:text-sm mb-1">
                    {feature.title}
                  </div>
                  <div className="text-[#0E0E0E] text-xs">
                    {feature.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageProgram;
