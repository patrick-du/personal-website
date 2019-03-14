import React from 'react';
import { Link } from 'react-router-dom';

const PersonalWebsite = () => {
    return (
        <div className="container-fluid container-padding">
            <p className="s-font med py-0 my-0 lightText text-center">A Look at the Daily Life of an Exercise Therapist</p>
            <div className="row">
                <div className="col-2">
                    <Link to="/projects">
                        <i class="fas fa-times" style={{ fontSize: '25px', color: '#e74c3c' }}></i>
                    </Link>
                </div>
                <div className="col-8">
                    <h3 className="p-font bold text-center">Personal Website</h3>
                </div>
                <div className="col-2 text-right">
                    <Link to="/projects/fitbud">
                        <i class="fas fa-arrow-right" style={{ fontSize: '25px', color: '#546de5' }}></i>
                    </Link>
                </div>
            </div>

            <hr />

            <Link to="../../" className="linkdec">
                <p className="s-font text-center text-muted vert-move mt-5 mb-0">Created by Patrick Du 🎈</p>
            </Link>
        </div>

    )

}

const styles = {

}

export default PersonalWebsite;