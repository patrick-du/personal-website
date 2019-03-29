import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MNav extends Component {

    toggleActive() {
        document.querySelector('.icon').classList.toggle('active');
        document.querySelector('.mobileNavExpand').classList.toggle('active');
        document.getElementById('mobile').classList.toggle('active');
    }

    render() {

        return (
            <nav className="sticky-top py-1 navbar-light p-font med container-padding" id="mobile">
                <div className="col">
                    <div className="row">
                        <div className="col px-0">
                            <Link to="/">
                                <div className="navbar-brand bold pt-3 text-left"><p>Patrick.</p></div>
                            </Link>
                        </div>
                        <div className="col px-0">
                            <div className="icon float-right align-middle" onClick={this.toggleActive}>
                                <div className="hamburger float-right" />
                            </div>

                        </div>
                    </div>

                    <div className="mobileNavExpand text-center fade-in-fwd">
                        <Link to="/about" onClick={this.toggleActive}>
                            <div className="mobileNavLink s-font py-0">About</div>
                        </Link>
                        <hr className="my-1 py-0" />

                        <Link to="/projects" onClick={this.toggleActive} >
                            <div className="mobileNavLink s-font py-0">Projects</div>
                        </Link>
                        <hr className="my-1 py-0" />
                        <Link to="/photography" onClick={this.toggleActive}>
                            <div className="mobileNavLink s-font py-0">Photography</div>
                        </Link>




                    </div>

                </div>






            </nav>
        );
    }
}

export default MNav;
