import React from 'react';
import Fade from 'react-reveal/Fade';
import PostTop from '../../../components/PostTop';
import FooterLink from '../../../components/FooterLink';
import WorkImage from '../../../components/WorkImage';

const FGFBrands = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <WorkImage photo="fgf2" />
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Work Term" title="FGF Brands" />
          <hr className="my-3" />
          <p>
            FGF Brands is a solutions provider that just happens to be a bakery
            - passionate about baking and brand-building innovations. FGF
            combines a true understanding of customer’s needs with an innovative
            approach across all aspects of our business.
          </p>
          <hr />
          <p>
            <b>Role: </b>Web Developer on the Engineering team
          </p>
          <p>
            <b>Duration: </b>January to April 2019
          </p>
          <p>
            <b>Technologies: </b>JavaScript, jQuery, Bootstrap, HTML/CSS, C#
          </p>
          <p>
            <b>Core Contributions</b>
            <ul>
              <li>
                Constructed component-based UI library with HTML/CSS and
                JavaScript serving as a style guide for internal tools
                development to improve production speed and handle responsive
                web design
              </li>
              <li>
                Built progressive web app with offline support and push
                notifications used to streamline manufacturing team processes
                such as inventory checks and plant issue reports
              </li>
            </ul>
          </p>
        </Fade>
        <FooterLink path="/work/serenity" title="Up Next" subtitle="Serenity" />
      </div>
    </div>
  );
};

export default FGFBrands;
