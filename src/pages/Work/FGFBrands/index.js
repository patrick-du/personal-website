import React from 'react';
import PostTop from '../../../components/PostTop';
import Fade from 'react-reveal/Fade';
import FooterLink from '../../../components/FooterLink';
import { StyledProjectImage } from '../../../components/styles';

const FGFBrands = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <StyledProjectImage src={require(`../../../assets/fgf2.png`)} />
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Work Term" title="FGF Brands" />
          <hr className="my-3" />
          <p className="general-font">
            FGF Brands is a solutions provider that just happens to be a bakery
            - passionate about baking and brand-building innovations. FGF
            combines a true understanding of customer’s needs with an innovative
            approach across all aspects of our business.
          </p>
          <hr />
          <p className="general-font">
            <b>Role: </b>"Innovation Driven" Web Developer on the Engineering
            team
          </p>
          <p className="general-font">
            <b>Duration: </b>January to April 2019
          </p>
          <p className="general-font">
            <b>Technologies: </b>JavaScript, jQuery, Bootstrap, HTML/CSS, C#
          </p>
          <p className="general-font">
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
