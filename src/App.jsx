import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="app-container">
      <div className={`content ${isSidebarVisible ? 'sidebar-open' : ''}`}>
        <Header />
        <main className="main-content">
          <p>Main content area.</p>
          <hr />
          <p>More main content area.</p>
        </main>
        <Footer />
      </div>
      <Sidebar isOpen={isSidebarVisible} onClose={toggleSidebar} />
    </div>
  );
}

export default App;