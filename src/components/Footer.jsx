import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center' }}>
      <button style={{ 
        backgroundColor: 'yellow',
        color: 'black',
        textTransform: 'uppercase',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px'
      }}>LOGOUT</button>
    </footer>
  );
};

export default Footer;