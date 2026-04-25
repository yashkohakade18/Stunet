import { Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-brand-cyan/10 bg-bg-secondary py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-7 h-7 bg-brand-cyan rounded-md flex items-center justify-center">
              <GraduationCap size={14} className="text-black" />
            </div>
            <span className="font-syne font-800 text-lg">Stud<span className="text-brand-cyan">Info</span></span>
          </div>
          <p className="text-xs text-ink-muted max-w-xs leading-relaxed">
            Maharashtra CET College Navigator. Helping students make smarter admission decisions.
          </p>
        </div>
        <div className="flex gap-12 text-sm">
          <div>
            <p className="font-syne font-700 text-ink-primary mb-3">Navigate</p>
            {[['Colleges','/colleges'],['Rounds','/rounds'],['Map','/map']].map(([l,h]) => (
              <Link key={h} to={h} className="block text-ink-muted hover:text-brand-cyan mb-1.5">{l}</Link>
            ))}
          </div>
          <div>
            <p className="font-syne font-700 text-ink-primary mb-3">Resources</p>
            {[['Papers','/papers'],['Notes','/notes']].map(([l,h]) => (
              <Link key={h} to={h} className="block text-ink-muted hover:text-brand-cyan mb-1.5">{l}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-ink-faint/30 text-center text-xs text-ink-muted">
        © 2024 StudInfo. Built for Maharashtra CET students.
      </div>
    </footer>
  )
}
