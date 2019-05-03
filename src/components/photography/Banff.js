import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import BorderPic from '../projects/BorderPic'

const Banff = () => {
    return (
        <div className="container-fluid mx-auto px-0" >
        <div className="projectContainer mx-auto px-0">
            <Fade big>
            <div className="row mx-0">
                <div className="col-9 px-0">
                    <p className="s-font" id="pageTitlePageTitle">Banff National Park</p>
                    <p className="s-font" id="pageTitlePageDesc">Summer 2018</p>
                </div>
            </div>
            <hr className="my-3" />
            <BorderPic imgPath="banff1.jpg" picDesc="Moraine Lake (Post BC Wildfire) // 08-11-2018"/>
            <BorderPic imgPath="banff2.jpg" picDesc="Lake Louise // 08-11-2018"/>
            <BorderPic imgPath="banff3.jpg" picDesc="Johnston Canyon // 08-11-2018"/>
            <BorderPic imgPath="banff4.jpg" picDesc="Johnston Canyon // 08-11-2018"/>
            <BorderPic imgPath="banff5.jpg" picDesc="Banff Mountains // 08-11-2018"/>
            <BorderPic imgPath="banff6.jpg" picDesc="Forest Shadows // 08-11-2018"/>
        </Fade>

        <hr />
    <Fade bottom>

        <Link to="/photography/calgary" className="linkdec hvr-icon-wobble-horizontal">
            <div className="s-font med" style={{ fontWeight: '600', fontSize: '18px' }}> Up Next
                <i class="fas fa-arrow-right hvr-icon" style={{ fontSize: '18px', float: "right" }} />
                <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }}>Calgary</p>
            </div>
        </Link>
    </Fade>

</div>
</div>
    );
}

export default Banff;