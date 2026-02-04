import React from 'react';

/**
 * A reusable button component that displays 'Hello User' with a yellow background.
 *
 * @returns {JSX.Element} The HelloUserButton component.
 */
const HelloUserButton = () => {
  return (
    <button style={{ backgroundColor: 'yellow', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      Hello User
    </button>
  );
};

export default HelloUserButton;