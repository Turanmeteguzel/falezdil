import React, { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      question: "Ders programımı nasıl belirleyebilirim?",
      answer:
        "Kayıt sonrası danışman görüşmesi ve deneme dersine göre size özel haftalık ders planı oluşturulur.",
    },
    {
      question: "Dersler süreleri nedir?",
      answer:
        "Dersler genellikle 45-60 dakika sürmektedir. Programınıza göre bu süreler değişebilir.",
    },
    {
      question: "Dersimi kaç gün öncesine kadar iptal edebilirim?",
      answer: "Derslerinizi en az 24 saat öncesine kadar iptal edebilirsiniz.",
    },
    {
      question: "İptal ettiğim dersi telafi alabilir miyim?",
      answer:
        "Evet, iptal ettiğiniz dersleri uygun zamanlarda telafi edebilirsiniz.",
    },
    {
      question: "Kursa başladıktan sonra programımı değiştirebilir miyim?",
      answer:
        "Evet, kursa başladıktan sonra da programınızı ihtiyaçlarınıza göre değiştirebiliriz.",
    },
    {
      question: "Hangi yaş gruplarına eğitim veriyorsunuz?",
      answer:
        "7 yaşından itibaren tüm yaş gruplarına uygun eğitim programları sunuyoruz.",
    },
    {
      question: "3-4 kişilik sınıflar nasıl oluşturuluyor?",
      answer:
        "Seviye belirleme testi sonrası benzer seviyedeki öğrencilerle küçük gruplar oluşturulur.",
    },
    {
      question: "IELTS / Goethe / TestDaF gibi sınavlara hazırlanabilir miyim?",
      answer: "Evet, bu sınavlara özel hazırlık programlarımız bulunmaktadır.",
    },
    {
      question: "Dersleri kaçırırsam ne olur?",
      answer: "Kaçırdığınız dersleri telafi etme imkanınız vardır.",
    },
    {
      question: "Deneme dersi ücretli mi?",
      answer:
        "Deneme dersimiz ücretsizdir, böylece programımızı deneyimleyebilirsiniz.",
    },
  ];

  return (
    <section className="py-20 bg-[#FEFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Merak Ettiklerinizi Cevaplıyoruz
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dil yolculuklarına bizimle başlayan öğrenciler, deneyimlerini samimi
            bir şekilde paylaştı. Sen de karar vermeden önce onların hikâyesine
            göz at
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-medium text-gray-900 text-sm sm:text-base">
                  {item.question}
                </span>
                <div
                  className={`w-6 h-6 rounded-full border-2 border-[#FFAE00] flex items-center justify-center transition-transform duration-200 ${
                    openItems[index] ? "rotate-180" : ""
                  }`}
                >
                  <div
                    className={`w-3 h-0.5 bg-[#FFAE00] transition-all duration-200 ${
                      openItems[index] ? "rotate-90" : ""
                    }`}
                  ></div>
                  <div className="w-3 h-0.5 bg-[#FFAE00] absolute"></div>
                </div>
              </button>

              {openItems[index] && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;



