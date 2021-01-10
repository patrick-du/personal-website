import React from 'react';
import styled from 'styled-components';

const StyledProjectImage = styled.img`
  width: 100% !important;
  box-shadow: 0 0 5px #ccc !important;
`;

const WorkImage = ({ photo }) => {
  return <StyledProjectImage src={require(`../assets/${photo}.png`)} />;
};

export default WorkImage;
