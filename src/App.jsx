import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MNav from './components/MNav';
import routes from './data/routes';
import ScrollToTop from './components/ScrollToTop';
import GlobalStyles from './styles/global';
import './App.css';
import './components/Nav.css';

const routeComponents = routes.map(({ path, component }, key) => {
  const props = {
    path,
    component,
    key,
  };
  return <Route exact {...props} />;
});

const App = () => {
  return (
    <Router>
      <div className="app">
        <GlobalStyles />
        <MNav />
        <ScrollToTop>
          <Switch>{routeComponents}</Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
};

export default App;
