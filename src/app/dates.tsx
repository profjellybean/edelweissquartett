"use client";

import React from 'react';
import { useLanguage } from './languageContext'; // Make sure this path is correct

// Define placeholder concert dates - replace with your actual concert data
// In a real application, this might come from a CMS or API, or be passed as props
const concertDatesData = [
  {
    id: 1,
    date: { de: "14. Juni 2025", en: "June 14, 2025" },
    time: "15.30",
    venue: { de: "60 Jahre Institut Oberschützen", en: "60 Jahre Institut Oberschützen" },
    city: { de: "Hauptplatz 8, 7432 Oberschützen", en: "Hauptplatz 8, 7432 Oberschützen" },
    description: {
      de: "Werke von Haydn, Schulhoff und Tkalčić",
      en: "Works by Haydn, Schulhoff, and Tkalčić"
    },
    ticketLink: "https://institut-oberschuetzen.kug.ac.at/aktuelles/aktuelles/jubilaeum-60-jahre-institut-oberschuetzen"
  },
  {
    id: 2,
    date: { de: "17. Juni 2025", en: "June 17, 2025" },
    time: "18:00",
    venue: { de: "Benefizkonzert Kollegium Kalksburg", en: "Benefizkonzert Kollegium Kalksburg" },
    city: { de: "Promenadeweg 3, 1230 Wien", en: "Promenadeweg 3, 1230 Vienna" },
    description: {
      de: "Werke von Mozart und Schulhoff",
      en: "Works by Mozart, and Schulhoff"
    },
    ticketLink: "https://skug.at/e/kalksburger-melange-2/"
  },
];

const Dates: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col items-center w-full max-w-screen-md px-4 sm:px-6">
      <h1 className="text-5xl font-bold mb-16 text-center">
        {t("dates.title")}
      </h1>

      {concertDatesData.length > 0 ? (
        <div className="space-y-8 w-full">
          {concertDatesData.map((concert) => (
            <div key={concert.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <p className="text-2xl font-bold text-gray-800">
                {concert.date[language]} <span className="text-xl text-gray-600 font-medium">| {concert.time}</span>
              </p>
              <p className="text-xl text-gray-700 mt-2 font-semibold">
                {concert.venue[language]}
              </p>
              <p className="text-lg text-gray-600">
                {concert.city[language]}
              </p>
              <p className="text-md text-gray-500 mt-3" style={{ whiteSpace: 'pre-line' }}>
                {concert.description[language]}
              </p>
              {concert.ticketLink && concert.ticketLink !== "#" ? (
                <a
                  href={concert.ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 mt-4 text-center"
                >
                  {t("dates.moreInfo")} &rarr;
                </a>
              ) : concert.ticketLink === "#" ? ( 
                <span className="inline-block bg-gray-400 text-white px-6 py-2 rounded-lg mt-4 text-center cursor-not-allowed">
                  {t("dates.moreInfo")} (soon)
                </span>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-600 text-center">
          {t("dates.noDates")}
        </p>
      )}
    </div>
  );
};

export default Dates;