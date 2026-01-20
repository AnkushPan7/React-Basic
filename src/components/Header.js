import React from 'react';

const Header = () => {
  const handleAddTask = () => {
    alert('Add Task clicked');
  };

  return (
    <header style={{ backgroundColor: 'yellow' }}>
      <h1>Basic App</h1>
      <button onClick={handleAddTask}>Add Task</button>
    </header>
  );
};

export default Header;