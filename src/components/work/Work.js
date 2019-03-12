import React from 'react';
import PageTitle from '../layout/PageTitle';
import CardContent from './CardContent';

const Work = () => {
    return (
        <div className="container-fluid container-padding">
            <PageTitle pageName="Work Experience" descriptionBottom="Internships and clubs " />
            <CardContent imgPath="FGF-Logo.png" job="FGF Brands" position="Front-End Web Developer" type="Internship" />
        </div>
    );
}


export default Work;