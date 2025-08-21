import React from "react";
import { motion } from "framer-motion";
import logoImage from "../assets/images/navbar/logo.jpg";

const Footer = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      className="bg-white py-6 sm:py-8 lg:py-10 xl:py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Üst Bölüm - Logo, İsim ve İletişim Bilgileri */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-4 sm:mb-6 lg:mb-8 space-y-4 sm:space-y-6 lg:space-y-0">
          {/* Sol Tarafta Logo ve İsim */}
          <motion.div className="mb-4 lg:mb-0" variants={itemVariants}>
            <div className="flex items-center mb-2 sm:mb-3">
              {/* Logo */}
              <motion.img
                src={logoImage}
                alt="Antalya Falez Logo"
                className="w-48 h-12 sm:w-56 sm:h-14 lg:w-64 lg:h-16 xl:w-80 xl:h-20 object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Sağ Tarafta İletişim Bilgileri */}
          <motion.div
            className="text-left lg:text-right w-full lg:w-auto"
            variants={itemVariants}
          >
            <motion.div
              className="text-gray-700 mb-2 text-xs sm:text-sm lg:text-base"
              variants={itemVariants}
            >
              <p>Gençlik Mahallesi, Tevfik Işık Caddesi, 2. Kural Apartmanı</p>
              <p>No:13A, 07100</p>
              <p>Muratpaşa/Antalya</p>
            </motion.div>
            <motion.div
              className="text-gray-700 font-medium text-xs sm:text-sm lg:text-base"
              variants={itemVariants}
            >
              <p>0552 671 96 07</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Ayırıcı Çizgi */}
        <motion.div
          className="border-t border-gray-200 mb-4 sm:mb-6 lg:mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Alt Bölüm - Telif Hakkı, Sosyal Medya ve Yasal Bağlantılar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
          {/* Sol Bölüm - Telif Hakkı */}
          <motion.div
            className="text-gray-500 text-xs sm:text-sm lg:text-base text-center md:text-left"
            variants={itemVariants}
          >
            © 2025 Antalya Falez Dil Kursu. Tüm hakları saklıdır.
          </motion.div>

          {/* Orta Bölüm - Sosyal Medya Simgeleri */}
          <motion.div
            className="flex space-x-2 sm:space-x-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Facebook */}
            <motion.a
              href="#"
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-orange-500 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              aria-label="Facebook"
              variants={socialIconVariants}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="#"
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-orange-500 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              aria-label="Instagram"
              variants={socialIconVariants}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
              </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="#"
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-orange-500 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              aria-label="LinkedIn"
              variants={socialIconVariants}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Sağ Bölüm - Yasal Bağlantılar */}
          <motion.div
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4 xl:space-x-6 text-xs sm:text-sm lg:text-base"
            variants={itemVariants}
          >
            <motion.a
              href="#"
              className="text-gray-500 hover:text-gray-700 underline transition-colors duration-200 text-center sm:text-left"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-500 hover:text-gray-700 underline transition-colors duration-200 text-center sm:text-left"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              Terms of Services
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-500 hover:text-gray-700 underline transition-colors duration-200 text-center sm:text-left"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              Cookies Settings
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
