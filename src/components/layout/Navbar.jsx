import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <Link to="/" className="logo-container" style={{ textDecoration: 'none' }}>
        <div className="logo-icon"></div>
        <span className="logo-text">Stunet</span>
      </Link>
      <div className="nav-links">
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button 
          onClick={toggleTheme} 
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.5rem' }}
          title="Toggle Dark Mode"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <button className="login-btn">Login / Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
