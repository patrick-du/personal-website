import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';
import BorderPic from './BorderPic';
import Fade from 'react-reveal/Fade';
import NextPageBottom from '../layout/NextPageBottom';

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
               
                <NextPageBottom route="/work/fgfbrands" title="Up Next" subtitle="FGF Brands"/>

            </div>

        </div>


    )

}

const styles = {

}

export default OculysHealthInformatics;