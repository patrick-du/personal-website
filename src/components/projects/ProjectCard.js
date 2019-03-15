import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
    const { link, imgPath, projName, projDesc, projType } = props;
    return (
        <Link to={link} className="linkdec">
            <div className="projectCard">
                <div className="row">
                    <div id="projCol1">
                        <img src={require(`../../assets/${imgPath}`)} alt="" className="projectCardImage" />
                    </div>
                    <div id="projCol2">
                        <div className="projectCardText px-0">
                            <p className="p-font med card-title" id="projName">{projName}</p>
                            <p className="s-font lightText card-text" id="projDesc">{projDesc}<div id="projType">{projType}</div></p>
                        </div>
                    </div>
                </div>
            </div>
        </Link >
    )
}

export default ProjectCard;





