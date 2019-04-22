import React, { Component } from 'react';
import PageTitle from '../layout/PageTitle';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class About extends Component {

    render() {

        return (
            <div className="container-fluid projectContainer mx-auto px-0">

                <PageTitle pageName="About Me" descriptionBottom="A small introduction..." picture="bitmoji4" />
                <Fade big>
                    <p className="s-font mt-3">I'm a 2nd year student at the University of Waterloo studying Kinesiology. Currently I am located in Toronto, Ontario for the work term as a <Link to="/work" className="hvr-underline-from-left purple"> web developer at FGF Brands</Link>. In my free time, you can find me lifting weights, playing sports, browsing Reddit, and discovering new music on <a className="hvr-underline-from-left-spotify green" href="https://open.spotify.com/user/pdupapaya" target="_blank">Spotify</a>.</p>
                    <hr />
                    <p className="s-font">I am a very goal-oriented individual and constantly aim for new heights whether it be in my academic development or simply setting new PRs at the gym. For the 2019 summer term, I have three main goals I hope to achieve and am excited to see where my strong work ethic and perserverance will take me.<br /><br />
                        Academic Goal: Become proficient in a back-end language such as Java<br /><br />
                        Fitness Goal: Join the <a className="hvr-underline-from-left purple" href="https://www.urbandictionary.com/define.php?term=1000%20pound%20club" target="_blank">1000 lb club</a><br /><br />
                        Career Goal: Land a full stack developer position for my next coop term<br />
                    </p >

                    <hr />
                    <Link to="/about/story" className="linkdec">
                        <div className="s-font med hvr-icon-wobble-horizontal" style={{ fontWeight: '600', fontSize: '18px' }}>How I Started Coding
                            <i class="fas fa-arrow-right hvr-icon" style={{ fontSize: '18px', float: "right" }} />
                            <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }}>My Story</p>
                        </div>
                    </Link>

                    <hr />
                    <Link to="/about/career" className="linkdec">
                        <div className="s-font med hvr-icon-wobble-horizontal" style={{ fontWeight: '600', fontSize: '18px' }}>Plans for the Future
                            <i class="fas fa-arrow-right hvr-icon" style={{ fontSize: '18px', float: "right" }} />
                            <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }} >Career Aspirations</p>
                        </div>
                    </Link>
                </Fade>



            </div>

        )
    }
}

export default About;