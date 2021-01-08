import React from 'react';
import Fade from 'react-reveal/Fade';
import PostTop from '../../../components/PostTop';
import PhotoWrapper from '../../../components/PhotoWrapper';
import FooterLink from '../../../components/FooterLink';
import { StyledProjectImage } from '../../../components/styles';

const ProjectPhoto = require(`../../../assets/uwblueprint2.png`);

const UWBlueprint = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <StyledProjectImage src={ProjectPhoto} />
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Leadership Experience" title="UW Blueprint" />
          <hr className="my-3" />
          <p>
            UW Blueprint is a group of students dedicated to building and
            promoting technology for social good. We partner with non-profit
            organizations to provide technology services such as websites,
            mobile applications, analysis tools—free of charge.
          </p>
          <hr />
          <p>
            <b>Region of Waterloo Paramedic Services (PSV) </b>
          </p>
          <p>
            <b>Role: </b>
            Project Developer
          </p>
          <p>
            <b>Duration: </b>
            September to December 2020
          </p>
          <p>
            <b>Technologies: </b>
            React, TypeScript, Node, GraphQL, Apollo Client & Server, PostgreSQL
          </p>
          <hr />
          <p className="blue">
            <b>Social Development Centre Waterloo Region (SDC) </b>
          </p>
          <p>
            <b>Role: </b>
            Project Developer
          </p>
          <p>
            <b>Duration: </b>
            January to April 2020
          </p>
          <p>
            <b>Technologies: </b>
            React, TypeScript, Ruby on Rails, Docker
          </p>
          <p>
            <b>Core Contributions</b>
            <ul>
              <li>
                Developing a web client for an NPO that improves social service
                information accessibility through interactive flowcharts
              </li>
              <li>
                Writing scalable front-end flowchart components with TypeScript
                and React to tackle modular backend data
              </li>
            </ul>
          </p>
          <p>
            View the web app on{' '}
            <a
              className="hvr-underline"
              href="https://guarded-plains-51025.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Heroku
            </a>{' '}
            .
          </p>
          <PhotoWrapper img="uwblueprint3.png" />
          <PhotoWrapper img="uwblueprint4.png" />
          <PhotoWrapper img="uwblueprint5.png" />
        </Fade>
        <FooterLink
          path="/work/applyboard"
          title="Up Next"
          subtitle="ApplyBoard"
        />
      </div>
    </div>
  );
};

export default UWBlueprint;
