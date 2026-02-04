import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Sidebar = ({ className, ...props }) => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  const [links, setLinks] = useState([
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]);

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveLink(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const handleLinkClick = (event, to) => {
    event.preventDefault();
    window.history.pushState({}, '', to);
    setActiveLink(to);
  };

  const sidebarClasses = classNames('sidebar', className);

  return (
    <div className={sidebarClasses} {...props}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.to}
              onClick={(event) => handleLinkClick(event, link.to)}
              className={classNames({ active: activeLink === link.to })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

Sidebar.defaultProps = {
  className: '',
};

export default Sidebar;