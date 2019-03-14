import React from 'react';
import PageTitle from '../layout/PageTitle';
import ProjectCard from '../work/CardContent';

const Projects = () => {
    return (
        <div className="container-fluid container-padding   ">
            <PageTitle pageName="Selected Projects" descriptionBottom="Side projects and hackathon submissions" />
            <ProjectCard link="/projects/huddle" imgPath="huddle.png" job="React Native, Node JS" position="Huddle" time="Side Project" />
            <ProjectCard link="/projects/personalwebsite" imgPath="huddle.png" job="React" position="Personal Website" time="Side Project" />
            <ProjectCard link="/projects/fitbud" imgPath="fitbud.png" job="React, Node JS, Express JS" position="FitBud" time="DeltaHacks V" />
        </div>
    );
}

export default Projects;