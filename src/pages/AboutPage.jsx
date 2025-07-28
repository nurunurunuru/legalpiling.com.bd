import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import Legal from '../assets/CamScanner 27-07-2025 18.01.jpg';
import Director from '../assets/saif.jpg'; // Make sure you have this image

const AboutPage = () => {
  return (
    <>
      {/* Section 1 - Chief Executive */}
      <section 
        id="about" 
        className="w-[90%] lg:w-[80%] mx-auto py-20 flex flex-col lg:flex-row justify-between items-center gap-16"
      >
        {/* Left Side - Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="w-full lg:w-[55%] flex flex-col gap-8"
        >
          <motion.h2 
            variants={slideUpVariants} 
            className="text-yellow-400 text-sm lg:text-lg uppercase tracking-[0.2em] font-semibold"
          >
            Chief Executive
          </motion.h2>

          <motion.h1 
            variants={slideUpVariants} 
            className="text-white text-4xl lg:text-6xl font-extrabold leading-snug uppercase drop-shadow-lg"
          >
            Mr. Md Jewel Hossain 
          </motion.h1>

          <div className="w-16 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>

          <motion.div 
            variants={slideUpVariants} 
            className="text-gray-300 text-base lg:text-lg leading-relaxed mt-4 space-y-6"
          >
            <p>
              <strong className="text-yellow-400">Md. Jewel Hossain</strong> founder and the Chief Executive Officer of LPC is basically a highly experienced foundation technician, gathered huge experience and expertise from practical field. One fine day of January 1990 he took a noble decision to start his own business company named Legal piling & Constructions (LPC).
            </p>
            <p>
              LPC started its journey with one set of tripod drilling rig, one set static load test equipment’s and some relevant instruments in a small 100 sft. Rental office space of (3rd floor) Farm view Supermarket providing boring, rebar binding and casting of Cast-in-Situ Piles and Static Load Test of bored piles.
            </p>
            <p>
              Within the tenure of its 34 years working LPC passed through lots of ups downs and gradually become first growing Foundation builder and Construction Company in the country. At this moment more than 450 permanent staff members of different categories are working in different projects of the company.
            </p>
          </motion.div>

          <motion.div
            variants={zoomInVariants}
            whileHover={{ scale: 1.07 }}
            className="mt-8"
          >
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 tracking-wide uppercase">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full lg:w-[40%] flex justify-center items-center"
        >
          <div className="relative group w-full overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={Legal} 
              alt="Founder Md. Jewel Hossain" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition duration-700"></div>
          </div>
        </motion.div>
      </section>

      {/* Section 2 - Director */}
      <section 
        id="director" 
        className="w-[90%] lg:w-[80%] mx-auto py-20 flex flex-col lg:flex-row-reverse justify-between items-center gap-16"
      >
        {/* Right Side - Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="w-full lg:w-[55%] flex flex-col gap-8"
        >
          <motion.h2 
            variants={slideUpVariants} 
            className="text-yellow-400 text-sm lg:text-lg uppercase tracking-[0.2em] font-semibold"
          >
            Director
          </motion.h2>

          <motion.h1 
            variants={slideUpVariants} 
            className="text-white text-4xl lg:text-6xl font-extrabold leading-snug uppercase drop-shadow-lg"
          >
            Mr. Mohammad Saiful Islam
          </motion.h1>

          <div className="w-16 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>

          <motion.div 
            variants={slideUpVariants} 
            className="text-gray-300 text-base lg:text-lg leading-relaxed mt-4 space-y-6"
          >
            <p>
              Few years later, <strong className="text-yellow-400">Mohammad Saiful Islam</strong>, younger brother of Md. Jewel Hossain, joined the company as an associate and full-time Director.
            </p>
            <p>
              Mr. Saiful is well experienced in practical foundation making, especially in site preparation and development. He is also an expert in equipment mobilization, collection, and supply.
            </p>
            <p>
              With the dedication and hard work of both brothers, LPC began growing vertically and established a sister concern named J T Corporation — continuing their legacy of growth and reliability.
            </p>
          </motion.div>
        </motion.div>

        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full lg:w-[40%] flex justify-center items-center"
        >
          <div className="relative group w-full overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={Director} 
              alt="Director Mohammad Saiful Islam" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition duration-700"></div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default AboutPage;
