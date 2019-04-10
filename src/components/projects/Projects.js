import React from 'react';
import PageTitle from '../layout/PageTitle';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className="container-fluid projectContainer mx-auto px-0">
            <PageTitle pageName="Experience" descriptionBottom="Work term internships" picture="bitmoji6" />

            <ProjectCard link="/projects/fgfbrands" backgroundColor="#70a1ff" imgPath="Weatherly.png" projDesc="FGF Brands" projWhat="My first co-op term at FGF Brands doing something I had little knowledge about..." projName="Front-End Developer Intern" projType="January 2019 - April 2019" />
            <ProjectCard link="/projects/elementsphysicaltherapy" backgroundColor="#ffbe76" imgPath="Weatherly.png" projDesc="Elements Physical Therapy" projWhat="Exploring the daily lives of exercise therapists" projName="Exercise Therapist Assistant" projType="June 2018 - August 2018" />

            <PageTitle pageName="Projects" descriptionBottom="Side projects & hackathons" picture="bitmoji8" />

            <ProjectCard link="/projects/huddle" backgroundColor="#ff6b81" imgPath="huddlexd.png" projDesc="React Native, Spring, MySQL" projWhat="A modern sports betting mobile app to connect fans and support local venues..." projName="Huddle" projType="Side Project" />
            <ProjectCard link="/projects/weatherly" backgroundColor="#ebd0f4" imgPath="Weatherly.png" projDesc="JavaScript, HTML, CSS" projWhat="A weekly forecast progressive web app with offline usage and push notifications..." projName="Weatherly" projType="Side Project" />
            <ProjectCard link="/projects/personalwebsite" backgroundColor="#7bed9f" imgPath="asdasd.gif" projDesc="React JS" projWhat="A portfolio to illustrate who I am and showcase my projects and past work..." projName="Personal Website" projType="Side Project" />
            <ProjectCard link="/projects/fitbud" backgroundColor="#ffc8a2" imgPath="FitBud.png" projDesc="React JS, Node JS, Express JS" projWhat="An all-in-one fitness app to simplify a trip to the gym..." projName=" FitBud" projType="uOttaHack 2019" />

        </div>
    );
}

export default Projects;