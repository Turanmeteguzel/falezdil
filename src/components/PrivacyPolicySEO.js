import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicySEO = () => {
  return (
    <Helmet>
      <title>Gizlilik Politikası - Antalya Falez Dil Kursu</title>
      <meta
        name="description"
        content="Antalya Falez Dil Kursu gizlilik politikası. Kişisel verilerinizin korunması ve işlenmesi hakkında detaylı bilgiler."
      />
      <meta
        name="keywords"
        content="gizlilik politikası, kişisel veri koruma, KVKK, Antalya dil kursu, falez dil kursu"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://antalyafalezdil.com/privacy-policy" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Gizlilik Politikası - Antalya Falez Dil Kursu"
      />
      <meta
        property="og:description"
        content="Antalya Falez Dil Kursu gizlilik politikası. Kişisel verilerinizin korunması ve işlenmesi hakkında detaylı bilgiler."
      />
      <meta
        property="og:url"
        content="https://antalyafalezdil.com/privacy-policy"
      />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta
        name="twitter:title"
        content="Gizlilik Politikası - Antalya Falez Dil Kursu"
      />
      <meta
        name="twitter:description"
        content="Antalya Falez Dil Kursu gizlilik politikası. Kişisel verilerinizin korunması ve işlenmesi hakkında detaylı bilgiler."
      />
    </Helmet>
  );
};

export default PrivacyPolicySEO;

