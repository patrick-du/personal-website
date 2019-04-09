import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Resume from '../../assets/Reflective.pdf'

class MNav extends Component {

    toggleActive() {
        document.querySelector('.icon').classList.toggle('active');
        document.querySelector('.mobileNavExpand').classList.toggle('active');
        document.getElementById('mobile').classList.toggle('active');

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
                                    <Link to="/">
                                        <div className="navbar-brand mr-auto pt-3" style={{ color: ' #2b2b2b' }}><p>Patrick.</p></div>

                                    </Link>
                                </div>
                                <div className="col px-0">
                                    <div className="icon float-right align-middle" onClick={this.toggleActive}>
                                        <div className="hamburger float-right" />
                                    </div>
                                </div>
                            </div>
                            <div className="mobileNavExpand text-center">
                                <hr />
                                <div className="my-5">
                                    <Link to="/about" onClick={this.toggleActive} className="linkdec">
                                        <div className="mobileNavLink s-font">ABOUT</div>
                                    </Link>
                                    <Link to="/projects" onClick={this.toggleActive} className="linkdec" >
                                        <div className="mobileNavLink s-font">WORK</div>
                                    </Link>
                                    <Link to="/photography" onClick={this.toggleActive} className="linkdec" >
                                        <div className="mobileNavLink s-font">PHOTOGRAPHY</div>
                                    </Link>
                                    <a href={Resume} target="_blank" onClick={this.toggleActive} className="linkdec">
                                        <div className="mobileNavLink s-font">RESUME</div>
                                    </a>
                                </div>
                                <hr />
                                <div className="row mx-0 mt-5" style={{ fontSize: 35 }}>
                                    <div className="col ml-0">
                                        <a href="mailto:patrickduu@gmail.com"><i class="far fa-envelope icon1" /></a>
                                    </div>
                                    <div className="col">
                                        <a href="https://github.com/patrick-du" target="_blank"><i class="fab fa-github mx-auto icon2" /></a>
                                    </div>
                                    <div className="col pr-0">
                                        <a href="https://www.linkedin.com/in/patrick-du3/" target="_blank"><i class="fab fa-linkedin-in icon3" /></a>

                                    </div>

                                </div>

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
