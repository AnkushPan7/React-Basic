// src/sidebar.jsx
import React, { useState } from 'react';

const Sidebar = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const sidebarStyle = {
    ...props.style,
    backgroundColor: 'orange',
    width: collapsed ? '50px' : '200px',
    height: '100vh',
    transition: 'width 0.3s ease',
    overflowX: 'hidden',
    position: 'fixed',
    top: 0,
    left: 0,
  };

  const buttonStyle = {
    position: 'absolute',
    top: '10px',
    right: collapsed ? '-10px' : '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.2em',
    padding: '5px',
  };

  const contentStyle = {
    padding: '16px',
  };

  return (
    <div style={sidebarStyle}>
      <button style={buttonStyle} onClick={toggleSidebar}>
        {collapsed ? '>' : '<'}
      </button>
      <div style={contentStyle}>
        <h2>Sidebar</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;