import React from 'react';
import './Sidebar.css';

/**
 * Sidebar component with a green background, placed on the left side of the application.
 *
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar = () => {
  return (
    <div
      className="sidebar"
      style={{
        backgroundColor: 'green',
        width: '200px',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h2>Sidebar</h2>
      {/* Add sidebar content here */}
    </div>
  );
};

export default Sidebar;