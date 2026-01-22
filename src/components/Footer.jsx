import React from 'react';

const Footer = () => {
  const handleLogout = () => {
    alert('You have been logged out!');
  };

  return (
    <footer style={{ 
      backgroundColor: 'lightgray',
      padding: '20px',
      textAlign: 'center',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%'
    }}>
      <p>&copy; 2024 My App. All rights reserved.</p>
      <p>This is a footer with some dummy text.</p>
      <button onClick={handleLogout} style={{ backgroundColor: 'red', color: 'white', borderRadius: '5px', padding: '5px 10px', border: 'none', cursor: 'pointer' }}>Logout</button>
    </footer>
  );
};

export default Footer;