import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MNav from './components/layout/MNav';
import Nav from './components/layout/Nav';
import About from './components/about/About';
import Story from './components/about/Story';
import Career from './components/about/Career';
import Projects from './components/projects/Projects';
import FGFBrands from './components/projects/FGFBrands';
import ElementsPhysicalTherapy from './components/projects/ElementsPhysicalTherapy';
import Huddle from './components/projects/Huddle';
import Weatherly from './components/projects/Weatherly';
import PersonalWebsite from './components/projects/PersonalWebsite';
import FitBud from './components/projects/Fitbud';
import Photography from './components/photography/Photography';
import Calgary from './components/photography/Calgary';
import './App.css';
import './components/layout/Nav.css';
import './components/about/About.css';
import './components/projects/Project.css';
import './components/layout/PageTitle.css';

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
            <Route exact path="/about/story" component={Story} />
            <Route exact path="/about/career" component={Career} />

            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/fgfbrands" component={FGFBrands} />
            <Route exact path="/projects/elementsphysicaltherapy" component={ElementsPhysicalTherapy} />
            <Route exact path="/projects/huddle" component={Huddle} />
            <Route exact path="/projects/weatherly" component={Weatherly} />
            <Route exact path="/projects/personalwebsite" component={PersonalWebsite} />
            <Route exact path="/projects/fitbud" component={FitBud} />

            <Route exact path="/photography" component={Photography} />
            <Route exact path="/photography/calgary" component={Calgary} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
