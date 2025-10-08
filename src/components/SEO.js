import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Antalya Falez Dil Kursu - İngilizce ve Almanca Eğitimi | Konuşma Odaklı Dil Öğrenimi",
  description = "Antalya'nın en kaliteli dil kursu! İngilizce ve Almanca konuşma odaklı eğitim. Butik sınıflar, profesyonel eğitmenler, kişiselleştirilmiş programlar. Ücretsiz deneme dersi için hemen başvur!",
  keywords = "antalya dil kursu, ingilizce kursu antalya, almanca kursu antalya, konuşma odaklı ingilizce, butik dil kursu, profesyonel ingilizce eğitimi, antalya falez dil kursu, yabancı dil kursu antalya",
  canonical = "https://antalyafalezdil.com",
  ogImage = "https://antalyafalezdil.com/logo.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  schemaData = null,
}) => {
  const defaultSchemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Antalya Falez Dil Kursu",
    alternateName: "Falez Dil Kursu",
    description:
      "Antalya'da konuşma odaklı İngilizce ve Almanca eğitimi veren butik dil kursu",
    url: "https://antalyafalezdil.com",
    logo: "https://antalyafalezdil.com/logo.jpg",
    image: "https://antalyafalezdil.com/logo.jpg",
    telephone: "+905526719607",
    email: "info@antalyafalezdil.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Gençlik Mahallesi, Tevfik Işık Caddesi, 2. Kural Apartmanı No:13A",
      addressLocality: "Muratpaşa",
      addressRegion: "Antalya",
      postalCode: "07100",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.8969",
      longitude: "30.7133",
    },
    openingHours: "Mo-Sa 09:00-21:00",
    currenciesAccepted: "TRY",
    paymentAccepted: "Cash, Credit Card",
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Antalya",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dil Eğitim Programları",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "İngilizce Konuşma Kursu",
            description: "Konuşma odaklı İngilizce eğitimi",
            provider: {
              "@type": "Organization",
              name: "Antalya Falez Dil Kursu",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Almanca Konuşma Kursu",
            description: "Konuşma odaklı Almanca eğitimi",
            provider: {
              "@type": "Organization",
              name: "Antalya Falez Dil Kursu",
            },
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
    sameAs: [
      "https://www.facebook.com/p/Antalya-Falez-Dil-Yabancı-Dil-Kursu-100076057603873",
      "https://www.instagram.com/antalyafalezdil",
      "https://www.linkedin.com/company/özel-antalya-falez-dil-kursu",
    ],
  };

  return (
    <Helmet>
      {/* Temel Meta Taglar */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Antalya Falez Dil Kursu" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <link rel="canonical" href={canonical} />

      {/* Dil ve Bölge */}
      <meta httpEquiv="content-language" content="tr" />
      <meta name="language" content="Turkish" />
      <meta name="geo.region" content="TR-07" />
      <meta name="geo.placename" content="Antalya" />
      <meta name="geo.position" content="36.8969;30.7133" />
      <meta name="ICBM" content="36.8969, 30.7133" />

      {/* Mobile ve Responsive */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />
      <meta name="theme-color" content="#FFAE00" />
      <meta name="msapplication-TileColor" content="#FFAE00" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Antalya Falez Dil Kursu" />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Antalya Falez Dil Kursu - İngilizce ve Almanca Eğitimi"
      />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta
        name="twitter:image:alt"
        content="Antalya Falez Dil Kursu - İngilizce ve Almanca Eğitimi"
      />
      <meta name="twitter:site" content="@antalyafalezdil" />
      <meta name="twitter:creator" content="@antalyafalezdil" />

      {/* Ek SEO Meta Taglar */}
      <meta name="classification" content="Education" />
      <meta name="category" content="Language School" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />

      {/* Yerel İşletme SEO */}
      <meta
        name="business:contact_data:street_address"
        content="Gençlik Mahallesi, Tevfik Işık Caddesi, 2. Kural Apartmanı No:13A"
      />
      <meta name="business:contact_data:locality" content="Muratpaşa" />
      <meta name="business:contact_data:region" content="Antalya" />
      <meta name="business:contact_data:postal_code" content="07100" />
      <meta name="business:contact_data:country_name" content="Turkey" />
      <meta name="business:contact_data:phone_number" content="+905526719607" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData || defaultSchemaData)}
      </script>

      {/* Favicon ve Apple Touch Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo192.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.facebook.com" />
      <link rel="dns-prefetch" href="//www.instagram.com" />
      <link rel="dns-prefetch" href="//www.linkedin.com" />
    </Helmet>
  );
};

export default SEO;

