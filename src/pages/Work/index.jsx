import React from 'react';
import Fade from 'react-reveal/Fade';
import PageTitle from '../../components/PageTitle';
import ProjectCard from '../../components/ProjectCard';
import { experience, projects } from '../../data/work';

const cardsMapper = (cards) => {
  return cards.map(({ link, img, projDesc, projWhat, projName, projType }) => {
    const props = {
      link,
      img,
      projDesc,
      projWhat,
      projName,
      projType,
    };
    return <ProjectCard {...props} />;
  });
};

const Projects = () => {
  return (
    <div className="container-fluid projectContainer mx-auto px-0">
      <Fade big>
        <PageTitle
          title="Experience"
          subtitle="Internships & Leadership"
          img="bitmoji6"
        />
        <hr className="my-3" />
        {cardsMapper(experience)}
        <PageTitle
          title="Projects"
          subtitle="Side projects & hackathons"
          img="bitmoji8"
        />
        <hr className="my-3" />
        {cardsMapper(projects)}
      </Fade>
    </div>
  );
};

export default Projects;
