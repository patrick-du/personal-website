import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';
import BorderPic from '../projects/BorderPic';
import Fade from 'react-reveal/Fade';

const Weatherly = () => {
    return (
        <div className="container-fluid px-0">
            <img src={require(`../../assets/userAuth.png`)} className="topProjectImage" />

            <div className="projectContainer mx-auto px-0">
                <Fade big>

                    <PostTop subtitle="Side Project" title="User Authentication" previous="/work/huddle" next="/work/personalwebsite" />
                    <p className="s-font">User Authentication is a web & mobile boilerplate application for account registration, login, and updates. I developed this app for implementation in future projects as well as practice with Node JS (Express) and MongoDB.</p>
                    <BorderPic imgPath="userAuth5.png" picDesc="User Registration, User Login" />
                    <p>User Authentication provides a secure way for users to register and login to their account without third-party strategies. I utilized Passport JS, an authentication middleware, and adopted their local username and password authentication strategy. I stored the accounts in MongoDB Atlas, a NoSQL database, and retrieved data through ad-hoc queries.</p>
                        
                    <BorderPic imgPath="userAuth6.png" picDesc="Account Screen, Update Account Details" />
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