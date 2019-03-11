import React from 'react';
import CardContent from './CardContent';
import { Link } from 'react-router-dom';

const WorkBox = (props) => {
    return (
        <div className="row py-2">
            <div className="col">
                <CardContent imgPath="FGF-Logo.png" job="FGF Brands" position="Front-End Web Developer" type="Internship" />
            </div>

            <div className="col">
                {/*  <CardContent imgPath="" job="" position="" period="Internship" />*/}
            </div>
            <div className="col">
                {/*   <CardContent imgPath="" job="" position="" period="Internship" />*/}

            </div>


        </div>
    )
}



export default WorkBox;