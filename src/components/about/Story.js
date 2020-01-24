import React from 'react';
import { Link } from 'react-router-dom';
import BorderPic from '../layout/BorderPic';
import PostTop from '../layout/PostTop';
import Fade from 'react-reveal/Fade';
import NextPageBottom from '../layout/NextPageBottom';


const Story = () => {
    return (
        <div className="container-fluid projectContainer mx-auto px-0">

            <PostTop subtitle="My Story" title="How I Started Coding"/>
            <hr className="my-3"/>
            <Fade big>
                <p className="general-font">Whenever I was asked about my future plans I immediately blurted out that I would be a physiotherapist. What else would you be doing in kinesiology otherwise? I mean besides applying for a prestigious medical school, becoming a chiropractor, personal trainer, or everyone’s favourite - a gym teacher.</p>
                <p className="general-font">I portrayed myself as a confident and prepared student, when in reality I really had no idea what I wanted to do. On the other hand, all my friends seemed to have a clear-cut idea of what they wanted to do, the clubs they would join for experience, or the clinics they would volunteer at.</p>
                <p className="general-font">Attending a school at the forefront of innovation means that I am constantly surrounded by studious individuals. Whether it was during the easy going summer term or the weeks leading up to finals, I constantly found friends working on side projects. In Kinesiology, there aren’t many opportunities for side projects. My days would generally consist of studying, working out, and drinking protein shakes as you would expect.</p>
                <BorderPic imgPath="story.png" picDesc="My School Term" />
                <p className="general-font">This was no different in the summer except there was no studying. In the time I should have spent studying, I was playing video games and rewatching every single Marvel movie leading up to Avengers: Infinity War (all 18 of them). I highly recommend - the interconnectivity of each film with their own distinct storylines and purposes is absolutely incredible.</p>
                <p className="general-font">Remember how I said my friends were always working on side projects? In the same span of time, my roommate had just completed 2 coding courses, developed a mini game, made his resume, and was in the process of creating his second website. All I had done was watch movies, work out, and bought some new clothes...the least I could do was make my resume.  </p>
                <BorderPic imgPath="story2.png" picDesc="My Roommate's Github Contributions 🤯" />

                <p className="general-font">When I checked out his portfolio it inspired me to create my own website, so based on his recommendation I took a beginner HTML5 and CSS3 course. By the end of the summer, I launched my <a className="hvr-underline-from-left purple" href="https://patrickdu.herokuapp.com" target="_blank">first website</a>!</p>
                <BorderPic imgPath="story3.png" picDesc="My First Website" />

                <p className="general-font">Following this project, my passion for coding continued to sprout and with coop applications coming up I decided to take a stab at applying for a position I was in no way qualified for. With a combination of hard-work and lots of Tim Horton's coffee ☕ I was able to land an interview and secure a web developer position at <Link to="../../work" className="hvr-underline-from-left purple">FGF Brands</Link> for my first coop term. Since then, I have attended several hackathons and expanded my skill set immensely.</p>
            </Fade>

            <hr />
            <NextPageBottom route="/about/career" title="Up Next" subtitle="Plans for the Future"/>

        </div>


    )
}

export default Story;