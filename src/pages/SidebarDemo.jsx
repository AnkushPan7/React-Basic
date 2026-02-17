import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import '../styles/sidebar.css';

const SidebarDemo = () => {
  // Define sample navigation items for the sidebar
  const items = [
    { id: 'dash', label: 'Dashboard', href: '/dashboard', icon: '🏠' },
    { id: 'reports', label: 'Reports', href: '/reports', icon: '📈' },
    { id: 'settings', label: 'Settings', href: '/settings', icon: '⚙️' }
  ];

  // Maintain state for the active path
  const [path, setPath] = useState('/dashboard');

  // Effect to update URL hash on path change for basic navigation
  useEffect(() => {
    window.location.hash = path;
  }, [path]);

  // Handler for navigating between sidebar items
  const navigate = (href) => {
    setPath(href);
    window.location.hash = href;
  };

  // Update items with active state based on current path
  const enhancedItems = items.map((it) => ({ ...it, active: it.href === path }));

  return (
    <div className="sidebar-demo" style={{ display: 'flex', height: '100vh' }}>
      {/* Render the Sidebar component with items and navigation handler */}
      <Sidebar items={enhancedItems} onNavigate={navigate} />

      {/* Content area to the right of the sidebar */}
      <main style={{ marginLeft: 260, padding: 20, width: '100%' }}>
        <h1>Sidebar Demo</h1>
        <p>Active route: {path}</p>
        <p>Use the sidebar to navigate between sections. The content area adjusts accordingly.</p>
      </main>
    </div>
  );
};

export default SidebarDemo;