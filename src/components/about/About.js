import React from 'react';
import PageTitle from '../PageTitle';
import AboutBox from './AboutBox';

const About = () => {
    return (
        <div className="container-fluid main-px mt-5">
            <PageTitle/>
            <AboutBox title="About Me" body="test"/>
            <AboutBox title="Education" body="test"/>
            <AboutBox title="" body="test"/>
        </div>
    )
}



export default About;