import React, { useState, useEffect } from 'react';

const CV = () => {
  const [cvList, setCvList] = useState([]);

  useEffect(() => {
    const storedCVs = localStorage.getItem('cvList');
    if (storedCVs) {
      setCvList(JSON.parse(storedCVs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cvList', JSON.stringify(cvList));
  }, [cvList]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const newCV = {
        id: Date.now(),
        name: file.name,
        date: new Date().toLocaleDateString(),
        fileData: reader.result,
      };

      setCvList((prev) => [...prev, newCV]);
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (id) => {
    setCvList((prev) => prev.filter((cv) => cv.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-slate-200 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 border border-slate-200">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">CV Manager</h2>

        <label className="block mb-6">
          <span className="text-gray-700 font-medium">Upload a new CV</span>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
            className="mt-2 w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition duration-300"
          />
        </label>

        <hr className="my-6 border-slate-300" />

        {cvList.length > 0 ? (
          <div className="space-y-4">
            {cvList.map((cv) => (
              <div
                key={cv.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between bg-slate-50 hover:bg-slate-100 transition duration-200 p-4 rounded-lg border border-slate-200 shadow-sm"
              >
                <div>
                  <p className="text-lg font-medium text-gray-800">{cv.name}</p>
                  <p className="text-sm text-gray-500">Uploaded: {cv.date}</p>
                </div>
                <div className="flex items-center gap-4 mt-3 md:mt-0">
                  <a
                    href={cv.fileData}
                    download={cv.name}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 transition"
                  >
                    Download
                  </a>
                  <button
                    onClick={() => handleDelete(cv.id)}
                    className="text-sm font-medium text-red-500 hover:text-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-6 italic">No CV uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default CV;
