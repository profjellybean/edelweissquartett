"use client"

import React, { useState, useEffect } from 'react';
import Contact from './contact';
import Members from './members';
import { LanguageProvider, useLanguage, LanguageToggle } from './languageContext';
import Head from 'next/head';

// Wrap the main content with language context
function HomeContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();

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

  // SEO data based on current language
  const pageTitle = language === "en" ? "Edelweiss Quartet" : "Edelweiß Quartett";
  const pageDescription = t("quartett.description").slice(0, 160); // Truncate to reasonable meta description length
  const siteUrl = "https://edelweissquartett.at";
  const currentUrl = `${siteUrl}/${language === "en" ? "" : language}`;

  return (
      <div className="relative">
        <Head>
          {/* Essential Meta Tags */}
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href={currentUrl} />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          
          {/* Language Alternates for SEO */}
          <link rel="alternate" hrefLang="en" href={`${siteUrl}`} />
          <link rel="alternate" hrefLang="de" href={`${siteUrl}/de`} />
          
          {/* Additional SEO keywords */}
          <meta name="keywords" content={language === "en" ? "Edelweiss Quartet, String Quartet, Classical Music" : "Edelweiß Quartett, Streichquartett, Klassische Musik"} />
          
          {/* Structured Data / JSON-LD for Music Group */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MusicGroup",
                "name": pageTitle,
                "description": pageDescription,
                "url": currentUrl,
                "sameAs": [
                  "https://www.instagram.com/edelweissquartett"
                ]
              })
            }}
          />
        </Head>
        {/* Flower Background - Fixed position, low opacity for subtlety */}
        <div
            className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 opacity-15"
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
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
          <div className="container mx-auto px-4 relative">
            {/* Flex container with three sections */}
            <div className="flex justify-between items-center">
              {/* Left section: Logo/Title */}
              <div className="flex-shrink-0">
                <a href="#home" className="text-xl" aria-label={pageTitle}>
                  {/* SVG logo from public folder */}
                  <img 
                    src="/logo_edelweiss.svg" 
                    alt={pageTitle} 
                    className="h-15 w-auto" 
                  />
                  {/* Hidden text for SEO */}
                  <span className="sr-only">{pageTitle}</span>
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

              {/* Right section: Language toggle (desktop only) and Mobile menu button */}
              <div className="flex items-center gap-4">
                {/* Language Toggle - Only visible on desktop */}
                <div className="scale-125 hidden md:block">
                  <LanguageToggle />
                </div>

                {/* Simple Mobile Menu Button */}
                <button
                  className="md:hidden flex items-center"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle navigation menu"
                >
                  {/* Original Hamburger Icon */}
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
            className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <a href="#quartett" className="text-lg font-bold hover:text-gray-600 py-2" onClick={handleNavClick}>
                {t("nav.quartett")}
              </a>
              <a href="#members" className="text-lg font-bold hover:text-gray-600 py-2" onClick={handleNavClick}>
                {t("nav.members")}
              </a>
              <a href="#contact" className="text-lg font-bold hover:text-gray-600 py-2" onClick={handleNavClick}>
                {t("nav.contact")}
              </a>
              {/* Language Toggle - Only visible in mobile menu */}
              <div className="scale-125 py-2">
                <LanguageToggle />
              </div>
            </div>
          </div>
        </nav>

        {/* Main content - higher z-index than background */}
        <div className="relative z-10">
          <div className="flex justify-center items-center min-h-screen" id='home'>
          <div className="text-center">
            {/* Hero section with large SVG logo */}
            <img 
              src="/logo_edelweiss.svg" 
              alt={pageTitle} 
              className="h-50 w-auto mx-auto" 
            />
            {/* Hidden text for SEO */}
            <h1 className="sr-only">{pageTitle}</h1>
          </div>
          </div>

          <div className='flex justify-center items-center min-h-screen mt-20' id='quartett'>
            <div className="flex flex-col items-center justify-center min-h-screen p-6">
              <h1 className="text-5xl font-bold flex-col mb-12">{t("quartett.title")}</h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:w-1/2">
                {t("quartett.description")}
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center min-h-screen mt-20 relative z-10 pt-24' id='members'>
            <Members />
          </div>

          <div className='flex justify-center items-center min-h-screen mt-20 relative z-10 pt-24' id='contact'>
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