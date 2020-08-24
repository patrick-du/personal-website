import React from 'react';
import Fade from 'react-reveal/Fade';
import BorderPic from '../layout/BorderPic'
import NextPageBottom from '../layout/NextPageBottom';
import PostTop from '../layout/PostTop';

const LosAngeles = () => {
    return (
        <div className="container-fluid mx-auto px-0" >
        <div className="projectContainer mx-auto px-0">
            <Fade big>
            <PostTop subtitle="Summer 2019" title="Los Angeles, California"/>
            <hr className="my-3"/>
            <BorderPic imgPath="la1-min.jpg" picDesc="Rodeo Drive // 08-23-2019"/>
            <BorderPic imgPath="la2-min.jpg" picDesc="Beverly Hills // 08-23-2019"/>
            <BorderPic imgPath="la3-min.jpg" picDesc="Beverly Hills // 08-23-2019"/>
            <BorderPic imgPath="la4-min.jpg" picDesc="Saint Laurent // 08-23-2019"/>
            <BorderPic imgPath="la5-min.jpg" picDesc="Saint Laurent // 08-23-2019"/>
            <BorderPic imgPath="la6-min.jpg" picDesc="Palm Trees // 08-23-2019"/>
            <BorderPic imgPath="la7-min.jpg" picDesc="Beverly Hills // 08-23-2019"/>
            <BorderPic imgPath="la8-min.jpg" picDesc="Santa Monica Pier // 08-24-2019"/>
            <BorderPic imgPath="la9-min.jpg" picDesc="Santa Monica Pier // 08-24-2019"/>
            <BorderPic imgPath="la10-min.jpg" picDesc="Santa Monica Pier // 08-24-2019"/>
        </Fade>
        <hr />
    
    <NextPageBottom route="/photography/banff" title="Up Next" subtitle="Banff National Park"/>

</div>
</div>
    );
}

export default LosAngeles;