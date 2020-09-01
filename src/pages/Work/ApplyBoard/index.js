import React from 'react';
import PostTop from '../../../components/PostTop';
import Fade from 'react-reveal/Fade';
import FooterLink from '../../../components/FooterLink';
import { StyledProjectImage } from '../../../components/styles';

const ApplyBoard = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <StyledProjectImage src={require(`../../../assets/oculysA.png`)} />
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop subtitle="Work Term" title="ApplyBoard" />
          <hr className="my-3" />
          <p className="general-font">Coming soon!</p>
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
