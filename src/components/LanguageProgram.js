import React from "react";
import coffeImage from "../assets/images/hero/coffe.png";
import checkFat from "../assets/images/CheckFat.png";

const LanguageProgram = () => {
  return (
    <div id="blog" className="py-8 sm:py-12 lg:py-20 bg-[#FEFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-left mb-8 sm:mb-12 lg:mb-20">
          <h1 className="font-lato font-light text-2xl sm:text-3xl lg:text-4xl leading-none tracking-normal capitalize text-[#0E0E0E] mb-3 sm:mb-4 lg:mb-6">
            Senin İçin En Uygun İngilizce Veya Almanca,
            <br />
            <span className="font-lato font-semibold text-2xl sm:text-3xl lg:text-4xl leading-none tracking-normal capitalize text-[#0E0E0E]">
              Eğitim Programını Birlikte Belirleyelim
            </span>
          </h1>
          <p className="font-lato font-light text-sm sm:text-lg lg:text-xl leading-[30px] tracking-normal text-[#0E0E0E] max-w-4xl">
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
            <div className="bg-white border border-[#FFFFC7] rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="font-lato font-medium text-lg sm:text-xl leading-[26px] tracking-normal text-[#0E0E0E] mb-3 sm:mb-4 lg:mb-6 text-left">
                HADİ TANIŞALIM!
              </h2>
              <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-left">
                <p className="font-lato font-light text-sm sm:text-lg lg:text-xl leading-none tracking-normal text-[#0E0E0E]">
                  Kurs ortamımızı birlikte gezelim, kahvemizi içerken seni biraz
                  daha tanıyalım.
                </p>
                <p className="font-lato font-light text-sm sm:text-lg lg:text-xl leading-none tracking-normal text-[#0E0E0E]">
                  Hangi dili neden öğrenmek istediğini öğrenelim, hedeflerini
                  dinleyelim.
                </p>
                <p className="font-lato font-light text-sm sm:text-lg lg:text-xl leading-none tracking-normal text-[#0E0E0E]">
                  Danışmanımız, bu görüşmede sana özel planlamanın temelini
                  atar.
                </p>
              </div>
            </div>

            {/* Second Block - DENEME DERSİNE KATIL */}
            <div className="bg-white border border-[#FFFFC7] rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="font-lato font-medium text-lg sm:text-xl leading-[26px] tracking-normal text-[#0E0E0E] mb-3 sm:mb-4 lg:mb-6 text-left">
                DENEME DERSİNE KATIL
              </h2>
              <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-left">
                <p className="font-lato font-light text-sm sm:text-lg lg:text-xl leading-none tracking-normal text-[#0E0E0E]">
                  Gerçek bir ders ortamında kendini deneyimle.
                </p>
                <p className="font-lato font-light text-sm sm:text-lg lg:text-xl leading-none tracking-normal text-[#0E0E0E]">
                  Eğitmenimiz seni sadece dinlemez; nasıl daha iyi öğrendiğini,
                  hangi yöntemle daha çok motive olduğunu da gözlemler.
                </p>
                <p className="font-lato font-light text-sm sm:text-lg lg:text-xl leading-none tracking-normal text-[#0E0E0E]">
                  Dilersen bu dersi birlikte değerlendiririz.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Coffee Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0 h-full">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-full flex flex-col justify-center">
              <img
                src={coffeImage}
                alt="Coffee and language learning"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - Full Width */}
        <div className="mt-8 sm:mt-12 lg:mt-20 bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Left Side - Text and Button */}
            <div className="text-left">
              <h2 className="font-lato font-medium text-lg sm:text-xl leading-[26px] tracking-normal text-[#0E0E0E] mb-3 sm:mb-4 lg:mb-6">
                KİŞİSEL EĞİTİM PLANIN HAZIR !
              </h2>
              <div className="space-y-1 sm:space-y-2 lg:space-y-3 text-gray-700 mb-4 sm:mb-6 lg:mb-8">
                <p className="font-lato font-light text-sm sm:text-lg lg:text-xl leading-[26px] tracking-normal text-[#0E0E0E]">
                  Her şey sana özel ve esnek şekilde planlandı.
                </p>
                <p className="font-lato font-light text-sm sm:text-lg lg:text-xl leading-[26px] tracking-normal text-[#0E0E0E]">
                  Sen sadece öğrenmeye odaklan.
                </p>
              </div>
              <button className="w-full sm:w-auto bg-[#FFAE00] hover:bg-white hover:text-[#FFAE00] hover:border hover:border-[#FFAE00] text-white font-lato font-semibold py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4 rounded-[4px] text-xs sm:text-sm leading-[20px] tracking-normal transition-all duration-300 shadow-lg">
                Ücretsiz Tanışma Görüşmesi Planla
              </button>
            </div>

            {/* Right Side - Feature List */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1 sm:gap-2 lg:gap-3 w-full">
              {[
                { title: "DİL", subtitle: "Seçildi" },
                { title: "HEDEF", subtitle: "Belirlendi" },
                { title: "SEVİYENİZ", subtitle: "Belirlendi" },
                { title: "ÖĞRENME METODU", subtitle: "Belirlendi" },
                { title: "YAŞ GRUBU", subtitle: "Belirlendi" },
                { title: "SINIF YAPISI", subtitle: "Belirlendi" },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                    <img
                      src={checkFat}
                      alt="Check"
                      className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4"
                    />
                  </div>
                  <div className="font-bold text-[#FFAE00] text-[10px] sm:text-xs lg:text-sm mb-0.5 sm:mb-1 leading-tight">
                    {feature.title}
                  </div>
                  <div className="text-[#0E0E0E] text-[8px] sm:text-xs leading-tight">
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
