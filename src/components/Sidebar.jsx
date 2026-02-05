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
      <h2>Navigation</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;