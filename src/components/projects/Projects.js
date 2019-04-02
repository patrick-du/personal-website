import React from 'react';
import PageTitle from '../layout/PageTitle';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className="container-fluid container-padding">
            <div className="fade-in-left-project-1">
                <PageTitle pageName="Work Experience" descriptionBottom="Internships and clubs" />
            </div>

            <div className="fade-in-right-project-1">
                <ProjectCard link="/projects/fgfbrands" backgroundColor="#fd79a8" imgPath="huddle.png" projDesc="FGF Brands" projWhat="My first real-world programming experience" projName="Front-End Developer Intern" projType="January 2019 - April 2019" />
                {/*<ProjectCard link="/projects/elementsphysicaltherapy" backgroundColor="#ffbe76" imgPath="huddle.png" projDesc="Elements Physical Therapy" projWhat="Exploring the daily lives of exercise therapists" projName="Exercise Therapist Assistant" projType="June 2018 - August 2018" />*/}
            </div>

            <div className="fade-in-left-project-1">
                <PageTitle pageName="Selected Projects" descriptionBottom="Side projects and hackathon submissions" />

            </div>
            <div className="fade-in-right-project-1">
                <ProjectCard link="/projects/huddle" backgroundColor="#55efc4" imgPath="huddle.png" projDesc="React Native • Node JS" projWhat="Modern sports betting mobile app" projName="Huddle" projType="Side Project" />

            </div>

            <div className="fade-in-right-project-1">
                <ProjectCard link="/projects/weatherly" backgroundColor="#a29bfe" imgPath="Weatherly.png" projDesc="Vanilla JS • HTML • CSS" projWhat="Weather forecast progressive web app" projName="Weatherly" projType="Side Project" />

            </div>

            <div className="fade-in-right-project-1">
                <ProjectCard link="/projects/personalwebsite" backgroundColor="#ff7675" imgPath="huddle.png" projDesc="React" projWhat="Portfolio to showcase my projects and work " projName="Personal Website" projType="Side Project" />

            </div>

            <div className="fade-in-right-project-1">
                <ProjectCard link="/projects/fitbud" backgroundColor="#ffab7e" imgPath="FitBudLogo.png" projDesc="React • Node JS • Express JS" projWhat="All-in-one fitness app" projName=" FitBud" projType="uOttaHack 2019" />

            </div>

            <br />
        </div>
    );
}

export default Projects;