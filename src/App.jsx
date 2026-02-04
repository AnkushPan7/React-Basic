import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar'; // Import the new RightSidebar component
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import '@fontsource/oswald';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true); // State for the new right sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <Router>
      <div style={{ fontFamily: 'Oswald, sans-serif' }}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div style={{
          marginLeft: isSidebarOpen ? '250px' : '80px',
          transition: 'margin-left 0.3s ease',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          marginRight: isRightSidebarOpen ? '250px' : '0', // Adjust margin for the right sidebar
        }}>
          <Header />
          <div style={{ flex: 1, padding: '20px', paddingBottom: '80px', display: 'flex' }}>
            <div style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
              </Routes>
            </div>
            <RightSidebar isOpen={isRightSidebarOpen} toggleSidebar={toggleRightSidebar} />
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;