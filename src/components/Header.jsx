import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const handleDemoClick = () => {
    alert('hello user');
  };

  const handleHelloClick = () => {
    alert('Hello from the button!');
  };

  return (
    <header style={{ backgroundColor: 'lightblue', padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to My App</h1>
      <p>This is a header with some dummy text.</p>
      <button style={{ backgroundColor: 'green', borderRadius: '100px', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
        ADD APPUNIK FORM
      </button>
      <Link to="/home">
        <button style={{ backgroundColor: 'green', color: 'white', borderRadius: '100px' }}>hello</button>
      </Link>
      <button onClick={handleDemoClick} style={{ backgroundColor: 'blue', color: 'white', borderRadius: '100px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
        Demo Button
      </button>
      <button onClick={handleHelloClick} style={{ backgroundColor: 'blue', color: 'white', borderRadius: '100px', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
        hello
      </button>
    </header>
  );
}

export default Header;