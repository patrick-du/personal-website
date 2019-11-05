import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import BorderPic from '../layout/BorderPic'
import NextPageBottom from '../layout/NextPageBottom';
import PostTop from '../layout/PostTop';

const Toronto = () => {
    return (
        <div className="container-fluid mx-auto px-0" >
        <div className="projectContainer mx-auto px-0">
            <Fade big>
            <PostTop subtitle="Summer 2018" title="Toronto, Ontario"/>
            <hr className="my-3" />
            <BorderPic imgPath="toronto1-min.jpg" picDesc="Ripley's Aquarium // 06-06-2018"/>
            <BorderPic imgPath="toronto3-min.jpg" picDesc="Ripley's Aquarium // 06-06-2018"/>
            <BorderPic imgPath="toronto5-min.jpg" picDesc="Ripley's Believe It or Not // 06-07-2018"/>
            <BorderPic imgPath="toronto4-min.jpg" picDesc="View from CN Tower // 06-07-2018"/>
            <BorderPic imgPath="toronto7-min.jpg" picDesc="Niagra Falls // 06-07-2018"/>
            <BorderPic imgPath="toronto6-min.jpg" picDesc="Niagra Falls // 06-07-2018"/>
        </Fade>

        <hr />
    
    <NextPageBottom route="/photography/losangeles" title="Up Next" subtitle="Los Angeles"/>

</div>
</div>
    );
}

export default Toronto;