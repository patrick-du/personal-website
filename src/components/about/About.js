import React, { Component } from 'react';
import PageTitle from '../layout/PageTitle';
import DiscoverBox from './DiscoverBox';
import { Link } from 'react-router-dom';

class About extends Component {

    render() {
        return (
            <div className="container-fluid py-5 main-px">
                <div className="row pb-5">
                    <div className="col-9 pr-5">
                        <PageTitle pageName="I'm Patrick" descriptionTop="Nice to meet you" />
                        <p className="s-font">I'm a 2nd year student at the University of Waterloo studying Kinesiology. Currently I am located in Toronto, Ontario for the work term as a web developer at <Link to="/Work" className="hvr-underline-from-left purple">FGF Brands</Link>. In my free time, you can find me lifting weights, playing sports, browsing Reddit, and discovering new artists on Spotify.</p>


                    </div>
                    <div className="col-3">
                        <div className="circle"></div>{/*image*/}
                    </div>
                </div>
                <h1 className="p-font bold py-5 text-center">Discover a little more about me!</h1>
                <DiscoverBox />
            </div >
        )
    }
}


export default About;