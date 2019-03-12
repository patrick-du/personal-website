import React, { Component } from 'react';
import PageTitle from '../layout/PageTitle';
import { Link } from 'react-router-dom';

class About extends Component {

    render() {
        const styles = {
            title: {
                textAlign: 'bottom',
                fontSize: '1.5rem',
                color: '#2c3e50',
                padding: '1rem',
            }
        }
        return (
            <div className="container-fluid container-padding">
                <PageTitle pageName="I'm Patrick" descriptionTop="Nice to meet you" />
                <p className="s-font py-3">I'm a 2nd year student at the University of Waterloo studying Kinesiology. Currently I am located in Toronto, Ontario for the work term as a <Link to="/Work" className="hvr-underline-from-left purple"> web developer at FGF Brands</Link>. In my free time, you can find me lifting weights, playing sports, browsing Reddit, and discovering new artists on Spotify.</p>
                <h3 className="p-font bold">Discover a little more about me!</h3>
                <br />
                <Link to="/about/story" className="linkdec">
                    <div className="aboutBox">
                        <div className="p-font bold" style={styles.title}>My Story</div>
                    </div>
                </Link>
                <br />
                <Link to="/about/career" className="linkdec">
                    <div className="aboutBox">
                        <div className="p-font bold" style={styles.title}>Career Aspirations</div>
                    </div>
                </Link>
            </div >
        )
    }
}

export default About;