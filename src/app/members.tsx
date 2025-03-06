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
      bio: "Passionate tech leader with 15 years of experience in innovative software solutions.",
      image: "/fill.JPG"
    },
    {
      name: "Bella",
      role: "2. Geige",
      bio: "Expert in cutting-edge technologies and scalable system architectures.",
      image: "/fill.JPG"
    },
    {
      name: "Tin",
      role: "Viola",
      bio: "Award-winning designer focused on creating intuitive user experiences.",
      image: "/fill.JPG"
    },
    {
      name: "Valentin",
      role: "Violoncello",
      bio: "Innovative developer with expertise in full-stack development and machine learning.",
      image: "/fill.JPG"
    }
  ];

  return (
    <div className="w-full max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold flex-col mt-20 mb-30">Mitglieder</h1>
      </div>

      <div className="space-y-12">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-8"
          >
            {index % 2 === 0 ? (
              <>
                <div className="w-1/2 text-right">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h2>
                    <h3 className="text-xl text-grey mb-4">
                      {member.role}
                    </h3>
                    <p className="text-gray-700 text-base">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <div className="w-1/3">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="w-1/3">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-1/2 text-left">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h2>
                    <h3 className="text-xl text-blue-600 mb-4">
                      {member.role}
                    </h3>
                    <p className="text-gray-700 text-base">
                      {member.bio}
                    </p>
                  </div>
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