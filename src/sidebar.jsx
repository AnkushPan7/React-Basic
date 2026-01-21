// src/sidebar.jsx
import React from 'react';

const Sidebar = (props) => {
  return (
    <div style={{ ...props.style, backgroundColor: 'green', width: '200px', height: '100vh' }}>
      {/* Sidebar content */}
      <h2>Sidebar</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;