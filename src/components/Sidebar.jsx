import React from 'react';
import './Sidebar.css';

/**
 * Sidebar component with a yellow background color.
 * 
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar = () => {
  return (
    <div className="sidebar" style={{ backgroundColor: 'yellow', width: '200px', height: '100vh' }}>
      <h2>Sidebar</h2>
    </div>
  );
};

export default Sidebar;