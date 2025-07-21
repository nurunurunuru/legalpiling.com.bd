import React, { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react'; // install lucide-react or use any icon library

const Circular = () => {
  const [circulars, setCirculars] = useState([]);

  useEffect(() => {
    const storedCirculars = JSON.parse(localStorage.getItem('jobCirculars')) || [];
    setCirculars(storedCirculars);
  }, []);

  const handleDelete = (indexToDelete) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this job circular?');
    if (!confirmDelete) return;

    const updatedCirculars = circulars.filter((_, index) => index !== indexToDelete);
    setCirculars(updatedCirculars);
    localStorage.setItem('jobCirculars', JSON.stringify(updatedCirculars));
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 px-4 md:px-0">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">📋 Job Circulars</h2>

      {circulars.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No job circulars uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {circulars.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 relative group transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              {item.circularImage && (
                <img
                  src={item.circularImage}
                  alt="Thumbnail"
                  className="w-full h-52 object-cover rounded-xl mb-4 border"
                />
              )}

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-blue-700">{item.jobTitle}</h3>
                <p className="text-sm font-semibold text-gray-600">
                  🏢 <span className="text-gray-800">{item.companyName}</span>
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                <div className="mt-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    📅 Deadline: {item.deadline}
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleDelete(index)}
                className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition"
                title="Delete"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Circular;
