import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import NewSection from "./components/NewSection";
import LanguageProgram from "./components/LanguageProgram";
import ThreeCards from "./components/ThreeCards";
import VideoSection from "./components/VideoSection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import CookiesSettings from "./components/CookiesSettings";
import ScrollToTop from "./components/ScrollToTop";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "./assets/images/navbar/falezz.jpg";

function App() {
  return (
    <Router>
      <FloatingWhatsApp
        accountName="Antalya Falez Dil Kursu"
        phoneNumber="+905526719607"
        statusMessage="Çevrimiçi"
        avatar={logo}
        chatMessage="Merhaba, İyi Günler.             Size Nasıl Yardımcı Olabiliriz?"
        notification={true}
        notificationDelay={15}
        notificationLoop={3}
        notificationSound={true}
        buttonClassName="whatsapp-btn"
      />
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <NewSection />
                <LanguageProgram />
                <ThreeCards />
                <VideoSection />
                <Testimonials />
                <FAQ />
                <ContactForm />
                <Footer />
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookies-settings" element={<CookiesSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
