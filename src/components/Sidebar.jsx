import React from 'react';
import './Sidebar.css';

/**
 * Sidebar component containing navigation links and optional content.
 *
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="sidebar-content">
        <p>This is some optional sidebar content.</p>
      </div>
    </div>
  );
};

export default Sidebar;