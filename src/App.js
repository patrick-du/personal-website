import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MNav from './components/layout/MNav';
import Landing from './components/landing/Landing';
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
import ScrollToTop from './components/ScrollToTop';

import './App.css';
import './components/layout/Nav.css';
import './components/layout/ContactExpand.css';
import './components/landing/Landing.css';
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
          {/*<Bg />*/}
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Landing} />
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
            </Switch>
          </ScrollToTop>
        </div>
      </Router>

    );
  }
}

export default App;
