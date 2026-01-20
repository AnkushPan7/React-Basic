import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  const handleLogout = () => {
    // Implement logout functionality here
    console.log('Logout clicked');
    // Example: Redirect to login page or clear user session
    alert('Logout clicked');
  };

  const handleAiAssistant = () => {
    // Implement AI Assistant functionality here
    console.log('AI ASSISTANT clicked');
    // Example: Open AI Assistant modal or navigate to AI Assistant page
    alert('AI ASSISTANT clicked');
  };

  const handleAddDynamicForm = () => {
    // Implement Add Dynamic Form functionality here
    console.log('Add Dynamic Form clicked');
    // Example: Open Dynamic Form creation modal or navigate to Dynamic Form creation page
    alert('Add Dynamic Form clicked');
  };

  return (
    <header className="main-header">
      <h1>Dynamic Form Builder</h1>
      <div className="button-container">
        <button className="login-button">Login</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
        <button className="ai-assistant-button" onClick={handleAiAssistant}>AI ASSISTANT</button>
        <button className="add-dynamic-form-button" onClick={handleAddDynamicForm}>ADD DYNAMIC FORM</button>
      </div>
    </header>
  );
};

export default Header;