import React from 'react';
import PageTitle from '../layout/PageTitle';
import Introduction from './Introduction';
import AboutBox from './AboutBox';

const About = () => {
    return (
        <div className="container-fluid main-px mt-5">
            <Introduction title="Nice to meet you" subtitle="I'm Patrick Du" paragraph1=" I'm currently wIn my free time, I can be found at the gym playing volleyball, working out, or drinking bubble tea." />
            <AboutBox title="" subtitle="Education" paragraph1="I am studying Kinesiology at the University of Waterloo. Being in the applied health sciences faculty, I am constantly surrounded by " />
            <AboutBox
                title="Career aspirations"
                subtitle="Exploring the link betweeen fitness and technology"
                paragraph1="Attending a school at the forefront of innovation I am constantly surrounded by hard working and talented individuals that push me in whatever it is that I do.  "
                paragraph2="In my first year, whenever I was asked about my future plans I immediately blurted out that I would be a physiotherapist. It was the easiest answer. What else would you be doing in the kinesiology program otherwise?" />
        </div>
    )
}

export default About;