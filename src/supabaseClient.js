import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zzmnemneiqjsokwvkisb.supabase.co'; // তোমার প্রকৃত URL বসাও
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6bW5lbW5laXFqc29rd3ZraXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2OTkxMTMsImV4cCI6MjA2OTI3NTExM30.81eqLzyQO6HKChk29E9Osv2Zi4oR45vvvqRytNwsps4'; // তোমার প্রকৃত anon key বসাও

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
