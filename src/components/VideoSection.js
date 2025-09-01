import React from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
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

  const videoVariants = {
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
    <section className="py-6 sm:py-8 lg:py-12 xl:py-16 bg-[#FEFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-left mb-6 sm:mb-8 lg:mb-12 xl:mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 mb-2 sm:mb-3 lg:mb-4 font-lato leading-tight tracking-normal capitalize"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Bir Dersten Fazlası:
            <br className="hidden sm:block" />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0E0E0E] font-lato leading-tight tracking-normal capitalize">
              Öğrenmenin Yeni Hali
            </span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#0E0E0E] max-w-2xl sm:max-w-3xl lg:max-w-4xl font-lato font-light leading-relaxed tracking-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Neden klasik kurslardan farklıyız? Öğrencilerimizle nasıl bir
            yolculuk yaşıyoruz? Videomuzu izleyin.
          </motion.p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="flex justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="relative w-full max-w-4xl"
            variants={videoVariants}
          >
            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Antalya Falez Dil Kursu Tanıtım Videosu"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
