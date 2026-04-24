export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 font-syne font-700 rounded-lg transition-all duration-200 cursor-pointer border-none'
  const variants = {
    primary: 'bg-brand-cyan text-black hover:bg-white hover:-translate-y-0.5',
    ghost:   'bg-transparent text-ink-primary border border-ink-faint hover:border-brand-cyan hover:text-brand-cyan',
    danger:  'bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20',
    outline: 'bg-transparent text-brand-cyan border border-brand-cyan/40 hover:bg-brand-cyan/10',
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}
