import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';
import { GraduationCap, FileText, BookOpen, Heart, User, LayoutDashboard, Calendar, Search, Command } from 'lucide-react';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchHistory, setSearchHistory] = useLocalStorage('stunet_search_history', []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const query = searchQuery.trim();
      const updatedHistory = [query, ...searchHistory.filter(q => q !== query)].slice(0, 5);
      setSearchHistory(updatedHistory);
      navigate(`/colleges?query=${encodeURIComponent(query)}`);
      setSearchQuery('');
    }
  };

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

      <div className="global-search-container">
        <form onSubmit={handleSearch} className="search-form">
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search colleges..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="search-kbd">
            <Command size={10} /> K
          </div>
        </form>
      </div>
      
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
