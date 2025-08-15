import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Bahar Çetin",
      initials: "BC",
      rating: 5,
      timeAgo: "27 Hafta önce",
      review:
        "Öğretmenlerim Ömer ve Muhsin çok ilgili ve verimli bir şekilde ders işliyorlar. Yakın takip ve ek materyaller (haber siteleri, film/dizi önerileri, podcast'ler) ile İngilizce'yi hayatımıza entegre etmeye teşvik ediyorlar. Öğretmenlerin ilgisi ve sabrı sayesinde çok geliştim. Ceren Hanım'a da destekleri için teşekkür ederim. Profesyonel ve samimi eğitim için kesinlikle tavsiye ederim.",
    },
    {
      name: "Ali Osman Acet",
      initials: "AO",
      rating: 5,
      timeAgo: "30 Hafta önce",
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
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Bizi Tercih Eden, Öğrencilerimizin Gözünden
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dil yolculuklarına bizimle başlayan öğrenciler, deneyimlerini samimi
            bir şekilde paylaştı. Sen de karar vermeden önce onların hikâyesine
            göz at
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Google Reviews Summary */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24">
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
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Web'deki Yorumlar
            </h3>
            <div className="flex justify-center items-center mb-2">
              <span className="text-4xl font-bold text-gray-900 mr-2">5,0</span>
              <div className="flex">{renderStars(5)}</div>
            </div>
            <p className="text-gray-600 mb-6">58 yorum</p>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 text-[#FFAE00] border border-[#FFAE00] rounded-lg hover:bg-[#FFAE00] hover:text-white transition-colors duration-200">
                Tüm Yorumları Görüntüle
              </button>
              <button className="w-full px-4 py-2 bg-[#FFAE00] text-white rounded-lg hover:bg-[#FF8C00] transition-colors duration-200">
                Yorum Ekleyin
              </button>
            </div>
          </div>

          {/* Student Testimonials */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold text-lg">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                {testimonial.timeAgo}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;



