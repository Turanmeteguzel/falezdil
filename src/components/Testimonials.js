import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Bahar Çetin",
      initials: "BÇ",
      rating: 5,
      timeAgo: "2 hafta önce",
      review:
        "Antalya Falez Dil Kursu’nda iki aydır devam ediyorum ve her hafta somut ilerleme görüyorum. Hocalar ders planını baştan net paylaşıyor, ders dışında podcast ve okuma önerileriyle sürekli teması canlı tutuyor. Haftalık konuşma kulübü sayesinde çekinmeden konuşmaya başladım. Sınav dönemimde programımı da esnettiler; düzenli geri bildirimlerle eksiklerimi kapattım. Düzey belirleme sonuçlarına göre kişisel bir çalışma planı çıkardık ve her hafta küçük hedefler koyduk. Özellikle yazma ödevlerimde cümle yapısı ve bağlaç kullanımı üzerine detaylı notlar alıyorum; bir sonraki ödevde aynı hataları tekrarlamıyorum.",
    },
    {
      name: "Ali Osman Acet",
      initials: "AO",
      rating: 5,
      timeAgo: "1 ay önce",
      review:
        "B1 seviyesinden başladım ve kısa sürede B2’ye yaklaştım. Her derste konuşma pratiğine mutlaka zaman ayrılıyor ve eğitmenler cümlelerimi tek tek düzeltiyor. Telaffuz çalışmalarının ayrı bir modül olması çok işime yaradı. Ders notları ve ödev takibi uygulama üzerinden geliyor; kaçırdığım hiçbir şey olmadı. Haftada bir eşleştiğimiz partnerle bire bir konuşma çalışıyoruz ve öğretmenimizden yazılı-şekilli geri bildirim alıyoruz. Günlük WhatsApp mini görevleri (kelime, kalıp ifade, kısa ses kaydı) öğrenmeyi gündelik hayatın içine taşıyor.",
    },
    {
      name: "Ece Yıldırım",
      initials: "EY",
      rating: 5,
      timeAgo: "3 hafta önce",
      review:
        "Sınıf mevcudu ideal olduğu için herkes aktif katılıyor. Materyaller güncel makaleler ve kısa videolarla destekleniyor, bu da günlük dile uyum sağlamayı kolaylaştırıyor. Her hafta küçük bir quiz var ve sonuçlarımıza göre kişisel çalışma tavsiyesi veriliyor. Motivasyonu hiç düşürmeden ilerledik. Yazma ödevleri turnitin benzeri araçlarla kontrol ediliyor, öğretmenim alternatif cümle kalıpları ve bağlaç önerileri veriyor. Ayrıca ayda bir ofis saatleri var; bire bir sorularımı rahatça sorabiliyorum.",
    },
    {
      name: "Mehmet Kara",
      initials: "MK",
      rating: 4,
      timeAgo: "2 ay önce",
      review:
        "Gramer temelimi burada sağlamlaştırdım. Konu anlatımları net; her ünite sonunda konuşma ve yazma pratiği yapıyoruz. Bazı haftalar yoğunluk oldu ama telafi dersleriyle açık kalmadı. Merkezde kütüphane ve sakin bir çalışma alanı var, dersten önce gelip tekrar yapabiliyorum. Özellikle zorlandığım zaman kipleri için ek çalışma dosyaları sağladılar; örnek cümleler gerçek hayattan seçildiği için kalıcı oldu. Hafta sonu atölyeleri ücretsiz ve çok verimli.",
    },
    {
      name: "Zeynep Demir",
      initials: "ZD",
      rating: 5,
      timeAgo: "5 gün önce",
      review:
        "IELTS odaklı programa katıldım. Her iki haftada bir tam deneme yapılıyor ve yazma kısımları ayrıntılı notlarla geri dönüyorlar. Hangi bölümde puan kaybettiğimi net gördüm. Zaman yönetimi ve strateji eğitimleri sayesinde denemelerdeki dalgalanmalarım stabil hale geldi. Band descriptor’lar tek tek açıklanıyor; writing task 2’de argüman geliştirme ve örnekleme konusunda somut taslaklar aldım. Reading için süre tutarak çözme ve yanlış türünü sınıflandırma yöntemleri çok işime yaradı.",
    },
    {
      name: "Caner Aydın",
      initials: "CA",
      rating: 5,
      timeAgo: "4 hafta önce",
      review:
        "Konuşma kulüpleri ve haftalık temalar çok faydalı. Her buluşmada gerçek hayat senaryoları üzerinden konuşuyoruz; restoran, iş görüşmesi, seyahat gibi. Ortam samimi, çekinmeden hata yapabiliyorsunuz. Sosyal etkinliklerle tanıştığım insanlarla da pratik yapma şansı buldum. Öğretmenler toplantı sonunda kişiye özel geri bildirim bırakıyor; zayıf kaldığım konularda kısa alıştırmalar öneriyor. Evde ödev olarak 1 dakikalık ses kaydı gönderiyoruz, dönüşleri çok yapıcı.",
    },
    {
      name: "Elif Şahin",
      initials: "EŞ",
      rating: 5,
      timeAgo: "2 hafta önce",
      review:
        "Hibrit (online + yüz yüze) modeli seçtim. Canlı ders kayıtları sisteme yükleniyor, kaçırdığım gün ertesi sabah telafi ettim. Öğretmenim haftalık çalışma planını mesajla gönderiyor ve ilerlememi takip ediyor. Evden katıldığım günlerde bile sınıfın bir parçası gibi hissettim. Teknik konularda destek ekibi anında yardımcı oluyor; mikrofon-ses ayarlarında bile adım adım yönlendirdiler. Topluluk içindeki paylaşımlar da motive edici.",
    },
    {
      name: "Murat Yılmaz",
      initials: "MY",
      rating: 4,
      timeAgo: "3 ay önce",
      review:
        "Sıfırdan başladım, özellikle konuşma korkumu burada yendim. Derste küçük rol yapma aktiviteleri ve günlük diyaloglar var, ilk haftadan markette ve kafede İngilizce denemeye başladım. Telaffuz için birebir düzeltmeler özgüvenimi çok artırdı. Öğrendiğim kelimeleri aralıklı tekrar sistemiyle pekiştiriyoruz; öğretmen her derste kısa bir hatırlatma yapıyor. Basit ama etkili yöntemlerle hızlı ilerledim.",
    },
    {
      name: "Ayşe Korkmaz",
      initials: "AK",
      rating: 5,
      timeAgo: "1 hafta önce",
      review:
        "Sınıfta akıllı tahta ve interaktif uygulamalar yoğun kullanılıyor. Küçük oyunlaştırmalar ve haftalık mikro hedefler öğrenmeyi eğlenceli hale getiriyor. Her pazar kısa bir ilerleme raporu geliyor; nerede zorlandığımı net görüyorum ve bir sonraki hafta ona göre çalışıyorum. LMS üzerinden hedef takibi, ısı haritası ve mini rozet sistemi var; ilerledikçe motive oluyorsunuz. Grup çalışmaları dengeli, herkes söz alabiliyor.",
    },
    {
      name: "Deniz Arslan",
      initials: "DA",
      rating: 5,
      timeAgo: "6 hafta önce",
      review:
        "Kayıt sürecinde düzey belirleme sınavı yapıldı ve takvimim işe göre planlandı. Ücret ve materyal konuları baştan şeffafça anlatıldı, sonradan sürpriz yaşamadım. Ders saatleri konusunda esnek davranmaları benim için büyük artı oldu. Online randevu ekranından derslerimi kendim yönetebiliyorum; hatırlatma e-postaları ve SMS’ler aksaklıkları önlüyor. İş-özel hayat dengesini bozmadan ilerledim.",
    },
    {
      name: "Hakan Özcan",
      initials: "HÖ",
      rating: 5,
      timeAgo: "2 gün önce",
      review:
        "IELTS hazırlıkta yazma için birebir düzeltmeler aldım; her essay’i bantlara göre puanlayıp alternatif cümleler önerdiler. Speaking mock’larında süre baskısı ve takip sorularına alıştım. Resmi sınavda hedeflediğim 7.0’ı geçtim. Listening’de not alma ve tahmin stratejileri öğrendim, writing’de bağlantı ve tutarlılık metriklerine özel çalıştık. Son haftadaki tam prova, sınav gününü bire bir simüle ettiği için çok rahatlattı.",
    },
    {
      name: "Selin Aksoy",
      initials: "SA",
      rating: 5,
      timeAgo: "1 ay önce",
      review:
        "Yoğun iş tempoma rağmen ders programı tamamen bana göre ayarlandı. Kaçırdığım dersler için aynı hafta içinde telafi opsiyonu sundular. Ofis ekibinin iletişimi çok hızlı; sorularım saatler içinde çözüldü. Genel olarak çok profesyonel ve sıcak bir ekip. Faturalama ve evrak süreçleri şeffaf, kurumsal şirketimle iletişimi onlar yürüttü. Merkezde kahve alanı var; ders öncesi kısa molalar bile iyi geliyor.",
    },
  ];

  const renderStars = (rating, size = "md") => {
    const sizeClass =
      size === "sm" ? "w-4 h-4" : size === "lg" ? "w-8 h-8" : "w-6 h-6";
    return Array.from({ length: 5 }, (_, index) => (
      <motion.svg
        key={index}
        className={`${sizeClass} ${
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

  // NewSection.js ile aynı scroll deneyimi için referanslar ve handler'lar
  const scrollContainerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const autoScrollIntervalRef = useRef(null);

  const getStepSize = () => {
    const container = scrollContainerRef.current;
    if (!container || !container.firstElementChild) return 300;
    const first = container.children[0];
    const second = container.children[1];
    if (first && second) {
      const r1 = first.getBoundingClientRect();
      const r2 = second.getBoundingClientRect();
      const delta = Math.abs(r2.left - r1.left);
      return delta > 0 ? delta : r1.width;
    }
    return first.getBoundingClientRect().width;
  };

  useEffect(() => {
    // NewSection tarzı: 5 sn'de bir sağa kaydır, sona gelince dur
    autoScrollIntervalRef.current = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
      const step = getStepSize();
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const next = Math.min(container.scrollLeft + step, maxScrollLeft);
      container.scrollTo({ left: next, behavior: "smooth" });
      if (next >= maxScrollLeft) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    }, 5000);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };
  }, []);

  const handlePointerDown = (e) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    scrollLeftStartRef.current = container.scrollLeft;
    container.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    const container = scrollContainerRef.current;
    if (!container || !isDraggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    container.scrollLeft = scrollLeftStartRef.current - dx;
  };

  const endDrag = (e) => {
    isDraggingRef.current = false;
    const container = scrollContainerRef.current;
    if (container && e && e.pointerId) {
      container.releasePointerCapture?.(e.pointerId);
    }
  };

  const handleWheel = (e) => {
    // Sadece yorumlar satırı hover iken yatay kaydır, sayfayı engelle
    const container = scrollContainerRef.current;
    if (!container) return;
    e.preventDefault();
    container.scrollLeft += e.deltaY !== 0 ? e.deltaY : e.deltaX;
  };

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16 xl:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-left mb-4 sm:mb-6 lg:mb-8"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0E0E0E] mb-2 sm:mb-3 font-lato leading-tight tracking-normal capitalize"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Bizi Tercih Eden,
          </motion.h2>
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0E0E0E] mb-4 sm:mb-6 lg:mb-8 font-lato leading-tight tracking-normal capitalize"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Öğrencilerimizin Gözünden
          </motion.h2>
          <motion.p
            className="text-md sm:text-sm md:text-base lg:text-lg mb-6 xl:text-xl text-[#0E0E0E] leading-relaxed font-light font-lato text-left"
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
          className="grid grid-cols-1 md:grid-cols-[auto,1fr] md:items-stretch gap-1 sm:gap-2 lg:gap-3 xl:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Google Reviews Summary */}
          <motion.div
            className="bg-[#FEFDF9] rounded-lg  shadow-sm border border-[#FFFFC7] p-8 sm:p-4 lg:p-6 xl:p-8 w-full md:w-[250px] md:h-full md:self-stretch mx-auto md:mx-0 overflow-hidden justify-center flex flex-col items-center md:items-center  md:justify-between gap-3 md:gap-0 md:sticky md:top-24"
            variants={itemVariants}
          >
            <div className="w-full flex flex-col items-center text-center gap-3 md:justify-between md:h-full">
              <div className="mb-3 flex justify-center">
                <img
                  src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
                  alt="Google"
                  className="h-6 sm:h-7 lg:h-9 xl:h-10 w-auto mx-auto"
                  loading="lazy"
                />
                <motion.a
                  href="https://www.google.com/search?sca_esv=c981fe50ade8bcc1&sxsrf=AE3TifOkAEv9ajsSD8evxcqV9-bGezioIg:1757722051598&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5LlqKmxcyPrwwcWR6q4HkdC4WX0I5K4ukqFpwUm8VTH-BUJDD7IUXNc0zVqg9HOGABBFIJJHffQ7LMX_qDdRYCmqXQrqJ08T1P4lQObWeB2-ZnnlYj1HPW_9eDbK8ZAxvwZo-s%3D&q=Antalya+Falez+Dil+Yabanc%C4%B1+Dil+Kursu+Yorumlar&sa=X&ved=2ahUKEwiRkf_zuNSPAxXQQ_EDHRgFBEcQ0bkNegQIOxAE&biw=1536&bih=776&dpr=1.25"
                  target="_blank"
                  className="hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Tüm Yorumları Görüntüle
                </motion.a>
              </div>
              <div className="flex flex-col items-center md:items-center">
                <h3 className="text-base sm:text-lg font-normal text-[#0E0E0E] mb-1 sm:mb-2 font-lato leading-tight tracking-normal md:text-center">
                  Web'deki Yorumlar
                </h3>
                <div className="flex items-center mb-1 sm:mb-2 md:justify-center">
                  <span className="text-lg sm:text-3xl font-normal text-gray-900 mr-1 sm:mr-1 font-lato leading-tight tracking-normal">
                    5,0
                  </span>
                  <div className="flex">{renderStars(5, "lg")}</div>
                </div>
                <p className="text-[10px] sm:text-lg font-light text-[#0E0E0E] mb-2 sm:mb-3 font-lato leading-tight tracking-normal md:text-center">
                  58 yorum
                </p>
                {/* Masaüstü aksiyonlar altta; bu linki gizli tutuyoruz */}
                <motion.a
                  href="https://www.google.com/search?sca_esv=c981fe50ade8bcc1&sxsrf=AE3TifOkAEv9ajsSD8evxcqV9-bGezioIg:1757722051598&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5LlqKmxcyPrwwcWR6q4HkdC4WX0I5K4ukqFpwUm8VTH-BUJDD7IUXNc0zVqg9HOGABBFIJJHffQ7LMX_qDdRYCmqXQrqJ08T1P4lQObWeB2-ZnnlYj1HPW_9eDbK8ZAxvwZo-s%3D&q=Antalya+Falez+Dil+Yabanc%C4%B1+Dil+Kursu+Yorumlar&sa=X&ved=2ahUKEwiRkf_zuNSPAxXQQ_EDHRgFBEcQ0bkNegQIOxAE&biw=1536&bih=776&dpr=1.25"
                  target="_blank"
                  className="hidden"
                >
                  Tüm Yorumları Görüntüle
                </motion.a>
                <motion.a
                  href="https://www.google.com/search?sca_esv=c981fe50ade8bcc1&sxsrf=AE3TifOkAEv9ajsSD8evxcqV9-bGezioIg:1757722051598&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5LlqKmxcyPrwwcWR6q4HkdC4WX0I5K4ukqFpwUm8VTH-BUJDD7IUXNc0zVqg9HOGABBFIJJHffQ7LMX_qDdRYCmqXQrqJ08T1P4lQObWeB2-ZnnlYj1HPW_9eDbK8ZAxvwZo-s%3D&q=Antalya+Falez+Dil+Yabanc%C4%B1+Dil+Kursu+Yorumlar&sa=X&ved=2ahUKEwiRkf_zuNSPAxXQQ_EDHRgFBEcQ0bkNegQIOxAE&biw=1536&bih=776&dpr=1.25"
                  target="_blank"
                  className="hidden"
                >
                  Yorum Ekleyin
                </motion.a>
              </div>
              {/* Mobile footer: actions at very bottom */}
              <div className="w-full flex flex-col items-center gap-2 md:hidden">
                <motion.a
                  href="https://www.google.com/search?sca_esv=c981fe50ade8bcc1&sxsrf=AE3TifOkAEv9ajsSD8evxcqV9-bGezioIg:1757722051598&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5LlqKmxcyPrwwcWR6q4HkdC4WX0I5K4ukqFpwUm8VTH-BUJDD7IUXNc0zVqg9HOGABBFIJJHffQ7LMX_qDdRYCmqXQrqJ08T1P4lQObWeB2-ZnnlYj1HPW_9eDbK8ZAxvwZo-s%3D&q=Antalya+Falez+Dil+Yabanc%C4%B1+Dil+Kursu+Yorumlar&sa=X&ved=2ahUKEwiRkf_zuNSPAxXQQ_EDHRgFBEcQ0bkNegQIOxAE&biw=1536&bih=776&dpr=1.25"
                  target="_blank"
                  className="text-[10px] sm:text-xs text-[#FFAE00] font-normal hover:underline whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Tüm Yorumları Görüntüle
                </motion.a>
                <motion.a
                  href="https://www.google.com/search?sca_esv=c981fe50ade8bcc1&sxsrf=AE3TifOkAEv9ajsSD8evxcqV9-bGezioIg:1757722051598&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5LlqKmxcyPrwwcWR6q4HkdC4WX0I5K4ukqFpwUm8VTH-BUJDD7IUXNc0zVqg9HOGABBFIJJHffQ7LMX_qDdRYCmqXQrqJ08T1P4lQObWeB2-ZnnlYj1HPW_9eDbK8ZAxvwZo-s%3D&q=Antalya+Falez+Dil+Yabanc%C4%B1+Dil+Kursu+Yorumlar&sa=X&ved=2ahUKEwiRkf_zuNSPAxXQQ_EDHRgFBEcQ0bkNegQIOxAE&biw=1536&bih=776&dpr=1.25"
                  target="_blank"
                  className="w-full py-3 text-[10px] sm:text-xs bg-[#FFAE00] text-white rounded-sm hover:bg-white hover:text-[#FFAE00] border border-transparent hover:border-[#FFAE00] duration-300 font-normal whitespace-nowrap text-center"
                >
                  Yorum Ekleyin
                </motion.a>
              </div>
              {/* Masaüstü: aksiyonlar en altta */}
              <div className="hidden md:flex w-full flex-col items-center gap-2">
                <motion.a
                  href="https://www.google.com/search?sca_esv=c981fe50ade8bcc1&sxsrf=AE3TifOkAEv9ajsSD8evxcqV9-bGezioIg:1757722051598&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5LlqKmxcyPrwwcWR6q4HkdC4WX0I5K4ukqFpwUm8VTH-BUJDD7IUXNc0zVqg9HOGABBFIJJHffQ7LMX_qDdRYCmqXQrqJ08T1P4lQObWeB2-ZnnlYj1HPW_9eDbK8ZAxvwZo-s%3D&q=Antalya+Falez+Dil+Yabanc%C4%B1+Dil+Kursu+Yorumlar&sa=X&ved=2ahUKEwiRkf_zuNSPAxXQQ_EDHRgFBEcQ0bkNegQIOxAE&biw=1536&bih=776&dpr=1.25"
                  target="_blank"
                  className="text-[10px] sm:text-sm text-[#FFAE00] font-normal hover:underline whitespace-nowrap pb-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Tüm Yorumları Görüntüle
                </motion.a>
                <motion.a
                  href="https://www.google.com/search?sca_esv=c981fe50ade8bcc1&sxsrf=AE3TifOkAEv9ajsSD8evxcqV9-bGezioIg:1757722051598&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5LlqKmxcyPrwwcWR6q4HkdC4WX0I5K4ukqFpwUm8VTH-BUJDD7IUXNc0zVqg9HOGABBFIJJHffQ7LMX_qDdRYCmqXQrqJ08T1P4lQObWeB2-ZnnlYj1HPW_9eDbK8ZAxvwZo-s%3D&q=Antalya+Falez+Dil+Yabanc%C4%B1+Dil+Kursu+Yorumlar&sa=X&ved=2ahUKEwiRkf_zuNSPAxXQQ_EDHRgFBEcQ0bkNegQIOxAE&biw=1536&bih=776&dpr=1.25"
                  target="_blank"
                  className="w-full px-4 py-3 text-[13px] sm:text-sm bg-[#FFAE00] text-white rounded-sm hover:bg-white hover:text-[#FFAE00] border border-transparent hover:border-[#FFAE00] duration-300 font-normal whitespace-nowrap text-center"
                >
                  Yorum Ekleyin
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Student Testimonials - Yatay scroll alanı (NewSection benzeri) */}
          <div className="w-full overflow-hidden">
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="w-full flex flex-row space-x-2 sm:space-x-3 lg:space-x-4 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-4 cursor-grab active:cursor-grabbing select-none pl-0 pr-2 sm:pr-3 lg:pr-4 scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={endDrag}
                onPointerLeave={endDrag}
                onWheel={handleWheel}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-sm border border-[#CFCFCF] p-4 sm:p-5 flex-shrink-0 w-[98%] sm:w-[70%] md:w-[360px] h-[100%]"
                    style={{
                      borderRadius: "12px",
                    }}
                    variants={itemVariants}
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
                        <h4 className="font-semibold text-gray-900 mb-0 sm:mb-0.5 text-left text-xs sm:text-sm lg:text-base">
                          {testimonial.name}
                        </h4>
                        <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
                          <div className="flex items-center">
                            {renderStars(testimonial.rating, "sm")}
                          </div>
                          <span className="text-[#0E0E0E]text-xs sm:text-xs lg:text-sm font-normal">
                            {testimonial.timeAgo}
                          </span>
                        </div>
                      </div>
                    </div>
                    <motion.p
                      className="text-[#0E0E0E] text-sm font-light text-start leading-snug"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      {testimonial.review}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
