import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/layout/Nav'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div class="app">
        <Nav/>
          <Switch>
            <Route exact path="/"/>
            <Route exact path="/about" />
            <Route exact path="/work" />
            <Route exact path="/fitness" />
            <Route exact path="/gallery" />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
