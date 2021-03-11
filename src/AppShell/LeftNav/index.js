import React from 'react';
import classNames from 'classnames';

import config from './config';
import CreateNew from './createNew';
import LandingPages from './landingPages';

import './styles.css';

const LeftNavMenu = () => {
  // we can destrucutre outside the component as well, just to give impression if config is coming from props, I kept this inside the comp
  const { createNew, landingPages, app } = config;

  return (
    <div className="left-nav">
      <div className={classNames('navItemWidth', 'app-logo-container')}>
        <img className="logo" src={app.img} alt={app.label} />
        <label>{app.label}</label>
      </div>

      <CreateNew items={createNew} />
      <LandingPages items={landingPages} />
    </div>
  );
};

export default LeftNavMenu;
