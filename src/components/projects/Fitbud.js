import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';
import BorderPic from '../layout/BorderPic';
import Fade from 'react-reveal/Fade';
import NextPageBottom from '../layout/NextPageBottom';

const FitBud = () => {
    const styles = {
        list: {
            color: 'orange'
        }
    }
    return (
        <div className="container-fluid  mx-auto px-0">
            <img src={require(`../../assets/fitbudB-opt.png`)} className="topProjectImage" />
            <div className="projectContainer mx-auto px-0">
                <Fade big>
                    <PostTop subtitle="uOttaHack 2019" title="Fitbud" previous="/work/personalwebsite" next="/work/oculyshealthinformatics" />
                    <hr className="my-3"/>
                    <p className="general-font">Fitbud is an all-in-one fitness app that provides a solution to common issues experienced by gym-goers of every skill level.</p>
                    <p className="general-font">Some issues my team tackled included finding a gym partner, tracking progress (reps, sets, exercise), and even asking for advice at the gym. This app provides all the steps from planning your next visit to reflecting on your last workout onto the same streamlined platform.</p>
                    <BorderPic imgPath="FitBud2.png" picDesc="Home Screen: User Info, Newsfeed, Sidebar Navigation" />
                    <p className="general-font">We incorporated the friend finding feature for all members of the gym, whether experienced or not, with the main purpose being to create a friendly and safe environment for all gym-goers. This allows for members to make a new friend and feel more comfortable as a beginner. At the same time, for the advanced lifters, it assists them in finding other experienced lifters with similar training styles. The possibilities for applications of this feature are endless.</p>
                    <BorderPic imgPath="FitBud4.png" picDesc="Discover Friends Screen" />
                    <p className="general-font">Exercise tracking is an extremely important element to success at the gym. Through tracking one's reps, sets, and weight, users can easily view their progression and take proper measures to overcome future plateaus. Our app provides users with the ability to create their own workout routine, or use our premade training templates.</p>
                    <BorderPic imgPath="FitBud5.png" picDesc="Workout Screen: Exercise Log and Spotify Music Player" />
                    <p className="general-font">Lastly, we developed a built-in music player connected to the user's Spotify account in order to eliminate the need to switch between your workout routine, music, and even social media notifications. The main purpose was to streamline everything the user would need during their training session onto one platform.</p>
                    <p className="general-font">This app was developed at <a href="https://devpost.com/software/fitbud" target="_blank" className="hvr-underline-from-left purple">uOttaHacks 2019</a> with React and Node JS (Express). View the full project on <a href="https://github.com/patrick-du/FitBud" target="_blank" className="hvr-underline-from-left purple">Github</a>.</p>
                    <hr />
                </Fade>
                <NextPageBottom route="/work/oculyshealthinformatics" title="Up Next" subtitle="Oculys Health Informatics"/>
            </div>
        </div>


    )

}

const styles = {

}

export default FitBud;