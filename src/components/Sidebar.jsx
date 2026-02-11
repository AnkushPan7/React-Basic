import React from 'react';
import './Sidebar.css';

/**
 * A functional component representing the sidebar with a teal background color.
 * 
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;