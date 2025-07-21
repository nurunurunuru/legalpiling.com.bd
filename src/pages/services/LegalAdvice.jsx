import React, { useEffect, useState } from 'react';

const LegalAdvice = () => {
  const [videoUrls, setVideoUrls] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('uploadedVideos')) || [];
    const embedded = stored.map((url) =>
      url.includes('watch?v=')
        ? url.replace('watch?v=', 'embed/')
        : url.includes('youtu.be/')
        ? url.replace('youtu.be/', 'youtube.com/embed/')
        : url
    );
    setVideoUrls(embedded);
  }, []);

  const handleDeleteVideo = (indexToDelete) => {
    if (!window.confirm('🗑️ Are you sure you want to delete this video?')) return;

    const updatedVideos = videoUrls.filter((_, index) => index !== indexToDelete);
    const originalUrls = JSON.parse(localStorage.getItem('uploadedVideos')) || [];
    originalUrls.splice(indexToDelete, 1);
    localStorage.setItem('uploadedVideos', JSON.stringify(originalUrls));
    setVideoUrls(updatedVideos);
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12 drop-shadow-md">
        📺 Legal Advice Video Library
      </h2>

      {videoUrls.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-14">
          {videoUrls.map((url, index) => (
            <div
              key={index}
              className="group  border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative overflow-hidden rounded-t-2xl aspect-video">
                <iframe
                  src={url}
                  title={`Video ${index + 1}`}
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  {/* <h3 className="text-lg font-semibold text-gray-800">
                    Advice Video #{index + 1}
                  </h3>
                  <span className="text-sm text-gray-400">#{index + 1}</span> */}
                </div>

                <button
                  onClick={() => handleDeleteVideo(index)}
                  className="w-full mt-2 bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg shadow hover:from-red-600 hover:to-red-700 transition duration-200"
                >
                  Delete Video
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-20 text-xl font-medium">
          😕 No legal advice videos uploaded yet.
        </div>
      )}
    </div>
  );
};

export default LegalAdvice;
