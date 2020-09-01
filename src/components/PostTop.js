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
    font-size: 18px;
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
    font-size: 28px;
  }
`;

const PostTop = ({ subtitle, title }) => {
  return (
    <>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledTitle>{title}</StyledTitle>
    </>
  );
};

export default PostTop;
