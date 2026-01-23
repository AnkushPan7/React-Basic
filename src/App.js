import React from 'react';

function App() {
  const handleClick = () => {
    alert('clicked');
  };

  return (
    <div>
      <button onClick={handleClick}>hello user click</button>
    </div>
  );
}

export default App;