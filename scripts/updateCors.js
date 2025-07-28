const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function updateCors() {
  try {
    // Update bucket configuration
    const { data: bucketData, error: bucketError } = await supabase
      .storage
      .updateBucket('public', {
        public: true,
        allowedMimeTypes: ['image/*', 'video/*', 'application/pdf'],
        fileSizeLimit: 1024 * 1024 * 10, // 10MB
      });

    if (bucketError) {
      console.error('Error updating bucket configuration:', bucketError);
      return;
    }

    console.log('Bucket configuration updated successfully:', bucketData);

    // Create a public access policy if it doesn't exist
    const { data: policyData, error: policyError } = await supabase
      .rpc('create_storage_policy');

    if (policyError) {
      console.log('Creating storage policy...');
      const { data, error } = await supabase.rpc('create_storage_policy', {
        policy_name: 'Public Access',
        bucket_name: 'public',
        operation: 'SELECT',
        using: 'true',
        with_check: 'true'
      });
      
      if (error) {
        console.error('Error creating storage policy:', error);
        return;
      }
      console.log('Storage policy created successfully');
    } else {
      console.log('Storage policy already exists');
    }

  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

updateCors();
