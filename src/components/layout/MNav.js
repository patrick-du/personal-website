import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MNav extends Component {


    burgerToggle() {
        let linksEl = document.querySelector('.mobileNavExpand');
        let heightEl = document.getElementById('mobile');

        if (linksEl.style.display === 'none' && heightEl.style.height === '4.5rem') {
            heightEl.style.height = '13rem';
            linksEl.style.display = 'block';
        } else {
            heightEl.style.height = '4.5rem';
            linksEl.style.display = 'none';

        }
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
                            <i className="fa fa-bars fa-2x pt-3 float-right burgerIcon" onClick={this.burgerToggle}></i>
                        </div>

                    </div>

                    <div className="mobileNavExpand text-center fade-in-fwd">
                        <Link to="/about" onClick={this.burgerToggle}>
                            <div className="mobileNavLink s-font py-0">About</div>
                        </Link>
                        <hr className="my-1 py-0" />

                        <Link to="/projects" onClick={this.burgerToggle} >
                            <div className="mobileNavLink s-font py-0">Projects</div>
                        </Link>
                        <hr className="my-1 py-0" />
                        <Link to="/photography" onClick={this.burgerToggle}>
                            <div className="mobileNavLink s-font py-0">Photography</div>
                        </Link>




                    </div>

                </div>






            </nav>
        );
    }
}

export default MNav;
