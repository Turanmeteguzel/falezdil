import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqData = [
    {
      id: "program",
      question: "Ders programımı nasıl belirleyebilirim?",
      answer: (
        <>
          Ders programınız <strong>haftalık olarak planlanır</strong> ve tamamen
          size özel şekilde hazırlanır. İstediğiniz gün ve saat aralıklarını
          bize bildirmeniz yeterlidir. Bu sistem sayesinde{" "}
          <strong>esnek bir eğitim takvimiyle</strong> ilerlemiş olursunuz.
        </>
      ),
    },
    {
      id: "duration",
      question: "Dersler süreleri nedir?",
      answer:
        "Tüm derslerimiz 60 dakikalık seanslar hâlinde planlanır. Haftalık toplam ders saatiniz, seçtiğiniz eğitim modeline ve hedefinize göre esnek şekilde ayarlanır. ",
    },
    {
      id: "cancellation",
      question: "Dersimi kaç gün öncesine kadar iptal edebilirim?",
      answer: (
        <>
          En geç <strong>24 saat öncesine kadar</strong> haber verdiğinizde
          dersi iptal edip telafi dersi alabilirsiniz.
        </>
      ),
    },
    {
      id: "makeup",
      question: "İptal ettiğim dersi telafi alabilir miyim?",
      answer:
        "Evet. Belirtilen süre öncesinde yapılan iptallerde telafi hakkı sunuyoruz. Telafi dersleri, sizin ve eğitmeninizin uygunluğuna göre en kısa sürede planlanır. ",
    },
    {
      id: "change",
      question: "Kursa başladıktan sonra programımı değiştirebilir miyim?",
      answer:
        "Evet, tamamen size özel çalışıyoruz. Gelişiminizi izliyor ve ihtiyaçlarınıza göre ders günlerini, içerik yoğunluğunu veya eğitim modelinizi güncelleyebiliyoruz.",
    },
    {
      id: "age",
      question: "Hangi yaş gruplarına eğitim veriyorsunuz?",
      answer:
        "7 yaş ve üzeri, okuma-yazma bilen her öğrenciyle çalışıyoruz. Çocuk, genç ve yetişkinler için seviyeye ve yaşa uygun programlar sunuyoruz. ",
    },
    {
      id: "groups",
      question: "3-4 kişilik sınıflar nasıl oluşturuluyor?",
      answer:
        "Benzer yaş, seviye ve öğrenme tarzına sahip öğrenciler eşleştirilerek 3–4 kişilik butik sınıflar oluşturulur. Bu sayede hem bireysel takip sağlanır hem de etkileşimli öğrenme ortamı oluşur. ",
    },
    {
      id: "exams",
      question: "IELTS / Goethe / TestDaF gibi sınavlara hazırlanabilir miyim?",
      answer:
        "Evet. Tüm uluslararası sınavlara yönelik birebir ve grup derslerimiz mevcuttur. Okuma, yazma, dinleme ve konuşma alanında eksiksiz bir hazırlık süreci yürütüyoruz.",
    },
    {
      id: "trial",
      question:
        "Klasik bir kurs mu, yoksa konuşma pratiği ve sosyal ortamlar da var mı?",
      answer:
        "Hayır, yalnızca gramer anlatan klasik bir kurs değiliz.Derslerimizde konuşma pratiğine öncelik veriyor, grameri gerçek iletişim içinde öğretiyoruz.Ayrıca sunumlar, grup oyunları ve sohbet etkinlikleriyle dil öğrenimini sosyal bir alışkanlığa dönüştürüyoruz. ",
    },
    {
      id: "payment",
      question: "Deneme dersi ücretli mi? ",
      answer:
        "Hayır, ilk tanışma görüşmesi ve deneme dersimiz tamamen ücretsizdir. Ortamımızı görmeniz, öğretmenle tanışmanız ve sistemi deneyimlemeniz için sizi davet ediyoruz. ",
    },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-16 xl:py-20 bg-[#FEFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-left mb-6 sm:mb-8 lg:mb-12 xl:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0E0E0E] mb-4 sm:mb-6 lg:mb-8 font-lato leading-tight tracking-normal capitalize">
            Merak Ettiklerinizi Cevaplıyoruz
          </h2>
          <p className="text-md sm:text-sm md:text-base lg:text-lg mb-6 xl:text-xl text-[#0E0E0E] leading-relaxed font-light font-lato text-left">
            Dil yolculuklarına bizimle başlayan öğrenciler, deneyimlerini samimi
            bir şekilde paylaştı. Sen de karar vermeden önce onların hikâyesine
            göz at.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-start"
          style={{ rowGap: 16, columnGap: 24 }}
        >
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden self-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-3 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-medium text-gray-900 text-sm sm:text-sm lg:text-base font-lato leading-tight tracking-normal text-left">
                  {item.question}
                </span>
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#FFAE00] flex items-center justify-center transition-all duration-200 flex-shrink-0`}
                >
                  {openItems[item.id] ? (
                    // Eksi ikonu (açık durum)
                    <div className="w-2.5 sm:w-3 h-0.5 bg-[#FFAE00]"></div>
                  ) : (
                    // Artı ikonu (kapalı durum)
                    <>
                      <div className="w-2.5 sm:w-3 h-0.5 bg-[#FFAE00] absolute"></div>
                      <div className="w-0.5 h-2.5 sm:h-3 bg-[#FFAE00] absolute"></div>
                    </>
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openItems[item.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 pb-3 sm:pb-4">
                      <p className="text-gray-600 text-sm font-lato font-light leading-relaxed tracking-normal text-left">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
