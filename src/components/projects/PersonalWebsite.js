import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';

const PersonalWebsite = () => {
    return (
        <div className="container-fluid container-padding">
            <PostTop subtitle="Version 2" title="Personal Website" cancel="/projects" next="/projects/fitbud" />
            <p className="s-font" style={styles.body}>A website developed for professional and personal purposes.</p>
            <p className="s-font" style={styles.body}>I created this website to reinforce and showcase what I had learned after completing a JavaScript course and a React Course during my coop term.</p>
            <p className="s-font" style={styles.body}>This is the 2nd version of my portfolio website. The original can be found <a href="https://patrickdu.herokuapp.com" target="_blank" className="hvr-underline-from-left purple">here</a>.</p>
            <a href="https://github.com/patrick-du/Personal-Website-v2" target="_blank"><button type="button" class="btn s-font hvr-bounce-to-right btnBorder">View on Github</button></a>

            <Link to="../../" className="linkdec">
                <p className="s-font text-center text-muted vert-move mt-5 mb-0">Created by Patrick Du 🎈</p>
            </Link>
        </div>

    )

}

const styles = {

}

export default PersonalWebsite;