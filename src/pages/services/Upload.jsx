import React, { useState, useEffect } from 'react';

const Upload = () => {
  // Your existing states
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);

  const [videoUrl, setVideoUrl] = useState('');
  const [videoSuccess, setVideoSuccess] = useState(false);
  const [uploadedVideos, setUploadedVideos] = useState([]);

  const [circularImage, setCircularImage] = useState(null);
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [circularSuccess, setCircularSuccess] = useState(false);
  const [jobCirculars, setJobCirculars] = useState([]);

  // New category-based upload states
  const [selectedCategory, setSelectedCategory] = useState('Machine');
  const [categoryImages, setCategoryImages] = useState([]);
  const [categoryImagePreview, setCategoryImagePreview] = useState(null);
  const [categoryUploadSuccess, setCategoryUploadSuccess] = useState(false);

  // Load all stored data on mount
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
    setUploadedImages(storedImages);

    const storedVideos = JSON.parse(localStorage.getItem('uploadedVideos')) || [];
    setUploadedVideos(storedVideos);

    const storedCirculars = JSON.parse(localStorage.getItem('jobCirculars')) || [];
    setJobCirculars(storedCirculars);

    // Load category images separately
    const storedCategoryImages = JSON.parse(localStorage.getItem('categoryImages')) || [];
    setCategoryImages(storedCategoryImages);
  }, []);

  // Your existing handlers for normal images
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedImages = [...uploadedImages, reader.result];
      localStorage.setItem('uploadedImages', JSON.stringify(updatedImages));
      setUploadedImages(updatedImages);
      setUploadSuccess(true);
      setImagePreview(reader.result);
      setTimeout(() => setUploadSuccess(false), 3000);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleDeleteImage = (indexToDelete) => {
    const confirmed = window.confirm(`Are you sure you want to delete Image #${indexToDelete + 1}?`);
    if (!confirmed) return;
    const updated = uploadedImages.filter((_, i) => i !== indexToDelete);
    localStorage.setItem('uploadedImages', JSON.stringify(updated));
    setUploadedImages(updated);
  };

  // Your existing handlers for video
  const handleVideoUpload = () => {
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      const updatedVideos = [...uploadedVideos, videoUrl];
      localStorage.setItem('uploadedVideos', JSON.stringify(updatedVideos));
      setUploadedVideos(updatedVideos);
      setVideoSuccess(true);
      setVideoUrl('');
      setTimeout(() => setVideoSuccess(false), 3000);
    } else {
      alert('Please enter a valid YouTube URL');
    }
  };

  const handleDeleteVideo = (indexToDelete) => {
    if (!window.confirm('🗑️ Are you sure you want to delete this video?')) return;
    const updated = uploadedVideos.filter((_, index) => index !== indexToDelete);
    localStorage.setItem('uploadedVideos', JSON.stringify(updated));
    setUploadedVideos(updated);
  };

  // Your existing handlers for job circular
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

    const updatedCirculars = [...jobCirculars, newCircular];
    localStorage.setItem('jobCirculars', JSON.stringify(updatedCirculars));
    setJobCirculars(updatedCirculars);

    setCircularSuccess(true);
    setJobTitle('');
    setCompanyName('');
    setDescription('');
    setDeadline('');
    setCircularImage(null);
    setTimeout(() => setCircularSuccess(false), 3000);
  };

  const handleDeleteCircular = (indexToDelete) => {
    const confirm = window.confirm(`Are you sure you want to delete job circular #${indexToDelete + 1}?`);
    if (!confirm) return;
    const updated = jobCirculars.filter((_, idx) => idx !== indexToDelete);
    localStorage.setItem('jobCirculars', JSON.stringify(updated));
    setJobCirculars(updated);
  };

  // --------- NEW CATEGORY IMAGE UPLOAD SECTION ------------

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCategoryImagePreview(null);
    setCategoryUploadSuccess(false);
  };

  const handleCategoryImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setCategoryImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCategoryImageUpload = () => {
    if (!categoryImagePreview) {
      alert('Please select an image to upload!');
      return;
    }

    const newCatImage = { src: categoryImagePreview, category: selectedCategory };
    const updatedCatImages = [...categoryImages, newCatImage];
    localStorage.setItem('categoryImages', JSON.stringify(updatedCatImages));
    setCategoryImages(updatedCatImages);

    setCategoryUploadSuccess(true);
    setCategoryImagePreview(null);
    setTimeout(() => setCategoryUploadSuccess(false), 3000);
  };

  const handleDeleteCategoryImage = (indexToDelete) => {
    if (!window.confirm(`Are you sure you want to delete this ${categoryImages[indexToDelete].category} image?`)) return;
    const updated = categoryImages.filter((_, i) => i !== indexToDelete);
    localStorage.setItem('categoryImages', JSON.stringify(updated));
    setCategoryImages(updated);
  };

  // Filter category images for display
  const filteredCategoryImages = categoryImages.filter(img => img.category === selectedCategory);

  // --------------------------------------------------------

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border border-gray-200 mb-28">

      {/* =================== Your EXISTING Image Upload =================== */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Upload Your Image</h2>

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
          <img src={imagePreview} alt="Preview" className="w-full h-52 object-cover rounded-md shadow" />
        </div>
      )}

      {/* Uploaded Images List */}
      {uploadedImages.length > 0 && (
        <div className="mt-6">
          <h3 className="text-md font-semibold text-gray-800 mb-3 text-center">🖼️ Uploaded Images:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {uploadedImages.map((img, index) => (
              <div key={index} className="relative border rounded-lg overflow-hidden shadow-sm">
                <img src={img} alt={`Uploaded ${index}`} className="w-full h-52 object-cover" />
                <div className="flex justify-between items-center px-3 py-2 bg-gray-100">
                  <span className="text-sm text-gray-600">Image #{index + 1}</span>
                  <button
                    onClick={() => handleDeleteImage(index)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =================== NEW CATEGORY-BASED IMAGE UPLOAD SECTION =================== */}
      <hr className="my-10" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Upload Image by Category</h2>

      {/* Category Buttons */}
      <div className="flex justify-center mb-6 space-x-4">
        {['Machine', 'Picnic', 'Project'].map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-md font-semibold ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Upload input */}
      <label className="block mb-4 cursor-pointer">
        <input type="file" accept="image/*" onChange={handleCategoryImageChange} className="hidden" />
        <div className="w-full h-40 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-lg hover:border-blue-500 transition">
          <span className="text-gray-500">Click or drag image here to upload for {selectedCategory}</span>
        </div>
      </label>

      {categoryUploadSuccess && (
        <div className="text-green-600 text-sm text-center mb-4">Category Image uploaded successfully!</div>
      )}

      {categoryImagePreview && (
        <div className="mt-4">
          <p className="text-gray-600 text-sm mb-2 text-center">Preview:</p>
          <img src={categoryImagePreview} alt="Category Preview" className="w-full h-52 object-cover rounded-md shadow" />
        </div>
      )}

      <button
        onClick={handleCategoryImageUpload}
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 mb-6"
      >
        Upload to {selectedCategory}
      </button>

      {/* Show uploaded category images */}
      {filteredCategoryImages.length > 0 && (
        <div className="mt-6">
          <h3 className="text-md font-semibold text-gray-800 mb-3 text-center">
            🖼️ Uploaded Images - {selectedCategory}:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredCategoryImages.map((img, idx) => {
              // Find real index in categoryImages for delete
              const realIndex = categoryImages.findIndex(i => i.src === img.src && i.category === img.category);
              return (
                <div key={realIndex} className="relative border rounded-lg overflow-hidden shadow-sm">
                  <img src={img.src} alt={`Uploaded ${realIndex}`} className="w-full h-52 object-cover" />
                  <div className="flex justify-between items-center px-3 py-2 bg-gray-100">
                    <span className="text-sm text-gray-600">Image #{realIndex + 1}</span>
                    <button
                      onClick={() => handleDeleteCategoryImage(realIndex)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =================== Your existing VIDEO upload section =================== */}
      <hr className="my-10" />
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

      {/* Uploaded Videos */}
      {uploadedVideos.length > 0 && (
        <div className="mt-6">
          <h3 className="text-md font-semibold text-gray-800 mb-3 text-center">📄 Uploaded Videos:</h3>
          {uploadedVideos.map((url, index) => {
            const embedUrl = url.includes('watch?v=')
              ? url.replace('watch?v=', 'embed/')
              : url.includes('youtu.be/')
              ? url.replace('youtu.be/', 'youtube.com/embed/')
              : url;

            return (
              <div key={index} className="mb-6 p-4 border rounded-xl bg-gray-100 shadow-sm">
                <div className="aspect-video mb-3 rounded-lg overflow-hidden border">
                  <iframe
                    src={embedUrl}
                    title={`Video ${index + 1}`}
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 truncate max-w-[70%]">{url}</span>
                  <button
                    onClick={() => handleDeleteVideo(index)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* =================== Your existing JOB CIRCULAR upload section =================== */}
      <hr className="my-10" />
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

      {/* Show uploaded circulars */}
      {jobCirculars.length > 0 && (
        <div className="mt-6">
          <h3 className="text-md font-semibold text-gray-800 mb-3 text-center">📄 Job Circulars:</h3>
          <div className="space-y-6">
            {jobCirculars.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-md bg-gray-50">
                {item.circularImage && (
                  <img src={item.circularImage} alt="Circular" className="max-h-40 w-auto mx-auto mb-4" />
                )}
                <h4 className="text-lg font-bold">{item.jobTitle}</h4>
                <p className="text-sm text-gray-600 mb-2">Company: {item.companyName}</p>
                <p className="mb-2">{item.description}</p>
                <p className="text-sm text-gray-500">Deadline: {item.deadline}</p>
                <button
                  onClick={() => handleDeleteCircular(index)}
                  className="mt-3 text-red-600 hover:text-red-800 font-medium"
                >
                  🗑️ Delete Circular
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
