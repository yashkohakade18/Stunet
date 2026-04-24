export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-bg-surface text-ink-muted border-ink-faint',
    cyan:    'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30',
    green:   'bg-brand-green/10 text-brand-green border-brand-green/30',
    gold:    'bg-brand-gold/10 text-brand-gold border-brand-gold/30',
    pink:    'bg-brand-pink/10 text-brand-pink border-brand-pink/30',
    red:     'bg-red-500/10 text-red-400 border-red-500/30',
  }
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
