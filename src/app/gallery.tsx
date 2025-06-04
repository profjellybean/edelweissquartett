"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from './languageContext'; // Adjust path if needed, e.g., ./languageContext

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Define gallery images - these were previously in page.tsx
const galleryImages = [
  { src: "/image2.jpg", alt: "Gallery image 2 of Edelweiss Quartett" },
  { src: "/group.jpg", alt: "Gallery image 1 of Edelweiss Quartett" },
  { src: "/image3.jpg", alt: "Gallery image 3 of Edelweiss Quartett" },
  { src: "/image4.jpg", alt: "Gallery image 4 of Edelweiss Quartett" },
  { src: "/image5.jpg", alt: "Gallery image 5 of Edelweiss Quartett" },
  { src: "/image6.jpg", alt: "Gallery image 6 of Edelweiss Quartett" },
  { src: "/image7.jpg", alt: "Gallery image 7 of Edelweiss Quartett" },
];

const Gallery: React.FC = () => {
  const { t } = useLanguage();

  return (
    // This div is the main content container for the Gallery component itself
    <div className="flex flex-col items-center w-full">
      <h1 className="text-5xl font-bold mb-16 text-center px-4">
        {t("nav.gallery")}
      </h1>

      <div className="w-full px-2 sm:px-0"> 
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          className="rounded-lg shadow-xl overflow-hidden w-full sm:max-w-screen-lg mx-auto gallery-swiper"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-video w-full relative"> {/* Or aspect-square, adjust as needed */}
                <Image 
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="contain"
                  priority={index < 2}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;