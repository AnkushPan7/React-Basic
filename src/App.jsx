import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Header />
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