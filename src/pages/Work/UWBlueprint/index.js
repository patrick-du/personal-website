import React from 'react';
import PostTop from '../../../components/PostTop';
import Fade from 'react-reveal/Fade';
import FooterLink from '../../../components/FooterLink';
import { StyledProjectImage } from '../../../components/styles';
const UWBlueprint = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <StyledProjectImage src={require(`../../../assets/uwblueprint.png`)} />
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Leadership Experience" title="UW Blueprint" />
          <hr className="my-3" />
          <p className="general-font">
            UW Blueprint is a group of students dedicated to building and
            promoting technology for social good. We partner with non-profit
            organizations to provide technology services such as websites,
            mobile applications, analysis tools—free of charge.
          </p>
          <hr />
          <p className="general-font">
            <b>Region of Waterloo Paramedic Services (PSV) </b>
          </p>
          <p className="general-font">
            <b>Role: </b>Project Developer
          </p>
          <p className="general-font">
            <b>Duration: </b>September to December 2020
          </p>
          <p className="general-font">
            <b>Technologies: </b>React, TypeScript, Node, GraphQL, Apollo Client
            & Server, PostgreSQL
          </p>
          <hr />
          <p className="general-font blue">
            <b>Social Development Centre Waterloo Region (SDC) </b>
          </p>
          <p className="general-font">
            <b>Role: </b>Project Developer
          </p>
          <p className="general-font">
            <b>Duration: </b>January to April 2020
          </p>
          <p className="general-font">
            <b>Technologies: </b>React, TypeScript, Ruby on Rails, Docker
          </p>
          <p className="general-font">
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
          <p className="general-font">
            View the web app on{' '}
            <a
              className="hvr-underline"
              href="https://guarded-plains-51025.herokuapp.com/"
              target="_blank"
            >
              Heroku
            </a>{' '}
            .
          </p>
        </Fade>

        <FooterLink
          path="/work/oculyshealthinformatics"
          title="Up Next"
          subtitle="Oculys Health Informatics"
        />
      </div>
    </div>
  );
};

export default UWBlueprint;
