import React from 'react';
import Fade from 'react-reveal/Fade';
import PostTop from '../../../components/PostTop';
import PhotoWrapper from '../../../components/PhotoWrapper';
import FooterLink from '../../../components/FooterLink';
import WorkImage from '../../../components/WorkImage';
import HyperLink from '../../../components/HyperLink';

const Authentication = () => {
  return (
    <div className="container-fluid px-0">
      <WorkImage photo="authentication" />
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop
            subtitle="Side Project"
            title="Authentication Boilerplates"
          />
          <hr className="my-3" />
          <p>
            Authentication boilerplates were built with React, Node (Express),
            MongoDB, and Passport (Google, Facebook, Local Strategies) to learn
            how to implement common authentication methods.
          </p>
          <p>
            Further readings can be found in my{' '}
            <HyperLink
              link="https://github.com/patrick-du/Notes/blob/master/authentication.md"
              text="authentication notes"
            />
            .
          </p>
          <hr />
          <p>
            <b>Boilerplate 1: Token-based authentication using OAuth 2.0</b>
            <p>
              View the web app on{' '}
              <HyperLink
                link="https://patrickdu-mern-boilerplate.herokuapp.com/"
                text="Heroku"
              />{' '}
              or the full project on{' '}
              <HyperLink
                link="https://github.com/patrick-du/MERN-Boilerplate"
                text="Github"
              />
              .
            </p>
            <PhotoWrapper
              img="authentication5.png"
              desc="Google & Facebook OAuth 2.0"
            />
          </p>
          <PhotoWrapper
            img="authentication6.png"
            desc="User Account Information"
          />
          <hr />
          <p>
            <b>Boilerplate 2: Basic authentication with username & password</b>
            <p>
              {' '}
              View the web app on{' '}
              <HyperLink
                link="https://patrickdu-userauth-boilerplate.herokuapp.com/"
                text="Heroku"
              />{' '}
              or the full project on{' '}
              <HyperLink
                link="https://github.com/patrick-du/User-Authentication-Boilerplate"
                text="Github"
              />
              .
            </p>
          </p>
          <PhotoWrapper
            img="authentication2.png"
            desc="User Registration & Login"
          />
          <PhotoWrapper
            img="authentication3.png"
            desc="User Account Information"
          />
        </Fade>

        <FooterLink path="/work/huddle" title="Up Next" subtitle="Huddle" />
      </div>
    </div>
  );
};

export default Authentication;
