import Breadcrumbs from './Breadcrumbs';

export default function PageWrapper({ children, className = '', showBreadcrumbs = true }) {
  return (
    <div className={`page-fade-in ${className}`}>
      {showBreadcrumbs && (
        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-4">
          <Breadcrumbs />
        </div>
      )}
      {children}
    </div>
  )
}
