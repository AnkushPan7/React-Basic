import React from 'react';

const Footer = () => {
  const handleLogout = () => {
    alert('Logout clicked');
  };

  const handleLoginAgain = () => {
    alert('Login Again clicked');
  };

  return (
    <footer style={{ textAlign: 'center' }}>
      <button style={{ 
        backgroundColor: 'yellow',
        color: 'black',
        textTransform: 'uppercase',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
        marginBottom: '10px'
      }} onClick={handleLogout}>LOGOUT</button>
      <br />
      <button style={{ 
        backgroundColor: 'yellow',
        color: 'black',
        textTransform: 'uppercase',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px'
      }} onClick={handleLoginAgain}>Login Again</button>
    </footer>
  );
};

export default Footer;