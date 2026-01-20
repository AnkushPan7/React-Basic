import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faInfoCircle, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${collapsed ? 'collapsed' : ''} ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Close Button (Mobile) */}
        <button className="close-button" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Collapse Toggle Button */}
        <button className="collapse-button" onClick={toggleCollapse}>
          <FontAwesomeIcon icon={collapsed ? faBars : faTimes} />
        </button>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={isMobileMenuOpen ? toggleMobileMenu : null}>
              <FontAwesomeIcon icon={faHome} className="icon" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={isMobileMenuOpen ? toggleMobileMenu : null}>
              <FontAwesomeIcon icon={faInfoCircle} className="icon" />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" onClick={isMobileMenuOpen ? toggleMobileMenu : null}>
              <FontAwesomeIcon icon={faCog} className="icon" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;