import React from 'react';
import TestComponent from '../components/TestComponent';

/**
 * TestPage component.
 * 
 * @description A basic test page to render the TestComponent.
 * @returns {JSX.Element} The TestPage component.
 */
const TestPage = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <TestComponent />
    </div>
  );
};

export default TestPage;