import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="content" style={{ marginLeft: isSidebarOpen ? '250px' : '80px', transition: 'margin-left 0.3s ease' }}>
          <Header toggleSidebar={toggleSidebar} />
          <main className="main-content">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/" element={<p>Main content area.</p>} />
            </Routes>
            <hr />
            <p>More main content area.</p>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;