import React from 'react';

const Sidebar = (props) => {
  return (
    <div style={{ ...props.style }}>
      {/* Sidebar content */}
      <h2>Sidebar</h2>
      <p>This is the sidebar content.</p>
    </div>
  );
};

export default Sidebar;