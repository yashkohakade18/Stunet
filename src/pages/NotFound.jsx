import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="font-syne font-800 text-8xl text-brand-cyan/20 mb-4">404</div>
      <h1 className="section-title mb-3">Page not found</h1>
      <p className="text-ink-muted mb-6">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary">Go Home</Link>
    </div>
  )
}
