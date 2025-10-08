import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logoImage from "../assets/images/navbar/logo.jpg";

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    // Scroll to top before navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Small delay to ensure scroll animation starts
    setTimeout(() => {
      navigate(path);
    }, 100);
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
      className="py-10 sm:py-12 lg:py-16 xl:py-20  my-0 border-2 border-[#FFFFC7] w-[100%] rounded-tl-3xl rounded-tr-3xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-1 lg:px-1 xl:px-1">
        {/* Üst Bölüm - Logo, İsim ve İletişim Bilgileri */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-4 sm:mb-4 lg:mb-6 space-y-4 sm:space-y-4 lg:space-y-0">
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
          className="border-t border-gray-200 mb-4 sm:mb-4 lg:mb-6 pb-6 sm:pb-6 lg:pb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Alt Bölüm - Sol Telif, Orta Sosyal, Sağ Yasal Bağlantılar */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-y-8 sm:gap-y-10 md:gap-y-0 mb-4 sm:mb-4">
          {/* Orta Bölüm - Sosyal Medya Simgeleri (mobilde üstte, soldan) */}
          <motion.div
            className="order-1 md:order-2 flex justify-start md:justify-center space-x-2 sm:space-x-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Facebook */}
            <motion.a
              href="https://www.facebook.com/p/Antalya-Falez-Dil-Yabancı-Dil-Kursu-100076057603873/?_rdr"
              target="_blank"
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#FFAE00] rounded-[4px] flex items-center justify-center transition-colors duration-200"
              aria-label="Facebook"
              variants={socialIconVariants}
            >
              <FaFacebookF className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-black" />
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/antalyafalezdil"
              target="_blank"
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#FFAE00] rounded-[4px] flex items-center justify-center transition-colors duration-200"
              aria-label="Instagram"
              variants={socialIconVariants}
            >
              <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-black" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/company/özel-antalya-falez-dil-kursu"
              target="_blank"
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#FFAE00] rounded-[4px] flex items-center justify-center transition-colors duration-200"
              aria-label="LinkedIn"
              variants={socialIconVariants}
            >
              <FaLinkedinIn className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-black" />
            </motion.a>
          </motion.div>

          {/* Sağ Bölüm - Yasal Bağlantılar */}
          <motion.div
            className="order-2 md:order-3 flex flex-row justify-start md:justify-end space-x-4 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm lg:text-base"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              className="px-2 sm:px-0"
            >
              <button
                onClick={() => handleLinkClick("/privacy-policy")}
                className="text-gray-500 hover:text-gray-700 underline underline-offset-4 transition-colors duration-200 text-center font-light bg-transparent border-none cursor-pointer"
              >
                Privacy Policy
              </button>
            </motion.div>
            <motion.div
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              className="px-2 sm:px-0"
            >
              <button
                onClick={() => handleLinkClick("/terms-of-service")}
                className="text-gray-500 hover:text-gray-700 underline underline-offset-4 transition-colors duration-200 text-center font-light bg-transparent border-none cursor-pointer"
              >
                Terms of Services
              </button>
            </motion.div>
            <motion.div
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              className="px-2 sm:px-0"
            >
              <button
                onClick={() => handleLinkClick("/cookies-settings")}
                className="text-gray-500 hover:text-gray-700 underline underline-offset-4 transition-colors duration-200 text-center font-light bg-transparent border-none cursor-pointer"
              >
                Cookies Settings
              </button>
            </motion.div>
          </motion.div>

          {/* Sol Bölüm - Telif Hakkı (mobilde en altta, soldan) */}
          <motion.div
            className="order-3 md:order-1 text-gray-500 text-xs sm:text-sm lg:text-base text-left font-light"
            variants={itemVariants}
          >
            © {new Date().getFullYear()} Antalya Falez Dil Kursu. Tüm hakları
            saklıdır.
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
