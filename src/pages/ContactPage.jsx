import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

const ContactPage = () => {
  return (
    <div id='contact' className='bg-white w-full'>
      <div className='lg:w-[80%] w-[90%] m-auto py-16 flex lg:flex-row flex-col justify-between items-start gap-12'>
        {/* Left Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
        >
          <motion.h2
            variants={slideUpVariants}
            className='text-yellow-500 text-2xl font-semibold'
          >
            Contact Us
          </motion.h2>
          <motion.h1
            variants={slideUpVariants}
            className='text-black uppercase text-4xl font-bold tracking-wide'
          >
            Reach Us For Any Query
          </motion.h1>
          <div className='w-[120px] h-[6px] bg-yellow-500 mb-4'></div>
          <p className='text-lg text-gray-700 italic'>
            All of our valuable clients, partners, and officials are most welcome to contact us for any queries regarding our services and achievements. Please reach out to us at:
          </p>
          <div className='space-y-4 mt-6'>
            <h3 className='text-2xl font-semibold text-black'>Corporate Office:</h3>
            <p className='text-base text-gray-700'>
              LPC has its own well-decorated 2,900 sqft corporate office located at the heart of Dhaka city:
            </p>
            <p className='text-base text-gray-700'>
              <span className='font-medium'>Address:</span> 87-92 B Green Road (5th floor), Firmview Supermarket, Farmgate, Dhaka-1215<br />
              <span className='font-medium'>Phone:</span> +880-2-58154471<br />
              <span className='font-medium'>Mobile:</span> +8801713019700, +8801865103710, +8801865-103732<br />
              <span className='font-medium'>Email:</span> lpc_jewel@yahoo.com, legalpiling1215@gmail.com
            </p>
          </div>
        </motion.div>

        {/* Right Section - Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[40%] w-full bg-gray-100 rounded-2xl p-8 shadow-md'
        >
          <motion.div
            initial="visible"
            whileInView="visible"
            variants={zoomInVariants}
            className='flex flex-col gap-6 text-gray-800'
          >
            <h2 className='text-2xl font-bold text-yellow-600 border-b pb-2'>Key Contacts</h2>

            <div>
              <h3 className='font-semibold text-lg'>Chief Executive Officer</h3>
              <p>Mohammad Jewel Hossain<br />
                <strong>Phone:</strong> +880-2-9134367<br />
                <strong>Mobile:</strong> 01713019700, 01865103710<br />
                <strong>Email:</strong> jewel@legalpiling.com.bd
              </p>
            </div>

            <div>
              <h3 className='font-semibold text-lg'>Director</h3>
              <p>Md. Saiful Islam<br />
                <strong>Phone:</strong> +88-02-41025462<br />
                <strong>Mobile:</strong> 01711587196, 01865103700<br />
                <strong>Email:</strong> jewel@legalpiling.com.bd
              </p>
            </div>

            <div>
              <h3 className='font-semibold text-lg'>Admin & Co-Ordinator</h3>
              <p>Mr. Md. Rafikul Islam<br />
                <strong>Phone:</strong> +880-2-41025462<br />
                <strong>Mobile:</strong> +8801718587841<br />
                <strong>Email:</strong> lpc_jewel@yahoo.com, lpcrafikul@gmail.com
              </p>
            </div>

            <div>
              <h3 className='font-semibold text-lg'>Executive Engineer (Technical & Buiseness Development)</h3>
              <p>Md. Sorug Rashid Chowdhury (Saikat)<br />
                <em>B.Sc in Civil & Environmental Engineering</em><br />

                <em>Advanced Project Management (BUET)</em><br />
                <em>PDA, Ultrasonic Pile Borehole Measurement Test &</em><br />
                <em>Bi-directional Pile Static Load Test Trained by SINOROCK & OUGAN (CHINA)</em><br />
                <em>CSL & PIT Test Trained by PDI (MALAYSIA)</em><br />
                <em>Hydraulic Jack, Load Cell, Data Logger, Piezometer, Strain Gauge, Tilt Meter</em><br />
                <em>Inclinometer and Borehole Extensometer Trained by ENCARDIORITE & ORIENTAL (INDIA)</em><br />
                <em>Corrosion Meter, Resistivity Meter Trained by PROSEQ</em><br />
                <strong>Phone:</strong> +880-2-58154471<br />
                <strong>Mobile:</strong> +88 01742-103652<br />
                <strong>Email:</strong> lpc_jewel@yahoo.com, saikatrashid@gmail.com
              </p>
            </div>

            <div>
              <h3 className='font-semibold text-lg'>Manager (Office)</h3>
              <p>Md. Zulfiker Ali Khan<br />
                <strong>Phone:</strong> +880-2-9134367<br />
                <strong>Mobile:</strong> 01865-103732<br />
                <strong>Email:</strong> lpc_jewel@yahoo.com, zulfiker.2013@yahoo.com
              </p>
            </div>

            <div>
              <h3 className='font-semibold text-lg'>Head of Finance & IT</h3>
              <p>Mohammad Ashraful Alam<br />
                <strong>Phone:</strong> +880-2-9134367<br />
                <strong>Mobile:</strong> 01711110160<br />
                <strong>Email:</strong> lpc_jewel@yahoo.com, ashrafulalam1980sb@gmail.com
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage;
