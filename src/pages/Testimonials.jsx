import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-gradient-to-b from-[#111] to-[#000] py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] mx-auto flex flex-col justify-center items-center gap-8"
      >
        {/* Section Title */}
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl tracking-widest uppercase"
        >
          Experience
        </motion.h1>
        <motion.h2
          variants={slideUpVariants}
          className="text-white text-4xl lg:text-5xl font-bold text-center leading-snug"
        >
          Over 34 Years of Engineering Excellence
        </motion.h2>
        <motion.div variants={slideUpVariants} className="w-24 h-1.5 bg-yellow-500 rounded-full"></motion.div>

        {/* Main Content */}
        <motion.div
          variants={zoomInVariants}
          className="mt-12 w-full flex flex-col lg:flex-row gap-16"
        >
          {/* Left Column - Overview */}
          <div className="flex-1 flex flex-col gap-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Founded in 1990 under the visionary leadership of Md. Jewel Hossain, Legal Piling & Construction (LPC) has amassed more than three decades of hands-on experience across both private and public sector projects as a main contractor and subcontractor.
            </p>
            <p>
              Specializing in deep foundation solutions, LPC is a trusted name for the design and installation of:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 text-yellow-400">
              <li>Large Diameter Casing Pipe Driving</li>
              <li>Cast-in-Situ Bored Piles</li>
              <li>Under-Reamed Piles and Diaphragm Walls</li>
              <li>Sheet Pile Driving, Sand and Timber Piles</li>
              <li>Jetty Construction, Earth Work & Excavation</li>
              <li>Bridge and Major Civil Construction</li>
              <li>Static Load Test, Dynamic Load Test (PDA), CSL Test, PIT Testing</li>
              <li>Sub-soil Investigation and Geotechnical Services</li>
            </ul>
          </div>

          {/* Right Column - Highlights */}
          <div className="flex-1 flex flex-col gap-6 text-gray-300 text-lg leading-relaxed">
            <p>
              With a skilled workforce of over 500 employees — including engineers, surveyors, technicians, operators, welders, fabricators, and supervisors — LPC ensures project excellence from concept to completion.
            </p>
            <p>
              Equipped with a modern fleet of world-class construction and transportation machinery, LPC consistently meets the highest standards of quality, safety, and client satisfaction.
            </p>
            <p>
              Our commitment is simple: engineering innovation, sincere service, and a client-first approach. We listen, adapt, and deliver — every time.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-4"
            >
              <a 
                href="#contact" 
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Contact Us for Your Project
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
