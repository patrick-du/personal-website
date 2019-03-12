import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/layout/Nav';
import About from './components/about/About';
import Story from './components/about/Story';
import Career from './components/about/Career';
import Work from './components/work/Work';
import Projects from './components/projects/Projects';
import Photography from './components/photography/Photography';
import Calgary from './components/photography/Calgary';

import './App.css';

class App extends Component {

  /*https://flatuicolors.com/palette/ru*/
  render() {
    return (
      <Router>
        <div class="app">
          <Nav />
          {/*<Bg />*/}
          <Switch>
            <Route exact path="/" />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/photography" component={Photography} />
            <Route exact path="/about/story" component={Story} />
            <Route exact path="/about/career" component={Career} />
            <Route exact path="/photography/calgary" component={Calgary} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
