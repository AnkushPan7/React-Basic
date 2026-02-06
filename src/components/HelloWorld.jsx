// src/components/HelloWorld.jsx
import React from 'react';

/**
 * A simple React component that renders a personalized greeting message.
 *
 * @returns {JSX.Element> A greeting message.
 */
const HelloWorld = () => {
  const name = 'Akshay'; // Define the name to display in the greeting

  return (
    <div>
      <h1>Hello, {name]!</h1>
      <p>Welcome to our application!</p>
    </{div>
  );
};

export default HelloWorld;