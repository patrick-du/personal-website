import React from 'react';
import PageTitle from '../layout/PageTitle';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import BorderPic from '../layout/BorderPic';
import NextPageBottom from '../layout/NextPageBottom';


const Photography = () => {

    return (
        <div className="container-fluid projectContainer mx-auto px-0">
            <PageTitle pageName="Collections" descriptionBottom="Sometimes I take photos" picture="bitmoji5" />
            <NextPageBottom route="/photography/losangeles" title="Los Angeles, California" subtitle="Summer 2019" />
            <hr/>
            <NextPageBottom route="/photography/banff" title="Banff National Park, Alberta" subtitle="Summer 2018" />
            <hr/>
            <NextPageBottom route="/photography/calgary" title="Calgary, Alberta" subtitle="Summer 2018" />
            <hr/>
            <NextPageBottom route="/photography/toronto" title="Toronto, Ontario" subtitle="Summer 2018" />
        </div >
    );

}

export default Photography;


/* http://neptunian.github.io/react-photo-gallery/ */



