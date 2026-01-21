import React from 'react';

const Footer = () => {
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
    </footer>
  );
};

export default Footer;