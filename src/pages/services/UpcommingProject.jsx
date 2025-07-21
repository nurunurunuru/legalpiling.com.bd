import React, { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react'; // If using lucide icons (optional)

const UpcomingProject = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
    setImages(savedImages);
  }, []);

  const handleDelete = (indexToDelete) => {
    const confirmed = window.confirm("Are you sure you want to delete this image?");
    if (!confirmed) return;

    const updatedImages = images.filter((_, index) => index !== indexToDelete);
    setImages(updatedImages);
    localStorage.setItem('uploadedImages', JSON.stringify(updatedImages));
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          🚧 Upcoming Projects
        </h2>

        {images.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            <p className="mb-2">No images uploaded yet.</p>
            <span className="text-4xl">📁</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative group rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition duration-300 bg-white"
              >
                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(index)}
                  className="absolute top-3 right-3 bg-white/80 backdrop-blur-md text-red-600 hover:text-white hover:bg-red-600 rounded-full p-1.5 transition duration-200 z-10"
                  title="Delete Image"
                >
                  {/* Use Lucide or emoji fallback */}
                  <Trash2 className="w-4 h-4" />
                  {/* Or use this instead of icon: &times; */}
                </button>

                <img
                  src={img}
                  alt={`Uploaded ${index}`}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                  <p className="text-white text-base font-semibold">Project #{index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingProject;
