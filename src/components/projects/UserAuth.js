import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';
import BorderPic from '../layout/BorderPic';
import Fade from 'react-reveal/Fade';
import NextPageBottom from '../layout/NextPageBottom';

const Weatherly = () => {
    return (
        <div className="container-fluid px-0">
            <img src={require(`../../assets/userAuth.png`)} className="topProjectImage" />

            <div className="projectContainer mx-auto px-0">
                <Fade big>
                    <PostTop subtitle="Side Project" title="User Authentication" previous="/work/huddle" next="/work/personalwebsite" />
                    <hr className="my-3"/>
                    <p className="general-font">User Authentication is a web & mobile boilerplate application for account registration, login, and updates. I developed this app for implementation in future projects as well as practice with Node JS (Express) and MongoDB.</p>
                    <BorderPic imgPath="userAuth5.png" picDesc="User Registration, User Login" />
                    <p className="general-font">User Authentication provides a secure way for users to register and login to their account without third-party strategies. I utilized Passport JS, an authentication middleware, and adopted their local username and password authentication strategy. I stored the accounts in MongoDB Atlas, a NoSQL database, and retrieved data through ad-hoc queries.</p>
                        
                    <BorderPic imgPath="userAuth6.png" picDesc="Account Screen, Update Account Details" />

                    <p className="general-font">This app was developed with Node JS (Express) and MongoDB. View the full project on <a href="https://github.com/patrick-du/auth-bp" target="_blank" className="hvr-underline-from-left purple">Github</a> or <a href="https://patrickdu-userauth-boilerplate.herokuapp.com" target="_blank" className="hvr-underline-from-left purple">try it yourself</a>.</p>
                <hr/>
                </Fade>
                
                <NextPageBottom route="/work/weatherly" title="Up Next" subtitle="Weatherly"/>


            </div>

        </div >

    )

}

const styles = {

}

export default Weatherly;