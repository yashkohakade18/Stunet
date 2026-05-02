import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-toggle-btn ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          {isDarkMode ? <Moon size={14} fill="currentColor" /> : <Sun size={14} fill="currentColor" />}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
