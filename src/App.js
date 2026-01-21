```javascript
import React from 'react';

function App() {
  const handleClick = () => {
    alert('You clicked!');
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

export default App;
```