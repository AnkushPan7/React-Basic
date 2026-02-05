import React from 'react';
import './Sidebar.css';

/**
 * Sidebar component for navigation
 * @returns {JSX.Element} Sidebar navigation links
 */
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;