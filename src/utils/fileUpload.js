import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Uploads a file to Supabase Storage
 * @param {File} file - The file to upload
 * @param {string} bucketName - The name of the storage bucket (default: 'public')
 * @param {string} path - The path within the bucket (e.g., 'profile-pictures/')
 * @returns {Promise<{data: object, error: Error}>} - Returns the uploaded file data or error
 */
export const uploadFile = async (file, bucketName = 'public', path = '') => {
  try {
    // Generate a unique filename to prevent overwrites
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
    const filePath = path ? `${path}${fileName}` : fileName;

    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Error uploading file:', error);
      return { data: null, error };
    }

    // Get the public URL of the uploaded file
    const { data: { publicUrl } } = supabase.storage
      .from(bucketName)
      .getPublicUrl(filePath);

    return { 
      data: { 
        ...data, 
        publicUrl,
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size
      }, 
      error: null 
    };
  } catch (error) {
    console.error('Error in uploadFile:', error);
    return { data: null, error };
  }
};

/**
 * Deletes a file from Supabase Storage
 * @param {string} filePath - The full path to the file in the bucket
 * @param {string} bucketName - The name of the storage bucket (default: 'public')
 * @returns {Promise<{data: object, error: Error}>} - Returns the result of the delete operation
 */
export const deleteFile = async (filePath, bucketName = 'public') => {
  try {
    const { data, error } = await supabase.storage
      .from(bucketName)
      .remove([filePath]);

    if (error) {
      console.error('Error deleting file:', error);
      return { data: null, error };
    }

    return { data, error: null };
  } catch (error) {
    console.error('Error in deleteFile:', error);
    return { data: null, error };
  }
};