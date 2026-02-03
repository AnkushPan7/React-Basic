import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [menuItemActive, setMenuItemActive] = useState(1);
  const [menuItems, setMenuItems] = useState([
    { id: 1, label: 'Menu Item 1', url: '/menu-item-1' },
    { id: 2, label: 'Menu Item 2', url: '/menu-item-2' },
    { id: 3, label: 'Menu Item 3', url: '/menu-item-3' },
  ]);

  useEffect(() => {
    const handleMenuItemClick = (id) => {
      setMenuItemActive(id);
    };

    return () => {};
  }, []);

  const handleMenuItemClick = (id) => {
    setMenuItemActive(id);
  };

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((menuItem) => (
          <li
            key={menuItem.id}
            className={menuItemActive === menuItem.id ? 'active' : ''}
            onClick={() => handleMenuItemClick(menuItem.id)}
          >
            <a href={menuItem.url}>{menuItem.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;