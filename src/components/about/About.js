import React from 'react';
import PageTitle from '../layout/PageTitle';
import AboutBox from './AboutBox';

const About = () => {
    return (
        <div className="container-fluid main-px mt-5">
            <PageTitle pageName="About Me"/>
            <AboutBox title="About Me" body="body text"/>
            <AboutBox title="Education" body="body text"/>
        </div>
    )
}

export default About;