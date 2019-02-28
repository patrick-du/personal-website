import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/layout/Nav';
import About from './components/about/About';
import Work from './components/work/Work';
import Fitness from './components/fitness/Fitness';
import Photography from './components/photography/Photography';
import Collection from './components/photography/Collection';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div class="app">
        <Nav/>
          <Switch>
            <Route exact path="/"/>
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/fitness" component={Fitness} />
            <Route exact path="/photography" component={Photography} />
            <Route exact path="/photography/collection" component={Collection}/>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
