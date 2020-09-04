import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const StyledFontSize = styled.div`
  @media (max-width: 575.98px) {
    font-size: 16px;
  }
  @media (min-width: 576px) {
    font-size: 18px;
  }
`;

const StyledTitle = styled.p`
  font-family: 'SFProDisplay-Medium';
  color: #2b2b2b;
`;

const StyledSubtitle = styled.p`
  font-family: 'SFProDisplay-Regular';
  color: #7f8c8d;
`;
const StyledIcon = styled.i`
  float: right;
  padding-top: 4px;
`;

const FooterLink = ({ path, title, subtitle }) => {
  return (
    <>
      <hr />
      <Fade>
        {/^https?:\/\//.test(path) ? (
          <a
            href={path}
            target="_blank"
            className="linkdec hvr-icon-wobble-horizontal"
          >
            <StyledFontSize>
              <StyledTitle>
                {title}
                <StyledIcon className="fas fa-chevron-right hvr-icon" />
                <StyledSubtitle>{subtitle}</StyledSubtitle>
              </StyledTitle>
            </StyledFontSize>
          </a>
        ) : (
          <Link to={path} className="linkdec hvr-icon-wobble-horizontal">
            <StyledFontSize>
              <StyledTitle>
                {title}
                <StyledIcon className="fas fa-chevron-right hvr-icon" />
                <StyledSubtitle>{subtitle}</StyledSubtitle>
              </StyledTitle>
            </StyledFontSize>
          </Link>
        )}
      </Fade>
    </>
  );
};

export default FooterLink;
