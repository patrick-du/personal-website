import React from 'react';
import PageTitle from '../../components/PageTitle';
import ProjectCard from '../../components/ProjectCard';
import Fade from 'react-reveal/Fade';
import { experience, projects } from '../../data/work';

const Projects = () => {
  return (
    <div className="container-fluid projectContainer mx-auto px-0">
      <Fade big>
        <PageTitle
          title="Experience"
          subtitle="Internships & Leadership"
          img="bitmoji6"
        />
        {experienceCards}
        <PageTitle
          title="Projects"
          subtitle="Side projects & hackathons"
          img="bitmoji8"
        />
        {projectsCards}
      </Fade>
    </div>
  );
};

const experienceCards = experience.map(
  ({ link, img, projDesc, projWhat, projName, projType }) => {
    const props = {
      link,
      img,
      projDesc,
      projWhat,
      projName,
      projType,
    };
    return <ProjectCard {...props} />;
  },
);

const projectsCards = projects.map(
  ({ link, img, projDesc, projWhat, projName, projType }) => {
    const props = {
      link,
      img,
      projDesc,
      projWhat,
      projName,
      projType,
    };
    return <ProjectCard {...props} />;
  },
);

export default Projects;
