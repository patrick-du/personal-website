import React from 'react';
import PageTitle from '../layout/PageTitle';
import ProjectBox from '../projects/ProjectBox';

const Projects = () => {
    return (
        <div className="container-fluid main-px mt-5">
        
            <PageTitle pageName="Selected Projects" descriptionBottom="Click on the cards to learn more about my projects" />
            <ProjectBox/>

            
        </div>
    );
}

export default Projects;