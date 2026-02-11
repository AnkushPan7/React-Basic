import React, { useState, useEffect } from 'react';

/**
 * DarkModeToggle Component
 * 
 * Handles theme switching logic and UI for the application.
 * 
 * @returns {JSX.Element} The DarkModeToggle component.
 */
const DarkModeToggle = () => {
  // Initialize state to track the current theme
  const [isDark, setIsDark] = useState(false);

  // Sync theme state with localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  // Update localStorage and document body class on theme change
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.body.className = isDark ? 'dark' : 'light';
  }, [isDark]);

  /**
   * Toggles the theme between dark and light modes.
   */
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button 
      onClick={toggleTheme} 
      className={`theme-toggle ${isDark ? 'dark-mode' : 'light-mode'}`}
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
};

export default DarkModeToggle;