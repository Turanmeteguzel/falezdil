import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Notification = ({
  isVisible,
  type,
  message,
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    if (isVisible) {
      // Bildirim sesi çal
      playNotificationSound(type);

      // Otomatik kapanma
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose, type]);

  const playNotificationSound = (notificationType) => {
    try {
      // Web Audio API ile bildirim sesi oluştur
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();

      if (notificationType === "success") {
        // Başarılı ses - yüksek ton
        playTone(audioContext, [523.25, 659.25, 783.99], [0.1, 0.1, 0.2]);
      } else {
        // Hata sesi - düşük ton
        playTone(audioContext, [200, 150], [0.2, 0.3]);
      }
    } catch (error) {
      console.log("Ses çalınamadı:", error);
    }
  };

  const playTone = (audioContext, frequencies, durations) => {
    frequencies.forEach((freq, index) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
      oscillator.type = "sine";

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + durations[index]
      );

      oscillator.start(audioContext.currentTime + index * 0.1);
      oscillator.stop(
        audioContext.currentTime + index * 0.1 + durations[index]
      );
    });
  };

  const getNotificationStyles = () => {
    switch (type) {
      case "success":
        return {
          bgColor: "bg-green-500",
          borderColor: "border-green-400",
          icon: (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ),
        };
      case "error":
        return {
          bgColor: "bg-red-500",
          borderColor: "border-red-400",
          icon: (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ),
        };
      default:
        return {
          bgColor: "bg-blue-500",
          borderColor: "border-blue-400",
          icon: (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
        };
    }
  };

  const styles = getNotificationStyles();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className={`fixed top-4 right-4 z-50 max-w-sm w-full ${styles.bgColor} ${styles.borderColor} border-l-4 rounded-lg shadow-lg`}
        >
          <div className="p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-white">{styles.icon}</div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-white">
                  {type === "success"
                    ? "Başarılı!"
                    : type === "error"
                    ? "Hata!"
                    : "Bilgi"}
                </p>
                <p className="text-sm text-white/90 mt-1">{message}</p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <button
                  onClick={onClose}
                  className="text-white hover:text-white/80 focus:outline-none"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
