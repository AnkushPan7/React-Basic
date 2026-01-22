import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const handleDemoClick = () => {
    alert('hello user');
  };

  return (
    <header style={{ backgroundColor: 'lightblue', padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to My App</h1>
      <p>This is a header with some dummy text.</p>
      <button style={{ backgroundColor: 'yellow', borderRadius: '100px', color: 'black', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
        ADD APPUNIK FORM
      </button>
      <Link to="/home">
        <button style={{ backgroundColor: 'yellow', color: 'black', borderRadius: '100px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>hello</button>
      </Link>
      <button onClick={handleDemoClick} style={{ backgroundColor: 'yellow', color: 'white', borderRadius: '100px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
        Demo Button
      </button>
    </header>
  );
}

export default Header;