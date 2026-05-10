import { createContext, useState, useEffect, useCallback } from 'react'
import { COLLEGES } from '../data/colleges'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { db } from '../services/database.service'
import { useToast } from './ToastContext'

export const CollegeContext = createContext(null)

export function CollegeProvider({ children }) {
  const [colleges, setColleges] = useLocalStorage('studinfo_colleges', COLLEGES)
  const { toast } = useToast()

  const refreshColleges = useCallback(async () => {
    try {
      const cloudColleges = await db.getColleges();
      if (cloudColleges && cloudColleges.length > 0) {
        setColleges(cloudColleges);
      }
    } catch (err) {
      console.error('Failed to fetch colleges:', err);
    }
  }, [setColleges]);

  useEffect(() => {
    refreshColleges();
  }, [refreshColleges]);

  const addCollege = async (college) => {
    try {
      const newCollege = {
        ...college,
        minCET: parseFloat(college.minCET) || 0,
        maxCET: parseFloat(college.maxCET) || 100,
        fees: parseInt(college.fees) || 0,
        branches: college.branches || [],
        naac: college.naac || '',
        estYear: college.estYear || new Date().getFullYear(),
      };
      
      const result = await db.uploadResource({ ...newCollege, type: 'college' }); // Using existing uploadResource for simplicity or extending db service
      // Note: In a real implementation, we'd have a specific addCollege in db service
      // For now, let's update local state to be snappy
      setColleges(prev => [...prev, { ...newCollege, id: Date.now().toString() }]);
      toast({ message: 'College added successfully!', type: 'success' });
    } catch (err) {
      toast({ message: 'Error adding college.', type: 'error' });
    }
  };

  const updateCollege = async (id, updates) => {
    try {
      setColleges(prev => 
        prev.map((c) =>
          c.id === id
            ? {
                ...c,
                ...updates,
                minCET: parseFloat(updates.minCET) || c.minCET,
                maxCET: parseFloat(updates.maxCET) || c.maxCET,
                fees: parseInt(updates.fees) || c.fees,
              }
            : c
        )
      );
      toast({ message: 'College updated!', type: 'success' });
    } catch (err) {
      toast({ message: 'Error updating college.', type: 'error' });
    }
  };

  const deleteCollege = async (id) => {
    try {
      setColleges(prev => prev.filter((c) => c.id !== id));
      toast({ message: 'College removed.', type: 'info' });
    } catch (err) {
      toast({ message: 'Error deleting college.', type: 'error' });
    }
  };

  const getCollege = (id) => colleges.find((c) => c.id === id);

  return (
    <CollegeContext.Provider
      value={{ colleges, addCollege, updateCollege, deleteCollege, getCollege, refreshColleges }}
    >
      {children}
    </CollegeContext.Provider>
  )
}
