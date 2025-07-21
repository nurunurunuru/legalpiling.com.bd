import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import project1 from '../assets/Top-surface-at-Khulna-Coal-Based-Power-Plant-Connecting-Road-Project-Rampal-Bagerhat-400x516.jpg';
import project2 from '../assets/Top-View-at-Khulna-Coal-Based-Power-Plant-Connecting-Road-Project-400x516.jpg';
import project3 from '../assets/Top-View-at-Khulna-Coal-Based-Power-Plant-Connecting-Road-Project-Rampal-Bagerhat-400x516.jpg';
import project4 from '../assets/Legal-Piling-Construction.-Aftabnagar-Building-400x516.jpg';
// import project5 from '../assets/WhatsApp Image 2025-04-29 at 11.16.32 AM (1).jpeg';
import project6 from '../assets/WhatsApp Image 2025-04-29 at 11.16.32 AM.jpeg';
// import project7 from '../assets/WhatsApp Image 2025-04-29 at 11.16.33 AM (1).jpeg';
// import project8 from '../assets/WhatsApp Image 2025-04-29 at 11.16.33 AM.jpeg';
// import project9 from '../assets/WhatsApp Image 2025-04-29 at 11.16.34 AM (1).jpeg';
// import project10 from '../assets/WhatsApp Image 2025-04-29 at 11.16.34 AM (2).jpeg';
import project11 from '../assets/WhatsApp Image 2025-04-29 at 11.16.35 AM (1).jpeg';
import project12 from '../assets/WhatsApp Image 2025-04-29 at 11.16.36 AM.jpeg';

import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const images = [
  project1, project2, project3, project4,
   project6,  project11, project12
];

const Portfolio = () => {
  return (
    <section id='projects' className='bg-black py-20'>
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] mx-auto mb-12 text-center space-y-4'
      >
        <motion.h2
          variants={slideUpVariants}
          className='text-yellow-500 text-sm tracking-widest uppercase font-semibold'
        >
          Portfolio
        </motion.h2>
        <motion.h1
          variants={slideUpVariants}
          className='text-white text-4xl lg:text-5xl font-bold uppercase'
        >
          Our Best Projects
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className='w-20 h-1.5 mx-auto bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full'
        ></motion.div>
      </motion.div>

      {/* Project Carousel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className='w-[90%] lg:w-[80%] mx-auto'
      >
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          slidesPerView={4}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className='relative group overflow-hidden rounded-xl shadow-lg'>
                <img
                  src={src}
                  alt={`Project ${index + 1}`}
                  className='h-[250px] w-full object-cover transform group-hover:scale-105 transition duration-500'
                />
                {/* Overlay */}
                <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center'>
                  {/* <span className='text-white text-lg font-semibold'>Project {index + 1}</span> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Portfolio;
