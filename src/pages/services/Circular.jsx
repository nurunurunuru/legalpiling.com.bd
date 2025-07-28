import React, { useEffect, useState } from 'react';

const Circular = () => {
  const [circulars, setCirculars] = useState([]);

  useEffect(() => {
    const storedCirculars = JSON.parse(localStorage.getItem('jobCirculars')) || [];
    setCirculars(storedCirculars);
  }, []);

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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Circular;
