import React from 'react';
import './Header.css'; // Assuming you have a Header.css file

function Header() {
  const handleAddForm = () => {
    alert('Add Form clicked');
  };

  return (
    <header className="header">
      {/* Existing header content */}
      <button 
        className="add-form-button"
        style={{ backgroundColor: 'yellow' }}
        onClick={handleAddForm}
      >
        ADD FORM
      </button>
    </header>
  );
}

export default Header;