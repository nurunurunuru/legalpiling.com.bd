import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { FaTools, FaBuilding, FaUsersCog, FaFlask } from 'react-icons/fa';
import Side from "../assets/WhatsApp Image 2025-04-29 at 11.20.05 AM (1).jpeg"

const services = [
  {
    icon: <FaTools size={28} className="text-yellow-400" />,
    title: 'Foundation Piling',
    description:
      'Expertise in large-diameter piles, diaphragm walls, under-ream piles, and in-situ retaining systems.',
  },
  {
    icon: <FaBuilding size={28} className="text-yellow-400" />,
    title: 'Civil Engineering',
    description:
      'From geotechnical investigation to jetty construction — complete, quality-assured solutions.',
  },
  {
    icon: <FaUsersCog size={28} className="text-yellow-400" />,
    title: 'Our Workforce',
    description:
      'A team of 350+ skilled professionals and cutting-edge equipment driving efficiency and safety.',
  },
  {
    icon: <FaFlask size={28} className="text-yellow-400" />,
    title: 'Construction Chemicals',
    description:
      'Distributors of top-tier admixtures and bentonite powders empowering modern construction.',
  },
];

const Wlcome = () => {
  return (
    <section
      id="about"
      className="w-[90%] lg:w-[80%] mx-auto py-24 flex flex-col gap-24"
    >
      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
        {/* Left - Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          className="w-full lg:w-[55%] flex flex-col gap-6"
        >
          <motion.h2
            variants={slideUpVariants}
            className="text-yellow-400 text-sm lg:text-base uppercase tracking-widest font-semibold"
          >
            Welcome to
          </motion.h2>

          <motion.h1
            variants={slideUpVariants}
            className="text-white text-4xl lg:text-6xl font-extrabold leading-tight uppercase drop-shadow-md"
          >
            Legal Piling <br /> & Construction
          </motion.h1>

          <div className="w-20 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full my-2" />

          <motion.div
            variants={slideUpVariants}
            className="text-gray-300 text-base lg:text-lg leading-relaxed space-y-5"
          >
            <p>
              Legal Piling and Construction (LPC) is one of the most renowned foundation builder and contractor of Bangladesh which is Established in 1990 under the leadership of <strong className="text-yellow-400">Md. Jewel Hossain</strong>. LPC started its journey with one set of tripod drilling rig in a single 100sft.
            </p>
            <p>
              Rented room of (3rd floor), Farm view Supermarket, providing construction service of Bored cast-in-situ Pile including boring, rod binding and casting services. With the increasing infrastructural growth of the country a large scale construction industry has also developed. As a development partner LPC also become a first growing Foundation builder and Construction Company in the country.
            </p>
            <p>
              We are ready to provide necessary engineering support and committed to continuously look into innovation to develop the most effective solutions. LPC is looking forward to listen our valuable customers and assuring our sincere service at all time.
            </p>
          </motion.div>

          <motion.div
            variants={zoomInVariants}
            whileHover={{ scale: 1.06 }}
            className="mt-6"
          >
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition duration-300 tracking-wider uppercase">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Right - Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full lg:w-[40%] flex justify-center items-center"
        >
          <div className="w-full h-72 lg:h-96 bg-yellow-400/10 rounded-xl border border-yellow-500/30 shadow-inner flex items-center justify-center text-yellow-300 text-xl font-bold italic">
            {/* You can replace this with an actual image */}
            <img src={Side} alt="" />
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUpVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-yellow-500/10 rounded-full">{service.icon}</div>
              <h3 className="text-white text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Wlcome;
