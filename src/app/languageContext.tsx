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
    "quartett.description": "Unser Quartett wurde 2024 gegründet und besteht aus vier talentierten Musikern mit einer gemeinsamen Leidenschaft für Kammermusik. Vereint durch unser Studium an der Joseph Haydn Privathochschule, verschmelzen wir unsere unterschiedlichen musikalischen Erfahrungen zu einem dynamischen und ausdrucksstarken Ensemble. Wir spielen nicht nur alle Stile der klassischen Musik, sondern auch eine breite Palette anderer Genres, darunter Pop, Rock und Jazz.  Wir entwickeln uns ständig weiter und versuchen, unser Publikum durch unsere leidenschaftliche und innovative Herangehensweise an die Musik zu inspirieren. \n Wir bieten ein vielseitiges Repertoire - ganz gleich, ob Sie ein elegantes klassisches Programm, eine dynamische Crossover-Performance oder etwas speziell auf Ihre Veranstaltung zugeschnittenes suchen, wir liefern Qualität und Professionalität auf jeder Bühne. Wir schaffen unvergessliche musikalische Erlebnisse für Konzerte, private Veranstaltungen und besondere Anlässe. Buchen Sie uns, um Ihrer nächsten Veranstaltung Raffinesse, Frische und Spannung zu verleihen!",
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
    "quartett.description": "Founded in 2024, our quartet brings together four talented musicians with a shared passion for chamber music. United by our studies at the Joseph Haydn Private University, we blend our diverse musical experiences into a dynamic and expressive ensemble. We perform not only all styles of classical music but also a broad range of other genres, including pop, rock and jazz.  Constantly evolving, we seek to inspire audiences through our passionate and innovative approach to music. \n We offer a versatile repertoire—whether you're looking for an elegant classical program, a dynamic crossover performance or something uniquely tailored to your event, we deliver quality and professionalism on every stage. We create unforgettable musical experiences for concerts, private events, and special occasions. Book us to add sophistication, freshness and excitement to your next event!",
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
          type='button'
          className="rounded-lg hover:cursor-pointer opacity-50 hover:opacity-100 flex items-center justify-center transition-all hover:bg-gray-100 "
          aria-label={language === "de" ? "Switch to English" : "Auf Deutsch umschalten"}
        >
          <span className={`fi fi-${language === 'de' ? 'gb' : 'de'}`}></span>
        </button>
      );
    };