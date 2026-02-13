import React from 'react';
import PropTypes from 'prop-types';

/**
 * A basic button component with customizable text and onClick functionality.
 *
 * @param {Object} props
 * @param {string} props.children - The text to display on the button.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {string} [props.className] - Additional CSS class names for the button.
 * @returns {JSX.Element} The button element.
 */
const OneButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      className={`one-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

OneButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

OneButton.defaultProps = {
  className: '',
};

export default OneButton;