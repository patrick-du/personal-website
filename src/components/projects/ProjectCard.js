import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
    const { link, img, projName, projDesc, projWhat, projType } = props;
    return (
      <Link to={link} className="linkdec">
        <div className="projectCard hvr-box hvr-float">
          <div id="under768">
            <div className="text-center">
              <img
                src={require(`../../assets/${img}`)}
                alt=""
                className="projectCardImage"
              />
            </div>
            <div className="projectCardText pt-3">
              <div className="general-font" id="projName">
                {projName}
                <span>
                  <i class="fas fa-arrow-right" id="projRightArrow" />
                </span>
                <p id="projDesc">{projWhat} </p>
              </div>
            </div>
          </div>
          <div id="above768">
            <div id="projCol1">
              <img
                src={require(`../../assets/${img}`)}
                alt=""
                className="projectCardImage"
              />
            </div>
            <div id="projCol2" style={{ padding: '1rem' }}>
              <div className="projectCardText general-font px-0">
                <p id="projName">{projName}</p>
                <p id="projWhat">{projWhat}</p>
                <p id="projDesc">
                  {projDesc}
                  <div id="projType">{projType}</div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
}

export default ProjectCard;





