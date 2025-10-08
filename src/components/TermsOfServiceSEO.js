import React from "react";
import { Helmet } from "react-helmet-async";

const TermsOfServiceSEO = () => {
  return (
    <Helmet>
      <title>Kullanım Şartları - Antalya Falez Dil Kursu</title>
      <meta
        name="description"
        content="Antalya Falez Dil Kursu kullanım şartları. Web sitemizi kullanırken uymanız gereken kurallar ve koşullar."
      />
      <meta
        name="keywords"
        content="kullanım şartları, şartlar ve koşullar, Antalya dil kursu, falez dil kursu, web sitesi kullanımı"
      />
      <meta name="robots" content="index, follow" />
      <link
        rel="canonical"
        href="https://antalyafalezdil.com/terms-of-service"
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Kullanım Şartları - Antalya Falez Dil Kursu"
      />
      <meta
        property="og:description"
        content="Antalya Falez Dil Kursu kullanım şartları. Web sitemizi kullanırken uymanız gereken kurallar ve koşullar."
      />
      <meta
        property="og:url"
        content="https://antalyafalezdil.com/terms-of-service"
      />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta
        name="twitter:title"
        content="Kullanım Şartları - Antalya Falez Dil Kursu"
      />
      <meta
        name="twitter:description"
        content="Antalya Falez Dil Kursu kullanım şartları. Web sitemizi kullanırken uymanız gereken kurallar ve koşullar."
      />
    </Helmet>
  );
};

export default TermsOfServiceSEO;

