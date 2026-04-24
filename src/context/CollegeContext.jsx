import { createContext, useState } from 'react'
import { COLLEGES } from '../data/colleges'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const CollegeContext = createContext(null)

export function CollegeProvider({ children }) {
  const [colleges, setColleges] = useLocalStorage('studinfo_colleges', COLLEGES)

  const addCollege = (college) => {
    const newCollege = {
      ...college,
      id: Date.now().toString(),
      minCET: Number(college.minCET),
      maxCET: Number(college.maxCET),
      fees: Number(college.fees),
    }
    setColleges([...colleges, newCollege])
  }

  const updateCollege = (id, updates) => {
    setColleges(
      colleges.map((c) =>
        c.id === id
          ? {
              ...c,
              ...updates,
              minCET: Number(updates.minCET),
              maxCET: Number(updates.maxCET),
              fees: Number(updates.fees),
            }
          : c
      )
    )
  }

  const deleteCollege = (id) => {
    setColleges(colleges.filter((c) => c.id !== id))
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
