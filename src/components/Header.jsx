import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: 'lightblue', padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to My App</h1>
      <p>This is a header with some dummy text.</p>
      <button style={{ backgroundColor: 'green', borderRadius: '100px', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
        ADD APPUNIK FORM
      </button>
      <button style={{ backgroundColor: 'green', color: 'white', borderRadius: '100px' }}>hello</button>
    </header>
  );
}

export default Header;