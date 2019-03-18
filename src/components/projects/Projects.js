import React from 'react';
import PageTitle from '../layout/PageTitle';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className="container-fluid container-padding">
            <PageTitle pageName="Selected Projects" descriptionBottom="Side projects and hackathon submissions" />
            <ProjectCard link="/projects/huddle" backgroundColor="#ea9345" imgPath="huddle.png" projDesc="React Native, Node JS" projName="Huddle" projType="Side Project" />
            <ProjectCard link="/projects/personalwebsite" backgroundColor="brown" imgPath="huddle.png" projDesc="React" projName="Personal Website" projType="Side Project" />
            <ProjectCard link="/projects/fitbud" backgroundColor="brown" imgPath="fitbud.png" projDesc="React, Node JS, Express JS" projName="FitBud" projType="DeltaHacks V" />
        </div>
    );
}

export default Projects;