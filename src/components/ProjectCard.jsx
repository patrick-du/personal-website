import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledProjectCard = styled.div`
  width: 100%;
  margin: 2rem 0;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 5px #ccc;
  }

  @media (max-width: 575.98px) {
    height: 22rem;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    height: 26rem;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    height: 14rem;
  }
  @media (min-width: 992px) {
    height: 16rem;
  }
`;

const StyledProjectUnder = styled.div`
  @media (min-width: 768px) and (max-width: 991.98px) {
    display: none;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

const StyledProjectAbove = styled.div`
  @media (max-width: 575.98px) {
    display: none;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    display: inline-flex;
    width: 100%;
  }
  @media (min-width: 992px) {
    display: inline-flex;
    width: 100%;
  }
`;

const StyledProjectImage = styled.img`
  width: 100%;
  @media (max-width: 575.98px) {
    height: 15rem;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    height: 19rem;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 19rem;
    height: 14rem;
  }
  @media (min-width: 992px) {
    width: 22.5rem;
    height: 16rem;
  }
`;

const StyledProjectName = styled.div`
  font-family: 'SFProDisplay-Medium';
  color: #2b2b2b;
  @media (max-width: 575.98px) {
    font-size: 16px;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    font-size: 18px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 20px;
  }
  @media (min-width: 992px) {
    font-size: 20px;
  }
`;

const StyledProjectDescription = styled.p`
  font-family: 'SFProDisplay-Regular';
  color: #7f8c8d !important;
  font-size: 16px;
`;

const StyledProjectWhat = styled.p`
  color: #2b2b2b;
  font-size: 16px;
`;

const StyledProjectCol = styled.div`
  height: 100%;
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 19rem;
  }
  @media (min-width: 992px) {
    width: 22.5rem;
  }
`;

const ProjectCard = ({ link, img, projName, projDesc, projWhat, projType }) => {
  return (
    <Link to={link} className="linkdec">
      <StyledProjectCard className="hvr-float">
        <StyledProjectUnder>
          <div className="text-center">
            <StyledProjectImage src={require(`../assets/${img}`)} />
          </div>
          <div className="pt-3">
            <StyledProjectName>{projName}</StyledProjectName>
            <StyledProjectDescription>{projWhat}</StyledProjectDescription>
          </div>
        </StyledProjectUnder>
        <StyledProjectAbove>
          <StyledProjectCol>
            <StyledProjectImage
              src={require(`../assets/${img}`)}
              alt=""
              className="projectCardImage"
            />
          </StyledProjectCol>
          <div style={{ padding: '1rem' }}>
            <StyledProjectName>{projName}</StyledProjectName>
            <StyledProjectWhat>{projWhat}</StyledProjectWhat>
            <StyledProjectDescription>
              {projDesc}
              <br />
              {projType}
            </StyledProjectDescription>
          </div>
        </StyledProjectAbove>
      </StyledProjectCard>
    </Link>
  );
};

export default ProjectCard;
