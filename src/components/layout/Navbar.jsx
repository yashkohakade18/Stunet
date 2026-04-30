import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-icon"></div>
        <span className="logo-text">Stunet</span>
      </div>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="login-btn">Login / Sign Up</button>
    </nav>
  );
};

export default Navbar;
