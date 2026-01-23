// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        {/* Main content goes here */}
        Main Content
      </div>
    </div>
  );
}

export default App;