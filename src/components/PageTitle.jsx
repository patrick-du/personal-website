import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledImage = styled.img`
  @media (max-width: 575.98px) {
    width: 78px;
    height: 78px;
  }
  @media (min-width: 576px) {
    width: 96px;
    height: 96px;
  }
`;

const PageTitle = ({ title, subtitle, img }) => {
  return (
    <>
      <StyledRow>
        <StyledCol>
          <h1 style={{ marginBottom: 0 }}>{title}</h1>
          <h5 style={{ marginBottom: 0 }}>{subtitle}</h5>
        </StyledCol>
        <StyledImage src={require(`../assets/${img}.png`)} />
      </StyledRow>
    </>
  );
};

export default PageTitle;
