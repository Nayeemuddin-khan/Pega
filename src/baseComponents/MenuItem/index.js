import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { Icon } from '..';

import './styles.css';

const MenuItem = ({ to, label, icon, classes, isSelected }) => {
  return (
    <div className="menu-item">
      <Link
        className={classnames('link', classes)}
        aria-selected={isSelected}
        aria-pressed={isSelected}
        aria-label={label}
        to={to}
      >
        <Icon name={icon} />
        {label}
      </Link>
    </div>
  );
};

MenuItem.defaultProps = {
  classes: '',
};

export default MenuItem;
