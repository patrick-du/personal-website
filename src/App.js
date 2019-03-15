import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MNav from './components/layout/MNav';
import Nav from './components/layout/Nav';
import About from './components/about/About';
import Story from './components/about/Story';
import Career from './components/about/Career';
import Work from './components/work/Work';
import Projects from './components/projects/Projects';
import Huddle from './components/projects/Huddle';
import PersonalWebsite from './components/projects/PersonalWebsite';
import FitBud from './components/projects/Fitbud';
import Photography from './components/photography/Photography';
import Calgary from './components/photography/Calgary';
import './App.css';
import './components/layout/Nav.css';
import './components/about/About.css';
import './components/work/FGF.css';
import './components/work/EPT.css';
import './components/projects/Project.css';

class App extends Component {

  /*https://flatuicolors.com/palette/ru*/
  render() {
    return (
      <Router>
        <div class="app">
          <MNav />
          <Nav />
          {/*<Bg />*/}
          <Switch>
            <Route exact path="/" />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/huddle" component={Huddle} />
            <Route exact path="/projects/personalwebsite" component={PersonalWebsite} />
            <Route exact path="/projects/fitbud" component={FitBud} />
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
