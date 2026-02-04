import React from 'react';

/**
 * Sidebar component with a yellow background color.
 * 
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar = () => {
  return (
    <div
      style={{
        backgroundColor: 'yellow',
        width: '200px',
        height: '100vh',
        position: 'fixed',
        top: 0,
        right: 0,
      }}
    >
      Sidebar content
    </div>
  );
};

export default Sidebar;