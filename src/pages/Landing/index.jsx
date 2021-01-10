import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import Resume from '../../assets/Resume.pdf';
import HyperLink from '../../components/HyperLink';

const StyledTitle = styled.p`
  font-family: 'SFProDisplay-Regular';
  margin-top: 3rem;
  @media (max-width: 575.98px) {
    font-size: 60px;
    margin-bottom: 0;
  }
  @media (min-width: 576px) {
    font-size: 80px;
  }
  .period {
    color: #878fdd;
    font-size: 120%;
  }
`;

const StyledParagraph = styled.p`
  @media (max-width: 575.98px) {
    font-size: 22px;
  }
  @media (min-width: 576px) {
    font-size: 30px;
  }
`;

const StyledResume = styled.a`
  font-family: 'SFProDisplay-Regular';
  transition: 0.3s ease-in-out;
  margin-top: 1rem;
  color: #7f8c8d;

  &:hover {
    color: #878fdd;
  }
  @media (max-width: 575.98px) {
    font-size: 16px;
  }
  @media (min-width: 576px) {
    font-size: 20px;
  }
`;

const Landing = () => {
  return (
    <div className="container-fluid projectContainer mx-auto px-0">
      <Fade big>
        <StyledTitle>
          HELLO
          <span className="period">.</span>
        </StyledTitle>
        <StyledParagraph>
          I&rsquo;m Patrick, a 3rd year student at the University of Waterloo. I
          enjoy creating delightful web experiences focused on functionality and
          minimalism.
        </StyledParagraph>
        <StyledParagraph>
          Currently, I&rsquo;m a software developer at{' '}
          <HyperLink link="https://www.d2l.com" text="D2L" /> working on
          enabling interoperability and data exchange between Brightspace and
          external systems.
        </StyledParagraph>
        <br />
        <StyledParagraph>Seeking Summer 2021 SWE internships.</StyledParagraph>
        <StyledResume href={Resume} target="_blank" className="linkdec">
          No time? View my resume.
        </StyledResume>
        <div className="row mx-0 mt-5">
          <HyperLink
            link="https://github.com/patrick-du"
            text={<i className="fab fa-github icon0" />}
            underline={false}
          />
          <HyperLink
            link="https://www.linkedin.com/in/patrick-du3/"
            text={<i className="fab fa-linkedin-in icon0 " />}
            underline={false}
          />
        </div>
      </Fade>
    </div>
  );
};

export default Landing;
