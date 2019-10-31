import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import BorderPic from '../projects/BorderPic'
import NextPageBottom from '../layout/NextPageBottom';

const Banff = () => {
    return (
        <div className="container-fluid mx-auto px-0" >
        <div className="projectContainer mx-auto px-0">
            <Fade big>
            <div className="row mx-0">
                <div className="col px-0">
                    <p className="s-font" id="pageTitlePageTitle">Banff National Park</p>
                    <p className="s-font" id="pageTitlePageDesc">Summer 2018</p>
                </div>
            </div>
            <hr className="my-3" />
            <BorderPic imgPath="banff1-min.jpg" picDesc="Moraine Lake (Post BC Wildfire) // 08-11-2018"/>
            <BorderPic imgPath="banff2-min.jpg" picDesc="Lake Louise // 08-11-2018"/>
            <BorderPic imgPath="banff3-min.jpg" picDesc="Johnston Canyon // 08-11-2018"/>
            <BorderPic imgPath="banff4-min.jpg" picDesc="Johnston Canyon // 08-11-2018"/>
            <BorderPic imgPath="banff5-min.jpg" picDesc="Johnston Canyon // 08-11-2018"/>
            <BorderPic imgPath="banff6-min.jpg" picDesc="Johnston Canyon // 08-11-2018"/>
            <BorderPic imgPath="banff7-min.jpg" picDesc="Johnston Canyon // 08-11-2018"/>
            <BorderPic imgPath="banff8-min.jpg" picDesc="Banff Mountains // 08-11-2018"/>
            <BorderPic imgPath="banff9-min.jpg" picDesc="Forest Shadows // 08-11-2018"/>
        </Fade>

        <hr />
    <NextPageBottom route="/photography/calgary" title="Up Next" subtitle="Calgary"/>


</div>
</div>
    );
}

export default Banff;