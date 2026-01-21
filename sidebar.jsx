/* Option 1: Inline style (if applicable) */
<div style={{ backgroundColor: 'blue' }}>
  {/* Sidebar content */}
</div>

/* Option 2: CSS class (recommended) */

/* In your CSS file (e.g., sidebar.css or App.css): */
.sidebar {
  background-color: blue;
}

/* In sidebar.jsx: */
<div className="sidebar">
  {/* Sidebar content */}
</div>