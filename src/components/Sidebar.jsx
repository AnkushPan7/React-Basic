import React from 'react';
import './Sidebar.css';

/**
 * Sidebar component with a purple background color.
 * 
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar = () => {
  return (
    <div className="sidebar" style={{ backgroundColor: '#6c5ce7', width: '200px', height: '100vh' }}>
      <h2>Sidebar</h2>
      <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;