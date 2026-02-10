import React from 'react';

/**
 * A simple footer component that displays copyright information.
 * 
 * @returns {JSX.Element} The footer element.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{
        textAlign: 'center', 
        padding: '10px', 
        backgroundColor: '#f0f0f0', 
        position: 'fixed', 
        bottom: 0, 
        width: '100%', 
        zIndex: 1 // Ensure the footer is on top of other elements
      }}
    >
      <p>&copy; {currentYear} React-Basic</p>
    </footer>
  );
};

export default Footer;