import React from 'react';
import './Sidebar.css';

/**
 * Sidebar component for navigation links
 * @returns {JSX.Element} Sidebar component
 */
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="nav-links">
        <li>
          <a href="#" className="nav-link">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Settings
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Reports
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Help
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;