import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light main-px py-1 p-font med">

            <div className="col-3 px-0">
                <Link to="/">
                    <div className="navbar-brand bold pt-3" href="/"> <p>Patrick<span className="p-colour">Du</span></p></div>
                </Link>
            </div>

                <div className="col-6 px-0">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/about">
                                    <div className="nav-link">About</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/work">
                                    <div className="nav-link">Work</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/fitness">
                                    <div className="nav-link">Fitness</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/photography">
                                    <div className="nav-link">Photography</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-3 px-0">
                    <Link to="/"><button type="button" className="btn nav-btn float-right">Contact</button></Link>
                </div>
        </nav>
            );
        };
        
export default Nav;