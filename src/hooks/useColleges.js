import { useContext } from 'react'
import { CollegeContext } from '../context/CollegeContext'

export function useColleges() {
  const ctx = useContext(CollegeContext)
  if (!ctx) throw new Error('useColleges must be used within CollegeProvider')
  return ctx
}
