import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Bahar Çetin",
      initials: "BÇ",
      rating: 5,
      timeAgo: "27 Hafta önce",
      review:
        "Antalya Falez Dil Kursu'nda 2 aydır eğitim alıyorum ve çok memnunum! Hocalarım Ömer ve Muhsin, dersleri hem keyifli hem de verimli bir şekilde işliyorlar. Bizi her zaman yakından takip ediyorlar dersi işleyip bizi bırakmıyorlar. Her gün okuyabileceğimiz haber siteleri , seviyeye uygun film dizi önerileri , bizlere gönderdikleri podcats önerileri ile derslerimiz olmadığı günlerde İngilizce ile içli dışlı olmamızı sağlıyorlar. Bu durumda benim daha hızlı öğrenmeme kendimi geliştirmeme neden oluyor.Öğrencilere olan ilgileri ve sabırları sayesinde kendimi çok geliştirdiğimi de hissediyorum. Ayrıca bizimle her zaman yakından ilgilenen ve güler yüzüyle destek olan Ceren Hanım'a da çok teşekkür ederim.",
    },
    {
      name: "Ali Osman Acet",
      initials: "AO",
      rating: 5,
      timeAgo: "30 Hafta önce",
      review:
        "Antalya Falez Dil Kursu'nda 2 aydır eğitim alıyorum ve çok memnunum! Hocalarım Ömer ve Muhsin, dersleri hem keyifli hem de verimli bir şekilde işliyorlar. Bizi her zaman yakından takip ediyorlar dersi işleyip bizi bırakmıyorlar. Her gün okuyabileceğimiz haber siteleri , seviyeye uygun film dizi önerileri , bizlere gönderdikleri podcats önerileri ile derslerimiz olmadığı günlerde İngilizce ile içli dışlı olmamızı sağlıyorlar. Bu durumda benim daha hızlı öğrenmeme kendimi geliştirmeme neden oluyor.Öğrencilere olan ilgileri ve sabırları sayesinde kendimi çok geliştirdiğimi de hissediyorum. Ayrıca bizimle her zaman yakından ilgilenen ve güler yüzüyle destek olan Ceren Hanım'a da çok teşekkür ederim.",
    },
    {
      name: "Bahar Çetin",
      initials: "BC",
      rating: 5,
      timeAgo: "35 Hafta önce",
      review:
        "Bana çok fazla fayda sağladı bütün öğretmenlerime teşekkür ederimm",
    },
    {
      name: "Bahar Çetin",
      initials: "BC",
      rating: 5,
      timeAgo: "35 Hafta önce",
      review:
        "Harika bir deneyim yaşadım, öğretmenlerim çok ilgiliydi ve İngilizce seviyem gerçekten çok gelişti.",
    },
    {
      name: "Bahar Çetin",
      initials: "BC",
      rating: 5,
      timeAgo: "35 Hafta önce",
      review:
        "Harika bir deneyim yaşadım, öğretmenlerim çok ilgiliydi ve İngilizce seviyem gerçekten çok gelişti.",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.svg
        key={index}
        className={`w-8 h-8 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </motion.svg>
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="h-screen bg-white py-8 sm:py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <motion.div
          className="text-left mb-4 sm:mb-6 lg:mb-8"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl font-light text-[#0E0E0E] mb-2 sm:mb-3 font-lato leading-none tracking-normal capitalize"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Bizi Tercih Eden,
          </motion.h2>
          <motion.h2
            className="text-4xl font-semibold text-[#0E0E0E] mb-4 sm:mb-6 font-lato leading-none tracking-normal capitalize"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Öğrencilerimizin Gözünden
          </motion.h2>
          <motion.p
            className="text-xl text-[#0E0E0E] max-w-2xl sm:max-w-3xl lg:max-w-4xl font-lato font-light leading-[30px] tracking-normal px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Dil yolculuklarına bizimle başlayan öğrenciler, deneyimlerini samimi
            bir şekilde paylaştı. Sen de karar vermeden önce onların hikâyesine
            göz at
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Google Reviews Summary */}
          <motion.div
            className="bg-[#FEFDF9] rounded-lg shadow-sm border border-[#FFFFC7] p-4 sm:p-6 lg:p-8 text-center"
            variants={itemVariants}
          >
            <motion.div className="mb-4 sm:mb-6">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl font-normal text-[#0E0E0E] mb-3 sm:mb-4 font-lato leading-none tracking-normal text-center">
              Web'deki Yorumlar
            </h3>
            <div className="flex justify-center items-center mb-3 sm:mb-4">
              <span className="text-3xl font-normal text-gray-900 mr-2 sm:mr-3 font-lato leading-[32px] tracking-normal">
                5,0
              </span>
              <div className="flex">{renderStars(5)}</div>
            </div>
            <p className="text-base font-light text-[#0E0E0E] mb-4 sm:mb-6 font-lato leading-none tracking-normal text-center">
              58 yorum
            </p>
            <div className="space-y-2 sm:space-y-3">
              <motion.button
                className="w-full px-1.5 sm:px-2 lg:px-3 py-2 sm:py-3 text-sm sm:text-base text-[#FFAE00]  rounded-lg hover:bg-white transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Tüm Yorumları Görüntüle
              </motion.button>
              <motion.button className="w-full px-1.5 sm:px-2 lg:px-3 py-2 sm:py-3 text-sm sm:text-base bg-[#FFAE00] text-white rounded-lg hover:bg-white hover:text-[#FFAE00] hover:border hover:border-[#FFAE00] transition-all duration-300 font-semibold">
                Yorum Ekleyin
              </motion.button>
            </div>
          </motion.div>

          {/* Student Testimonials */}
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-[#CFCFCF] p-3 sm:p-4 lg:p-5 max-w-sm"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-2 sm:mb-3">
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#8F00FF99] rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white font-semibold text-xs sm:text-sm lg:text-base">
                    {testimonial.initials}
                  </span>
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-left text-xs sm:text-sm lg:text-base">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                    <div className="flex items-center">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-[#0E0E0E] text-xs sm:text-xs lg:text-sm font-bold">
                      {testimonial.timeAgo}
                    </span>
                  </div>
                </div>
              </div>
              <motion.p
                className="text-gray-700 text-xs sm:text-xs lg:text-sm text-start leading-tight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {testimonial.review}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
