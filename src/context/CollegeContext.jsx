import { createContext, useState, useEffect } from 'react'
import { COLLEGES } from '../data/colleges'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { db } from '../services/database.service'

export const CollegeContext = createContext(null)

export function CollegeProvider({ children }) {
  const [colleges, setColleges] = useLocalStorage('studinfo_colleges', COLLEGES)

  // Sync with cloud database if available
  useEffect(() => {
    const syncColleges = async () => {
      const cloudColleges = await db.getColleges();
      if (cloudColleges && cloudColleges.length > 0) {
        // Simple merge or priority logic
        // For now, we trust the local storage as the primary dev source
      }
    };
    syncColleges();
  }, []);

  const addCollege = (college) => {
    const newCollege = {
      ...college,
      id: Date.now().toString(),
      minCET: parseFloat(college.minCET) || 0,
      maxCET: parseFloat(college.maxCET) || 100,
      fees: parseInt(college.fees) || 0,
      branches: college.branches || [],
      naac: college.naac || '',
      estYear: college.estYear || new Date().getFullYear(),
    }
    setColleges(prev => [...prev, newCollege])
  }

  const updateCollege = (id, updates) => {
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
    )
  }

  const deleteCollege = (id) => {
    setColleges(prev => prev.filter((c) => c.id !== id))
  }

  const getCollege = (id) => colleges.find((c) => c.id === id)

  return (
    <CollegeContext.Provider
      value={{ colleges, addCollege, updateCollege, deleteCollege, getCollege }}
    >
      {children}
    </CollegeContext.Provider>
  )
}
