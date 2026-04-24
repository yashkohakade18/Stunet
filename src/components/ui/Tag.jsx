export default function Tag({ children, className = '' }) {
  return (
    <span className={`tag ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse-slow" />
      {children}
    </span>
  )
}
