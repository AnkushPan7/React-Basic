// src/components/Header.js
import React from 'react';

function Header() {
  const handleClick = () => {
    alert('hello user');
  };

  return (
    <header>
      <h1>Your App Name</h1>
      <button onClick={handleClick}>Demo Button</button>
    </header>
  );
}

export default Header;