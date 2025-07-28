import { useState } from 'react';
import { uploadFile } from '../utils/fileUpload';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if the file is an image
      if (!file.type.startsWith('image/')) {
        setError('Please select an image file');
        return;
      }
      setSelectedFile(file);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file first');
      return;
    }

    setUploading(true);
    setError(null);

    try {
      // Upload the file to the 'images' folder in your 'public' bucket
      const { data, error: uploadError } = await uploadFile(
        selectedFile,
        'public',
        'images/'
      );

      if (uploadError) {
        throw uploadError;
      }

      setUploadResult(data);
      setSelectedFile(null);
      // Clear the file input
      document.getElementById('file-upload').value = '';
    } catch (err) {
      console.error('Upload failed:', err);
      setError(err.message || 'Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md p-4 border rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
      
      <div className="mb-4">
        <label 
          htmlFor="file-upload" 
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Choose an image
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
          disabled={uploading}
        />
        {selectedFile && (
          <p className="mt-2 text-sm text-gray-600">
            Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
          </p>
        )}
      </div>

      <button
        onClick={handleUpload}
        disabled={!selectedFile || uploading}
        className={`w-full px-4 py-2 text-white rounded-md
          ${!selectedFile || uploading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>

      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {uploadResult && (
        <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          <p>Upload successful!</p>
          <p className="text-sm mt-1">
            <a 
              href={uploadResult.publicUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View uploaded image
            </a>
          </p>
          <p className="text-xs mt-2 text-gray-600">
            Path: {uploadResult.path}
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;