// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';

const App = () => {
  const handleHelloClick = () => {
    // Redirect to the home page with a welcome message
    window.location.href = '/home?message=Welcome%20to%20the%20Home%20Page!';
  };

  return (
    <Router>
      <div>
        <h1>Main App</h1>
        <button onClick={handleHelloClick}>Hello</button>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;