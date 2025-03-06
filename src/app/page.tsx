"use client"

import React, { useState, useEffect } from 'react';
import Contact from './contact';
import Members from './members';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
    <div>
      {/* Fixed navigation bar that appears when scrolling */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo/Title - always visible on mobile */}
          <div className="text-xl font-bold">
            Edelweiß Quartett
          </div>
          
          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex justify-center items-center gap-12">
            <a href="#quartett" className="flex items-center flex-col text-lg font-bold hover:text-gray-600">
              <span>Das Quartett</span>
            </a>
            <a href="#members" className="flex items-center flex-col text-lg font-bold hover:text-gray-600">
              <span>Mitglieder</span>
            </a>
            <a href="#contact" className="flex items-center flex-col text-lg font-bold hover:text-gray-600">
              <span>Kontakt</span>
            </a>
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
        
        {/* Mobile Navigation Menu - slides down when open */}
        <div 
          className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-60' : 'max-h-0'}`}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <a href="#quartett" className="text-lg font-bold hover:text-gray-600" onClick={handleNavClick}>
              Das Quartett
            </a>
            <a href="#members" className="text-lg font-bold hover:text-gray-600" onClick={handleNavClick}>
              Mitglieder
            </a>
            <a href="#contact" className="text-lg font-bold hover:text-gray-600" onClick={handleNavClick}>
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      <div className="flex justify-center items-center min-h-screen" id='home'>
        <div className="text-center">
          <h1 className="text-7xl font-bold">Edelweiß Quartett</h1>
        </div>
      </div>

      <div className='flex justify-center items-center min-h-screen mt-20' id='quartett'>
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
          <h1 className="text-5xl font-bold flex-col mb-12">Das Quartett</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:w-1/2">
            Gegründet im Jahr 2024, vereint unser Quartett vier engagierte Studierende der Joseph Haydn Privatuniversität mit einer gemeinsamen Leidenschaft für Kammermusik.
            Inspiriert von der reichen Tradition des Streichquartetts interpretieren wir Werke von der Klassik bis zur Moderne mit Hingabe und Präzision.
            Durch unsere Ausbildung an der renommierten Joseph Haydn Privatuniversität verbinden wir technisches Können mit künstlerischer Ausdruckskraft.
            Ob auf der Bühne oder im Probenraum - unser Ziel ist es, Musik lebendig werden zu lassen und unser Publikum mit einzigartigen Klangerlebnissen zu begeistern.
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
  );
}