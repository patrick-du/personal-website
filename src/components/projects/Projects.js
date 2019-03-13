import React from 'react';
import PageTitle from '../layout/PageTitle';
import ProjectBox from '../projects/ProjectBox';

const Projects = () => {
    return (
        <div className="container-fluid container-padding   ">

            <PageTitle pageName="Selected Projects" descriptionBottom="Side projects and hackathon submissions" />
            <ProjectBox />


        </div>
    );
}

export default Projects;