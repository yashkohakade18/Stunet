import { Link } from 'react-router-dom'
import { MapPin, IndianRupee, GraduationCap, Pencil, Trash2, ChevronRight, Heart, CheckCircle2 } from 'lucide-react'
import { formatFees } from '../../utils/formatters'
import { useFavorites } from '../../hooks/useFavorites'

export default function CollegeCard({ college, onEdit, onDelete, userCET }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const isEligible = userCET && userCET >= college.minCET && userCET <= college.maxCET;

  const typeColor = {
    Government: 'bg-[rgba(0,255,157,0.1)] text-[#00FF9D] border-[rgba(0,255,157,0.25)]',
    Private: 'bg-[rgba(0,210,255,0.1)] text-[#00D2FF] border-[rgba(0,210,255,0.25)]',
    'Government Aided': 'bg-[rgba(255,184,48,0.1)] text-[#FFB830] border-[rgba(255,184,48,0.25)]',
  }

  return (
    <div className={`bg-[#101926] border rounded-2xl p-5 flex flex-col gap-4 hover:-translate-y-0.5 transition-all duration-200 group ${
      isEligible 
        ? 'border-[rgba(0,255,157,0.3)] shadow-[0_0_20px_rgba(0,255,157,0.05)]' 
        : 'border-[rgba(0,210,255,0.1)] hover:border-[rgba(0,210,255,0.28)]'
    }`}>
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border ${
                typeColor[college.type] || typeColor['Private']
              }`}
            >
              {college.type}
            </span>
            {college.naac && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-[rgba(255,79,163,0.1)] text-[#FF4FA3] border border-[rgba(255,79,163,0.25)]">
                NAAC {college.naac}
              </span>
            )}
            {isEligible && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-[rgba(0,255,157,0.15)] text-[#00FF9D] border border-[rgba(0,255,157,0.3)] animate-pulse">
                <CheckCircle2 size={10} /> Match
              </span>
            )}
          </div>
          <h3 className="font-semibold text-[#E8F4FF] text-base leading-snug group-hover:text-[#00D2FF] transition-colors line-clamp-2">
            {college.name}
          </h3>
        </div>

        {/* Action buttons */}
        <div className="flex gap-1.5 shrink-0">
          <button
            onClick={() => toggleFavorite(college.id)}
            className={`p-2 rounded-lg transition-all ${isFavorite(college.id) ? 'text-red-500 bg-red-50/10' : 'text-[#7A9BB5] hover:text-red-400 hover:bg-[rgba(239,68,68,0.08)]'}`}
            title={isFavorite(college.id) ? "Remove from Favorites" : "Add to Favorites"}
          >
            <Heart size={15} fill={isFavorite(college.id) ? "currentColor" : "none"} />
          </button>
          <button
            onClick={() => onEdit(college)}
            className="p-2 rounded-lg text-[#7A9BB5] hover:text-[#00D2FF] hover:bg-[rgba(0,210,255,0.08)] transition-all"
            title="Edit"
          >
            <Pencil size={15} />
          </button>
          <button
            onClick={() => onDelete(college)}
            className="p-2 rounded-lg text-[#7A9BB5] hover:text-red-400 hover:bg-[rgba(239,68,68,0.08)] transition-all"
            title="Delete"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>

      {/* Info row */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#7A9BB5]">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} className="text-[#00D2FF]" />
          {college.location}
        </span>
        <span className="flex items-center gap-1.5">
          <IndianRupee size={14} className="text-[#FFB830]" />
          {formatFees(college.fees)} / yr
        </span>
        <span className="flex items-center gap-1.5">
          <GraduationCap size={14} className="text-[#00FF9D]" />
          Est. {college.estYear}
        </span>
      </div>

      {/* CET Score bar */}
      <div>
        <div className="flex justify-between text-[11px] text-[#4A6480] mb-1.5">
          <span>CET Eligibility Range</span>
          <span className="text-[#00D2FF] font-mono">
            {college.minCET} – {college.maxCET} percentile
          </span>
        </div>
        <div className="h-1.5 bg-[#0C1520] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${isEligible ? 'bg-gradient-to-r from-[#00FF9D] to-[#00D2FF]' : 'bg-gradient-to-r from-[#0099CC] to-[#00D2FF]'}`}
            style={{
              marginLeft: `${(college.minCET / 200) * 100}%`,
              width: `${((college.maxCET - college.minCET) / 200) * 100}%`,
            }}
          />
        </div>
        {userCET && (
          <div 
            className="w-1 h-3 bg-white absolute z-10 -translate-x-1/2 rounded-full shadow-[0_0_8px_white]"
            style={{ 
              left: `${(userCET / 200) * 100}%`,
              marginTop: '-9px',
              display: 'none' // Hidden by default, can be enabled with relative parent
            }}
          />
        )}
      </div>

      {/* Branches */}
      <div className="flex flex-wrap gap-1.5">
        {college.branches?.slice(0, 3).map((b) => (
          <span
            key={b}
            className="px-2.5 py-0.5 bg-[#0C1520] border border-[#2A3F55] rounded-full text-[11px] text-[#7A9BB5]"
          >
            {b}
          </span>
        ))}
        {college.branches?.length > 3 && (
          <span className="px-2.5 py-0.5 bg-[#0C1520] border border-[#2A3F55] rounded-full text-[11px] text-[#4A6480]">
            +{college.branches.length - 3} more
          </span>
        )}
      </div>

      {/* View detail link */}
      <Link
        to={`/colleges/${college.id}`}
        className="flex items-center justify-between pt-3 border-t border-[#2A3F55] text-sm text-[#7A9BB5] hover:text-[#00D2FF] transition-colors group/link"
      >
        <span>View full details</span>
        <ChevronRight size={15} className="group-hover/link:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  )
}
