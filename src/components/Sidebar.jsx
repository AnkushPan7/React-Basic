import React from 'react';
import './Sidebar.css';

/**
 * Reusable Sidebar component for rendering a vertical navigation list.
 * 
 * @param {Object} props
 * @param {Array} props.items - List of navigation items with id, label, path, and icon.
 * @param {string} props.activeId - The ID of the currently active item.
 * @param {Function} props.onNavigate - Callback function for navigation.
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar = ({ items = [], activeId, onNavigate }) => {
  /**
   * Renders a small internal icon based on the item's icon value.
   * 
   * @param {string} name - The name of the icon to render.
   * @returns {string} The icon to render.
   */
  const renderIcon = (name) => {
    switch (name) {
      case 'home':
        return '🏠';
      case 'user':
        return '👤';
      case 'settings':
        return '⚙️';
      default:
        return '•';
    }
  };

  return (
    <aside className="sb-sidebar" aria-label="Main Navigation">
      <nav>
        <ul className="sb-list">
          {items.map((item) => (
            <li
              key={item.id}
              className={`sb-item ${activeId === item.id ? 'active' : ''}`}
              onClick={() => onNavigate?.(item.path)}
              role="button"
              aria-current={activeId === item.id}
            >
              <span className="sb-icon" aria-hidden="true">{renderIcon(item.icon)}</span>
              <span className="sb-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;