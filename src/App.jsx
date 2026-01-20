import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleLogout = () => {
    // Placeholder for actual logout logic (e.g., clearing tokens, redirecting)
    alert('Logout clicked');
  };

  return (
    <div className="app-container">
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      {isSidebarVisible && <Sidebar />}
      <div className="content">
        <header className="main-header">
          <h1>Basic App</h1>
          <button className="login-button">Login</button>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
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