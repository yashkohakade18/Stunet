import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, GraduationCap, Calendar, FileText, BookOpen, Heart, User, Map, X } from 'lucide-react';

const NAV_ITEMS = [
  { icon: <LayoutDashboard size={20} />, label: 'Dashboard', to: '/dashboard' },
  { icon: <GraduationCap size={20} />, label: 'Colleges', to: '/colleges' },
  { icon: <Calendar size={20} />, label: 'Rounds', to: '/rounds' },
  { icon: <FileText size={20} />, label: 'Papers', to: '/papers' },
  { icon: <BookOpen size={20} />, label: 'Notes', to: '/notes' },
  { icon: <Heart size={20} />, label: 'Favorites', to: '/favorites' },
  { icon: <User size={20} />, label: 'Profile', to: '/profile' },
  { icon: <Map size={20} />, label: 'Map', to: '/map' },
];

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <>
      <div className="sidebar-backdrop" onClick={onClose} />
      <aside className="mobile-sidebar">
        <div className="sidebar-header">
          <span className="sidebar-logo">Stunet</span>
          <button className="sidebar-close-btn" onClick={onClose}>
            <X size={22} />
          </button>
        </div>
        <nav className="sidebar-nav">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={`sidebar-nav-item ${location.pathname === item.to ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
