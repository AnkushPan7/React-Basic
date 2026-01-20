```javascript
import React from 'react';

function App() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div style={{ position: 'absolute', top: '0', right: '0', padding: '10px' }}>
        <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer' }}>Login</button>
      </div>
      {/* Other content of your application */}
    </div>
  );
}

export default App;
```