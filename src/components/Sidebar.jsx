import React from 'react';

/**
 * Sidebar component with a green background color.
 *
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar = () => {
  return (
    <div
      style={{
        backgroundColor: 'green',
        width: '200px',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      Sidebar Content
    </div>
  );
};

export default Sidebar;