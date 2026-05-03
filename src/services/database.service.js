import { supabase } from '../lib/supabaseClient';

/**
 * Database Service
 * Handles all CRUD operations for Colleges, Notes, Papers, and User Activity.
 * Designed to scale with Supabase (Postgres).
 */
export const db = {
  // --- Colleges ---
  async getColleges() {
    try {
      const { data, error } = await supabase.from('colleges').select('*');
      if (error) throw error;
      return data;
    } catch (err) {
      console.warn('Supabase not connected, using fallback logic');
      return JSON.parse(localStorage.getItem('stunet_colleges')) || [];
    }
  },

  // --- Notes & Papers (Resources) ---
  async getResources(type = 'note') {
    try {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .eq('type', type);
      if (error) throw error;
      return data;
    } catch (err) {
      const key = type === 'note' ? 'stunet_notes' : 'stunet_papers';
      return JSON.parse(localStorage.getItem(key)) || [];
    }
  },

  async uploadResource(resource) {
    // resource: { title, file_url, year, department, subject, type, uploader_id }
    try {
      const { data, error } = await supabase.from('resources').insert([resource]);
      if (error) throw error;
      return data;
    } catch (err) {
      const key = resource.type === 'note' ? 'stunet_notes' : 'stunet_papers';
      const existing = JSON.parse(localStorage.getItem(key)) || [];
      const updated = [...existing, { ...resource, id: Date.now() }];
      localStorage.setItem(key, JSON.stringify(updated));
      return updated;
    }
  },

  // --- Chat / AI Activity ---
  async logChat(message, response) {
    // Analytics to improve the AI based on user queries
    console.log('Logging chat interaction:', { message, response });
  }
};
