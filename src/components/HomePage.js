// src/components/HomePage.js
import React from 'react';

const HomePage = () => {
  // Retrieve the welcome message from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const welcomeMessage = urlParams.get('message');

  return (
    <div>
      <h1>Home Page</h1>
      {welcomeMessage && <p>{welcomeMessage}</p>}
    </div>
  );
};

export default HomePage;