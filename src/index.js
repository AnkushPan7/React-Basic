import React from 'react';
import ReactDOM from 'react-dom';
import TestButton from './components/TestButton';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <TestButton />
    </React.StrictMode>,
    rootElement
  );
} else {
  console.error('Root element not found');
}

// Ensure the application is properly cleaned up when unmounting
const unmount = () => {
  ReactDOM.unmountComponentAtNode(rootElement);
};

// Add event listener to handle application unmounting
window.addEventListener('beforeunload', unmount);

// Remove event listener when the component is unmounted
return () => {
  window.removeEventListener('beforeunload', unmount);
};