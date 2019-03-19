import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
    const { link, imgPath, projName, projDesc, projWhat, projType, backgroundColor } = props;
    return (
        <Link to={link} className="linkdec">
            <div className="projectCard">

                <div id="under768">
                    <div className="imgRow text-center" style={{ backgroundColor: backgroundColor }}>
                        <img src={require(`../../assets/${imgPath}`)} alt="" className="projectCardImage p-3" />
                    </div>
                    <div className="projectCardText p-3">
                        <p className="p-font med card-title" id="projName">{projName}</p>
                        <p className="s-font lightText card-text" id="projDesc">{projDesc}<div id="projType">{projType}</div></p>
                    </div>
                </div>

                <div id="above768">
                    <div id="projCol1" className="text-center" style={{ backgroundColor: backgroundColor }}>
                        <img src={require(`../../assets/${imgPath}`)} alt="" className="projectCardImage p-3" />
                    </div>
                    <div id="projCol2" style={{ padding: '1rem' }}>
                        <div className="projectCardText px-0">
                            <p className="p-font med card-title" id="projName">{projName}</p>
                            <p className="s-font card-text" id="projWhat">{projWhat}</p>
                            <p className="s-font lightText card-text" id="projDesc">{projDesc}<div id="projType">{projType}</div></p>
                        </div>
                    </div>
                </div>


            </div>
        </Link >
    )
}

export default ProjectCard;





