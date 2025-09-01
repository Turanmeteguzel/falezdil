import React, { useState } from "react";
import { motion } from "framer-motion";

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
      answer:
        "Kayıt sonrası danışman görüşmesi ve deneme dersine göre size özel haftalık ders planı oluşturulur. Öğrenme hedefleriniz, mevcut seviyeniz ve müsait zamanlarınız göz önünde bulundurularak kişiselleştirilmiş bir program hazırlanır.",
    },
    {
      id: "duration",
      question: "Dersler süreleri nedir?",
      answer:
        "Dersler genellikle 45-60 dakika sürmektedir. Programınıza göre bu süreler değişebilir. Yoğun programlar için 90 dakikalık dersler de mevcuttur. Ders süreleri öğrencinin ihtiyaçlarına ve program yoğunluğuna göre ayarlanır.",
    },
    {
      id: "cancellation",
      question: "Dersimi kaç gün öncesine kadar iptal edebilirim?",
      answer:
        "Derslerinizi en az 24 saat öncesine kadar iptal edebilirsiniz. Acil durumlar için 12 saat öncesine kadar iptal hakkınız bulunmaktadır. Düzenli iptaller için önceden bilgilendirme yapmanız önerilir.",
    },
    {
      id: "makeup",
      question: "İptal ettiğim dersi telafi alabilir miyim?",
      answer:
        "Evet, iptal ettiğiniz dersleri uygun zamanlarda telafi edebilirsiniz. Telafi dersleri genellikle aynı hafta içinde veya bir sonraki haftada planlanır. Telafi derslerinin kayıp olmaması için düzenli takip yapılır.",
    },
    {
      id: "change",
      question: "Kursa başladıktan sonra programımı değiştirebilir miyim?",
      answer:
        "Evet, kursa başladıktan sonra da programınızı ihtiyaçlarınıza göre değiştirebiliriz. Program değişiklikleri için danışman görüşmesi yapılır ve yeni programınız en kısa sürede uygulanır. Esneklik bizim önceliğimizdir.",
    },
    {
      id: "age",
      question: "Hangi yaş gruplarına eğitim veriyorsunuz?",
      answer:
        "7 yaşından itibaren tüm yaş gruplarına uygun eğitim programları sunuyoruz. Çocuklar için oyun temelli öğrenme, gençler için modern metodlar, yetişkinler için pratik odaklı yaklaşımlar kullanıyoruz. Her yaş grubuna özel müfredat ve materyaller hazırlanır.",
    },
    {
      id: "groups",
      question: "3-4 kişilik sınıflar nasıl oluşturuluyor?",
      answer:
        "Seviye belirleme testi sonrası benzer seviyedeki öğrencilerle küçük gruplar oluşturulur. Yaş, hedef ve öğrenme hızı da göz önünde bulundurulur. Grup uyumu için önceden tanışma dersi yapılır ve gerekirse grup değişikliği yapılabilir.",
    },
    {
      id: "exams",
      question: "IELTS / Goethe / TestDaF gibi sınavlara hazırlanabilir miyim?",
      answer:
        "Evet, bu sınavlara özel hazırlık programlarımız bulunmaktadır. Her sınav için özel müfredat, deneme sınavları ve strateji eğitimi veriyoruz. Sınav tarihlerine göre yoğunlaştırılmış programlar da mevcuttur.",
    },
    {
      id: "missed",
      question: "Dersleri kaçırırsam ne olur?",
      answer:
        "Kaçırdığınız dersleri telafi etme imkanınız vardır. Kaçırılan dersler için özel materyaller ve ödevler gönderilir. Bir sonraki derste konular tekrar edilir ve eksik kalan kısımlar tamamlanır.",
    },
    {
      id: "trial",
      question: "Deneme dersi ücretli mi?",
      answer:
        "Deneme dersimiz ücretsizdir, böylece programımızı deneyimleyebilirsiniz. Deneme dersinde seviye belirleme yapılır, öğretmen tanışması gerçekleşir ve size özel program önerisi sunulur. Herhangi bir yükümlülük olmadan deneyim kazanabilirsiniz.",
    },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-12 xl:py-16 bg-[#FEFDF9]">
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 200px;
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-left mb-6 sm:mb-8 lg:mb-12 xl:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 sm:mb-4 lg:mb-6 font-lato leading-tight tracking-normal capitalize">
            Merak Ettiklerinizi Cevaplıyoruz
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-4xl font-lato font-light leading-relaxed tracking-normal">
            Dil yolculuklarına bizimle baslayan ogrenciler, deneyimlerini samimi
            bir sekilde paylastı. Sen de karar vermeden once onların hikayesine
            goz at
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
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
                <span className="font-medium text-gray-900 text-sm sm:text-base lg:text-lg xl:text-xl font-lato leading-tight tracking-normal text-left">
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

              {openItems[item.id] && (
                <div
                  className="px-3 pb-3 sm:pb-4 overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    animation: "slideDown 0.3s ease-out forwards",
                  }}
                >
                  <p className="text-gray-600 text-xs sm:text-sm font-lato font-light leading-relaxed tracking-normal text-left">
                    {item.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
