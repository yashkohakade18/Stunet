import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';
import { GraduationCap, FileText, BookOpen, Heart, User, LayoutDashboard, Calendar, Info, Mail } from 'lucide-react';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">
        <div className="logo-icon"></div>
        <span className="logo-text">Stunet</span>
      </Link>
      
      <div className="nav-links">
        <NavLink to="/dashboard" className={({isActive}) => isActive ? 'active' : ''}>
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>
        <NavLink to="/colleges" className={({isActive}) => isActive ? 'active' : ''}>
          <GraduationCap size={18} /> Colleges
        </NavLink>
        <NavLink to="/rounds" className={({isActive}) => isActive ? 'active' : ''}>
          <Calendar size={18} /> Rounds
        </NavLink>
        <NavLink to="/papers" className={({isActive}) => isActive ? 'active' : ''}>
          <FileText size={18} /> Papers
        </NavLink>
        <NavLink to="/notes" className={({isActive}) => isActive ? 'active' : ''}>
          <BookOpen size={18} /> Notes
        </NavLink>
      </div>

      <div className="nav-actions">
        <div className="user-nav-links">
          <NavLink to="/favorites" title="Favorites"><Heart size={20} /></NavLink>
          <NavLink to="/profile" title="Profile"><User size={20} /></NavLink>
        </div>
        
        <div className="divider"></div>
        
        <ThemeToggle />
        
        {isAuthenticated ? (
          <div className="auth-status">
            <span className="user-greeting">
              Hi, <span className="highlight">{user.name.split(' ')[0]}</span>
            </span>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <Link to="/login">
            <Button variant="primary" size="sm">
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
