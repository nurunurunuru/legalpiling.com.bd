import React, { useState, useEffect } from 'react';

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Machine');
  const [categoryImages, setCategoryImages] = useState([]);

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('categoryImages')) || [];
    setCategoryImages(storedImages);
  }, []);

  // ফিল্টার করবে শুধু সেই ক্যাটাগরির ছবি
  const filteredImages = categoryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-3">📸 Photo Gallery</h1>
          <p className="text-lg text-gray-600">
            Explore our latest work and creative moments from different projects.
          </p>
        </div>

        {/* ক্যাটাগরি বাটন */}
        <div className="flex justify-center mb-8 space-x-6">
          {['Machine', 'Picnic', 'Project'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-md font-semibold ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ছবি দেখাবে */}
        {filteredImages.length === 0 ? (
          <p className="text-center text-gray-500">No images found for {selectedCategory}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((img, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-xl shadow-md group bg-white">
                <img
                  src={img.src}
                  alt={`${selectedCategory} Image ${idx + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
