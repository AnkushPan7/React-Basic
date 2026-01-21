```javascript
// Assuming a React component
import React from 'react';

function Header() {
  return (
    <header>
      {/* Existing header content */}
      <button style={{ backgroundColor: 'red' }}>click this button</button>
    </header>
  );
}

export default Header;
```
OR
```typescript
// Assuming a React component with TypeScript
import React from 'react';

interface HeaderProps {
  // Define any props if needed
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      {/* Existing header content */}
      <button style={{ backgroundColor: 'red' }}>click this button</button>
    </header>
  );
};

export default Header;
```