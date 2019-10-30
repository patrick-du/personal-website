import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';
import BorderPic from './BorderPic';
import Fade from 'react-reveal/Fade';

const OculysHealthInformatics = () => {
    return (
        <div className="container-fluid mx-auto px-0">
            <img src={require(`../../assets/fgfB-opt.png`)} className="topProjectImage" />

            <div className="projectContainer mx-auto px-0">
                <Fade big>
                    <PostTop subtitle="Work Term" title="Oculys Health Informatics" previous="/work/fitbud" next="/work/fgfbrands" />
                    <p className="s-font">Coming soon!</p>
                    <hr />
                </Fade>
                <Fade bottom>
                    <Link to="/work/fgfbrands" className="linkdec hvr-icon-wobble-horizontal">
                        <div className="s-font med" style={{ fontWeight: '600', fontSize: '18px' }}> Up Next
                            <i class="fas fa-arrow-right hvr-icon" style={{ fontSize: '18px', float: "right" }} />
                            <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }}>FGF Brands</p>
                        </div>
                    </Link>
                </Fade >
            </div>

        </div>


    )

}

const styles = {

}

export default OculysHealthInformatics;