import React, { useState } from 'react';
import './Sidebar.css';

/**
 * Reusable Sidebar component with collapsible behavior and prop-driven navigation item list.
 * 
 * @param {Object[]} items - Array of navigation items
 * @param {string} items.label - Label for the navigation item
 * @param {string} items.href - Href for the navigation item
 * @param {boolean} items.active - Whether the navigation item is active
 * @returns {JSX.Element} The Sidebar component
 */
const Sidebar = ({ items = [] }) => {
  const [open, setOpen] = useState(true);

  const toggle = () => setOpen((prev) => !prev);

  if (!items.length) {
    return null; // or a default message
  }

  return (
    <aside className={`sidebar ${open ? 'open' : 'collapsed'}`} aria-label="Main navigation">
      <div className="sidebar-header">
        <button aria-label="Toggle sidebar" className="sidebar-toggle" onClick={toggle}>
          {open ? '◀' : '▶'}
        </button>
        <span className="sidebar-title">Navigation</span>
      </div>
      <nav className="sidebar-nav" aria-label="Sidebar">
        <ul>
          {items.map((item, idx) => (
            <li key={idx} className={item.active ? 'active' : ''}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;