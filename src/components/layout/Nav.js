import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <React.Fragment>
            <nav className="navbar sticky-top navbar-expand-md navbar-light bg-white p-font px-0" id="desktop">
                <div className="navContainer mx-auto">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <Link to="/">
                            <div className="navbar-brand bold mr-auto pt-3"><p>Patrick.</p></div>
                        </Link>
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/about" className="linkdec">
                                    <div className="nav-link hvr-pop s-font">About</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="linkdec">
                                    <div className="nav-link hvr-pop s-font">Work</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/photography" className="linkdec">
                                    <div className="nav-link hvr-pop s-font">Photography</div>
                                </Link>
                            </li>

                        </ul>

                        <Link to="/">
                            <button type="button" className="btn nav-btn float-right s-font ml-auto">Resume</button>
                        </Link>

                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Nav;
