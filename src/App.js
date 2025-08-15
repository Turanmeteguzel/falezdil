import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import NewSection from "./components/NewSection";
import LanguageProgram from "./components/LanguageProgram";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
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
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
