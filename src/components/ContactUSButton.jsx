import React from 'react';
import './ContactUSButton.css';

/**
 * ContactUSButton component.
 * 
 * This component represents a button that, when clicked, allows users to contact us.
 * 
 * @returns {JSX.Element} The ContactUSButton component.
 */
const ContactUSButton = () => {
  const handleContactUSClick = () => {
    // Add logic to handle the contact us button click
    // For example, you can open a modal or navigate to a contact us page
    console.log('Contact US button clicked');
  };

  return (
    <button className="contact-us-button" onClick={handleContactUSClick}>
      Contact US
    </button>
  );
};

export default ContactUSButton;