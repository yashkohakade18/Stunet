const CHIPS = [
  'What is CET percentile?',
  'How do CAP rounds work?',
  'Best CS colleges in Pune?',
  'What score for COEP?',
  'Explain reservation categories',
]

export default function QuickChips({ onSelect }) {
  return (
    <div className="px-3 py-2 flex flex-wrap gap-1.5">
      {CHIPS.map(chip => (
        <button
          key={chip}
          onClick={() => onSelect(chip)}
          className="text-[11px] px-2.5 py-1 bg-bg-surface border border-ink-faint/40 hover:border-brand-cyan/40 hover:text-brand-cyan rounded-full text-ink-muted transition-colors"
        >
          {chip}
        </button>
      ))}
    </div>
  )
}
