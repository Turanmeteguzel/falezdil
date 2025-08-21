import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import NewSection from "./components/NewSection";
import LanguageProgram from "./components/LanguageProgram";
import ThreeCards from "./components/ThreeCards";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-20">
        <Hero />
      </div>
      <NewSection />
      <LanguageProgram />
      <ThreeCards />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
