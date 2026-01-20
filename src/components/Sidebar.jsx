import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h3>Navigation</h3>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <ul className="sidebar-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="sidebar-footer">
        <p>&copy; 2024 My App</p>
      </div>
    </div>
  );
};

export default Sidebar;