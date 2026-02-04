import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * TestButton component.
 * 
 * @description A simple button component that logs a message to the console when clicked.
 * 
 * @returns {JSX.Element} The TestButton component.
 */
const TestButton = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
    console.log('Test button clicked');
  };

  useEffect(() => {
    if (buttonClicked) {
      console.log('Button clicked state updated');
    }
  }, [buttonClicked]);

  return (
    <button onClick={handleClick}>Test Button</button>
  );
};

TestButton.propTypes = {};

TestButton.defaultProps = {};

export default TestButton;