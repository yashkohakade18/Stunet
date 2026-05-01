export default function PageWrapper({ children, className = '' }) {
  return (
    <div className={`page-fade-in ${className}`}>
      {children}
    </div>
  )
}
