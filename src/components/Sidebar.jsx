import React from 'react';
import './Sidebar.css';

/**
 * Sidebar component for navigation links and optional sidebar content.
 *
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar = () => {
  // Define navigation links
  const navigationLinks = [
    { id: 1, text: 'Link 1', href: '#' },
    { id: 2, text: 'Link 2', href: '#' },
    { id: 3, text: 'Link 3', href: '#' },
  ];

  // Render navigation links
  const renderNavigationLinks = () => {
    return (
      <ul className="sidebar-navigation">
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    );
  };

  // Optional sidebar content
  const sidebarContent = (
    <div className="sidebar-content">
      <p>Additional sidebar content can be rendered here.</p>
    </div>
  );

  return (
    <div className="sidebar">
      {renderNavigationLinks()}
      {sidebarContent}
    </div>
  );
};

export default Sidebar;