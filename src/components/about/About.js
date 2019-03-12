import React, { Component } from 'react';
import PageTitle from '../layout/PageTitle';
import { Link } from 'react-router-dom';

class About extends Component {

    render() {

        return (
            <div className="container-fluid container-padding">
                <PageTitle pageName="I'm Patrick" descriptionTop="Nice to meet you" />
                <p className="s-font py-3">I'm a 2nd year student at the University of Waterloo studying Kinesiology. Currently I am located in Toronto, Ontario for the work term as a <Link to="/Work" className="hvr-underline-from-left purple"> web developer at FGF Brands</Link>. In my free time, you can find me lifting weights, playing sports, browsing Reddit, and discovering new artists on Spotify.</p>
                <h3 className="p-font bold my-3">Discover a little more about me!</h3>
                <Link to="/about/story" className="linkdec">
                    <div className="aboutBox">
                        <h5 className="p-font bold">My Story: How I Started Coding</h5>
                    </div>
                </Link>
                <br />
                <Link to="/about/career" className="linkdec">
                    <div className="aboutBox">
                        <h5 className="p-font bold">Career Aspirations: Plans for the Future</h5>
                    </div>
                </Link>
            </div >
        )
    }
}

export default About;