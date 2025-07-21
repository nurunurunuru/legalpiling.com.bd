import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const clients = [
  { name: "RHD", image: "/image/1.jpg" },
  { name: "BBA", image: "/image/2.png" },
  { name: "PWD", image: "/image/3.jpg" },
  { name: "LGED", image: "/image/4.jpg" },
  { name: "BREB", image: "/image/5.jpg" },
  { name: "Bangladesh Railway", image: "/image/5.png" },
  { name: "PGCB", image: "/image/7.jpg" },
  { name: "SHANTA HOLDINGS LTD.", image: "/image/8.png" },
  { name: "NIRMAN", image: "/image/10.jpg" },
  { name: "NDE", image: "/image/12.jpg" },
  { name: "T.K Group", image: "/image/13.png" },
  { name: "AML", image: "/image/14.png" },
  { name: "SEL", image: "/image/15.png" },
  { name: "TOMA", image: "/image/16.jpg" },
  { name: "UNITED GROUP", image: "/image/17.png" },
  { name: "KARIM GROUP", image: "/image/18.png" },
  { name: "RANGS PROPERTIES", image: "/image/19.png" },
  { name: "CITY GROUPS", image: "/image/20.png" },
  { name: "ITALIAN THAI", image: "/image/21.png" },
  { name: "GPS ISPAT", image: "/image/22.jpg" },
  { name: "AMIN MOHAMMAD GROUP", image: "/image/23.jpg" },
  { name: "MAX", image: "/image/24.png" },
  { name: "PREMIER CEMENT", image: "/image/25.png" },
  { name: "RANA BUILDERS LTD.", image: "/image/26.png" },
  { name: "AFCON INFRASTRUCTURE LTD.", image: "/image/32.png" },
  
  
];

const ClientsPartners = () => {
  return (
    <section id="clients" className="w-full bg-gray-100 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="w-[90%] lg:w-[80%] mx-auto flex flex-col items-center text-center gap-6"
      >
        <motion.h2 variants={slideUpVariants} className="text-yellow-500 text-xl font-semibold uppercase tracking-widest">
          Major Clients & Partners
        </motion.h2>
        
        <motion.h1 variants={slideUpVariants} className="text-3xl lg:text-5xl font-bold text-black uppercase">
          34 Years of Trusted Collaboration
        </motion.h1>

        <motion.p variants={slideUpVariants} className="text-gray-600 text-base lg:text-lg max-w-3xl">
          Since 1990, LPC has worked with numerous valuable partners and clients in both government and private sectors. Here's a list of some of our most esteemed collaborators:
        </motion.p>

        <motion.div
          variants={zoomInVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white border border-yellow-400 hover:bg-yellow-100 transition-all duration-300 p-4 rounded-lg shadow hover:shadow-md flex flex-col items-center justify-center"
            >
              <img
                src={client.image}
                alt={client.name}
                className="h-16 w-auto object-contain mb-2"
              />
              <p className="text-sm lg:text-base font-medium text-black text-center">{client.name}</p>
            </div>
          ))}
        </motion.div>

        <motion.p variants={slideUpVariants} className="text-gray-500 text-sm mt-12 max-w-xl">
          LPC works with government sector organizations through its valuable partners and clients.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ClientsPartners;
