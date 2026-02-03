import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/sidebar.css';
import '../styles/home.css';

const Home = () => {
  const [items, setItems] = useState([
    { label: 'Home', href: '#/', active: true },
    { label: 'About', href: '#/about' },
    { label: 'Projects', href: '#/projects' },
    { label: 'Contact', href: '#/contact' }
  ]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <div className="app-layout">
      <Sidebar items={items} isMobile={isMobile} />
      <main className="content">
        <h1>Welcome to React-Basic</h1>
        <p>This page demonstrates a persistent left-hand sidebar.</p>
        {isMobile && (
          <button className="toggle-button" onClick={() => setItems([])}>
            Toggle Sidebar
          </button>
        )}
      </main>
    </div>
  );
};

export default Home;