import React from 'react';


const About = () => {
    return (
        <div className="container-fluid main-px mt-5">
            <div className="row">
                <div className="col-9">
                    <h5 className="title-font med no-y-space">Nice to meet you</h5>
                    <h3 className="p-font bold display-4 ">I'm Patrick</h3>
                    <p className="s-font pr-5">I'm a 2nd year student at the University of Waterloo studying Kinesiology. Currently I am located in Toronto, Ontario for the work term as a web developer at FGF Brands. </p>
                    <p className="s-font pr-5">In my free time, I enjoy lifting weights, playing volleyball, browsing Reddit, and discovering new artists on Spotify!</p>
                    <span className="emojis text-center">
                            <i class="fas fa-dumbbell px-auto"/>
                            <i class="fas fa-volleyball-ball px-auto"/>
                            <i class="fab fa-reddit px-auto"/>
                            <i class="fab fa-spotify px-auto"/>
                    </span>
                </div>
                <div className="col-3">
                    <div className="circle float-right"></div>{/*image*/}
                </div>
            </div>


            <h1 className="p-font bold text-center mt-5">Discover a little more about me!</h1>

            <div className="xd">

            </div>

            <div className="aboutBox my-5 p-3 text-center">
                <p className="title-font med no-y-space">My Story</p>
                <h3 className="p-font med">How I got into Coding</h3>
                <hr />
                <p className="s-font">Whenever I was asked about my future plans I immediately blurted out that I would be a physiotherapist. What else would you be doing in kinesiology otherwise? I mean besides applying for a prestigious medical school, becoming a chiropractor, personal trainer, or everyone’s favourite - a gym teacher.</p>
                <p className="s-font">I portrayed myself as a confident and prepared student, when in reality I really had no idea what I wanted to do. On the other hand, all my friends seemed to have a clear-cut idea of what they wanted to do, the clubs they would join for experience, or the clinics they would volunteer at.</p>
                <p className="s-font">Attending a school at the forefront of innovation means that I am constantly surrounded by studious individuals. Whether it was during the easy going summer term or the weeks leading up to finals, I constantly found friends working on side projects.  Being a student in kinesiology there aren’t many opportunities for side projects. My days would generally consist of studying, working out, and drinking protein shakes as you would expect.</p>
                <p className="s-font">This was no different in the summer except there was no studying. I dedicated that chunk of time for studying to playing video games and rewatching every single Marvel movies leading up to Avengers: Infinity War - all 18 of them. In the same span of time, my roommate had just completed 2 coding courses and was designing the architecture of his second website. His work inspired me to create my own website so based on his recommendation I took a beginner HTML5 and CSS3. At the end of the summer, I launched my first website.</p>
                <p className="s-font">Following this project, my interest in coding had been sparked and with coop applications coming up I decided to take a stab at applying for a position I was in no way qualified for. With a combination of hard-work and coffee I was able to land an interview and secure a web developer position job at FGF Brands for my first coop term. Since then, I have attended several hackathons and expanded my skill set immensely.</p>
            </div>

            <div className="aboutBox my-5 p-3 ">
                <p className="title-font med no-y-space text-center">Career Aspirations</p>
                <h2 className="p-font med text-center">What about my Kinesiology degree?</h2>
                <hr />
                <p className="s-font">For the future, I plan to complete my kinesiology degree with a health informatics option expanding my understanding of the field that investigates how computer technologies can be utilized to better generate, manage, store, and apply health information.  </p>
                <br />
                <blockquote className="blockquote text-center">
                    <p className="mb-0">I think the biggest innovations of the 21st century will be at the <mark>intersection of biology and technology</mark>. <br /> A new era is beginning.</p>
                    <footer className="blockquote-footer">Steve Jobs</footer>
                </blockquote>
                <br />
                <p className="s-font">By studying Kinesiology I will acquire a profound understanding of physiological, biomechanical, and psychological dynamic principles and mechanisms of movement allowing me to innovate technology for the fitness and health industry in ways that a computer science or engineering graduate cannot.</p>


            </div>
        </div >





    )

}

 
export default About;