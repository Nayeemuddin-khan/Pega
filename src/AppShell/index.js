import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LeftNavMenu from './LeftNav';
import RightNavBody from './RightNav';

import './styles.css';

const AppShell = (props) => {
  return (
    <Router>
      <div className="app-shell">
        <LeftNavMenu />
        <Route path="/:type/:pageName" component={RightNavBody} />
      </div>
    </Router>
  );
};

export default AppShell;
