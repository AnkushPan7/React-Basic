import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="app-container">
      <Sidebar isVisible={isSidebarVisible} isCollapsed={isSidebarCollapsed} toggleCollapse={toggleSidebarCollapse} />
      <div className={`content ${!isSidebarVisible ? 'full-width' : ''}`}>
        <header className="main-header">
          <h1>Basic App</h1>
          <button onClick={toggleSidebarVisibility}>
            {isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
          </button>
        </header>
        <main className="main-content">
          <p>Main content area.</p>
        </main>
        <footer className="main-footer">
          <p>&copy; 2024 My App</p>
        </footer>
      </div>
    </div>
  );
}

export default App;