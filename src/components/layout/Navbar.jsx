import { Link, NavLink } from 'react-router-dom'
import { GraduationCap, Menu, X } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = [
  { to: '/colleges', label: 'Colleges' },
  { to: '/rounds',   label: 'CAP Rounds' },
  { to: '/map',      label: 'Map' },
  { to: '/papers',   label: 'Papers' },
  { to: '/notes',    label: 'Notes' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-bg-primary/85 backdrop-blur-xl border-b border-brand-cyan/10 flex items-center px-6 justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2.5 group">
        <div className="w-8 h-8 bg-brand-cyan rounded-lg flex items-center justify-center">
          <GraduationCap size={18} className="text-black" />
        </div>
        <span className="font-syne font-800 text-[1.2rem] tracking-tight">
          Stud<span className="text-brand-cyan">Info</span>
        </span>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-1">
        {NAV_LINKS.map(l => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'text-brand-cyan bg-brand-cyan/10' : 'text-ink-muted hover:text-ink-primary hover:bg-bg-surface'
                }`
              }
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="hidden md:flex items-center gap-3">
        <Link to="/colleges" className="btn-primary text-sm px-4 py-2">
          Find Colleges →
        </Link>
      </div>

      {/* Mobile toggle */}
      <button className="md:hidden text-ink-muted" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-bg-primary border-b border-brand-cyan/10 md:hidden">
          {NAV_LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-ink-muted hover:text-brand-cyan border-b border-ink-faint/30"
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
