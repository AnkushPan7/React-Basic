import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/sidebar.css';

export default function SidebarDemo() {
  // Define sample navigation items for the sidebar
  const items = [
    { id: 'dashboard', label: 'Dashboard', path: '#/dashboard', icon: 'home' },
    { id: 'profile', label: 'Profile', path: '#/profile', icon: 'user' },
    { id: 'settings', label: 'Settings', path: '#/settings', icon: 'settings' },
  ];

  // Initialize state to track the active item
  const [activeId, setActiveId] = useState('dashboard');

  // Handle navigation item clicks
  const handleNavigate = (path) => {
    // Find the item that matches the clicked path
    const found = items.find((it) => it.path === path);
    if (found) {
      // Update the active state
      setActiveId(found.id);
    }
    // Simulate navigation by updating the URL hash
    window.location.hash = path;
  };

  return (
    <div className="sidebar-demo-layout" style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Render the Sidebar component with items, activeId, and onNavigate handler */}
      <Sidebar items={items} activeId={activeId} onNavigate={handleNavigate} />
      {/* Main content area */}
      <main className="sb-demo-content" style={{ marginLeft: 240, padding: 24, flex: 1 }}>
        <h1>Sidebar Demo</h1>
        <p>
          Click items in the sidebar to simulate navigation. This demonstrates integration with the new Sidebar component.
        </p>
      </main>
    </div>
  );
}