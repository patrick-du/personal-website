import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';

const PersonalWebsite = () => {
    return (
        <div className="container-fluid projectContainer mx-auto px-0">
            <PostTop subtitle="Side Project" title="Personal Website" previous="/projects/weatherly" next="/projects/fitbud" />
            <p className="s-font">This is the website you're on right now! I created this website to reinforce what I had learned after completing a React course. This included state management, lifecycle methods, and most importantly, thinking in components.</p>
            <p className="s-font">This website was developed for personal as well as professional usage. It is the 2nd version of my portfolio and the original can be found <a href="https://patrickdu.herokuapp.com" target="_blank" className="hvr-underline-from-left purple">here</a>. View the full project on <a href="https://github.com/patrick-du/FitBud" target="_blank" className="hvr-underline-from-left purple">Github</a>.</p>
            <hr />
            <Link to="/projects/fitbud" className="linkdec">
                <div className="s-font med" style={{ fontWeight: '600', fontSize: '18px' }}> Up Next
                            <i class="fas fa-arrow-right" style={{ fontSize: '18px', float: "right" }} />
                    <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }}>FitBud</p>
                </div>
            </Link>
        </div>

    )

}
// https://jonyablonski.com/
// www.pratibhajoshi.com
// http://aydaoz.com/?ref=lapaninja#about
const styles = {

}

export default PersonalWebsite;