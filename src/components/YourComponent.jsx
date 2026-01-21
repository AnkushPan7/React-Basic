import React from 'react';
import PropTypes from 'prop-types';

/**
 * YourComponent: A simple component that renders a button with bold text.
 *
 * @param {string} buttonText - The text to display on the button. Defaults to "Click Me!".
 * @param {function} onClick - A function to be called when the button is clicked.  Defaults to a console log.
 * @returns {JSX.Element} A button.
 */
function YourComponent({ buttonText = "Click Me!", onClick = () => console.log("Button Clicked!") }) {
  return (
      <button
        style={{
          backgroundColor: 'red',
          color: 'white',
          width: '100%',
          borderRadius: '5px',
          padding: '10px',
          textAlign: 'right',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        <b>{buttonText}</b>
      </button>
  );
}

YourComponent.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};

export default YourComponent;