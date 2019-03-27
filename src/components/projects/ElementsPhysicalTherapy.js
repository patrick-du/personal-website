import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';

const ElementsPhysicalTherapy = () => {
    return (
        <div className="container-fluid container-padding">
            <PostTop subtitle="Exploring the daily lives of exercise therapists" title="Elements Physical Therapy" cancel="/projects" next="/projects/huddle" />
            <Link to="../../" className="linkdec">
                <p className="s-font text-center text-muted vert-move mt-5 mb-0">Created by Patrick Du 🎈</p>
            </Link>
        </div>

    )

}

const styles = {

}

export default ElementsPhysicalTherapy;