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

                    <PostTop subtitle="Side Project" title="Weatherly" previous="/work/huddle" next="/work/personalwebsite" />
                    <p className="s-font">Weatherly is a weekly forecast progressive web app that includes features such as usage offline and push notifications. It fetches data from <a href="https://darksky.net/dev" target="_blank" className="hvr-underline-from-left purple">DarkSky API</a> which provides access to daily forecasts for the coming week.</p>
                    <BorderPic imgPath="Weatherly1.png" picDesc="Desktop Version" />
                    <p className="s-font">This project was created soon after I finished a JavaScript course to practice HTTP methods and DOM manipulation. Seeing that progressive web apps were on the rise, I decided to implement it into this application.</p>
                    <p className="s-font">For those unfamiliar, <a href="https://developers.google.com/web/progressive-web-apps/" target="_blank" className="hvr-underline-from-left purple">progressive web apps</a> (PWAs) are a new class of web application that provide native app experiences using a browser. It utilizes modern web features such as push notifications and cache. Additionally, there is a web app install prompt making it easy for users to install the PWA on their mobile or desktop device.</p>
                    <p className="s-font">It consists of three main requirements:
                <ul>
                            <li>HTTPS: to be a PWA, the web app must be served over a secure network</li>
                            <li>Web App Manifest: a JSON file that gives info about the web app including the name, icons, orientation, display, etc </li>
                            <li>Registered Service Worker: a JS script with event-driven workers that intercept network requests and cache information asynchronously to load data for offline use  </li>
                        </ul>
                    </p>
                    <BorderPic imgPath="Weatherly2.png" picDesc="Mobile Version: Install Prompt, Loading Data, Native App Feel" />

                    <p className="s-font">Despite facing an abundance of issues whether it be with plain JavaScript or registering Service Workers, I am glad that I stuck through with the project as it was a rewarding learning experience.</p>
                    <p className="s-font">This app was developed with HTML, CSS, and JavaScript. View the full project on <a href="https://github.com/patrick-du/patrick-du.github.io" target="_blank" className="hvr-underline-from-left purple">Github</a> or <a href="https://patrick-du.github.io" target="_blank" className="hvr-underline-from-left purple">try it yourself</a>.</p>
                    <hr />
                </Fade>
                <Fade bottom>
                    <Link to="/work/personalwebsite" className="linkdec">
                        <div className="s-font med" style={{ fontWeight: '600', fontSize: '18px' }}> Up Next
                            <i class="fas fa-arrow-right" style={{ fontSize: '18px', float: "right" }} />
                            <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }}>Personal Website</p>
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