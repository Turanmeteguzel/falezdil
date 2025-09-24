// EmailJS Konfigürasyon Dosyası
// Bu dosyayı EmailJS dashboard'dan aldığın bilgilerle güncelle

export const EMAILJS_CONFIG = {
  // EmailJS Service ID - Dashboard'dan al
  SERVICE_ID: "service_d693jhy",

  // EmailJS Template ID - Dashboard'dan al
  TEMPLATE_ID: "template_ouauq59",

  // EmailJS Public Key - Dashboard'dan al
  PUBLIC_KEY: "_1Q__VXbqcgZ40qkQ",

  // Email template parametreleri
  TEMPLATE_PARAMS: {
    to_name: "Falezdil Ekibi", // Alıcı adı
    from_name: "", // Form'dan gelecek
    from_email: "", // Form'dan gelecek
    phone: "", // Form'dan gelecek
    language: "", // Form'dan gelecek
    level: "", // Form'dan gelecek
    hours: "", // Form'dan gelecek
    message: "", // Form'dan gelecek
    current_date: new Date().toLocaleDateString("tr-TR"), // Otomatik tarih
  },
};

// EmailJS'i başlatmak için kullanılacak fonksiyon
export const initializeEmailJS = () => {
  // EmailJS'i başlat (public key ile)
  if (typeof window !== "undefined") {
    const emailjs = require("@emailjs/browser");
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }
};
