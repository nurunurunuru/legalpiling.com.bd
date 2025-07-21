import React, { useEffect, useState } from 'react';

const CVList = () => {
  const [cvList, setCvList] = useState([]);

  useEffect(() => {
    const storedCVs = localStorage.getItem('cvList');
    if (storedCVs) {
      setCvList(JSON.parse(storedCVs));
    }
  }, []);

  const handleDelete = (id) => {
    const updatedList = cvList.filter((cv) => cv.id !== id);
    setCvList(updatedList);
    localStorage.setItem('cvList', JSON.stringify(updatedList));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 border border-slate-200">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-3">📄 Uploaded CVs</h2>

        {cvList.length > 0 ? (
          <div className="space-y-5">
            {cvList.map((cv) => (
              <div
                key={cv.id}
                className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-50 hover:bg-slate-100 transition duration-200 border border-slate-300 rounded-lg p-5 shadow-sm"
              >
                <div>
                  <p className="text-lg font-medium text-gray-800">{cv.name}</p>
                  <p className="text-sm text-gray-500">Uploaded on: {cv.date}</p>
                </div>
                <div className="flex gap-4 mt-4 md:mt-0">
                  <a
                    href={cv.fileData}
                    download={cv.name}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 transition"
                  >
                    ⬇️ Download
                  </a>
                  <button
                    onClick={() => handleDelete(cv.id)}
                    className="text-sm font-medium text-red-500 hover:text-red-700 transition"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6 italic">No CVs uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default CVList;
