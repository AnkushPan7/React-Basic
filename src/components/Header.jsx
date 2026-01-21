import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: 'lightblue', padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to My App</h1>
      <p>This is a header with some dummy text.</p>
      <button style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', marginRight: '10px' }}>
        click this button
      </button>
      <button style={{ backgroundColor: 'green', borderRadius: '100px', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', marginRight: '10px' }}>
        ADD APPUNIK FORM
      </button>
      <Link to="/home">
        <button style={{ backgroundColor: 'green', color: 'white', borderRadius: '100px' }}>hello</button>
      </Link>
    </header>
  );
}

export default Header;