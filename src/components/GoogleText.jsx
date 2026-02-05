import React from 'react';

/**
 * GoogleText Component
 * 
 * This component displays the Google text.
 * 
 * @returns {JSX.Element} A div element containing the Google text.
 */
const GoogleText = () => {
  return (
    <div 
      style={{
        fontSize: '24px', 
        fontWeight: 'bold', 
        color: '#4285F4' // Google blue color
      }}
    >
      Google Text
    </div>
  );
};

export default GoogleText;