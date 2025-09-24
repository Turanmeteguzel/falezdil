import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = ({ message = "Email gönderiliyor..." }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white rounded-[8px] border border-[#CFCFCF] p-6 sm:p-8 text-center"
      style={{ boxShadow: "4px 4px 2px 0px #FFAE0026" }}
    >
      {/* Loading İkonu */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-[#FFAE00]/20 border-t-[#FFAE00] rounded-full mx-auto mb-6"
      />

      {/* Loading Mesajı */}
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-semibold text-gray-900 mb-3 font-lato"
      >
        {message}
      </motion.h3>

      {/* Alt Açıklama */}
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 text-sm font-lato"
      >
        Lütfen bekleyin, mesajınız işleniyor...
      </motion.p>

      {/* Progress Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center space-x-2 mt-6"
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            className="w-2 h-2 bg-[#FFAE00] rounded-full"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LoadingSpinner;
