import React from 'react';

const Header = () => {
  const handleLogout = () => {
    alert('Logout clicked');
  };

  const handleAiAssistant = () => {
    alert('AI ASSISTANT clicked');
  };

  const handleAddAppunikForm = () => {
    alert('ADD APPUNIK FORM clicked');
  };

  return (
    <header className="main-header">
      <h1>Basic App</h1>
      <div className="button-container">
        <button className="login-button">Login</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
        <button onClick={handleAiAssistant}>AI ASSISTANT</button>
        <button style={{ backgroundColor: 'yellow' }} onClick={handleAddAppunikForm}>ADD APPUNIK FORM</button>
      </div>
    </header>
  );
};

export default Header;