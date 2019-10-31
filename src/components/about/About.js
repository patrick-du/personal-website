import React, { Component } from 'react';
import PageTitle from '../layout/PageTitle';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import NextPageBottom from '../layout/NextPageBottom';
class About extends Component {

    render() {

        return (
            <div className="container-fluid projectContainer mx-auto px-0">
                <PageTitle pageName="About Me" descriptionBottom="A small introduction..." picture="bitmoji4" />
                <Fade big>
                    <p className="general-font mt-3">I'm a 3rd year student at the University of Waterloo studying Kinesiology with a minor in Computing. Currently, I am interning as a <Link to="/work" className="hvr-underline-from-left purple"> software developer at Oculys Health Informatics</Link> in Waterloo, Ontario for my 2nd coop term. In my free time, you can find me lifting weights, playing sports, browsing Reddit, and discovering new music on <a className="hvr-underline-from-left-spotify green" href="https://open.spotify.com/user/pdupapaya" target="_blank">Spotify</a>.</p>
                    <hr />
                    <p className="general-font">I am a very goal-oriented individual and constantly aim for new heights, whether it be in my academic development, or simply setting new PRs at the gym. For the 2019 fall term, I have three main goals I hope to achieve and I am excited to see where my strong work ethic and perseverance will take me.<br /><br />
                        Academic Goal: Explore machine learning and potential applications in the healthcare industry<br /><br />
                        Fitness Goal: Join the <a className="hvr-underline-from-left purple" href="https://www.urbandictionary.com/define.php?term=1000%20pound%20club" target="_blank">1000 lb club</a><br /><br />
                        Career Goal: Land a full stack developer position for my next coop term<br />
                    </p >
                    <hr />
                    <NextPageBottom route="/about/story" title="How I Started Coding" subtitle="My Story"/>
                    <hr />
                    <NextPageBottom route="/about/career" title="Plans for the Future" subtitle="Career Aspirations"/>
                </Fade>
            </div>

        )
    }
}

export default About;