import React, { useRef, useEffect } from "react";
import iconbir from "../assets/images/hero/iconbir.png";
import iconiki from "../assets/images/hero/iconiki.png";
import iconuc from "../assets/images/hero/iconuc.png";
import icondort from "../assets/images/hero/icondort.png";
import iconbes from "../assets/images/hero/iconbes.png";

const NewSection = () => {
  const scrollContainerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const autoScrollIntervalRef = useRef(null);

  const getStepSize = () => {
    const container = scrollContainerRef.current;
    if (!container || !container.firstElementChild) return 300;
    const first = container.children[0];
    const second = container.children[1];
    if (first && second) {
      const r1 = first.getBoundingClientRect();
      const r2 = second.getBoundingClientRect();
      const delta = Math.abs(r2.left - r1.left);
      return delta > 0 ? delta : r1.width;
    }
    return first.getBoundingClientRect().width;
  };

  useEffect(() => {
    // Auto-scroll to the right every 5s, stop at end
    autoScrollIntervalRef.current = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
      const step = getStepSize();
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const next = Math.min(container.scrollLeft + step, maxScrollLeft);
      container.scrollTo({ left: next, behavior: "smooth" });
      if (next >= maxScrollLeft) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    }, 5000);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };
  }, []);

  const handlePointerDown = (e) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    scrollLeftStartRef.current = container.scrollLeft;
    container.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    const container = scrollContainerRef.current;
    if (!container || !isDraggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    container.scrollLeft = scrollLeftStartRef.current - dx;
  };

  const endDrag = (e) => {
    isDraggingRef.current = false;
    const container = scrollContainerRef.current;
    if (container && e && e.pointerId) {
      container.releasePointerCapture?.(e.pointerId);
    }
  };

  const handleWheel = (e) => {
    // Prevent wheel-based horizontal movement
    e.preventDefault();
  };

  // Infinite loop disabled: no wrap handler

  return (
    <section id="about" className="py-10 sm:py-12 lg:py-16 xl:py-20 bg-white">
      {/* Full-width description area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left space-y-4 sm:space-y-6 lg:space-y-8">
          <h1 className="font-lato">
            <span
              className="block text-2xl sm:text-3xl lg:text-4xl font-light leading-tight text-[#0E0E0E] capitalize"
              style={{
                fontWeight: 300,
                fontStyle: "normal",
                letterSpacing: "0%",
                textTransform: "capitalize",
              }}
            >
              Klasik Kursları Unut,
            </span>
            <span
              className="block text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-[#0E0E0E] capitalize"
              style={{
                fontWeight: 600,
                fontStyle: "normal",
                letterSpacing: "0%",
                textTransform: "capitalize",
              }}
            >
              Gerçek Öğrenmeye Geç
            </span>
          </h1>

          <p className="text-md sm:text-sm md:text-base lg:text-lg mb-6 xl:text-xl text-[#0E0E0E] leading-relaxed font-light font-lato text-left">
            Her öğrencinin dili kendi hayatına göre öğrenmesi gerektiğine
            inanıyoruz. Bu yüzden burada seni konuşmaya teşvik eden, esnek,
            kişiselleştirilmiş ve keyifli bir dil eğitimi bekliyor.
          </p>
        </div>
      </div>

      {/* Cards section - full width, left aligned */}
      <div className="w-full pl-4 sm:pl-6 lg:pl-8 pr-0 mt-8 sm:mt-10 lg:mt-12">
        <div className="relative">
          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-2 sm:space-x-3 lg:space-x-4 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing select-none pl-2 sm:pl-24 lg:pl-24 pr-4 sm:pr-6 lg:pr-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onWheel={handleWheel}
          >
            {/* Card 1 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              data-card
              style={{
                width: "280px",
                height: "306px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={iconbes}
                alt="Icon 1"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                HEMEN BAŞLA !
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center mb-2">
                İngilizce ya da Almanca öğrenmeye başlamak için bekleme.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center">
                Kayıt olduğun hafta derslere başla,
              </p>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center font-bold">
                zaman kaybetme hedefe ulaş.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white flex flex-col items-center justify-center font-light p-4 sm:p-6 flex-shrink-0"
              data-card
              style={{
                width: "280px",
                height: "306px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={iconbir}
                alt="Icon 2"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                KONUŞTURAN DERSLER
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center mb-2">
                İngilizce ya da Almanca öğrenmeye başlamak için bekleme.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center">
                Kelimeleri ezberlemek yerine,
              </p>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center font-bold">
                iletişim kurarak öğren.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              data-card
              style={{
                width: "280px",
                height: "306px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={iconiki}
                alt="Icon 3"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                ÜCRETSİZ TELAFİ DERSİ
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center mb-2">
                Online ya da yüz yüze dersini kaçırdıysan ücretsiz telafi et.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center">
                Esnek yapımız sayesinde
              </p>{" "}
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center font-bold">
                motivasyonun düşmeden devam et.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              data-card
              style={{
                width: "280px",
                height: "306px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={iconuc}
                alt="Icon 4"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                EĞİTİM SÜRENİZİ BELİRLEYİN
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center mb-2">
                Ne kadar sürede neye ulaşmak istediğine sen karar ver.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light  text-center">
                Aylık sistem sayesinde
              </p>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center font-bold">
                hedeflerine uygun tempo.
              </p>
            </div>

            {/* Card 5 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              data-card
              style={{
                width: "280px",
                height: "306px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={icondort}
                alt="Icon 5"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                KİŞİSEL DERS PROGRAMI
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center mb-2">
                Ders saatini, içeriğini ve öğretmenini sana özel planlıyoruz.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center">
                Hedeflerine ulaşmak için
              </p>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center font-bold">
                ihtiyacına özel eğitim alırsın.
              </p>
            </div>

            {/* Card 1 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              data-card
              style={{
                width: "280px",
                height: "306px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={iconbes}
                alt="Icon 1"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                HEMEN BAŞLA !
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center mb-2">
                İngilizce ya da Almanca öğrenmeye başlamak için bekleme.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center">
                Kayıt olduğun hafta derslere başla,
              </p>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center font-bold">
                zaman kaybetme hedefe ulaş.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              data-card
              style={{
                width: "280px",
                height: "306px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={iconbir}
                alt="Icon 2"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                KONUŞTURAN DERSLER
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center mb-2">
                İngilizce ya da Almanca öğrenmeye başlamak için bekleme.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center">
                Kelimeleri ezberlemek yerine,
              </p>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center font-bold">
                iletişim kurarak öğren.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              data-card
              style={{
                width: "280px",
                height: "306px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={iconiki}
                alt="Icon 3"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                ÜCRETSİZ TELAFİ DERSİ
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light   text-center mb-2">
                Online ya da yüz yüze dersini kaçırdıysan ücretsiz telafi et.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center">
                Esnek yapımız sayesinde
              </p>{" "}
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center font-bold">
                motivasyonun düşmeden devam et.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              data-card
              style={{
                width: "280px",
                height: "306px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={iconuc}
                alt="Icon 4"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                EĞİTİM SÜRENİZİ BELİRLEYİN
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center mb-2">
                Ne kadar sürede neye ulaşmak istediğine sen karar ver.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center">
                Aylık sistem sayesinde
              </p>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center font-bold">
                hedeflerine uygun tempo.
              </p>
            </div>

            {/* Card 5 */}
            <div
              className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 flex-shrink-0"
              data-card
              style={{
                width: "280px",
                height: "306px",
                borderRadius: "12px",
                border: "1px solid #CFCFCF",
                boxShadow: "4px 4px 2px 0px #FFAE0026",
              }}
            >
              <img
                src={icondort}
                alt="Icon 5"
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4"
              />
              <h3 className="text-[#0E0E0E] font-bold text-base sm:text-lg mb-2 sm:mb-3 text-center">
                KİŞİSEL DERS PROGRAMI
              </h3>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center mb-2">
                Ders saatini, içeriğini ve öğretmenini sana özel planlıyoruz.
              </p>
              <div className="w-2 h-2 bg-[#FFAE00] rounded-full mb-2"></div>
              <p className="text-[#0E0E0E] text-xs sm:text-sm font-light text-center">
                Hedeflerine ulaşmak için
              </p>
              <p className="text-[#0E0E0E] text-xs sm:text-sm text-center font-bold">
                ihtiyacına özel eğitim alırsın.
              </p>
            </div>
          </div>

          {/* Navigation buttons removed as requested */}
        </div>
      </div>
    </section>
  );
};

export default NewSection;
