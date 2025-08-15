import React from "react";
import iconbir from "../assets/images/hero/iconbir.png";
import iconiki from "../assets/images/hero/iconiki.png";
import iconuc from "../assets/images/hero/iconuc.png";
import icondort from "../assets/images/hero/icondort.png";

const NewSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FEFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left space-y-4 sm:space-y-6 lg:space-y-8">
          <h1 className="font-lato">
            <span
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light leading-tight sm:leading-[100%] text-[#0E0E0E] capitalize"
              style={{
                fontFamily: "Lato",
                fontWeight: 300,
                fontStyle: "normal",
                lineHeight: "100%",
                letterSpacing: "0%",
                textTransform: "capitalize",
              }}
            >
              Klasik Kursları Unut,
            </span>
            <span
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight sm:leading-[100%] text-[#0E0E0E] capitalize"
              style={{
                fontFamily: "Lato",
                fontWeight: 600,
                fontStyle: "normal",
                lineHeight: "100%",
                letterSpacing: "0%",
                textTransform: "capitalize",
              }}
            >
              Gerçek Öğrenmeye Geç
            </span>
          </h1>

          <p className="text-[#0E0E0E] text-sm sm:text-base md:text-lg leading-relaxed font-lato max-w-4xl">
            Her öğrencinin dili kendi hayatına göre öğrenmesi gerektiğine
            inanıyoruz. Bu yüzden burada seni konuşmaya teşvik eden, esnek,
            kişiselleştirilmiş ve keyifli bir dil eğitimi bekliyor.
          </p>

          <div
            className="flex space-x-3 sm:space-x-4 lg:space-x-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Card 1 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              style={{
                width: "240px",
                height: "280px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={iconbir}
                alt="Icon 1"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                HEMEN BAŞLA !
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center mb-2">
                İngilizce ya da Almanca öğrenmeye başlamak için bekleme.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center">
                Kayıt olduğun hafta derslere başla, zaman kaybetmeden
                hedeflerine ulaş.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              style={{
                width: "240px",
                height: "280px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={iconiki}
                alt="Icon 2"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                HEMEN BAŞLA !
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center mb-2">
                İngilizce ya da Almanca öğrenmeye başlamak için bekleme.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center">
                Kayıt olduğun hafta derslere başla, zaman kaybetmeden
                hedeflerine ulaş.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              style={{
                width: "240px",
                height: "280px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={iconuc}
                alt="Icon 3"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                HEMEN BAŞLA !
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center mb-2">
                İngilizce ya da Almanca öğrenmeye başlamak için bekleme.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center">
                Kayıt olduğun hafta derslere başla, zaman kaybetmeden
                hedeflerine ulaş.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              style={{
                width: "240px",
                height: "280px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={icondort}
                alt="Icon 4"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                HEMEN BAŞLA !
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center mb-2">
                İngilizce ya da Almanca öğrenmeye başlamak için bekleme.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center">
                Kayıt olduğun hafta derslere başla, zaman kaybetmeden
                hedeflerine ulaş.
              </p>
            </div>

            {/* Card 5 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              style={{
                width: "240px",
                height: "280px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={iconbir}
                alt="Icon 5"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                HEMEN BAŞLA !
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center mb-2">
                İngilizce ya da Almanca öğrenmeye başlamak için bekleme.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center">
                Kayıt olduğun hafta derslere başla, zaman kaybetmeden
                hedeflerine ulaş.
              </p>
            </div>

            {/* Card 6 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              style={{
                width: "240px",
                height: "280px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={iconiki}
                alt="Icon 6"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                HEMEN BAŞLA !
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center mb-2">
                İngilizce ya da Almanca öğrenmeye başlamak için bekleme.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center">
                Kayıt olduğun hafta derslere başla, zaman kaybetmeden
                hedeflerine ulaş.
              </p>
            </div>

            {/* Card 7 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              style={{
                width: "240px",
                height: "280px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={iconuc}
                alt="Icon 7"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                HEMEN BAŞLA !
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center mb-2">
                İngilizce ya da Almanca öğrenmeye başlamak için bekleme.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center">
                Kayıt olduğun hafta derslere başla, zaman kaybetmeden
                hedeflerine ulaş.
              </p>
            </div>

            {/* Card 8 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              style={{
                width: "240px",
                height: "280px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={icondort}
                alt="Icon 8"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                HEMEN BAŞLA !
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center mb-2">
                İngilizce ya da Almanca öğrenmeye başlamak için bekleme.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center">
                Kayıt olduğun hafta derslere başla, zaman kaybetmeden
                hedeflerine ulaş.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;
