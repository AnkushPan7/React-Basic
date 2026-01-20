import React from 'react';

/**
 * Footer Component
 *
 * This component displays a footer with copyright information.
 */
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center', borderTop: '1px solid #ccc' }}>
      <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>
        <b>Copyright &copy; 2026 All rights reserved.</b>
      </p>
    </footer>
  );
};

export default Footer;