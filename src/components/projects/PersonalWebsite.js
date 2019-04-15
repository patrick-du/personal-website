import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';
import BorderPic from './BorderPic'
import Fade from 'react-reveal/Fade';

const PersonalWebsite = () => {
    return (
        <div className="container-fluid mx-auto px-0">
            <img src={require(`../../assets/websiteB.png`)} className="topProjectImage" />


            <div className="projectContainer mx-auto px-0">
                <Fade big>

                    <PostTop subtitle="Side Project" title="Personal Website" previous="/work/weatherly" next="/work/fitbud" />
                    <p className="s-font">This is the website you're on right now! I created this website to reinforce what I had learned after completing a React JS course. This includes state management, lifecycle methods, routing, understanding data flow, and thinking in components.</p>
                    <p className="s-font">This website was developed for personal and professional usage. It is the 2nd version of my portfolio and the original can be found <a href="https://patrickdu.herokuapp.com" target="_blank" className="hvr-underline-from-left purple">here</a>. View the full project on <a href="https://github.com/patrick-du/Personal-Website-v2" target="_blank" className="hvr-underline-from-left purple">Github</a>.</p>
                    <hr />
                </Fade>
                <Fade bottom>
                    <Link to="/work/fitbud" className="linkdec">
                        <div className="s-font med" style={{ fontWeight: '600', fontSize: '18px' }}> Up Next
                            <i class="fas fa-arrow-right" style={{ fontSize: '18px', float: "right" }} />
                            <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }}>FitBud</p>
                        </div>
                    </Link>
                </Fade>

            </div>
        </div>

    )

}
// https://jonyablonski.com/
// www.pratibhajoshi.com
// http://aydaoz.com/?ref=lapaninja#about
const styles = {

}

export default PersonalWebsite;