import React from 'react';
import heroimg from '../assets/heroimg.png';
import backgroundImage from '../assets/legal.jpg';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-0" />

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="relative z-10 w-full lg:w-[60%] flex flex-col gap-6 px-6 lg:px-32 py-12 text-white"
      >
        <motion.h2
          variants={slideUpVariants}
          className="text-yellow-400 text-xl lg:text-2xl tracking-wider uppercase font-semibold"
        >
          We Are Builders
        </motion.h2>
        
        <motion.h1 
          variants={slideUpVariants}
          className="text-4xl lg:text-6xl font-extrabold uppercase leading-tight"
        >
          Legal Piling & Construction
        </motion.h1>

        <div className="w-24 h-1.5 bg-yellow-400 rounded-full mb-4"></div>

        <motion.p 
          variants={slideUpVariants}
          className="text-lg lg:text-xl leading-relaxed max-w-2xl"
        >
          Legal Piling and Construction (LPC) is one of Bangladesh’s most renowned foundation builders and contractors, established in 1990 under the visionary leadership of Md. Jewel Hossain.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="flex gap-6 mt-6"
        >
          <motion.button
            variants={zoomInVariants}
            className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 text-black font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg"
          >
            Read More
          </motion.button>
          <motion.button
            variants={zoomInVariants}
            className="border-2 border-white hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 text-white font-semibold px-8 py-3 rounded-lg"
          >
            Reach Us
          </motion.button>
        </motion.div>
      </motion.div>

     
    </section>
  );
};

export default Hero;
