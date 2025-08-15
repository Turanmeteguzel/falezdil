import React, { useState } from "react";
import logo from "../assets/images/navbar/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="bg-white fixed w-full top-0 z-50 h-20 shadow-lg"
      style={{
        boxShadow: "0px 2px 2px 0px rgba(255, 174, 0, 0.15)",
      }}
    >
      {/* Desktop Navbar - Fixed width like Figma */}
      <div className="max-w-7xl mx-auto h-20">
        <div className="flex justify-between items-center h-full px-4 sm:px-6 lg:px-8">
          {/* Left side - Logo and Menu */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <img
              src={logo}
              alt="Antalya Falez Logo"
              style={{ width: "248.3779296875px", height: "32px" }}
              className="object-contain"
            />

            {/* Desktop Menu */}
            <div className="flex items-baseline space-x-8">
              <a
                href="#home"
                className="hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-300 relative"
                style={{
                  borderBottom: "1.84px solid #FFAE00",
                  color: "#0E0E0E",
                }}
              >
                Anasayfa
              </a>
              <a
                href="#about"
                className="hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-300"
                style={{ color: "#0E0E0E" }}
              >
                Hakkımızda
              </a>
              <a
                href="#blog"
                className="hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-300"
                style={{ color: "#0E0E0E" }}
              >
                Blog
              </a>
            </div>
          </div>

          {/* Right side - CTA Buttons */}
          <div className="flex items-center space-x-3">
            <button
              className="transition-all duration-300"
              style={{
                backgroundColor: "#FFAE00",
                border: "0.74px solid #FFAE00",
                color: "#0E0E0E",
                width: "65px",
                height: "32px",
                borderRadius: "6px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "600",
                fontSize: "10px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#FFFFFF";
                e.target.style.color = "#FFAE00";
                e.target.style.borderColor = "#FFAE00";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#FFAE00";
                e.target.style.color = "#0E0E0E";
                e.target.style.borderColor = "#FFAE00";
              }}
            >
              Kaydol
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navbar - Responsive */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6">
          {/* Logo only for mobile */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Antalya Falez Logo"
              style={{ width: "186px", height: "24px" }}
              className="object-contain"
            />
          </div>

          {/* Empty div for spacing */}
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
