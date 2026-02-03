import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ items = [], collapsed = false }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  useEffect(() => {
    setIsCollapsed(collapsed);
  }, [collapsed]);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const renderItems = () => {
    return items.map((item, idx) => (
      <li key={idx}>
        <NavLink
          to={item.href}
          className={classNames({ active: item.active || activeItem === item })}
          onClick={() => handleItemClick(item)}
        >
          {item.label}
        </NavLink>
      </li>
    ));
  };

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={classNames('sidebar', { collapsed: isCollapsed })}
      aria-label="Sidebar"
    >
      <nav>
        <ul>{renderItems()}</ul>
      </nav>
      <button
        type="button"
        className="collapse-toggle"
        onClick={handleCollapseToggle}
      >
        {isCollapsed ? 'Expand' : 'Collapse'}
      </button>
    </aside>
  );
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      active: PropTypes.bool,
    })
  ),
  collapsed: PropTypes.bool,
};

Sidebar.defaultProps = {
  items: [],
  collapsed: false,
};

export default Sidebar;