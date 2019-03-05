import React from 'react';
import CardContent from './CardContent';
import { Link } from 'react-router-dom';

const WorkBox = (props) => {
    return (
        <div className="row py-2">
            <div className="col">
                <CardContent title="Huddle" body="Modern sports betting connecting fans while supporting local venues." badge1="React Native" badge2="" imgPath="huddle.jpg" />
            </div>
            <div className="col">
                <CardContent title="Portfolio" body="Developed for professional and personal purposes." badge1="React" badge2="HTML/CSS" imgPath="huddle.jpg" />
            </div>
            <div className="col">
                <CardContent title="Blank" body="A modern sports betting application that connects fans while supporting local venues." imgPath="huddle.jpg" />
            </div>
        </div>
    )
}



export default WorkBox;