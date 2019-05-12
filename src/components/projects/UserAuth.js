import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';
import BorderPic from '../projects/BorderPic';
import Fade from 'react-reveal/Fade';

const Weatherly = () => {
    return (
        <div className="container-fluid px-0">
            <img src={require(`../../assets/weatherlyB-opt.png`)} className="topProjectImage" />

            <div className="projectContainer mx-auto px-0">
                <Fade big>

                    <PostTop subtitle="Side Project" title="User Authentication" previous="/work/huddle" next="/work/personalwebsite" />
                    <p className="s-font">User Authentication is a weekly forecast progressive web app that includes features such as usage offline and push notifications. It fetches data from <a href="https://darksky.net/dev" target="_blank" className="hvr-underline-from-left purple">DarkSky API</a> which provides access to daily forecasts for the coming week.</p>
                    <p className="s-font">This app was developed with Node JS (Express) and MongoDB. View the full project on <a href="https://github.com/patrick-du/auth-bp" target="_blank" className="hvr-underline-from-left purple">Github</a>.</p>
                <hr/>
                </Fade>
                <Fade bottom>
                    <Link to="/work/weatherly" className="linkdec hvr-icon-wobble-horizontal">
                        <div className="s-font med" style={{ fontWeight: '600', fontSize: '18px' }}> Up Next
                            <i class="fas fa-arrow-right hvr-icon" style={{ fontSize: '18px', float: "right" }} />
                            <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }}>Weatherly</p>
                        </div>
                    </Link>
                </Fade>

            </div>

        </div >

    )

}

const styles = {

}

export default Weatherly;