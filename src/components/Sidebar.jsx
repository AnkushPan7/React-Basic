import React from 'react';
import './Sidebar.css';

/**
 * Sidebar component for navigation
 * @returns {JSX.Element} Sidebar navigation
 */
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;