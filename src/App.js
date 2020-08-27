import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MNav from './components/layout/MNav';
import routes from './data/routes';
import ScrollToTop from './components/ScrollToTop';

import './App.css';
import './components/layout/Nav.css';
import './components/projects/Project.css';
import './components/photography/Photography.css';

const App = () => {
  return (
    <Router>
      <div class="app">
        <MNav />
        <ScrollToTop>
          <Switch>{routeComponents}</Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
};

const routeComponents = routes.map(({ path, component }, key) => {
  const props = {
    path,
    component,
    key,
  };
  return <Route exact {...props} />;
});

export default App;
