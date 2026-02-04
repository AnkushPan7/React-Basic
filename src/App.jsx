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
      <div style={{ fontFamily: 'Oswald, sans-serif' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          minHeight: '100vh'
        }}>
          <div style={{
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
          <Sidebar style={{ backgroundColor: 'yellow' }} />
        </div>
      </div>
    </Router>
  );
}

export default App;