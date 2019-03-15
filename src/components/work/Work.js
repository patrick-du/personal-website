import React, { Component } from 'react';
import PageTitle from '../layout/PageTitle';
import FGFCard from './FGFCard';
import EPTCard from './EPTCard';

class Work extends Component {

    render() {
        return (
            <div className="container-fluid container-padding" >
                <PageTitle pageName="Work Experience" descriptionBottom="Internships and clubs" />
                <FGFCard imgPath="FGF-Logo.png" job="FGF Brands" position="Front-End Developer" time="Winter 2019" />
                <EPTCard imgPath="EPT-Logo.png" job="Elements Physical Therapy" position="Exercise Therapist Assistant" time="Summer 2018" />
            </div >
        );
    }

}


export default Work;