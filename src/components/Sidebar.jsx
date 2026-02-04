import React from 'react';
import './Sidebar.css';

/**
 * Sidebar component to be placed on the right side of the application.
 * 
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar = () => {
  return (
    <div className="sidebar-right">
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