"use client"

import React from 'react';
import Image from 'next/image';
import { useLanguage } from './languageContext';

interface TeamMember {
  name: string;
  role: {
    de: string;
    en: string;
  };
  bio: {
    de: string;
    en: string;
  };
  image: string;
}

const Members: React.FC = () => {
  const { language, t } = useLanguage();
  
  const teamMembers: TeamMember[] = [
    {
      name: "Ana",
      role: {
        de: "1. Geige",
        en: "1st Violin"
      },
      bio: {
        de: "John Doe ist ein talentierter Singer-Songwriter und Multiinstrumentalist, bekannt für seine gefühlvollen Melodien und herzlichen Texte. Geboren und aufgewachsen in Nashville, Tennessee, entwickelte John schon früh eine Leidenschaft für Musik und beherrschte Gitarre und Klavier bereits als Teenager. Sein neuestes Album, Wanderer's Dream, zeigt seine sich entwickelnde Kunstfertigkeit und tiefgründiges lyrisches Geschichtenerzählen.",
        en: "John Doe is a talented singer-songwriter and multi-instrumentalist known for his soulful melodies and heartfelt lyrics. Born and raised in Nashville, Tennessee, John developed a passion for music at an early age, mastering the guitar and piano by the time he was a teenager. His latest album, Wanderer's Dream, showcases his evolving artistry and deep lyrical storytelling."
      },
      image: "/ana.jpeg"
    },
    {
      name: "Bella",
      role: {
        de: "2. Geige",
        en: "2nd Violin"
      },
      bio: {
        de: "Bella Hoziasa wurde in Riga, Lettland, geboren und begann ihre musikalische Reise im Alter von fünf Jahren, als sie mit dem Violinspiel begann. \
            Im Jahr 2024 absolvierte sie die Emīls-Dārziņš-Musikschule, wo sie unter der Anleitung von Nelli Sarkisyan studierte. \
            Im Herbst 2024 begann sie ihr Studium an der Joseph-Haydn-Privathochschule in der Klasse von Anna Kandinskaya. \
            Im Laufe ihrer Karriere nahm Bella an verschiedenen internationalen Orchester- und Kammermusikprojekten teil und sammelte dabei wertvolle Erfahrungen. \
            Sie ist zudem aktiv am musikalischen Studentenleben beteiligt, strebt kontinuierlich nach Weiterentwicklung und sucht stets neue Möglichkeiten auf ihrem künstlerischen Weg.",
        en: "Bella Hoziasa was born in Riga, Latvia, and began her musical journey at the age of five when she started playing the violin. \
            In 2024, she graduated from the Emīls Dārziņš Music School, where she studied under the guidance of Nelli Sarkisyan. \
            In the autumn of 2024, she began her studies at the Joseph Haydn Privathochschule in the class of Anna Kandinskaya.\
            Throughout her career, Bella has participated in various international orchestral and chamber music projects, gaining invaluable experience. \
            She is also actively involved in student musical life, continuously striving for growth and seeking new opportunities on her artistic path.",
    },
     image: "/bella.jpeg"
    },
    {
      name: "Tin",
      role: {
        de: "Viola",
        en: "Viola"
      },
      bio: {
        de: "John Doe ist ein talentierter Singer-Songwriter und Multiinstrumentalist, bekannt für seine gefühlvollen Melodien und herzlichen Texte. Geboren und aufgewachsen in Nashville, Tennessee, entwickelte John schon früh eine Leidenschaft für Musik und beherrschte Gitarre und Klavier bereits als Teenager. Sein neuestes Album, Wanderer's Dream, zeigt seine sich entwickelnde Kunstfertigkeit und tiefgründiges lyrisches Geschichtenerzählen.",
        en: "John Doe is a talented singer-songwriter and multi-instrumentalist known for his soulful melodies and heartfelt lyrics. Born and raised in Nashville, Tennessee, John developed a passion for music at an early age, mastering the guitar and piano by the time he was a teenager. His latest album, Wanderer's Dream, showcases his evolving artistry and deep lyrical storytelling."
      },
      image: "/fill.JPG"
    },
    {
      name: "Valentin",
      role: {
        de: "Violoncello",
        en: "Cello"
      },
      bio: {
        de: "Valentin Schnabl begann im Alter von vier Jahren mit dem Cellospiel und erhielt Unterricht bei Maria Grün und später bei Andrea Traxler an der Johann-Sebastian-Bach-Musikschule. \
            Er gewann mehrfach Preise beim Prima la Musica-Wettbewerb. \
            Neben seiner musikalischen Laufbahn absolvierte er einen Bachelor in Informatik und verfolgt derzeit sein Masterstudium. \
            Nach einem Jahr in einem festen Klaviertrio entdeckte er seine Leidenschaft für das Cello neu und studiert seit 2024 an der Joseph-Haydn-Privatuniversität \
            in der Klasse von Prof. Othmar Müller.",
        en: "Valentin Schnabl started playing the cello at the age of four, receiving lessons from Maria Grün and later Andrea Traxler at the Johann Sebastian Bach Music School. \
            He won multiple prizes at the Prima la Musica competition.\
            Alongside his musical career, he completed a Bachelor's degree in Computer Science and is currently pursuing his Master’s degree. \
            After spending a year in a dedicated piano trio, he rediscovered his passion for the cello and has been studying at the Joseph Haydn Private University \
      since 2024 in the class of Prof. Othmar Müller.",
      },
      image: "/fill.JPG"
    }
  ];
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold flex-col mt-10 mb-10">{t("members.title")}</h1>
      </div>
      
      <div className="space-y-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
            {/* Mobile view */}
            <div className="w-full md:hidden flex flex-col items-center space-y-4">
              <div className="w-64 h-64 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg object-contain"
                />
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h2>
                <h3 className="text-xl text-gray-600 mb-4">
                  {member.role[language]}
                </h3>
                <p className="text-gray-700 text-base">
                  {member.bio[language]}
                </p>
              </div>
            </div>
            
            {/* Desktop view with alternating layout */}
            {index % 2 === 0 ? (
              <>
                {/* Text on left */}
                <div className="hidden md:block md:w-3/5 text-right pr-4">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h2>
                  <h3 className="text-xl text-gray-600 mb-4">
                    {member.role[language]}
                  </h3>
                  <p className="text-gray-700 text-base">
                    {member.bio[language]}
                  </p>
                </div>
                {/* Image on right */}
                <div className="hidden md:block md:w-2/5">
                  <div className="w-full aspect-square relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="rounded-lg shadow-lg object-contain"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Image on left */}
                <div className="hidden md:block md:w-2/5">
                  <div className="w-full aspect-square relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="rounded-lg shadow-lg object-contain"
                      priority={index < 2}
                    />
                  </div>
                </div>
                {/* Text on right */}
                <div className="hidden md:block md:w-3/5 text-left pl-4">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h2>
                  <h3 className="text-xl text-gray-600 mb-4">
                    {member.role[language]}
                  </h3>
                  <p className="text-gray-700 text-base">
                    {member.bio[language]}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;