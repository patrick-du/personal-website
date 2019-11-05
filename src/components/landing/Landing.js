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
                    <p className="s-font landingDesc">I'm Patrick, a student at UWaterloo. I enjoy creating delightful web experiences focused on functionality and minimalism. Currently, I am seeking a Summer 2020 internship to improve my skills as a full stack developer.</p>
                    <a href={Resume} target="_blank" className="linkdec">
                        <p className="s-font landingNext mt-3 landingResume" style={{ color: '#7f8c8d' }}>No time? View my resume.</p>
                    </a>
                    <div className="row mx-0 mt-5">
                        {/* <a href={Resume} target="_blank" onClick={this.toggleActive} className="linkdec"><i class="fas fa-file-alt icon0"></i></a> */}
                        <a href="https://github.com/patrick-du" target="_blank" onClick={this.toggleActive}><i class="fab fa-github icon0" /></a>
                        <a href="https://www.linkedin.com/in/patrick-du3/" target="_blank" onClick={this.toggleActive}><i class="fab fa-linkedin-in icon0 " /></a>
                        <a href="mailto:patrickduu@gmail.com" onClick={this.toggleActive}><i class="fas fa-paper-plane icon0" /></a>

                    </div>
                </Fade>
            </div >


        );
    }
}
export default Landing