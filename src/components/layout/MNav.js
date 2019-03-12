import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM, { render } from 'react-dom';

class MNav extends Component {

    state = {
        isOpen: false
    };

    toggleOpen = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        let navStyle = {
            backgroundColor: 'brown',
            boxShadow: '0 0 10px #ccc',
            width: '100%',
        }

        if (this.state.isOpen) {
            navStyle = {
                backgroundColor: 'white',
                boxShadow: '0 0 10px #ccc',
                transform: 'translateY(100)'

            }
        }




        return (
            <nav className="sticky-top navbar-light py-1 p-font med container-padding" id="mobile" style={navStyle}>
                <button onClick={this.toggleOpen}>hi</button>
                <Link to="/">
                    <div className="navbar-brand bold pt-3 text-left"><p>asd.</p></div>
                </Link>



            </nav>
        );
    }
}

export default MNav;
