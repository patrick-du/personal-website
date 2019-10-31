import React from 'react';
import PageTitle from '../layout/PageTitle';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import BorderPic from '../projects/BorderPic';


const Photography = () => {

    return (
        <div className="container-fluid projectContainer mx-auto px-0">
            <PageTitle pageName="Collections" descriptionBottom="Vacation" picture="bitmoji5" />
            <Link to="/photography/losangeles" className="linkdec">
                <div className="s-font med hvr-icon-wobble-horizontal" style={{ fontWeight: '600', fontSize: '18px' }}>Los Angeles, California
                            <i class="fas fa-arrow-right hvr-icon" style={{ fontSize: '18px', float: "right" }} />
                    <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }}>Summer 2019</p>
                </div>
            </Link>
            <hr/>
            <Link to="/photography/banff" className="linkdec">
                <div className="s-font med hvr-icon-wobble-horizontal" style={{ fontWeight: '600', fontSize: '18px' }}>Banff National Park, Alberta
                            <i class="fas fa-arrow-right hvr-icon" style={{ fontSize: '18px', float: "right" }} />
                    <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }}>Summer 2018</p>
                </div>
            </Link>
            <hr />
            <Link to="/photography/calgary" className="linkdec">
                <div className="s-font med hvr-icon-wobble-horizontal" style={{ fontWeight: '600', fontSize: '18px' }}>Calgary, Alberta
                            <i class="fas fa-arrow-right hvr-icon" style={{ fontSize: '18px', float: "right" }} />
                    <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }} >Summer 2018</p>
                </div>
            </Link>
            <hr />
            <Link to="/photography/toronto" className="linkdec">
                <div className="s-font med hvr-icon-wobble-horizontal" style={{ fontWeight: '600', fontSize: '18px' }}>Toronto, Ontario
                            <i class="fas fa-arrow-right hvr-icon" style={{ fontSize: '18px', float: "right" }} />
                    <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }} >Summer 2018</p>
                </div>
            </Link>
            

        </div >
    );

}

export default Photography;


/* http://neptunian.github.io/react-photo-gallery/ */



