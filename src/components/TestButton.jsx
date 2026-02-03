import React from 'react';

/**
 * TestButton component with a yellow background.
 *
 * @returns {JSX.Element} The TestButton component.
 */
const TestButton = () => {
  return (
    <button style={{ backgroundColor: 'yellow', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      Test Button
    </button>
  );
};

export default TestButton;