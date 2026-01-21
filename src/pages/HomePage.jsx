import React from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');

  const handleClick = () => {
    alert('You Clicked');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to the Home Page!</h1>
      {name ? (
        <p>Hello, {name}! We're glad to have you.</p>
      ) : (
        <p>Welcome! Please click the 'Hello' button to introduce yourself.</p>
      )}
      <p>Explore our amazing features and enjoy your stay.</p>
      <button onClick={handleClick}>Click Me</button>
      <div style={{ marginTop: '20px' }}>
        {/* Add more content here as needed */}
        <p>This is the home page content. You can add more sections, images, or interactive elements.</p>
      </div>
    </div>
  );
};

export default HomePage;