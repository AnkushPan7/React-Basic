import React from 'react';
import PropTypes from 'prop-types';

/**
 * YourComponent: A simple component that renders a button with bold text.
 *
 * @param {string} buttonText - The text to display on the button. Defaults to "Click Me!".
 * @param {string} backgroundColor - The background color of the button. Defaults to 'lightgray'.
 * @param {function} onClick - A function to be called when the button is clicked.  Defaults to a console log.
 * @returns {JSX.Element} A div containing a button.
 */
function YourComponent({ buttonText = "Click Me!", backgroundColor = 'yellow', onClick = () => console.log("Button Clicked!") }) {
  return (
    <div>
      <button
        style={{ backgroundColor: backgroundColor, border: 'none', padding: '10px 20px', cursor: 'pointer', borderRadius: '100px' }}
        onClick={onClick}
      >
        <b>{buttonText}</b>
      </button>
    </div>
  );
}

YourComponent.propTypes = {
  buttonText: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default YourComponent;