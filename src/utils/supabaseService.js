import { supabase } from '../lib/supabaseClient';

/**
 * Service to handle all Supabase interactions.
 * If Supabase is not configured, it could potentially log errors or fall back.
 */

export const supabaseService = {
  // COLLEGES
  async getColleges() {
    const { data, error } = await supabase
      .from('colleges')
      .select('*')
      .order('name');
    
    if (error) throw error;
    return data;
  },

  async addCollege(college) {
    const { data, error } = await supabase
      .from('colleges')
      .insert([college])
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async updateCollege(id, updates) {
    const { data, error } = await supabase
      .from('colleges')
      .update(updates)
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async deleteCollege(id) {
    const { error } = await supabase
      .from('colleges')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  },

  // NOTES
  async getNotes() {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async addNote(note) {
    const { data, error } = await supabase
      .from('notes')
      .insert([note])
      .select();
    
    if (error) throw error;
    return data[0];
  },

  // PAPERS
  async getPapers() {
    const { data, error } = await supabase
      .from('papers')
      .select('*')
      .order('year', { ascending: false });
    
    if (error) throw error;
    return data;
  }
};
