// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '200px', transition: 'margin-left 0.3s ease-in-out', width: '100%' }}>
        {/* Main content of the application */}
        <h1>Kanban Board</h1>
        <p>Your Kanban board content goes here.</p>
      </div>
    </div>
  );
}

export default App;