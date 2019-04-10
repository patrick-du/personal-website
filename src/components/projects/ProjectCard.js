import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
    const { link, imgPath, projName, projDesc, projWhat, projType, backgroundColor } = props;
    return (
        <Link to={link} className="linkdec">
            <div className="projectCard hvr-box hvr-grow" style={{}}>

                <div id="under768">
                    <div className="imgRow text-center" style={{ backgroundColor: backgroundColor }}>
                        <img src={require(`../../assets/${imgPath}`)} alt="" className="projectCardImage p-1" />
                    </div>
                    <div className="projectCardText pt-3">
                        <div className="s-font" id="projName" style={{ fontWeight: '600', fontSize: '18px' }}>{projName}
                            <span><i class="fas fa-arrow-right" style={{ fontSize: '18px', float: "right" }} /></span>
                            <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }} id="projDesc">{projWhat} </p>
                        </div>
                    </div>
                </div>

                <div id="above768">
                    <div id="projCol1" style={{ backgroundColor: backgroundColor }}>
                        <img src={require(`../../assets/${imgPath}`)} alt="" className="projectCardImage" />
                    </div>
                    <div id="projCol2" style={{ padding: '1rem' }}>
                        <div className="projectCardText s-font px-0">
                            <p id="projName" style={{ fontWeight: '600' }}>{projName}</p>
                            <p id="projWhat" style={{ fontWeight: '400' }} >{projWhat}</p>
                            <p id="projDesc" style={{ fontWeight: '400', color: '#7f8c8d' }}>{projDesc}<div id="projType">{projType}</div></p>
                        </div>
                    </div>
                </div>


            </div>
        </Link >
    )
}

export default ProjectCard;





