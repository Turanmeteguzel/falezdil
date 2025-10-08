import React from "react";
import { Helmet } from "react-helmet-async";

const CookiesSettingsSEO = () => {
  return (
    <Helmet>
      <title>Çerez Ayarları - Antalya Falez Dil Kursu</title>
      <meta
        name="description"
        content="Antalya Falez Dil Kursu çerez ayarları. Web sitemizde kullanılan çerezler ve tercihlerinizi nasıl yönetebileceğiniz hakkında bilgiler."
      />
      <meta
        name="keywords"
        content="çerez ayarları, cookie policy, çerez politikası, Antalya dil kursu, falez dil kursu"
      />
      <meta name="robots" content="index, follow" />
      <link
        rel="canonical"
        href="https://antalyafalezdil.com/cookies-settings"
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Çerez Ayarları - Antalya Falez Dil Kursu"
      />
      <meta
        property="og:description"
        content="Antalya Falez Dil Kursu çerez ayarları. Web sitemizde kullanılan çerezler ve tercihlerinizi nasıl yönetebileceğiniz hakkında bilgiler."
      />
      <meta
        property="og:url"
        content="https://antalyafalezdil.com/cookies-settings"
      />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta
        name="twitter:title"
        content="Çerez Ayarları - Antalya Falez Dil Kursu"
      />
      <meta
        name="twitter:description"
        content="Antalya Falez Dil Kursu çerez ayarları. Web sitemizde kullanılan çerezler ve tercihlerinizi nasıl yönetebileceğiniz hakkında bilgiler."
      />
    </Helmet>
  );
};

export default CookiesSettingsSEO;

