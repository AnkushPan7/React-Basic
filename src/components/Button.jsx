import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * A reusable Button component with customizable text and onClick handler.
 *
 * @param {object} props
 * @param {string} props.children - The text to be displayed on the button.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @param {string} [props.className] - Additional CSS class names for the button.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 */
const Button = ({ children, onClick, className, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`basic-button ${className || ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;