import React from 'react';
import './Sidebar.css';

/**
 * Sidebar component
 * Props:
 *  - items: Array<{ id, label, href, icon, active }>
 *  - onNavigate: (href) => void
 */
const Sidebar = ({ items = [], onNavigate = () => {} }) => {
  return (
    <aside className="sb-sidebar" aria-label="Main Navigation">
      <nav>
        <ul className="sb-list">
          {items.map((item) => (
            <li
              key={item.id}
              className={`sb-item ${item.active ? 'active' : ''}`}
              onClick={() => onNavigate(item.href)}
            >
              <span className="sb-icon" aria-hidden="true">{item.icon ?? '•'}</span>
              <span className="sb-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;