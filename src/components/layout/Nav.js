import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light main-px py-1 p-font">

            <div className="col-3 no-pl">
                <a className="navbar-brand bold pt-3" href="/"> <p>Patrick<span className="p-colour">Du</span></p></a>
            </div>

            <div className="col-6">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-5">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item mx-5">
                            <a className="nav-link" href="/work">Work</a>
                        </li>
                        <li className="nav-item mx-5">
                            <a className="nav-link" href="/fitness">Fitness</a>
                        </li>
                        <li className="nav-item mx-5">
                            <a className="nav-link" href="/gallery">Gallery</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-3 no-pr">
                <a href="/"> <button type="button" className="btn nav-btn float-right">Contact</button> </a>
            </div>
        </nav>
    );
};

export default Nav;