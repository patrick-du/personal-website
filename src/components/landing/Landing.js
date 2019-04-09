import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {

    render() {
        return (

            <div className="container-fluid projectContainer mx-auto px-0">
                <p className="p-font landingTitle">HELLO<span style={{ color: '#F9B339', fontSize: '120%' }}>. . .</span></p>
                <img className="bitmoji" src={require(`../../assets/bitmoji2.png`)} />

                <p className="s-font landingDesc">I'm Patrick Du, a web developer from Toronto. I enjoy creating delightful web experiences focused on functionality and minimalism.</p>
                <Link to="/about" className="linkdec">
                    <p className="s-font landingNext mt-5" style={{ color: '#7f8c8d' }}>View my resume </p>
                </Link>


            </div >


        );
    }
}
export default Landing