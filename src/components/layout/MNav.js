import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class MNav extends Component {
  toggleActive() {
    document.querySelector('.icon').classList.toggle('active');
    document.querySelector('.mobileNavExpand').classList.toggle('active');
    document.getElementById('mobile').classList.toggle('active');
  }

  removeActive() {
    document.querySelector('.icon').classList.remove('active');
    document.querySelector('.mobileNavExpand').classList.remove('active');
    document.getElementById('mobile').classList.remove('active');
  }

  render() {
    return (
      <React.Fragment>
        <nav className="py-1 navbar-light" id="mobile">
          <div className="navContainer mx-auto">
            <div className="col">
              <div className="row">
                <div className="col px-0">
                  <div
                    className="icon float-right align-middle"
                    onClick={this.toggleActive}
                  >
                    <div className="hamburger float-right" />
                  </div>
                </div>
              </div>
              <div className="mobileNavExpand text-center">
                <Fade big>
                  <div style={{ marginTop: '25%' }}>
                    <Link
                      to="/"
                      onClick={this.toggleActive}
                      className="linkdec hvr-float"
                    >
                      <div className="mobileNavLink navlink-font">HOME</div>
                    </Link>
                    <br />
                    <Link
                      to="/about"
                      onClick={this.toggleActive}
                      className="linkdec hvr-float"
                    >
                      <div className="mobileNavLink navlink-font">ABOUT</div>
                    </Link>
                    <br />
                    <Link
                      to="/work"
                      onClick={this.toggleActive}
                      className="linkdec hvr-float"
                    >
                      <div className="mobileNavLink navlink-font">WORK</div>
                    </Link>
                    <br />
                    <Link
                      to="/photography"
                      onClick={this.toggleActive}
                      className="linkdec hvr-float"
                    >
                      <div className="mobileNavLink navlink-font">
                        PHOTOGRAPHY
                      </div>
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </nav>
        <br />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default MNav;
