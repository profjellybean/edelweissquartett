
import React from 'react';
import Contact from './contact';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen" id='home'>
        <div className="text-center">
          <h1 className="text-7xl font-bold ">Edelweiß Quartett</h1>
          <div className="mt-2 flex justify-center items-center flex-col">
            <div className="flex mt-20 justify-center items-center gap-12">
              <a href="#contact" className="flex items-center  flex-col text-2xl font-bold">
                <span>contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center min-h-screen mt-20' id='contact'>
        <Contact />
      </div>
    </div>
  );
};