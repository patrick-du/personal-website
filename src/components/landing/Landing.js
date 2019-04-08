import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {

    render() {
        return (

            <div className="container-fluid projectContainer mx-auto px-0">

                <p className="p-font landingTitle">HELLO<span style={{ color: '#546de5', fontSize: '150%' }}>.</span></p>
                <p className="s-font landingDesc">I'm Patrick Du, a web developer from Toronto. I enjoy creating delightful web experiences focused on functionality and minimalism.</p>
                <Link to="/about">
                    <p className="s-font landingNext mt-5" style={{ color: '#7f8c8d', fontSize: '16px' }}>LEARN MORE</p>
                </Link>


            </div >


        );
    }
}
export default Landing