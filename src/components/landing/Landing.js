import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Resume from '../../assets/Resume.pdf'
import Fade from 'react-reveal/Fade';


class Landing extends Component {

    render() {
        return (

            <div className="container-fluid projectContainer mx-auto px-0">
                <Fade big>
                    <p className="p-font landingTitle mt-5">HELLO<span style={{ color: '#546de5', fontSize: '120%' }}>.</span></p>
                    {/*<img className="bitmoji" src={require(`../../assets/bitmoji2.png`)} />*/}
                        <p className="s-font landingDesc">I'm Patrick, a student at UWaterloo. I enjoy creating delightful web experiences focused on functionality and minimalism.</p>
                    <a href={Resume} target="_blank" className="linkdec">
                        <p className="s-font landingNext mt-3 landingResume" style={{ color: '#7f8c8d' }}>No time? View my resume.</p>
                    </a>
                </Fade>
            </div >


        );
    }
}
export default Landing