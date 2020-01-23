import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MNav from './components/layout/MNav';
import Landing from './components/landing/Landing';
import About from './components/about/About';
import Story from './components/about/Story';
import Career from './components/about/Career';
import Projects from './components/projects/Projects';
import OculysHealthInformatics from './components/projects/OculysHealthInformatics';
import FGFBrands from './components/projects/FGFBrands';
import ElementsPhysicalTherapy from './components/projects/ElementsPhysicalTherapy';
import Huddle from './components/projects/Huddle';
import UserAuth from './components/projects/UserAuth';
import Weatherly from './components/projects/Weatherly';
import PersonalWebsite from './components/projects/PersonalWebsite';
import FitBud from './components/projects/Fitbud';
import Photography from './components/photography/Photography';
import LosAngeles from './components/photography/LosAngeles';
import Banff from './components/photography/Banff';
import Calgary from './components/photography/Calgary';
import Toronto from './components/photography/Toronto';
import ScrollToTop from './components/ScrollToTop';

import './App.css';
import './components/layout/Nav.css';
import './components/layout/ContactExpand.css';
import './components/layout/PostTop.css';
import './components/layout/NextPageBottom.css';
import './components/landing/Landing.css';
import './components/about/About.css';
import './components/projects/Project.css';
import './components/layout/PageTitle.css';
import './components/photography/Photography.css';


class App extends Component {

  render() {
    return (

      <Router>
        <div class="app">
          <MNav />
          < ScrollToTop >
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/about/story" component={Story} />
              <Route exact path="/about/career" component={Career} />
              <Route exact path="/work" component={Projects} />
              <Route exact path="/work/oculyshealthinformatics" component={OculysHealthInformatics} />
              <Route exact path="/work/fgfbrands" component={FGFBrands} />
              <Route exact path="/work/elementsphysicaltherapy" component={ElementsPhysicalTherapy} />
              <Route exact path="/work/huddle" component={Huddle} />
              {/* <Route exact path="/work/userauth" component={UserAuth} /> */}
              <Route exact path="/work/weatherly" component={Weatherly} />
              <Route exact path="/work/personalwebsite" component={PersonalWebsite} />
              {/* <Route exact path="/work/fitbud" component={FitBud} /> */}
              <Route exact path="/photography" component={Photography} />
              <Route exact path="/photography/losangeles" component={LosAngeles} />
              <Route exact path="/photography/banff" component={Banff} />
              <Route exact path="/photography/calgary" component={Calgary} />
              <Route exact path="/photography/toronto" component={Toronto} />
            </Switch>
          </ScrollToTop>
        </div>
      </Router >


    );
  }
}

export default App;
