import React, { Component } from 'react';
import ContactExpand from '../layout/ContactExpand';
import { Link } from 'react-router-dom';

class Landing extends Component {

    render() {
        return (

            <div className="container-fluid fade-in-fwd-landing projectContainer mx-auto px-0">
                <div className="col px-0 py-3">
                    <h1 className="p-font bold mt-5 ">Hello, I'm Patrick. </h1>
                    <h1 className="p-font mt-5 landingDesc">I am a passionate <span className="landingTextBg">front-end developer</span> based in Toronto. I am focused on creating great experiences for people on web and mobile devices.</h1>
                    <h5 className="s-font my-5" style={{color: '#7f8c8d'}}>Currently studying at UWaterloo and previously a developer intern at FGF Brands.</h5>
                </div>
                <ContactExpand />
            </div >


        );
    }
}
export default Landing