import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="app-container">
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      {isSidebarVisible && <Sidebar />}
      <div className="content">
        <header className="main-header">
          <h1>Basic App</h1>
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