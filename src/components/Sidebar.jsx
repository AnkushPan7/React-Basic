import React from 'react';
import './Sidebar.css';

/**
 * Sidebar component for navigation.
 * 
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Help</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;