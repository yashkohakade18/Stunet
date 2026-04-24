export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`card p-5 ${hover ? 'hover:border-brand-cyan/25 hover:-translate-y-0.5' : ''} transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
