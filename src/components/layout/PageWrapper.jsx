export default function PageWrapper({ children, className = '' }) {
  return (
    <div className={`max-w-6xl mx-auto px-4 md:px-6 pt-24 pb-16 ${className}`}>
      {children}
    </div>
  )
}
