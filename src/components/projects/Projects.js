import React from 'react';
import PageTitle from '../layout/PageTitle';
import ProjectCard from './ProjectCard';
import Fade from 'react-reveal/Fade';
import { work, projects } from '../../data/work';

const Projects = () => {
  return (
    <div className="container-fluid projectContainer mx-auto px-0">
      <Fade big>
        <PageTitle
          pageName="Experience"
          descriptionBottom="Internships & Leadership"
          picture="bitmoji6"
        />
        {workCards}
        <PageTitle
          pageName="Projects"
          descriptionBottom="Side projects & hackathons"
          picture="bitmoji8"
        />
        {projectsCards}
      </Fade>
    </div>
  );
};

const workCards = work.map(
  ({ link, imgPath, projDesc, projWhat, projName, projType }) => {
    const props = {
      link,
      imgPath,
      projDesc,
      projWhat,
      projName,
      projType,
    };
    return <ProjectCard {...props} />;
  },
);

const projectsCards = projects.map(
  ({ link, imgPath, projDesc, projWhat, projName, projType }) => {
    const props = {
      link,
      imgPath,
      projDesc,
      projWhat,
      projName,
      projType,
    };
    return <ProjectCard {...props} />;
  },
);

export default Projects;
