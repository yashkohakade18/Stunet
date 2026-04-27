import { useState } from 'react'
import { Plus, GraduationCap } from 'lucide-react'
import { useColleges } from '../hooks/useColleges'
import { filterColleges } from '../utils/filterColleges'
import CollegeFilter from '../components/college/CollegeFilter'
import CollegeCard from '../components/college/CollegeCard'
import AddCollegeModal from '../components/college/AddCollegeModal'
import EditCollegeModal from '../components/college/EditCollegeModal'
import DeleteConfirm from '../components/college/DeleteConfirm'

const EMPTY_FILTERS = { query: '', cetScore: '', branch: '', location: '', type: '' }

export default function CollegeList() {
  const { colleges, addCollege, updateCollege, deleteCollege } = useColleges()

  const [filters, setFilters] = useState(EMPTY_FILTERS)
  const [showAdd, setShowAdd] = useState(false)
  const [editTarget, setEditTarget] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [sortBy, setSortBy] = useState('name')

  const filtered = filterColleges(colleges, filters)

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'name')   return a.name.localeCompare(b.name)
    if (sortBy === 'fees')   return a.fees - b.fees
    if (sortBy === 'minCET') return b.minCET - a.minCET
    return 0
  })

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 pt-24 pb-16">

      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[rgba(0,210,255,0.08)] border border-[rgba(0,210,255,0.2)] rounded-full text-[11px] font-mono text-[#00D2FF] tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
            Maharashtra CET 2024
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#E8F4FF]" style={{ fontFamily: 'Syne, sans-serif' }}>
            College List
          </h1>
          <p className="text-[#7A9BB5] mt-1.5 text-sm">
            Enter your CET score to find eligible colleges instantly
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#0C1520] border border-[#2A3F55] rounded-lg px-3 py-2.5 text-sm text-[#E8F4FF] outline-none focus:border-[rgba(0,210,255,0.4)] transition-colors"
          >
            <option value="name">Sort: Name</option>
            <option value="fees">Sort: Fees ↑</option>
            <option value="minCET">Sort: CET Score ↓</option>
          </select>

          {/* Add button */}
          <button
            onClick={() => setShowAdd(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#00D2FF] hover:bg-white text-black text-sm font-bold rounded-lg transition-all hover:-translate-y-0.5"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <Plus size={17} /> Add College
          </button>
        </div>
      </div>

      {/* Filter */}
      <div className="mb-6">
        <CollegeFilter
          filters={filters}
          onChange={setFilters}
          resultCount={sorted.length}
          total={colleges.length}
        />
      </div>

      {/* CET Score highlight banner */}
      {filters.cetScore && (
        <div className="mb-5 flex items-center gap-3 px-4 py-3 bg-[rgba(0,210,255,0.06)] border border-[rgba(0,210,255,0.2)] rounded-xl text-sm">
          <GraduationCap size={16} className="text-[#00D2FF] shrink-0" />
          <span className="text-[#7A9BB5]">
            Showing colleges where your score{' '}
            <span className="text-[#00D2FF] font-mono font-medium">{filters.cetScore}</span>
            {' '}falls within the CET eligibility range
          </span>
        </div>
      )}

      {/* Results */}
      {sorted.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {sorted.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
              onEdit={setEditTarget}
              onDelete={setDeleteTarget}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
          <div className="w-16 h-16 bg-[#0C1520] border border-[#2A3F55] rounded-2xl flex items-center justify-center">
            <GraduationCap size={28} className="text-[#4A6480]" />
          </div>
          <div>
            <p className="text-[#E8F4FF] font-semibold mb-1">No colleges found</p>
            <p className="text-sm text-[#7A9BB5]">
              {filters.cetScore
                ? `No colleges match a CET score of ${filters.cetScore}. Try a different score.`
                : 'Try adjusting your filters or search term.'}
            </p>
          </div>
          <button
            onClick={() => setFilters(EMPTY_FILTERS)}
            className="text-sm text-[#00D2FF] hover:text-white transition-colors underline underline-offset-2"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Modals */}
      <AddCollegeModal
        open={showAdd}
        onClose={() => setShowAdd(false)}
        onAdd={addCollege}
      />
      <EditCollegeModal
        open={!!editTarget}
        onClose={() => setEditTarget(null)}
        onUpdate={updateCollege}
        college={editTarget}
      />
      <DeleteConfirm
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={deleteCollege}
        college={deleteTarget}
      />
    </div>
  )
}
