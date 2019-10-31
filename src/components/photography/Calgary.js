import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import BorderPic from '../projects/BorderPic'
import NextPageBottom from '../layout/NextPageBottom';

const Calgary = () => {
    return (
        <div className="container-fluid mx-auto px-0" >
        <div className="projectContainer mx-auto px-0">
            <Fade big>
            <div className="row mx-0">
                <div className="col px-0">
                    <p className="s-font" id="pageTitlePageTitle">Calgary</p>
                    <p className="s-font" id="pageTitlePageDesc">Summer 2018</p>
                </div>
            </div>
            <hr className="my-3" />
            <BorderPic imgPath="calgary1-min.jpg" picDesc="Devonian Gardens // 08-08-2018"/>
            <BorderPic imgPath="calgary2-min.jpg" picDesc="Devonian Gardens // 08-10-2018"/>
            <BorderPic imgPath="calgary3-min.jpg" picDesc="08-9-2018"/>
            <BorderPic imgPath="calgary4-min.jpg" picDesc="08-08-2018"/>
            <BorderPic imgPath="calgary5-min.jpg" picDesc="08-08-2018"/>
            <BorderPic imgPath="calgary6-min.jpg" picDesc="8th Ave SE & 4 St SE // 08-08-2018"/>
        </Fade>

        <hr />
    <NextPageBottom route="/photography/toronto" title="Up Next" subtitle="Toronto"/>

</div>
</div>
    );
}

export default Calgary;