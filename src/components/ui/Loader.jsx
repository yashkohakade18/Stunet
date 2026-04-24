export default function Loader({ text = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-10 h-10 border-2 border-brand-cyan/20 border-t-brand-cyan rounded-full animate-spin" />
      <p className="text-ink-muted text-sm">{text}</p>
    </div>
  )
}
