import { createClient } from '@supabase/supabase-js';

// These would be your real environment variables
// For now, I'm setting up the structure so it's ready to scale
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
