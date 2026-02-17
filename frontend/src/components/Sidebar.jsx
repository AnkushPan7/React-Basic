import React, { useState } from 'react';
import './Sidebar.css';

/**
 * Default navigation items for the sidebar.
 */
const defaultItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Settings', path: '/settings' },
];

/**
 * Reusable Sidebar component with collapsible functionality and customizable navigation items.
 *
 * @param {Object} props
 * @param {Array} props.items - Custom navigation items (optional)
 * @returns {JSX.Element} The Sidebar component
 */
const Sidebar = ({ items = defaultItems }) => {
  const [expanded, setExpanded] = useState(true);

  /**
   * Toggles the expanded state of the sidebar.
   */
  const toggle = () => setExpanded((v) => !v);

  return (
    <aside className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`} aria-label="Main Navigation">
      <button className="sidebar-toggle" onClick={toggle} aria-label="Toggle sidebar">
        {expanded ? '«' : '»'}
      </button>
      <nav>
        <ul>
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="sidebar-item">
              <a href={item.path} className="sidebar-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;