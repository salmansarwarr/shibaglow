'use client';

import React from 'react';
import Image from 'next/image';

const sponsors = [
  {
    name: 'FaZe Banks',
    role: 'Youtuber',
    image: '/sponsor3.png', 
  },
  {
    name: 'TJR Trades',
    role: 'Youtuber',
    image: '/sponsor1.png',
  },
  {
    name: 'Logan Paul',
    role: 'Youtuber',
    image: '/sponsor2.png',
  },
  {
    name: 'Davinci Jeremie',
    role: 'Youtuber',
    image: '/sponsor4.png',
  },
];

const Sponsors = () => {
  return (
    <div id='sponsors' className="bg-[#94571C33] text-white py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <div className="text-center mb-12 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-[49px] font-bold text-[#94571C] mb-2">Sponsors</h2>
        <p className="text-base sm:text-lg md:text-[30px] max-w-[719px] text-white">
          Trusted by a growing network of sponsors and partners in the crypto space:
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="text-center">
            <div className="w-auto md:h-[367px] h-30 mx-auto mb-4 relative">
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="font-semibold md:text-[30px]">{sponsor.name}</p>
            <p className="text-sm md:text-[25px]">{sponsor.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
