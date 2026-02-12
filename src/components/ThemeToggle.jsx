import React, { useEffect, useState } from 'react';

/**
 * ThemeToggle Component
 * 
 * A reusable React component that toggles between light and dark themes.
 * The theme state is persisted in localStorage and a data-theme attribute
 * is applied to the document to enable theming across the app.
 */
const ThemeToggle = () => {
  // Initialize theme state with a default value
  const [theme, setTheme] = useState('light');

  /**
   * Effect hook to initialize theme on mount
   * 
   * Checks localStorage for a saved theme, otherwise uses the user's system
   * preference. Sets the initial theme and applies it to the document.
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme ? savedTheme : 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  /**
   * Effect hook to update theme and persist state
   * 
   * Updates the document's data-theme attribute, applies the theme class to
   * the body, and saves the theme to localStorage whenever the theme state
   * changes.
   */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  /**
   * Toggles the theme between light and dark
   */
  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <button 
      onClick={toggleTheme} 
      aria-label="Toggle theme" 
      className="theme-toggle"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;