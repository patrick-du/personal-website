import React from 'react';
import DiscoverBox from './DiscoverBox';
import Typing from 'react-typing-animation';



const About = () => {
    return (
        <div className="container-fluid main-px py-5">
            <div className="row pb-5">
                <div className="col-9 pr-5 slide-in-left">
                    <h5 className="title-font med no-y-space">Nice to meet you</h5>
                    <h5 className="p-font bold display-4 ">I'm Patrick</h5>

                    <p className="s-font">
                        I'm a 2nd year student at the University of Waterloo studying Kinesiology. Currently I am located in Toronto, Ontario for the work term as a web developer at FGF Brands.
                        </p>
                    <p className="s-font">
                        In my free time, you can find me lifting weights, playing sports, browsing Reddit, and discovering new artists on Spotify.
                    </p>

                    <div className="emojis text-center">
                        <i class="fas fa-dumbbell px-5" />
                        <i class="fas fa-volleyball-ball px-5" />
                        <i class="fab fa-reddit px-5" />
                        <i class="fab fa-spotify px-5" />
                    </div>
                </div>
                <div className="col-3 slide-in-right ">
                    <div className="circle float-right align-bottom"></div>{/*image*/}
                </div>
            </div>
            <h1 className="p-font bold text-center py-5">Discover a little more about me!</h1>
            <div className="slide-in-bottom">
            <DiscoverBox />
            </div>
        </div >





    )

}


export default About;