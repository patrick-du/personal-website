import React from 'react';
import PageTitle from '../layout/PageTitle';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className="container-fluid container-padding">
            <PageTitle pageName="Work Experience" descriptionBottom="Internships and clubs" />
            <ProjectCard link="/projects/huddle" backgroundColor="#fd79a8" imgPath="huddle.png" projDesc="FGF Brands" projWhat="My first co-op experience" projName="Front-End Developer" projType="January 2019 - April 2019" />
            <ProjectCard link="/projects/huddle" backgroundColor="#ffbe76" imgPath="huddle.png" projDesc="Elements Physical Therapy" projWhat="Exploring the daily lives of exercise therapists" projName="Exercise Therapist Assistant" projType="June 2018 - August 2018" />
            <br />
            <PageTitle pageName="Selected Projects" descriptionBottom="Side projects and hackathon submissions" />
            <ProjectCard link="/projects/huddle" backgroundColor="#55efc4" imgPath="huddle.png" projDesc="React Native • Node JS" projWhat="Modern sports betting mobile app" projName="Huddle" projType="Side Project" />
            <ProjectCard link="/projects/weatherly" backgroundColor="#a29bfe" imgPath="huddle.png" projDesc="Vanilla JS • HTML • CSS" projWhat="Weather forecast progressive web app" projName="Weatherly" projType="Side Project" />
            <ProjectCard link="/projects/personalwebsite" backgroundColor="#ff7675" imgPath="huddle.png" projDesc="React" projWhat="Portfolio to showcase my projects and work " projName="Personal Website" projType="Side Project" />
            <ProjectCard link="/projects/fitbud" backgroundColor="#74b9ff" imgPath="fitbud.png" projDesc="React • Node JS • Express JS" projWhat="All-in-one fitness app" projName=" FitBud" projType="DeltaHacks V" />
        </div>
    );
}

export default Projects;