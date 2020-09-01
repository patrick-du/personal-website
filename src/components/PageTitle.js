import React from 'react';
import styled from 'styled-components';

const StyledSubtitle = styled.p`
  font-family: 'SFProDisplay-Regular';
  color: #7f8c8d;
  padding: 0px;
  margin: 0px;
  @media (max-width: 575.98px) {
    font-size: 12px;
  }
  @media (min-width: 576px) {
    font-size: 22px;
  }
`;

const StyledTitle = styled.p`
  font-family: 'SFProDisplay-Medium';
  color: #2b2b2b;
  padding: 0px;
  margin: 0px;
  @media (max-width: 575.98px) {
    font-size: 18px;
  }
  @media (min-width: 576px) {
    font-size: 40px;
  }
`;

const StyledImage = styled.img`
  margin-left: auto !important;
  @media (max-width: 575.98px) {
    width: 78px;
    height: 78px;
  }
  @media (min-width: 576px) {
    width: 96px;
    height: 96px;
  }
`;

const PageTitle = ({ title, subtitle, img, divider = true }) => {
  return (
    <>
      <div className="row mx-0">
        <div className="col-9 p-0">
          <StyledTitle>{title}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
        </div>
        <StyledImage src={require(`../assets/${img}.png`)} />
      </div>
      {divider && <hr className="my-3" />}
    </>
  );
};

export default PageTitle;
