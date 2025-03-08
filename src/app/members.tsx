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
      name: "Ana Labazan Brajša",
      role: {
        de: "1. Violine",
        en: "1st Violin"
      },
      bio: {
        de: "Ana Labazan Brajša wurde in Zagreb, Kroatien, geboren, wo sie im Alter von vier Jahren mit dem Geigenspiel begann. Heute lebt sie in Wien und studiert bei den renommierten Geigern Anna Kandinskaya und Leonid Sorokow. Sie ist Preisträgerin zahlreicher nationaler und internationaler Wettbewerbe und konzertierte bereits in über einem Dutzend Ländern, darunter Indien, China, Spanien und Deutschland. Neben ihrer aktiven Tätigkeit als Kammermusikerin beschäftigt sie sich auch mit Komposition. Ana ist Mitglied des Sinfonieorchesters Liechtenstein, der Österreichisch-Ungarischen Haydn Philharmonie und des Kammerorchesters Split Virtuoso und trat als Solistin mit renommierten Orchestern auf. Sie wurde mehrfach vom kroatischen Kulturministerium für ihre Leistungen im musikalischen Bereich ausgezeichnet.",
        en: "Ana Labazan Brajša was born in Zagreb, Croatia, where she began playing the violin at the age of four. Now based in Vienna, she studies with renowned violinists Anna Kandinskaya and Leonid Sorokow. She has won numerous awards in national and international competitions and has performed in over a dozen countries including India, China, Spain and Germany. In addition to her active engagement in chamber music, she also explores composition. Ana is a member of the Liechtenstein Symphony Orchestra, the Austrian-Hungarian Haydn Philharmonie, and the Chamber Orchestra Split Virtuoso and has performed as a soloist with renowned orchestras. She was acknowledged several times by the Croatian Ministry of Culture for her accomplishments in the musical field."
      },
      image: "/ana.jpg"
    },
    {
      name: "Bella Hoziasa",
      role: {
        de: "2. Violine",
        en: "2nd Violin"
      },
      bio: {
        de: "Bella Hoziasa wurde in Riga, Lettland, geboren und begann ihre musikalische Reise im Alter von fünf Jahren, als sie mit dem Violinspiel begann. \
            Im Jahr 2024 absolvierte sie die Emīls-Dārziņš-Musikschule, wo sie unter der Anleitung von Nelli Sarkisyan studierte. \
            Im Herbst 2024 begann sie ihr Studium an der Joseph Haydn Privathochschule in der Klasse von Anna Kandinskaya. \
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
      name: "Tin Reba",
      role: {
        de: "Viola",
        en: "Viola"
      },
      bio: {
        en: "Tin Reba, born in Osijek, Croatia, started playing the violin at the age of eight and later switched to the viola during his studies at the Music Academy of the University of Zagreb, where he is currently completing his master's degree under Prof. Aleksandar Milošev. He is also studying under Milan Milojicic at the Joseph Haydn Private Academy in Eisenstadt as part of the Erasmus program. As a member of chamber music ensembles on both violin and viola, he has won several national competitions, including the prestigious 'Oscar of Knowledge' award in Croatia. Outside of classical music, he is involved in improvisation and jazz and has extensive experience as a band musician.",
        de: "Tin Reba, geboren in Osijek, Kroatien, begann im Alter von acht Jahren mit dem Geigenspiel und wechselte später während seines Studiums an der Musikakademie der Universität Zagreb zur Bratsche, wo er derzeit sein Masterstudium bei Prof. Aleksandar Milošev absolviert. Außerdem studiert er bei Milan Milojicic an der Joseph Haydn Privatakademie in Eisenstadt im Rahmen des Erasmus-Programms. Als Mitglied von Kammermusikensembles auf der Violine und der Bratsche hat er mehrere nationale Wettbewerbe gewonnen, darunter den renommierten 'Oscar des Wissens' in Kroatien. Außerhalb der klassischen Musik beschäftigt er sich mit Improvisation und Jazz und hat umfangreiche Erfahrung als Bandmusiker."
      },
      image: "/tin.jpg"
    },
    {
      name: "Valentin Schnabl",
      role: {
        de: "Violoncello",
        en: "Cello"
      },
      bio: {
        de: "Valentin Schnabl begann im Alter von vier Jahren mit dem Cellospiel und erhielt Unterricht bei Maria Grün und später bei Andrea Traxler an der Johann-Sebastian-Bach-Musikschule in Wien. \
            Er gewann mehrfach Preise beim Prima la Musica-Wettbewerb. \
            Neben seiner musikalischen Laufbahn absolvierte er einen Bachelor in Informatik und verfolgt derzeit sein Masterstudium. \
            Nach einem Jahr in einem festen Klaviertrio entdeckte er seine Leidenschaft für das Cello neu und studiert seit 2024 an der Joseph Haydn Privathochschule \
            in der Klasse von Prof. Othmar Müller.",
        en: "Valentin Schnabl started playing the cello at the age of four, receiving lessons from Maria Grün and later Andrea Traxler at the Johann Sebastian Bach Music School in Vienna. \
            He won multiple prizes at the Prima la Musica competition.\
            Alongside his musical career, he completed a Bachelor's degree in Computer Science and is currently pursuing his Master’s degree. \
            After spending a year in a dedicated piano trio, he rediscovered his passion for the cello and has been studying at the Joseph Haydn Private University \
      since 2024 in the class of Prof. Othmar Müller.",
      },
      image: "/vali.jpg"
    }
  ];
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold flex-col pt-10 pb-15">{t("members.title")}</h1>
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
                <h3 className="text-gray-600 mb-4">
                  {member.role[language]}
                </h3>
                </div>
                <p className="text-gray-800">
                  {member.bio[language]}
                </p>
            </div>
            
            {/* Desktop view with alternating layout */}
            {index % 2 === 0 ? (
              <>
                {/* Text on left */}
                <div className="hidden md:block md:w-3/5 text-right pr-4">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h2>
                  <h3 className=" text-gray-600 mb-4 font-bold">
                    {member.role[language]}
                  </h3>
                  <p className="text-gray-800">
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
                  <h3 className="text-gray-600 mb-4 font-bold">
                    {member.role[language]}
                  </h3>
                  <p className="text-gray-800">
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