// Upload.js
import React, { useState } from 'react';

const Upload = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoSuccess, setVideoSuccess] = useState(false);

  // Job Circular States
  const [circularImage, setCircularImage] = useState(null);
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [circularSuccess, setCircularSuccess] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const existing = JSON.parse(localStorage.getItem('uploadedImages')) || [];
      existing.push(reader.result);
      localStorage.setItem('uploadedImages', JSON.stringify(existing));
      setUploadSuccess(true);
      setImagePreview(reader.result);
      setTimeout(() => setUploadSuccess(false), 3000);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleCircularImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCircularImage(reader.result);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleCircularUpload = () => {
    if (!circularImage || !jobTitle || !companyName || !description || !deadline) {
      alert('Please fill all circular fields!');
      return;
    }

    const newCircular = {
      circularImage,
      jobTitle,
      companyName,
      description,
      deadline,
    };

    const existing = JSON.parse(localStorage.getItem('jobCirculars')) || [];
    existing.push(newCircular);
    localStorage.setItem('jobCirculars', JSON.stringify(existing));

    setCircularSuccess(true);
    setJobTitle('');
    setCompanyName('');
    setDescription('');
    setDeadline('');
    setCircularImage(null);
    setTimeout(() => setCircularSuccess(false), 3000);
  };

  const handleVideoUpload = () => {
  if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
    const existingVideos = JSON.parse(localStorage.getItem('uploadedVideos')) || [];

    existingVideos.push(videoUrl);
    localStorage.setItem('uploadedVideos', JSON.stringify(existingVideos));

    setVideoSuccess(true);
    setVideoUrl('');
    setTimeout(() => setVideoSuccess(false), 3000);
  } else {
    alert('Please enter a valid YouTube URL');
  }
};

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border border-gray-200 mb-28">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Upload Your Image</h2>

      {/* Image Upload */}
      <label className="block mb-4 cursor-pointer">
        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
        <div className="w-full h-40 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-lg hover:border-blue-500 transition">
          <span className="text-gray-500">Click or drag image here to upload</span>
        </div>
      </label>
      {uploadSuccess && <div className="text-green-600 text-sm text-center mb-4">Image uploaded successfully!</div>}
      {imagePreview && (
        <div className="mt-4">
          <p className="text-gray-600 text-sm mb-2 text-center">Preview:</p>
          <img src={imagePreview} alt="Preview" className="w-full h-auto rounded-md shadow" />
        </div>
      )}

      {/* Video Upload */}
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2 text-center">Upload YouTube Video</h2>
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Paste YouTube video URL here"
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleVideoUpload}
        className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Upload Video
      </button>
      {videoSuccess && <div className="text-green-600 text-sm text-center mt-3">Video URL saved successfully!</div>}

      {/* Job Circular Upload */}
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2 text-center">Upload Job Circular</h2>
      <input type="file" accept="image/*" onChange={handleCircularImage} className="mb-2" />
      <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        placeholder="Job Title"
        className="w-full mb-2 px-4 py-2 border rounded-md"
      />
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        placeholder="Company Name"
        className="w-full mb-2 px-4 py-2 border rounded-md"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Job Description"
        className="w-full mb-2 px-4 py-2 border rounded-md"
        rows={4}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="w-full mb-2 px-4 py-2 border rounded-md"
      />
      <button
        onClick={handleCircularUpload}
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
      >
        Submit Circular
      </button>
      {circularSuccess && (
        <div className="text-green-600 text-sm text-center mt-3">Job Circular uploaded successfully!</div>
      )}
    </div>
  );
};

export default Upload;
