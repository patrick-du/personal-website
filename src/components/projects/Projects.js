import React from 'react';
import PageTitle from '../layout/PageTitle';
import ProjectCard from './ProjectCard';
import Fade from 'react-reveal/Fade';


const Projects = () => {
    return (
        <div className="container-fluid projectContainer mx-auto px-0">
            <Fade big>
                <PageTitle pageName="Experience" descriptionBottom="Work term internships" picture="bitmoji6" />
                {/* <ProjectCard link="/work/oculyshealthinformatics" imgPath="fgfB-opt.png" projDesc="Oculys Health Informatics" projWhat="Currently under construction..." projName="Software Developer Intern" projType="September 2019 - December 2019" /> */}
                <ProjectCard link="/work/fgfbrands" imgPath="fgfB-opt.png" projDesc="FGF Brands" projWhat="My first co-op term at FGF Brands doing something I had little knowledge about..." projName="Web Developer Intern" projType="January 2019 - April 2019" />
                <PageTitle pageName="Projects" descriptionBottom="Side projects & hackathons" picture="bitmoji8" />
                <ProjectCard link="/work/huddle" imgPath="huddleB-opt.png" projDesc="React Native, Java (Spring), Maven, MySQL" projWhat="A modern sports betting mobile app to connect fans and support local venues..." projName="Huddle" projType="Side Project" />
                <ProjectCard link="/work/userauth" imgPath="userAuth.png" projDesc="Node JS, Express JS, MongoDB" projWhat="A user authentication boilerplate for future projects..." projName="User Authentication" projType="Side Project" />
                <ProjectCard link="/work/weatherly" imgPath="weatherlyA.png" projDesc="JavaScript, HTML, CSS" projWhat="A weekly forecast progressive web app with offline usage and push notifications..." projName="Weatherly" projType="Side Project" />
                <ProjectCard link="/work/personalwebsite" imgPath="websiteB-opt.png" projDesc="React JS" projWhat="A portfolio to illustrate who I am and showcase my projects and past work..." projName="Personal Website" projType="Side Project" />
                <ProjectCard link="/work/fitbud" imgPath="fitbudA.png" projDesc="React JS, Node JS, Express JS" projWhat="An all-in-one fitness app to simplify a trip to the gym..." projName=" FitBud" projType="uOttaHack 2019" />
            </Fade>

        </div>
    );
}

export default Projects;