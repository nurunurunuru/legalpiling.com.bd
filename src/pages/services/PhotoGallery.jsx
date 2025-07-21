import React from 'react';
import image1 from '../../assets/WhatsApp Image 2025-04-29 at 11.28.16 AM.jpeg';
import image2 from '../../assets/WhatsApp Image 2025-04-29 at 11.28.15 AM.jpeg';
import image3 from '../../assets/WhatsApp Image 2025-04-29 at 11.16.35 AM (1).jpeg';
import image4 from '../../assets/WhatsApp Image 2025-04-29 at 11.28.14 AM.jpeg';
import image5 from '../../assets/WhatsApp Image 2025-04-29 at 11.28.13 AM.jpeg';
import image6 from '../../assets/WhatsApp Image 2025-04-29 at 11.28.13 AM (2).jpeg';
import image7 from '../../assets/WhatsApp Image 2025-04-29 at 11.28.12 AM.jpeg';
import image8 from '../../assets/WhatsApp Image 2025-04-29 at 11.20.05 AM.jpeg';
import image9 from '../../assets/new1.jpeg';
import image10 from '../../assets/new2.jpeg';
import image11 from '../../assets/new3.jpeg';
import image12 from '../../assets/new4.jpeg';
import image13 from '../../assets/new5.jpeg';
// Add more imports as needed...

const importedImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13];

const PhotoGallery = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-3">📸 Photo Gallery</h1>
          <p className="text-lg text-gray-600">
            Explore our latest work and creative moments from different projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {importedImages.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md group bg-white"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              {/* <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 text-white text-center py-2 text-sm font-medium">
                {index + 1}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
