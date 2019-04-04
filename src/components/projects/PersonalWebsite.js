import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';

const PersonalWebsite = () => {
    return (
        <div className="container-fluid fade-in-bottom-project-1 projectContainer mx-auto px-0">
            <PostTop subtitle="Side Project" title="Personal Website" previous="/projects/weatherly" next="/projects/fitbud" />
            <p className="s-font">This is the website you're on right now! I created this website to reinforce what I had learned after completing a React course. This included state management, lifecycle methods, and most importantly, thinking in components.</p>
            <p className="s-font">This website was developed for personal as well as professional usage. It is the 2nd version of my portfolio and the original can be found <a href="https://patrickdu.herokuapp.com" target="_blank" className="hvr-underline-from-left purple">here</a>. View the full project on <a href="https://github.com/patrick-du/FitBud" target="_blank" className="hvr-underline-from-left purple">Github</a>.</p>
            <hr />
            <Link to="../../" className="linkdec">
                <p className="s-font text-center text-muted vert-move mt-5 mb-0">Created by Patrick Du 🎈</p>
            </Link>
        </div>

    )

}

const styles = {

}

export default PersonalWebsite;