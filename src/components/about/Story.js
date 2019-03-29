import React from 'react';
import { Link } from 'react-router-dom';
import PicHolder from '../layout/PicHolder';
import PostTop from '../layout/PostTop';

const Story = () => {
    return (
        <div className="container-fluid container-padding fade-in-bottom-project-1">
            <PostTop subtitle="My Story" title="How I Started Coding" cancel="/about" next="/about/career" />
            <p className="s-font">Whenever I was asked about my future plans I immediately blurted out that I would be a physiotherapist. What else would you be doing in kinesiology otherwise? I mean besides applying for a prestigious medical school, becoming a chiropractor, personal trainer, or everyone’s favourite - a gym teacher.</p>
            <p className="s-font">I portrayed myself as a confident and prepared student, when in reality I really had no idea what I wanted to do. On the other hand, all my friends seemed to have a clear-cut idea of what they wanted to do, the clubs they would join for experience, or the clinics they would volunteer at.</p>
            <p className="s-font">Attending a school at the forefront of innovation means that I am constantly surrounded by studious individuals. Whether it was during the easy going summer term or the weeks leading up to finals, I constantly found friends working on side projects. In Kinesiology, there aren’t many opportunities for side projects. My days would generally consist of studying, working out, and drinking protein shakes as you would expect.</p>
            <p className="s-font">This was no different in the summer except there was no studying. I dedicated that chunk of time for studying to playing video games and rewatching every single Marvel movie leading up to Avengers: Infinity War (all 18 of them). I highly recommend - the interconnectivity of each film with their own distinct storylines and purposes is absolutely incredible.</p>
            <p className="s-font">Remember how I said my friends were always working on side projects? In the same span of time, my roommate had just completed 2 coding courses, developed a mini game, made his resume, and was in the process of creating his second website. All I had done was watch movies, work out, and bought some new clothes...the least I could do was make my resume.  </p>
            <PicHolder imgPath="story2.PNG" caption="My Roommate's Github Contributions 🤯" />
            <p className="s-font">When I checked out his portfolio it inspired me to create my own website, so based on his recommendation I took a beginner HTML5 and CSS3 course. By the end of the summer, I launched my <a className="hvr-underline-from-left purple" href="https://patrickdu.herokuapp.com" target="_blank">first website</a>!</p>
            <PicHolder imgPath="story3.PNG" caption="My First Website" />

            <p className="s-font">Following this project, my passion for coding continued to sprout and with coop applications coming up I decided to take a stab at applying for a position I was in no way qualified for. With a combination of hard-work and lots of Tim Horton's coffee ☕ I was able to land an interview and secure a web developer position at <Link to="../../work" className="hvr-underline-from-left purple">FGF Brands</Link> for my first coop term. Since then, I have attended several hackathons and expanded my skill set immensely.</p>
            <Link to="../../" className="linkdec">
                <p className="s-font text-center text-muted vert-move mt-5 mb-0">Created by Patrick Du 🎈</p>
            </Link>
        </div>


    )
}

export default Story;