"use client"

import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const Members: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Ana",
      role: "1. Geige",
      bio: "John Doe is a talented singer-songwriter and multi-instrumentalist known for his soulful melodies and heartfelt lyrics. \
      Born and raised in Nashville, Tennessee, John developed a passion for music at an early age, mastering the guitar and piano by the time he was a teenager.\
      His latest album, Wanderer's Dream, showcases his evolving artistry and deep lyrical storytelling.",
      image: "/ana.jpeg"
    },
    {
      name: "Bella Hoziasa",
      role: "2. Geige",
      bio: "Bella Hoziasa was born in Riga, Latvia, and began her musical journey at the age of five when she started playing the violin. \
      In 2024, she graduated from the Emīls Dārziņš Music School, where she studied under the guidance of Nelli Sarkisyan. \
      In the autumn of 2024, she began her studies at the Joseph Haydn Privathochschule in the class of Anna Kandinskaya.\
      Throughout her career, Bella has participated in various international orchestral and chamber music projects, gaining invaluable experience. \
      She is also actively involved in student musical life, continuously striving for growth and seeking new opportunities on her artistic path.",
      image: "/bella.jpeg"
    },
    {
      name: "Tin",
      role: "Viola",
      bio: "John Doe is a talented singer-songwriter and multi-instrumentalist known for his soulful melodies and heartfelt lyrics. \
      Born and raised in Nashville, Tennessee, John developed a passion for music at an early age, mastering the guitar and piano by the time he was a teenager.\
      His latest album, Wanderer's Dream, showcases his evolving artistry and deep lyrical storytelling.",
      image: "/fill.JPG"
    },
    {
      name: "Valentin",
      role: "Violoncello",
      bio: "John Doe is a talented singer-songwriter and multi-instrumentalist known for his soulful melodies and heartfelt lyrics. \
      Born and raised in Nashville, Tennessee, John developed a passion for music at an early age, mastering the guitar and piano by the time he was a teenager.\
      His latest album, Wanderer's Dream, showcases his evolving artistry and deep lyrical storytelling.",
      image: "/vali.JPG"
    }
  ];
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold flex-col mt-10 mb-10">Mitglieder</h1>
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
                <h2 className="text-3xl font-bold  mb-2">
                  {member.name}
                </h2>
                <h3 className="text-xl text-gray-600 mb-4">
                  {member.role}
                </h3>
                <p className=" text-base">
                  {member.bio}
                </p>
              </div>
            </div>
            
            {/* Desktop view with alternating layout */}
            {index % 2 === 0 ? (
              <>
                {/* Text on left */}
                <div className="hidden md:block md:w-3/5 text-right pr-4">
                  <h2 className="text-3xl font-bold  mb-2">
                    {member.name}
                  </h2>
                  <h3 className="text-xl text-gray-600 mb-4">
                    {member.role}
                  </h3>
                  <p className="text-base">
                    {member.bio}
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
                  <h2 className="text-3xl font-bold  mb-2">
                    {member.name}
                  </h2>
                  <h3 className="text-xl text-gray-600 mb-4">
                    {member.role}
                  </h3>
                  <p className=" text-base">
                    {member.bio}
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