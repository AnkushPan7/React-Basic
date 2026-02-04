import React from 'react';

const Footer = () => {
  const handleClick = () => {
    console.log('Button clicked');
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
      <button onClick={handleClick}>userclick</button>
    </footer>
  );
};

export default Footer;