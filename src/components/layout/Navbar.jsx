import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-container" style={{ textDecoration: 'none' }}>
        <div className="logo-icon"></div>
        <span className="logo-text">Stunet</span>
      </Link>
      <div className="nav-links">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/rounds">Rounds</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <ThemeToggle />
        
        {isAuthenticated ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'var(--text)', fontSize: '0.9rem', fontWeight: 500 }}>
              Hi, <span className="highlight">{user.name.split(' ')[0]}</span>
            </span>
            <Button variant="secondary" onClick={handleLogout} style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              Logout
            </Button>
          </div>
        ) : (
          <Link to="/login">
            <Button variant="primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
