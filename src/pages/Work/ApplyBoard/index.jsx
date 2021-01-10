import React from 'react';
import Fade from 'react-reveal/Fade';
import PostTop from '../../../components/PostTop';
import PhotoWrapper from '../../../components/PhotoWrapper';
import FooterLink from '../../../components/FooterLink';
import WorkImage from '../../../components/WorkImage';

const ApplyBoard = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <WorkImage photo="applyboard2" />
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Work Term" title="ApplyBoard" />
          <hr className="my-3" />
          <p>
            ApplyBoard simplifies the study abroad search, application, and
            acceptance process by connecting international students, recruitment
            partners, and academic institutions on a single streamlined
            platform.
          </p>
          <hr />
          <p>
            <b>Role: </b>Software Engineer Intern on the Search team, previously
            Content team
          </p>
          <p>
            <b>Duration: </b>May to September 2020
          </p>
          <p>
            <b>Technologies: </b>React, Ruby on Rails, PostgreSQL, Docker, Git
            (GitHub), Jira
          </p>
          <p>
            <b>Core Contributions</b>
            <ul>
              <li>
                Developed complex data table to handle critical inefficiencies
                in existing requirement mapping system including multi-level
                entity mapping and multi-mapping per entity features reducing
                student application pushbacks by roughly 80%
              </li>
              <li>
                Wrote and tested several REST API endpoints using Ruby on Rails
                & RSpec to handle CRUD operations of entity requirement mappings
              </li>
              <li>
                Leveraged event debouncing across 10+ filters components by
                implementing a custom-built memoized hook in React to optimize
                expensive network requests and in turn, reduce unnecessary DOM
                re-renders
              </li>
              <li>
                Led the research and execution of integrating ESLint into 3
                repositories to enforce code consistency amongst 50+ engineers
              </li>
            </ul>
          </p>
          <PhotoWrapper img="applyboard3.png" desc="Team Lucene" />
          <p>
            Check out my{' '}
            <a
              className="hvr-underline"
              href="https://www.applyboard.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Life at ApplyBoard
            </a>{' '}
            post where I discuss my experiences as a remote intern!
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

export default ApplyBoard;
