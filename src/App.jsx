import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import '@fontsource/oswald';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div style={{ fontFamily: 'Oswald, sans-serif', display: 'flex' }}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} style={{ backgroundColor: 'green', width: '250px', minHeight: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 1 }} />
        <div style={{
          marginLeft: '250px',
          transition: 'margin-left 0.3s ease',
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Header />
          <div style={{ flex: 1, padding: '20px', paddingBottom: '80px' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;