import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import BorderPic from '../projects/BorderPic'

const LosAngeles = () => {
    return (
        <div className="container-fluid mx-auto px-0" >
        <div className="projectContainer mx-auto px-0">
            <Fade big>
            <div className="row mx-0">
                <div className="col px-0">
                    <p className="s-font" id="pageTitlePageTitle">Los Angeles</p>
                    <p className="s-font" id="pageTitlePageDesc">Summer 2019</p>
                </div>
            </div>
            <hr className="my-3" />
            Currently under construction :)

        </Fade>
        <hr />
    <Fade bottom>

        <Link to="/photography/Banff" className="linkdec hvr-icon-wobble-horizontal">
            <div className="s-font med" style={{ fontWeight: '600', fontSize: '18px' }}> Up Next
                <i class="fas fa-arrow-right hvr-icon" style={{ fontSize: '18px', float: "right" }} />
                <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }}>Banff National Park</p>
            </div>
        </Link>
    </Fade>

</div>
</div>
    );
}

export default LosAngeles;