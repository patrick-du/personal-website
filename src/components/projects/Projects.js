import React from 'react';
import PageTitle from '../layout/PageTitle';
import ProjectCard from './ProjectCard';
import Fade from 'react-reveal/Fade';


const Projects = () => {
    return (
        <div className="container-fluid projectContainer mx-auto px-0">
            <Fade big>
                <PageTitle pageName="Experience" descriptionBottom="Internships & Leadership" picture="bitmoji6" />
                <ProjectCard link="/work" imgPath="oculysA.png" projDesc="Oculys Health Informatics" projWhat="Coming soon..." projName="Software Developer" projType="September - December 2019" />
                <ProjectCard link="/work/fgfbrands" imgPath="fgfB-opt.png" projDesc="FGF Brands" projWhat="My first co-op term at FGF Brands doing something I had little knowledge about..." projName="Web Developer" projType="January - April 2019" />
                <PageTitle pageName="Projects" descriptionBottom="Side projects & hackathons" picture="bitmoji8" />
                <ProjectCard link="/work/serenity" imgPath="serenityA.png" projDesc="React, Node (Express), MongoDB" projWhat="A social wellness web platform that improves physial and mental well-being..." projName="Serenity" projType="Side Project" />
                <ProjectCard link="/work/huddle" imgPath="huddleB-opt.png" projDesc="React Native, Java (Spring), Maven, MySQL" projWhat="A modern sports betting mobile app to connect fans and support local venues..." projName="Huddle" projType="Side Project" />
                {/* <ProjectCard link="/work/userauth" imgPath="userAuth.png" projDesc="Node (Express), MongoDB" projWhat="A user authentication boilerplate for future web applications..." projName="User Authentication" projType="Side Project" /> */}
                <ProjectCard link="/work/weatherly" imgPath="weatherlyA.png" projDesc="JavaScript, HTML, CSS" projWhat="A weekly forecast progressive web app with offline usage and push notifications..." projName="Weatherly" projType="Side Project" />
                <ProjectCard link="/work/personalwebsite" imgPath="websiteB-opt.png" projDesc="React" projWhat="A portfolio to illustrate who I am and showcase my experience, projects, and photography..." projName="Personal Website" projType="Side Project" />
                {/* <ProjectCard link="/work/fitbud" imgPath="fitbudA.png" projDesc="React, Node (Express)" projWhat="An all-in-one fitness app to simplify a trip to the gym..." projName=" FitBud" projType="uOttaHack 2019" /> */}
            </Fade>
        </div>
    );
}

export default Projects;