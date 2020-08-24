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



            // </nav>
            <React.Fragment>
                {/* https://www.youtube.com/watch?v=lHZdY5kscLo */}
                <nav className="py-1 navbar-light p-font" id="mobile">
                    <div className="navContainer mx-auto">
                        <div className="col">
                            <div className="row">
                                <div className="col px-0">
                                    <div className="icon hvr-grow float-right align-middle" onClick={this.toggleActive}>
                                        <div className="hamburger float-right" />
                                    </div>
                                </div>
                            </div>
                            <div className="mobileNavExpand text-center">
                                <Fade big>
                                    <div style={{marginTop: '25%'}}>
                                        <Link to="/" onClick={this.toggleActive} className="linkdec hvr-float">
                                            <div className="mobileNavLink navlink-font">HOME</div>
                                        </Link>
                                        <br/>
                                        <Link to="/about" onClick={this.toggleActive} className="linkdec hvr-float">
                                            <div className="mobileNavLink navlink-font">ABOUT</div>
                                        </Link>
                                        <br/>
                                        <Link to="/work" onClick={this.toggleActive} className="linkdec hvr-float">
                                            <div className="mobileNavLink navlink-font">WORK</div>
                                        </Link>
                                        <br/>
                                        <Link to="/photography" onClick={this.toggleActive} className="linkdec hvr-float">
                                            <div className="mobileNavLink navlink-font">PHOTOGRAPHY</div>
                                        </Link>
                                    </div>
                                    {/* <div className="row mx-0 mt-5">
                                    <div className="col ml-0">
                                            <a href={Resume} target="_blank" onClick={this.toggleActive} className="linkdec">
                                            <i class="far fa-file icon0"></i>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="mailto:patrickduu@gmail.com" onClick={this.toggleActive}><i class="fas fa-paper-plane icon0" /></a>
                                        </div>
                                        <div className="col">
                                            <a href="https://github.com/patrick-du" target="_blank" onClick={this.toggleActive}><i class="fab fa-github mx-auto icon0" /></a>
                                        </div>
                                        <div className="col pr-0">
                                            <a href="https://www.linkedin.com/in/patrick-du3/" target="_blank" onClick={this.toggleActive}><i class="fab fa-linkedin-in icon0" /></a>

                                        </div>
                                    </div> */}
                                  
                                </Fade>
                            </div>
                        </div>
                    </div>
                </nav>
                <br />
                <br />
                <br />
            </React.Fragment >

        );
    }
}

export default MNav;
