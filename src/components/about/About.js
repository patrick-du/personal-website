import React, { Component } from 'react';
import PageTitle from '../layout/PageTitle';
import { Link } from 'react-router-dom';
import { cpus } from 'os';

class About extends Component {

    render() {

        return (
            <div className="container-fluid projectContainer mx-auto px-0">

                <PageTitle pageName="About Me" descriptionBottom="A small introduction..." />
                <p className="s-font">I'm a 2nd year student at the University of Waterloo studying Kinesiology. Currently I am located in Toronto, Ontario for the work term as a <Link to="/projects" className="hvr-underline-from-left purple"> web developer at FGF Brands</Link>. In my free time, you can find me lifting weights, playing sports, browsing Reddit, and discovering new music on <a className="hvr-underline-from-left-spotify green" href="https://open.spotify.com/user/pdupapaya" target="_blank">Spotify</a>.</p>
    
                <p className="s-font">I am a very goal-oriented individual and constantly aim for new heights whether it be in my academic development or simply setting new PRs at the gym. For the the 2019 summer school term, I have three main goals I hope to achieve and am excited to see where my strong work ethic and perserverance will take me.<br /><br />
                    <i class="far fa-circle mr-3"></i>Academic Goal: Picking up a back-end language such as Node.js<br /><br />
                    <i class="far fa-circle mr-3"></i>Fitness Goal: Join the <a className="hvr-underline-from-left purple" href="https://www.urbandictionary.com/define.php?term=1000%20pound%20club" target="_blank">1000 lb club</a><br /><br />
                    <i class="far fa-circle mr-3"></i>Career Goal: Land a full stack developer position for my next coop term<br />
                </p >

                <br />

                    <h5 className="p-font my-3">Discover More About Me! 📰</h5>

                <hr />


                    <Link to="/about/story" className="linkdec">
                        <p className="s-font">My Story: How I Started Coding<i class="fas fa-arrow-right" style={{ fontSize: '16px', float: "right", color: '#7f8c8d' }}/>
</p>


                    </Link>
                    <hr />
                    <Link to="/about/career" className="linkdec">
                        <p className="s-font">Career Aspirations: Plans for the Future<i class="fas fa-arrow-right" style={{ fontSize: '16px', float: "right", color: '#7f8c8d' }}/>
</p>
                    </Link>
                </div>
        )
    }
}

export default About;