import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';
import BorderPic from './BorderPic';
import Fade from 'react-reveal/Fade';

const FGFBrands = () => {
    return (
        <div className="container-fluid mx-auto px-0">
            <img src={require(`../../assets/fgfB-opt.png`)} className="topProjectImage" />

            <div className="projectContainer mx-auto px-0">
                <Fade big>
                    <PostTop subtitle="Work Term" title="FGF Brands" previous="/work/fitbud" next="/work/huddle" />
                    <p className="s-font">For my first coop, I spent 4 months working at FGF Brands as an "Innovation Driven" Web Developer in the IT department. Despite knowing little to nothing about web development, I learned a whole lot throughout the term which I'm excited to share.</p>
                    <p className="s-font">Our team utilized the Agile Scrum software development methodology combined with an open office environment making it extremely simple to seek help, make friends, and collaborate on projects.</p>
                    <p className="s-font">Over the course of the term, I was able to pick up on new languages, frameworks, and libraries such as Bootstrap, JavaScript, C#, React, React Native, and Node JS (Express)! I played a major role in several projects such as performing a proof of concept (POC) for the FGF progressive web app, developing a company web framework, and creating a C# console application to assist in managing SharePoint data.</p>
                    <BorderPic imgPath="FGF1.png" picDesc="Before and After" />
                    <p className="s-font">Working at FGF was an incredible experience with lots of opportunities to grow by myself as well as in a team. The company highly values one's ability to work in a team and their work ethic - two skills I was able to further develop during my time at FGF.</p>
                    <p className="s-font">I'm excited for what's to come next and can't wait for my next coop term!</p>
                    <hr />
                </Fade>
                <Fade bottom>
                    <Link to="/work/huddle" className="linkdec hvr-icon-wobble-horizontal">
                        <div className="s-font med" style={{ fontWeight: '600', fontSize: '18px' }}> Up Next
                            <i class="fas fa-arrow-right hvr-icon" style={{ fontSize: '18px', float: "right" }} />
                            <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }}>Huddle</p>
                        </div>
                    </Link>
                </Fade >
            </div>

        </div>


    )

}

const styles = {

}

export default FGFBrands;