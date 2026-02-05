import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <h1>Main Content</h1>
        <p>This is the main content area of the application.</p>
      </main>
    </div>
  );
};

export default App;