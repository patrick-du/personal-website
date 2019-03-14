import React from 'react';
import PageTitle from '../layout/PageTitle';
import CardContent from './CardContent';

const Work = () => {
    return (
        <div className="container-fluid container-padding">
            <PageTitle pageName="Work Experience" descriptionBottom="Internships and clubs" />
            <div id="card1">
                <CardContent imgPath="FGF-Logo.png" job="FGF Brands" position="Front-End Developer" time="Winter 2019" link="/work/FGFBrands" />
            </div>
            <div id="card2">
                <CardContent imgPath="EPT-Logo.png" job="Elements Physical Therapy" position="Exercise Therapist Assistant" time="Summer 2018" link="/work/EPT" />
            </div>
        </div >
    );
}


export default Work;