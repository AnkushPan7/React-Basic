import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Button component.
 *
 * @param {string} label - The button label.
 * @param {function} onClick - The click event handler.
 * @param {string} [variant='primary'] - The button variant (primary, secondary, danger).
 * @param {string} [size='md'] - The button size (sm, md, lg).
 * @param {boolean} [disabled=false] - Whether the button is disabled.
 * @param {string} [className=''] - Additional CSS class names.
 * @returns {JSX.Element} The Button component.
 */
const Button = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = ''
}) => {
  const base = 'inline-flex items-center justify-center font-semibold rounded';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  if (!variants[variant]) {
    console.error(`Invalid variant: ${variant}. Defaulting to primary.`);
    variant = 'primary';
  }

  if (!sizes[size]) {
    console.error(`Invalid size: ${size}. Defaulting to md.`);
    size = 'md';
  }

  const cls = [
    base,
    variants[variant],
    sizes[size],
    className,
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={cls}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={typeof label === 'string' ? label : 'button'}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  className: PropTypes.string
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  disabled: false,
  className: ''
};

export default Button;