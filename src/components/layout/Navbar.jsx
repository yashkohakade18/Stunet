import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
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
      <button className="login-btn">Login / Sign Up</button>
    </nav>
  );
};

export default Navbar;
