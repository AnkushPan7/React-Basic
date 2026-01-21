```javascript
import React, { useState } from 'react';
import Sidebar from './components/Sidebar'; // Adjust path if necessary

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div style={{ display: 'flex' }}>
      {isSidebarVisible && <Sidebar style={{ backgroundColor: 'green', width: '200px', height: '100vh' }} />}
      <div style={{ flex: 1, padding: '20px' }}>
        {/* Main content of your application */}
        <h1>Kanban Board</h1>
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
      </div>
    </div>
  );
}

export default App;
```