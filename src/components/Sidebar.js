// src/components/Sidebar.js
import React, { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{ 
      width: isCollapsed ? '50px' : '200px', 
      backgroundColor: 'orange', 
      height: '100vh', 
      transition: 'width 0.3s ease-in-out', 
      overflow: 'hidden',
      position: 'fixed',
      left: 0,
      top: 0
    }}>
      <button onClick={toggleCollapse} style={{cursor: 'pointer'}}> 
        {isCollapsed ? '>' : '<'} 
      </button>
      {!isCollapsed && (
        <div>
          {/* Sidebar content goes here */}
          <p>Sidebar Content</p>
          <p>More Content</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;