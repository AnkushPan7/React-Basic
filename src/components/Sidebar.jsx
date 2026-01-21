import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'} ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h3>Navigation</h3>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <button className="collapse-button" onClick={toggleCollapse}>
          {isCollapsed ? '>' : '<'}
        </button>
      </div>
      <ul className="sidebar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="sidebar-footer">
        <p>&copy; 2024 My App</p>
      </div>
    </div>
  );
};

export default Sidebar;