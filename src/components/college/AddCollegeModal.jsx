import { useState } from 'react'
import { X, Plus } from 'lucide-react'
import { BRANCHES, LOCATIONS, COLLEGE_TYPES } from '../../data/colleges'

const EMPTY = {
  name: '',
  location: '',
  type: 'Private',
  minCET: '',
  maxCET: '',
  fees: '',
  naac: '',
  estYear: '',
  branches: [],
}

function validate(data) {
  const errors = {}
  if (!data.name.trim()) errors.name = 'College name is required'
  if (!data.location.trim()) errors.location = 'Location is required'
  if (data.minCET === '') errors.minCET = 'Required'
  if (data.maxCET === '') errors.maxCET = 'Required'
  if (Number(data.minCET) < 0 || Number(data.minCET) > 200) errors.minCET = '0 – 200'
  if (Number(data.maxCET) < 0 || Number(data.maxCET) > 200) errors.maxCET = '0 – 200'
  if (Number(data.minCET) >= Number(data.maxCET)) errors.maxCET = 'Must be > Min'
  if (data.fees === '') errors.fees = 'Required'
  if (data.branches.length === 0) errors.branches = 'Select at least one branch'
  return errors
}

export default function AddCollegeModal({ open, onClose, onAdd }) {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})

  if (!open) return null

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }))
    setErrors((e) => ({ ...e, [k]: undefined }))
  }

  const toggleBranch = (b) => {
    set(
      'branches',
      form.branches.includes(b) ? form.branches.filter((x) => x !== b) : [...form.branches, b]
    )
  }

  const handleSubmit = () => {
    const errs = validate(form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    onAdd(form)
    setForm(EMPTY)
    setErrors({})
    onClose()
  }

  const handleClose = () => {
    setForm(EMPTY)
    setErrors({})
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative w-full max-w-xl bg-[#101926] border border-[rgba(0,210,255,0.2)] rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A3F55]">
          <div>
            <h3 className="font-bold text-lg text-[#E8F4FF]">Add College</h3>
            <p className="text-xs text-[#7A9BB5] mt-0.5">Fill in the college details below</p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-[#7A9BB5] hover:text-white hover:bg-[#0C1520] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
          {/* Name */}
          <div>
            <label className="block text-xs font-medium text-[#7A9BB5] uppercase tracking-wider mb-1.5">
              College Name *
            </label>
            <input
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
              placeholder="e.g. College of Engineering, Pune"
              className={`w-full bg-[#0C1520] border rounded-lg px-3 py-2.5 text-sm text-[#E8F4FF] placeholder-[#4A6480] outline-none transition-colors ${
                errors.name ? 'border-red-500/60' : 'border-[#2A3F55] focus:border-[rgba(0,210,255,0.4)]'
              }`}
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          {/* Location + Type */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-[#7A9BB5] uppercase tracking-wider mb-1.5">
                City *
              </label>
              <select
                value={form.location}
                onChange={(e) => set('location', e.target.value)}
                className={`w-full bg-[#0C1520] border rounded-lg px-3 py-2.5 text-sm text-[#E8F4FF] outline-none transition-colors ${
                  errors.location ? 'border-red-500/60' : 'border-[#2A3F55] focus:border-[rgba(0,210,255,0.4)]'
                }`}
              >
                <option value="">Select city</option>
                {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
              </select>
              {errors.location && <p className="text-xs text-red-400 mt-1">{errors.location}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-[#7A9BB5] uppercase tracking-wider mb-1.5">
                Type
              </label>
              <select
                value={form.type}
                onChange={(e) => set('type', e.target.value)}
                className="w-full bg-[#0C1520] border border-[#2A3F55] rounded-lg px-3 py-2.5 text-sm text-[#E8F4FF] outline-none focus:border-[rgba(0,210,255,0.4)] transition-colors"
              >
                {COLLEGE_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>

          {/* CET Range */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-[#7A9BB5] uppercase tracking-wider mb-1.5">
                Min CET Score *
              </label>
              <input
                type="number"
                min="0"
                max="200"
                value={form.minCET}
                onChange={(e) => set('minCET', e.target.value)}
                placeholder="e.g. 85"
                className={`w-full bg-[#0C1520] border rounded-lg px-3 py-2.5 text-sm text-[#E8F4FF] placeholder-[#4A6480] outline-none transition-colors ${
                  errors.minCET ? 'border-red-500/60' : 'border-[#2A3F55] focus:border-[rgba(0,210,255,0.4)]'
                }`}
              />
              {errors.minCET && <p className="text-xs text-red-400 mt-1">{errors.minCET}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-[#7A9BB5] uppercase tracking-wider mb-1.5">
                Max CET Score *
              </label>
              <input
                type="number"
                min="0"
                max="200"
                value={form.maxCET}
                onChange={(e) => set('maxCET', e.target.value)}
                placeholder="e.g. 200"
                className={`w-full bg-[#0C1520] border rounded-lg px-3 py-2.5 text-sm text-[#E8F4FF] placeholder-[#4A6480] outline-none transition-colors ${
                  errors.maxCET ? 'border-red-500/60' : 'border-[#2A3F55] focus:border-[rgba(0,210,255,0.4)]'
                }`}
              />
              {errors.maxCET && <p className="text-xs text-red-400 mt-1">{errors.maxCET}</p>}
            </div>
          </div>

          {/* Fees + Est Year */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-[#7A9BB5] uppercase tracking-wider mb-1.5">
                Annual Fees (₹) *
              </label>
              <input
                type="number"
                value={form.fees}
                onChange={(e) => set('fees', e.target.value)}
                placeholder="e.g. 150000"
                className={`w-full bg-[#0C1520] border rounded-lg px-3 py-2.5 text-sm text-[#E8F4FF] placeholder-[#4A6480] outline-none transition-colors ${
                  errors.fees ? 'border-red-500/60' : 'border-[#2A3F55] focus:border-[rgba(0,210,255,0.4)]'
                }`}
              />
              {errors.fees && <p className="text-xs text-red-400 mt-1">{errors.fees}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-[#7A9BB5] uppercase tracking-wider mb-1.5">
                Est. Year
              </label>
              <input
                type="number"
                value={form.estYear}
                onChange={(e) => set('estYear', e.target.value)}
                placeholder="e.g. 1983"
                className="w-full bg-[#0C1520] border border-[#2A3F55] rounded-lg px-3 py-2.5 text-sm text-[#E8F4FF] placeholder-[#4A6480] outline-none focus:border-[rgba(0,210,255,0.4)] transition-colors"
              />
            </div>
          </div>

          {/* NAAC */}
          <div>
            <label className="block text-xs font-medium text-[#7A9BB5] uppercase tracking-wider mb-1.5">
              NAAC Grade
            </label>
            <select
              value={form.naac}
              onChange={(e) => set('naac', e.target.value)}
              className="w-full bg-[#0C1520] border border-[#2A3F55] rounded-lg px-3 py-2.5 text-sm text-[#E8F4FF] outline-none focus:border-[rgba(0,210,255,0.4)] transition-colors"
            >
              <option value="">Not Graded</option>
              {['A++','A+','A','B++','B+','B','C'].map((g) => <option key={g}>{g}</option>)}
            </select>
          </div>

          {/* Branches */}
          <div>
            <label className="block text-xs font-medium text-[#7A9BB5] uppercase tracking-wider mb-2">
              Branches Available *
            </label>
            <div className="flex flex-wrap gap-2">
              {BRANCHES.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => toggleBranch(b)}
                  className={`px-3 py-1.5 rounded-lg text-xs border transition-all ${
                    form.branches.includes(b)
                      ? 'bg-[rgba(0,210,255,0.15)] text-[#00D2FF] border-[rgba(0,210,255,0.4)]'
                      : 'bg-[#0C1520] text-[#7A9BB5] border-[#2A3F55] hover:border-[rgba(0,210,255,0.25)]'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
            {errors.branches && <p className="text-xs text-red-400 mt-1.5">{errors.branches}</p>}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#2A3F55]">
          <button
            onClick={handleClose}
            className="px-4 py-2.5 text-sm text-[#7A9BB5] hover:text-[#E8F4FF] transition-colors rounded-lg hover:bg-[#0C1520]"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#00D2FF] hover:bg-white text-black text-sm font-bold rounded-lg transition-colors"
          >
            <Plus size={16} /> Add College
          </button>
        </div>
      </div>
    </div>
  )
}
