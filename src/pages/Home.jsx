import React from 'react';
import ThemeToggle from '../components/ThemeToggle';
import '../styles/theme.css';

/**
 * Home page component.
 * 
 * @returns {JSX.Element} The Home page JSX element.
 */
const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to React-Basic</h1>
        <ThemeToggle />
      </header>
      <p>This is a minimal frontend application.</p>
    </div>
  );
};

export default Home;