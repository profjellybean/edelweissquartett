
import React from 'react';
import Contact from './contact';
import Members from './members';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen" id='home'>
        <div className="text-center">
          <h1 className="text-7xl font-bold ">Edelweiß Quartett</h1>
          <div className="mt-2 flex justify-center items-center flex-col">
            <div className="flex mt-20 justify-center items-center gap-12">
              <a href="#contact" className="flex items-center  flex-col text-2xl font-bold">
                <span>Kontakt</span>
              </a>
              <a href="#quartett" className="flex items-center  flex-col text-2xl font-bold">
                <span>Das Quartett</span>
              </a>
              <a href="#members" className="flex items-center  flex-col text-2xl font-bold">
                <span>Mitglieder</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center min-h-screen mt-20' id='contact'>
        <Contact />
      </div>
      <div className='flex justify-center items-center min-h-screen mt-20' id='quartett'>
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
          <h1 className="text-5xl font-bold flex-col mb-12">Das Quartett</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-1/2">
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
    </div>
  );
};