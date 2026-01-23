import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [sidebarColor, setSidebarColor] = useState('yellow');

  const handleClick = () => {
    alert('Button Clicked!');
    setSidebarColor('pink');
  };

  return (
    <div className={`sidebar ${isOpen ? '' : 'collapsed'}`} style={{ 
        width: isOpen ? '250px' : '80px', 
        transition: 'width 0.3s ease',
        backgroundColor: 'red',
        color: 'green',
        borderRight: '1px solid #ddd',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        overflowX: 'hidden',
        paddingTop: '60px'
    }}>
      <button onClick={toggleSidebar} className="toggle-button" style={{ position: 'absolute', top: '10px', right: '10px' }}>
        {isOpen ? '<' : '>'}
      </button>
      <button onClick={handleClick} style={{ padding: '10px', textDecoration: 'none', color: 'black', display: 'block', textAlign: 'left', backgroundColor: 'white', border: 'none', width: '100%' }}>Click</button>
      <nav style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
        <Link to="/home" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>Home</Link>
        <Link to="/" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>Main</Link>
      </nav>
    </div>
  );
};

export default Sidebar;