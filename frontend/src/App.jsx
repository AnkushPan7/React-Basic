import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/app.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Sidebar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<div className="placeholder">Welcome to the React-Basic app. Use the sidebar to navigate.</div>} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;