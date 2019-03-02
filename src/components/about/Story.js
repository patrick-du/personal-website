import React from 'react';
import { Link } from 'react-router-dom';

const Story = () => {
    return (
        <div className="container-fluid main-px py-5">
            <div className="aboutBox p-5">
                <div className="row">
                    <div className="col-1">
                        <Link to="/about">
                            <i class="fas fa-times emojis py-3"></i>
                        </Link>
                    </div>
                    <div className="col-10">
                        <p className="title-font med no-y-space text-center">My Story</p>
                        <h3 className="p-font med text-center">How I got into Coding</h3>
                    </div>
                </div>
                <div className="col-1">
                        
                </div>
                <hr />

                <p className="s-font">Whenever I was asked about my future plans I immediately blurted out that I would be a physiotherapist. What else would you be doing in kinesiology otherwise? I mean besides applying for a prestigious medical school, becoming a chiropractor, personal trainer, or everyone’s favourite - a gym teacher.</p>
                <p className="s-font">I portrayed myself as a confident and prepared student, when in reality I really had no idea what I wanted to do. On the other hand, all my friends seemed to have a clear-cut idea of what they wanted to do, the clubs they would join for experience, or the clinics they would volunteer at.</p>
                <p className="s-font">Attending a school at the forefront of innovation means that I am constantly surrounded by studious individuals. Whether it was during the easy going summer term or the weeks leading up to finals, I constantly found friends working on side projects.  Being a student in kinesiology there aren’t many opportunities for side projects. My days would generally consist of studying, working out, and drinking protein shakes as you would expect.</p>
                <p className="s-font">This was no different in the summer except there was no studying. I dedicated that chunk of time for studying to playing video games and rewatching every single Marvel movies leading up to Avengers: Infinity War - all 18 of them. In the same span of time, my roommate had just completed 2 coding courses and was designing the architecture of his second website. His work inspired me to create my own website so based on his recommendation I took a beginner HTML5 and CSS3. At the end of the summer, I launched my first website.</p>
                <p className="s-font">Following this project, my interest in coding had been sparked and with coop applications coming up I decided to take a stab at applying for a position I was in no way qualified for. With a combination of hard-work and coffee I was able to land an interview and secure a web developer position job at FGF Brands for my first coop term. Since then, I have attended several hackathons and expanded my skill set immensely.</p>
            </div>
        </div>


    )
}

export default Story;