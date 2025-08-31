import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
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
      <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-2">
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
              />
            </div>
          </motion.div>

          {/* Sağ Tarafta İletişim Bilgileri */}
          <motion.div
            className="text-left lg:text-right w-full lg:w-auto"
            variants={itemVariants}
          >
            <motion.div
              className="text-gray-700 mb-2 text-left text-xs sm:text-sm lg:text-base font-light"
              variants={itemVariants}
            >
              <p>Gençlik Mahallesi, Tevfik Işık Caddesi, 2. Kural Apartmanı</p>
              <p>No:13A, 07100</p>
              <p>Muratpaşa/Antalya</p>
            </motion.div>
            <motion.div
              className="text-gray-700 text-left text-xs sm:text-sm lg:text-base font-light"
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
            className="text-gray-500 text-xs sm:text-sm lg:text-base text-center md:text-left font-light"
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
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#FFAE00] hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              aria-label="Facebook"
              variants={socialIconVariants}
            >
              <FaFacebookF className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-black" />
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="#"
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#FFAE00]  rounded-lg flex items-center justify-center transition-colors duration-200"
              aria-label="Instagram"
              variants={socialIconVariants}
            >
              <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-black" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="#"
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#FFAE00]  rounded-lg flex items-center justify-center transition-colors duration-200"
              aria-label="LinkedIn"
              variants={socialIconVariants}
            >
              <FaLinkedinIn className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-black" />
            </motion.a>
          </motion.div>

          {/* Sağ Bölüm - Yasal Bağlantılar */}
          <motion.div
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4 xl:space-x-6 text-xs sm:text-sm lg:text-base"
            variants={itemVariants}
          >
            <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
              <Link
                to="/privacy-policy"
                className="text-gray-500 hover:text-gray-700 underline underline-offset-4 transition-colors duration-200 text-center  sm:text-left font-light"
              >
                Privacy Policy
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
              <Link
                to="/terms-of-service"
                className="text-gray-500 hover:text-gray-700 underline underline-offset-4 transition-colors duration-200 text-center sm:text-left font-light"
              >
                Terms of Services
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
              <Link
                to="/cookies-settings"
                className="text-gray-500 hover:text-gray-700 underline underline-offset-4 transition-colors duration-200 text-center sm:text-left font-light"
              >
                Cookies Settings
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
