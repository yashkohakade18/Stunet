import { Trash2, X } from 'lucide-react'

export default function DeleteConfirm({ open, onClose, onConfirm, college }) {
  if (!open || !college) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-sm bg-[#101926] border border-red-500/20 rounded-2xl shadow-2xl p-6">
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-lg text-[#7A9BB5] hover:text-white hover:bg-[#0C1520] transition-colors">
          <X size={16} />
        </button>

        <div className="w-12 h-12 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center justify-center mb-4">
          <Trash2 size={22} className="text-red-400" />
        </div>

        <h3 className="font-bold text-lg text-[#E8F4FF] mb-1">Delete College?</h3>
        <p className="text-sm text-[#7A9BB5] leading-relaxed mb-5">
          Are you sure you want to remove{' '}
          <span className="text-[#E8F4FF] font-medium">"{college.name}"</span> from your list?
          This action cannot be undone.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 text-sm text-[#7A9BB5] hover:text-white border border-[#2A3F55] hover:border-[#4A6480] rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => { onConfirm(college.id); onClose() }}
            className="flex-1 py-2.5 text-sm font-bold text-white bg-red-500/80 hover:bg-red-500 rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <Trash2 size={14} /> Delete
          </button>
        </div>
      </div>
    </div>
  )
}
