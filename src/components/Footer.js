// Example Footer.js
import React from 'react';

const Footer = () => {
  const handleClick = () => {
    alert('Footer button clicked!');
  };

  return (
    <footer style={{ backgroundColor: 'grey', padding: '10px', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Your Company</p>
      <button onClick={handleClick}>footer</button>
    </footer>
  );
};

export default Footer;