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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <div className="pt-10">
                  <Hero />
                </div>
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
