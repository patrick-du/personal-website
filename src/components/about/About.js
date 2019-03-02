import React from 'react';
import DiscoverBox from './DiscoverBox';
import Typing from 'react-typing-animation';



const About = () => {
    return (
        <div className="container-fluid main-px py-5">
            <div className="row pb-5">
                <div className="col-9 pr-5">
                    <h5 className="title-font med no-y-space">Nice to meet you</h5>
                    <h5 className="p-font bold display-4 ">I'm Patrick</h5>

                    <p className="s-font">
                        I'm a 2nd year student at the University of Waterloo studying Kinesiology. Currently I am located in Toronto, Ontario for the work term as a web developer at FGF Brands.
                        </p>
                    <div className="s-font med">
                        <Typing loop={true}>

                            <span>In my free time, you can find me <span className="blue">liftings weights</span></span>
                            <Typing.Delay ms={1000} />
                            <Typing.Backspace count={15} />
                            <span className="red">playing sports </span>
                            <Typing.Delay ms={1000} />
                            <Typing.Backspace count={14} />
                            <span className="orange">browsing Reddit</span>
                            <Typing.Delay ms={1000} />
                            <Typing.Backspace count={15} />
                            <span className="green">discovering new artists on Spotify</span>
                            <Typing.Delay ms={1000} />
                            <Typing.Backspace count={34} />
                        </Typing>
                    </div>


                    <div className="emojis text-center">
                        <i class="fas fa-dumbbell px-5" />
                        <i class="fas fa-volleyball-ball px-5" />
                        <i class="fab fa-reddit px-5" />
                        <i class="fab fa-spotify px-5" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="circle float-right"></div>{/*image*/}
                </div>
            </div>
            <h1 className="p-font bold text-center py-5">Discover a little more about me!</h1>

            <DiscoverBox />
        </div >





    )

}


export default About;