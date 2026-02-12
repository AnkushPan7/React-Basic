import React from 'react';
import Button from '../components/Button.jsx';

/**
 * A demo page for the Button component, showcasing its usage and behavior.
 */
const ButtonDemo = () => {
  /**
   * A click handler that displays an alert with the button name.
   * @param {string} name - The name of the button clicked.
   * @returns {function} A click handler function.
   */
  const handleClick = (name) => () => {
    alert(`Button clicked: ${name}`);
  };

  return (
    <section aria-label="Button Demo" style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Button Demo</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button label="Primary" onClick={handleClick('Primary')} variant="primary" />
        <Button label="Secondary" onClick={handleClick('Secondary')} variant="secondary" />
        <Button label="Danger" onClick={handleClick('Danger')} variant="danger" />
        <Button label="Primary (disabled)" onClick={handleClick('Primary (disabled)')} variant="primary" disabled />
        <Button label="Secondary (disabled)" onClick={handleClick('Secondary (disabled)')} variant="secondary" disabled />
        <Button label="Danger (disabled)" onClick={handleClick('Danger (disabled)')} variant="danger" disabled />
      </div>
    </section>
  );
};

export default ButtonDemo;