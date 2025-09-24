import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/navbar/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    // If we're on a different page (not home), navigate to home
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      // If we're already on home page, scroll to top
      scrollToSection("home");
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      setActiveSection(sectionId);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "blog"];
      const navbarHeight = 80;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop - navbarHeight - 100; // 100px offset for better detection
          const sectionBottom = sectionTop + section.offsetHeight;

          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      className="bg-white fixed w-full top-0 z-50 h-16 sm:h-18 lg:h-20 shadow-lg"
      style={{
        boxShadow: "0px 2px 2px 0px rgba(255, 174, 0, 0.15)",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto h-16 sm:h-18 lg:h-20">
        <div className="flex justify-between items-center h-full px-1.5 sm:px-1.5 lg:px-1.5 xl:px-2">
          {/* Left side - Logo and Menu */}
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
            {/* Logo */}
            <motion.button
              onClick={handleLogoClick}
              className="bg-transparent border-none cursor-pointer p-0"
            >
              <img
                src={logo}
                alt="Antalya Falez Logo"
                className="w-40 h-10 sm:w-44 sm:h-11 lg:w-48 lg:h-12 xl:w-56 xl:h-14 object-contain"
              />
            </motion.button>

            {/* Desktop Menu - Hidden on mobile, visible on lg and above */}
            <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
              <motion.a
                onClick={() => scrollToSection("home")}
                className={`inline-block px-2 sm:px-3 py-2 text-sm lg:text-base font-medium text-[#0E0E0E] transition-colors duration-300 cursor-pointer relative ${
                  activeSection === "home"
                    ? "border-b-2 border-[#FFAE00]"
                    : "border-b-2 border-transparent"
                }`}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                Anasayfa
              </motion.a>
              <motion.a
                onClick={() => scrollToSection("about")}
                className={`inline-block px-2 sm:px-3 py-2 text-sm lg:text-base font-medium text-[#0E0E0E] transition-colors duration-300 cursor-pointer relative ${
                  activeSection === "about"
                    ? "border-b-2 border-[#FFAE00]"
                    : "border-b-2 border-transparent"
                }`}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                Hakkımızda
              </motion.a>
              <motion.a
                onClick={() => scrollToSection("blog")}
                className={`inline-block px-2 sm:px-3 py-2 text-sm lg:text-base font-medium text-[#0E0E0E] transition-colors duration-300 cursor-pointer relative ${
                  activeSection === "blog"
                    ? "border-b-2 border-[#FFAE00]"
                    : "border-b-2 border-transparent"
                }`}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                Blog
              </motion.a>
            </div>
          </div>

          {/* Right side - Mobile menu button or other elements can be added here */}
          <div className="lg:hidden">
            {/* Mobile menu button or other mobile-specific elements */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
