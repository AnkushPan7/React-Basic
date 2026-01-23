import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar, color = 'red' }) => {

  return (
    <div className={`sidebar ${isOpen ? '' : 'collapsed'}`} style={{ 
        width: isOpen ? '250px' : '80px', 
        transition: 'width 0.3s ease',
        backgroundColor: color,
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
      <nav style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
        <Link to="/home" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>Home</Link>
        <Link to="/" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>Main</Link>
      </nav>
    </div>
  );
};

export default Sidebar;