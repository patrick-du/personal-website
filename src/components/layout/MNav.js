import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Resume from '../../assets/Reflective.pdf'

class MNav extends Component {

    toggleActive() {
        document.querySelector('.icon').classList.toggle('active');
        document.querySelector('.mobileNavExpand').classList.toggle('active');
        document.getElementById('mobile').classList.toggle('active');
    }

    closeNav() {
        document.getElementById('mNav').style.height = '0%';
    }

    openNav() {
        document.getElementById('mNav').style.height = '100%';
    }

    render() {

        return (
            // <nav className="sticky-top py-1 navbar-light s-font">
            //     <div className="navContainer mx-auto">
            //         <div id="mNav" className="overlay">
            //             <div className="icon float-right" onClick={this.closeNav}>
            //                 <div className="hamburger float-right" />
            //             </div>

            //             <div className="overlay-content">
            //                 <a href="#">Home</a>
            //                 <a href="#">About</a>
            //                 <a href="#">Work</a>
            //                 <a href="#">Resume</a>
            //             </div>


            //         </div>


            //         <div className="icon float-right" onClick={this.openNav}>
            //             <div className="hamburger float-right" />
            //         </div>

            //     </div>


            // </nav>
            <React.Fragment>

                <nav className="py-1 navbar-light p-font" id="mobile">
                    <div className="navContainer mx-auto">
                        <div className="col">
                            <div className="row">
                                <div className="col px-0">
                                    <Link to="/">
                                        <div className="navbar-brand mr-auto pt-3" style={{ color: '#2C3E50' }}><p>Patrick.</p></div>

                                    </Link>
                                </div>
                                <div className="col px-0">
                                    <div className="icon float-right align-middle" onClick={this.toggleActive}>
                                        <div className="hamburger float-right" />
                                    </div>
                                </div>
                            </div>

                            <div className="mobileNavExpand text-center">
                                <Link to="/" onClick={this.toggleActive}>
                                    <div className="mobileNavLink p-font">HOME</div>
                                </Link>
                                <hr />
                                <Link to="/about" onClick={this.toggleActive}>
                                    <div className="mobileNavLink p-font">ABOUT</div>
                                </Link>
                                <hr />

                                <Link to="/projects" onClick={this.toggleActive} >
                                    <div className="mobileNavLink p-font">WORK</div>
                                </Link>
                                <hr />

                                <Link to="/photography" onClick={this.toggleActive}>
                                    <div className="mobileNavLink p-font">RESUME</div>
                                </Link>
                                <hr />
                                <div className="row mx-0" style={{ fontSize: 40 }}>
                                    <div className="col ml-0">
                                        <a href="mailto:patrickduu@gmail.com"><i class="far fa-envelope" style={{ color: '#2C3E50' }} /></a>
                                    </div>
                                    <div className="col">
                                        <a href="https://github.com/patrick-du" target="_blank"><i class="fab fa-github mx-auto" style={{ color: '#2C3E50' }} /></a>

                                    </div>
                                    <div className="col pr-0">
                                        <a href="https://www.linkedin.com/in/patrick-du3/" target="_blank"><i class="fab fa-linkedin-in" style={{ color: '#2C3E50' }} /></a>

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
