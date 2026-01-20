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
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      {isSidebarVisible && <Sidebar />}
      <div className="content">
        <Header />
        <main className="main-content">
          <p>Main content area.</p>
          <hr />
          <p>More main content area.</p>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;