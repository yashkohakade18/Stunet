import { Search, SlidersHorizontal, X } from 'lucide-react'
import { BRANCHES, LOCATIONS, COLLEGE_TYPES } from '../../data/colleges'
import Input from '../ui/Input'
import Button from '../ui/Button'

export default function CollegeFilter({ filters, onChange, resultCount, total }) {
  const set = (key, val) => onChange({ ...filters, [key]: val })

  const hasActiveFilter =
    filters.query || filters.cetScore || filters.branch || filters.location || filters.type

  const clearAll = () =>
    onChange({ query: '', cetScore: '', branch: '', location: '', type: '' })

  return (
    <div className="bg-[#0C1520] border border-[rgba(0,210,255,0.12)] rounded-2xl p-5 flex flex-col gap-4">
      {/* Top row */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 text-sm text-[#7A9BB5]">
          <SlidersHorizontal size={15} className="text-[#00D2FF]" />
          <span>
            Showing <span className="text-[#E8F4FF] font-semibold">{resultCount}</span> of{' '}
            <span className="text-[#E8F4FF] font-semibold">{total}</span> colleges
          </span>
        </div>
        {hasActiveFilter && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 text-xs text-[#FF4FA3] hover:text-white transition-colors"
          >
            <X size={13} /> Clear filters
          </button>
        )}
      </div>

      {/* Filters row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search */}
        <div className="lg:col-span-2">
          <Input
            icon={Search}
            value={filters.query}
            onChange={(e) => set('query', e.target.value)}
            placeholder="Search college name or city..."
          />
        </div>

        {/* CET Score */}
        <div className="relative">
          <Input
            type="number"
            min="0"
            max="200"
            value={filters.cetScore}
            onChange={(e) => set('cetScore', e.target.value)}
            placeholder="Your CET score"
          />
          {filters.cetScore && (
            <span className="percentile-badge">
              percentile
            </span>
          )}
        </div>

        {/* Branch */}
        <select
          value={filters.branch}
          onChange={(e) => set('branch', e.target.value)}
          className="bg-[#080E16] border border-[#2A3F55] rounded-lg px-3 py-2.5 text-sm text-[#E8F4FF] outline-none focus:border-[rgba(0,210,255,0.4)] transition-colors"
        >
          <option value="">All Branches</option>
          {BRANCHES.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        {/* Location */}
        <select
          value={filters.location}
          onChange={(e) => set('location', e.target.value)}
          className="bg-[#080E16] border border-[#2A3F55] rounded-lg px-3 py-2.5 text-sm text-[#E8F4FF] outline-none focus:border-[rgba(0,210,255,0.4)] transition-colors"
        >
          <option value="">All Cities</option>
          {LOCATIONS.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap items-center gap-3 mt-2">
        <span className="text-xs text-[#7A9BB5] font-medium uppercase tracking-wider">Quick Filters:</span>
        <button
          onClick={() => set('type', 'Government')}
          className={`filter-pill ${filters.type === 'Government' ? 'active' : ''}`}
        >
          Government
        </button>
        <button
          onClick={() => set('naac', 'A+')}
          className={`filter-pill ${filters.naac === 'A+' ? 'active' : ''}`}
        >
          Top Rated (NAAC A+)
        </button>
        <button
          onClick={() => set('location', 'Pune')}
          className={`filter-pill ${filters.location === 'Pune' ? 'active' : ''}`}
        >
          Pune Colleges
        </button>
      </div>

      {/* Type pills */}
      <div className="flex flex-wrap gap-2 mt-2">
        {['', ...COLLEGE_TYPES].map((t) => (
          <button
            key={t}
            onClick={() => set('type', t)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
              filters.type === t
                ? 'bg-[#00D2FF] text-black border-[#00D2FF]'
                : 'bg-transparent text-[#7A9BB5] border-[#2A3F55] hover:border-[#00D2FF] hover:text-[#00D2FF]'
            }`}
          >
            {t === '' ? 'All Types' : t}
          </button>
        ))}
      </div>
    </div>
  )
}
