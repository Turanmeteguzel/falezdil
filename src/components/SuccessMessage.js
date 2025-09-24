import React from "react";
import { motion } from "framer-motion";

const SuccessMessage = ({ onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      className="bg-white rounded-[8px] border border-[#CFCFCF] p-6 sm:p-8 text-center"
      style={{ boxShadow: "4px 4px 2px 0px #FFAE0026" }}
    >
      {/* Başarı İkonu */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </motion.div>

      {/* Başlık */}
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-lato"
      >
        🎉 Form Başarıyla Gönderildi!
      </motion.h3>

      {/* Açıklama */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base font-lato"
      >
        Mesajınız başarıyla iletildi. En kısa sürede size dönüş yapacağız. Dil
        öğrenme yolculuğunuza başlamak için sabırsızlanıyoruz!
      </motion.p>

      {/* Özellikler */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
      >
        <div className="flex items-center justify-center space-x-2 text-green-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm font-medium">Hızlı Dönüş</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-green-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm font-medium">Ücretsiz Danışmanlık</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-green-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm font-medium">Kişisel Program</span>
        </div>
      </motion.div>

      {/* İstatistikler */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-gray-50 rounded-lg p-4 mb-6"
      >
        <h4 className="text-lg font-semibold text-gray-900 mb-3 font-lato">
          Neden Falezdil?
        </h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-[#FFAE00]">500+</div>
            <div className="text-sm text-gray-600">Mutlu Öğrenci</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#FFAE00]">95%</div>
            <div className="text-sm text-gray-600">Başarı Oranı</div>
          </div>
        </div>
      </motion.div>

      {/* Yeni Form Butonu */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        onClick={onReset}
        className="w-full sm:w-auto px-6 py-3 bg-[#FFAE00] text-white rounded-[4px] hover:bg-white hover:text-[#FFAE00] hover:border hover:border-[#FFAE00] transition-all duration-300 font-semibold text-sm sm:text-base"
      >
        Yeni Form Gönder
      </motion.button>

      {/* Alt Bilgi */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-xs text-gray-500 mt-4 font-lato"
      >
        Sorularınız için: falezdil@gmail.com | +90 (552) 671 96 07
      </motion.p>
    </motion.div>
  );
};

export default SuccessMessage;
