"use client"

import React, { useState, useEffect } from 'react';
import Contact from './contact';
import Members from './members';
import { LanguageProvider, useLanguage, LanguageToggle } from './languageContext';

// Wrap the main content with language context
function HomeContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Add scroll event listener to detect when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when a navigation link is clicked
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
      <div className="relative">
        {/* Flower Background - Fixed position, low opacity for subtlety */}
        <div
            className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 opacity-10"
            style={{
              backgroundImage: 'url("/edelweiss.jpg")',
            }}
            aria-hidden="true"
        ></div>

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css"
        />
        {/* Fixed navigation bar that appears when scrolling */}
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
          <div className="container mx-auto px-4 relative">
            {/* Flex container with three sections */}
            <div className="flex justify-between items-center">
              {/* Left section: Logo/Title */}
              <div className="flex-shrink-0">
                <a href="#home" className="text-xl font-bold">
                  {t("home.title")}
                </a>
              </div>

              {/* Center section: Desktop Navigation - absolutely positioned */}
              <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                <div className="flex items-center justify-center gap-12">
                  <a href="#quartett" className="flex items-center flex-col text-lg font-bold hover:text-gray-600">
                    <span>{t("nav.quartett")}</span>
                  </a>
                  <a href="#members" className="flex items-center flex-col text-lg font-bold hover:text-gray-600">
                    <span>{t("nav.members")}</span>
                  </a>
                  <a href="#contact" className="flex items-center flex-col text-lg font-bold hover:text-gray-600">
                    <span>{t("nav.contact")}</span>
                  </a>
                </div>
              </div>

              {/* Right section: Language toggle and Mobile menu button */}
              <div className="flex items-center gap-4">
                {/* Enlarged Language Toggle */}
                <div className="scale-125">
                  <LanguageToggle />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                  {/* Hamburger Icon */}
                  <div className="space-y-2">
                    <span className={`block w-8 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                    <span className={`block w-8 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-8 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu - slides down when open */}
          <div
              className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-60' : 'max-h-0'}`}
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <a href="#quartett" className="text-lg font-bold hover:text-gray-600" onClick={handleNavClick}>
                {t("nav.quartett")}
              </a>
              <a href="#members" className="text-lg font-bold hover:text-gray-600" onClick={handleNavClick}>
                {t("nav.members")}
              </a>
              <a href="#contact" className="text-lg font-bold hover:text-gray-600" onClick={handleNavClick}>
                {t("nav.contact")}
              </a>
            </div>
          </div>
        </nav>

        {/* Main content - higher z-index than background */}
        <div className="relative z-10">
          <div className="flex justify-center items-center min-h-screen" id='home'>
            <div className="text-center">
              <h1 className="text-7xl font-bold" id='home'>{t("home.title")}</h1>
            </div>
          </div>

          <div className='flex justify-center items-center min-h-screen mt-20' id='quartett'>
            <div className="flex flex-col items-center justify-center min-h-screen p-6">
              <h1 className="text-5xl font-bold flex-col mb-12">{t("quartett.title")}</h1>
              <div className="text-xl flex flex-col md:flex-row items-center justify-center gap-6 lg:w-1/2">
                {t("quartett.description")}
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center min-h-screen mt-20' id='members'>
            <Members />
          </div>

          <div className='flex justify-center items-center min-h-screen mt-20' id='contact'>
            <Contact />
          </div>
        </div>
      </div>
  );
}

// Main component that provides the language context
export default function Home() {
  return (
      <LanguageProvider>
        <HomeContent />
      </LanguageProvider>
  );
}