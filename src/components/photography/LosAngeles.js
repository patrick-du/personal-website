import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import BorderPic from '../projects/BorderPic'
import NextPageBottom from '../layout/NextPageBottom';

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
    
    <NextPageBottom route="/photography/banff" title="Up Next" subtitle="Banff National Park"/>

</div>
</div>
    );
}

export default LosAngeles;