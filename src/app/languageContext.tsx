"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

// Types for our language context
type Language = 'de' | 'en';
type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  de: {
    "nav.quartett": "Das Quartett",
    "nav.members": "Mitglieder",
    "nav.contact": "Kontakt",
    "home.title": "Edelweiß Quartett",
    "quartett.title": "Das Quartett",
    "quartett.description": "Gegründet im Jahr 2024, vereint unser Quartett vier engagierte Studierende der Joseph Haydn Privatuniversität mit einer gemeinsamen Leidenschaft für Kammermusik. Inspiriert von der reichen Tradition des Streichquartetts interpretieren wir Werke von der Klassik bis zur Moderne mit Hingabe und Präzision. Durch unsere Ausbildung an der renommierten Joseph Haydn Privatuniversität verbinden wir technisches Können mit künstlerischer Ausdruckskraft. Ob auf der Bühne oder im Probenraum - unser Ziel ist es, Musik lebendig werden zu lassen und unser Publikum mit einzigartigen Klangerlebnissen zu begeistern.",
    "members.title": "Mitglieder",
    "contact.title": "Kontakt",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.message": "Nachricht",
    "contact.form.submit": "Absenden",
    "contact.form.header": "Kontaktieren Sie uns",
    "contact.form.sending" : "Senden...",
    "contact.form.success": "Vielen Dank für Ihre Nachricht! Wir werden uns so bald wie möglich bei Ihnen melden.",
    "contact.form.error": "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    "or": "oder"
  },
  en: {
    "nav.quartett": "The Quartet",
    "nav.members": "Members",
    "nav.contact": "Contact",
    "home.title": "Edelweiss Quartet",
    "quartett.title": "The Quartet",
    "quartett.description": "Founded in 2024, our quartet brings together four dedicated students from the Joseph Haydn Private University with a shared passion for chamber music. Inspired by the rich tradition of string quartets, we interpret works from the classical to the modern era with dedication and precision. Through our training at the renowned Joseph Haydn Private University, we combine technical skill with artistic expression. Whether on stage or in the rehearsal room - our goal is to bring music to life and inspire our audience with unique sound experiences.",
    "members.title": "Members",
    "contact.title": "Contact",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Submit",
    "contact.form.header": "Get in Touch",
    "contact.form.sending" : "Sending...",
    "contact.form.success": "Thank you for your message! We will get back to you as soon as possible.",
    "contact.form.error": "An error occurred while sending your message. Please try again later.",
    "or": "or"
  }
};

// Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to get initial language from localStorage, default to German
  const [language, setLanguage] = useState<Language>('de');

  // On mount, check if there's a saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'de' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Toggle between languages
  const toggleLanguage = () => {
    const newLanguage = language === 'de' ? 'en' : 'de';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageToggle: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
          onClick={toggleLanguage}
          className="flex items-center justify-center transition-all hover:bg-gray-100 "
          aria-label={language === "de" ? "Switch to English" : "Auf Deutsch umschalten"}
        >
          <span className={`fi fi-${language === 'de' ? 'gb' : 'de'}`}></span>
        </button>
      );
    };