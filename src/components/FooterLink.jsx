import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none !important;
`;

const StyledFontSize = styled.div`
  color: #2b2b2b;
  @media (max-width: 575.98px) {
    font-size: 16px;
  }
  @media (min-width: 576px) {
    font-size: 18px;
  }
`;

const StyledTitle = styled.p`
  font-family: 'SFProDisplay-Medium';
`;

const StyledSubtitle = styled.p`
  font-family: 'SFProDisplay-Regular';
  color: #7f8c8d;
`;

const StyledIcon = styled.i`
  float: right;
  padding-top: 4px;
`;

const FooterLink = ({ path, title, subtitle, disabled }) => {
  return (
    <Fade>
      <hr className="my-3" />
      {disabled ? (
        <StyledFontSize>
          <StyledTitle>
            {title}
            <StyledSubtitle>{subtitle}</StyledSubtitle>
          </StyledTitle>
        </StyledFontSize>
      ) : (
        <StyledLink to={path} className="hvr-icon-wobble-horizontal">
          <StyledFontSize>
            <StyledTitle>
              {title}
              <StyledIcon className="fas fa-chevron-right hvr-icon" />
              <StyledSubtitle>{subtitle}</StyledSubtitle>
            </StyledTitle>
          </StyledFontSize>
        </StyledLink>
      )}
    </Fade>
  );
};

export default FooterLink;
