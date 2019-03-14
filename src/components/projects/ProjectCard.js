import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
    const { link, imgPath, projName, projDesc, projType } = props;
    return (
        <Link to={link} className="linkdec">
            <div className="workCard">
                <div className="row">
                    <div className="col1">
                        <img src={require(`../../assets/${imgPath}`)} alt="" className="workCardImage" />
                    </div>
                    <div className="col2">
                        <div className="workCardText px-0">
                            <p className="p-font med card-title" id="pos">{projName}</p>
                            <p className="s-font lightText card-text" id="job">{projDesc}</p>
                            <p className="s-font" id="projType">{projType}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link >
    )
}

export default ProjectCard;





