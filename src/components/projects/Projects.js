import React from 'react';
import PageTitle from '../layout/PageTitle';
import ProjectBox from '../projects/ProjectBox';

const Projects = () => {
    return (
        <div className="container-fluid main-px mt-5">
        
            <PageTitle pageName="Selected Projects" descriptionBottom="Side projects, hackathon submissions, work projects" />
            <ProjectBox/>

            
        </div>
    );
}

export default Projects;