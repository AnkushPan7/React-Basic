import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleLogout = () => {
    alert('Logout clicked');
  };

  const handleAiAssistant = () => {
    alert('AI ASSISTANT clicked');
  };

  const handleAddForm = () => {
    alert('Add Form clicked');
  };

  return (
    <div className="app-container">
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      {isSidebarVisible && <Sidebar />}
      <div className="content">
        <header className="main-header">
          <h1>Basic App</h1>
          <div className="button-container">
            <button className="login-button">Login</button>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
            <button onClick={handleAiAssistant}>AI ASSISTANT</button>
            <button style={{ backgroundColor: 'green', color: 'white' }} onClick={handleAddForm}>ADD FORM</button>
          </div>
        </header>
        <main className="main-content">
          <p>Main content area.</p>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;