import React from 'react';
import PostTop from '../../../components/PostTop';
import Fade from 'react-reveal/Fade';
import FooterLink from '../../../components/FooterLink';
import { StyledProjectImage } from '../../../components/styles';

const ApplyBoard = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <StyledProjectImage src={require(`../../../assets/applyboard.png`)} />
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Work Term" title="ApplyBoard" />
          <hr className="my-3" />
          <p className="general-font">
            ApplyBoard simplifies the study abroad search, application, and
            acceptance process by connecting international students, recruitment
            partners, and academic institutions on a single streamlined
            platform.
          </p>
          <hr />
          <p className="general-font">
            <b>Role: </b>Software Engineer Intern on the Search team, previously Content team
          </p>
          <p className="general-font">
            <b>Duration: </b>May to September 2020
          </p>
          <p className="general-font">
            <b>Technologies: </b>React, Ruby on Rails, PostgreSQL, Docker, Git
            (GitHub), Jira
          </p>
          <p className="general-font">
            <b>Core Contributions</b>
            <ul>
              <li>Contribution #1</li>
              <li>Contribution #2</li>
              <li>Contribution #3</li>
            </ul>
          </p>
          <p className="general-font">
            Check out my{' '}
            <a
              className="hvr-underline"
              href="https://www.applyboard.com/"
              target="_blank"
            >
              Life @ ApplyBoard
            </a>{' '}
            post where I discuss my experiences as a remote intern!
          </p>
        </Fade>

        <FooterLink
          path="/work/uwblueprint"
          title="Up Next"
          subtitle="UW Blueprint"
        />
      </div>
    </div>
  );
};

export default ApplyBoard;
